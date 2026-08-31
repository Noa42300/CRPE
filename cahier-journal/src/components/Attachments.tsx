/**
 * Documents joints (« encoche » à imprimer)
 * -----------------------------------------
 * Petite zone où je range les documents (PDF, images) qui vont avec une séance
 * ou une journée : fiches élèves, supports, mise en page à imprimer. Tout est
 * stocké localement (IndexedDB) — jamais synchronisé ni publié, car ces
 * documents peuvent contenir des supports d'élèves.
 *
 * Chaque document a une petite loupe 🔍 pour l'APERÇU (sans le télécharger),
 * puis on peut l'imprimer depuis l'aperçu.
 */
import { useEffect, useRef, useState } from "react";
import { attachmentsDB } from "../lib/db";
import type { Attachment, AttachmentMeta } from "../lib/types";
import { uid } from "../lib/dates";
import { Plus, Search, Trash } from "./ui";
import { PreviewModal } from "./PreviewModal";

const MAX_BYTES = 25 * 1024 * 1024; // 25 Mo par fichier

function fmtSize(n: number): string {
  if (n < 1024) return `${n} o`;
  if (n < 1024 * 1024) return `${Math.round(n / 1024)} Ko`;
  return `${(n / (1024 * 1024)).toFixed(1)} Mo`;
}

function fileToDataUrl(f: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = () => reject(r.error);
    r.readAsDataURL(f);
  });
}

function isDoc(f: File): boolean {
  return (
    f.type === "application/pdf" ||
    f.type.startsWith("image/") ||
    /\.(pdf|png|jpe?g|webp|gif)$/i.test(f.name)
  );
}

/** Ouvre le fichier dans un nouvel onglet (pour impression). */
function openBlob(rec: Attachment) {
  const parts = rec.data.split(",");
  const bstr = atob(parts[1] ?? "");
  const arr = new Uint8Array(bstr.length);
  for (let i = 0; i < bstr.length; i++) arr[i] = bstr.charCodeAt(i);
  const blob = new Blob([arr], { type: rec.mime || "application/pdf" });
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank", "noopener");
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

export function Attachments({
  refId,
  title = "Documents à imprimer",
  bare = false,
}: {
  refId: string;
  title?: string;
  /** true = insère les lignes directement (sans encadré repliable). */
  bare?: boolean;
}) {
  const [items, setItems] = useState<AttachmentMeta[]>([]);
  const [busy, setBusy] = useState(false);
  const [preview, setPreview] = useState<Attachment | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let alive = true;
    void attachmentsDB.listMeta(refId).then((metas) => {
      if (alive) setItems(metas.sort((a, b) => a.createdAt - b.createdAt));
    });
    return () => {
      alive = false;
    };
  }, [refId]);

  const add = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setBusy(true);
    try {
      for (const f of Array.from(files)) {
        if (!isDoc(f)) {
          window.alert(`« ${f.name} » ignoré : formats acceptés = PDF ou image.`);
          continue;
        }
        if (f.size > MAX_BYTES) {
          window.alert(`« ${f.name} » ignoré : fichier trop lourd (max 25 Mo).`);
          continue;
        }
        const data = await fileToDataUrl(f);
        const rec: Attachment = {
          id: uid(),
          refId,
          name: f.name,
          mime: f.type || "application/pdf",
          size: f.size,
          createdAt: Date.now(),
          data,
        };
        await attachmentsDB.put(rec);
        const { data: _d, ...meta } = rec;
        setItems((prev) => [...prev, meta]);
      }
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const openPreview = async (id: string) => {
    const rec = await attachmentsDB.get(id);
    if (rec) setPreview(rec);
  };

  const remove = async (id: string, name: string) => {
    if (!window.confirm(`Supprimer le document « ${name} » ?`)) return;
    await attachmentsDB.delete(id);
    setItems((prev) => prev.filter((x) => x.id !== id));
  };

  const rows = (
    <div className="space-y-2">
      {items.map((a) => (
        <div
          key={a.id}
          className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 dark:border-stone-700 dark:bg-stone-900/40"
        >
          <span className="text-lg">{a.mime === "application/pdf" ? "📄" : "🖼️"}</span>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-stone-800 dark:text-stone-100">{a.name}</div>
            <div className="text-[11px] text-stone-400">{fmtSize(a.size)}</div>
          </div>
          <button
            onClick={() => void openPreview(a.id)}
            className="btn-outline py-1 text-xs"
            title="Aperçu du document"
          >
            <Search className="h-3.5 w-3.5" /> Aperçu
          </button>
          <button
            onClick={() => void remove(a.id, a.name)}
            className="text-stone-400 hover:text-rose-500"
            title="Supprimer"
          >
            <Trash />
          </button>
        </div>
      ))}

      <label className="btn-outline mt-1 inline-flex cursor-pointer py-1 text-xs">
        <Plus className="h-3.5 w-3.5" /> {busy ? "Ajout…" : "Ajouter un document"}
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf,image/*"
          multiple
          className="hidden"
          onChange={(e) => void add(e.target.files)}
        />
      </label>
    </div>
  );

  const modal = preview && (
    <PreviewModal
      title={preview.name}
      onClose={() => setPreview(null)}
      onPrint={() => openBlob(preview)}
    >
      {preview.mime.startsWith("image/") ? (
        <img
          src={preview.data}
          alt={preview.name}
          className="max-h-[82vh] rounded-lg bg-white shadow-2xl"
        />
      ) : (
        <iframe
          src={preview.data}
          title={preview.name}
          className="h-[82vh] w-[92vw] max-w-[860px] rounded-lg bg-white shadow-2xl"
        />
      )}
    </PreviewModal>
  );

  // Mode « intégré » : pas d'encadré ni de titre propre (fusionné ailleurs).
  if (bare) {
    return (
      <>
        {items.length === 0 && (
          <p className="text-xs text-stone-400">
            Aucun document ajouté. Ajoute ici tes propres fiches ou supports à
            imprimer (PDF ou image).
          </p>
        )}
        {rows}
        <p className="mt-1 text-[11px] text-stone-400">
          Tes documents restent sur cet appareil (jamais envoyés).
        </p>
        {modal}
      </>
    );
  }

  return (
    <details className="group rounded-xl border border-dashed border-stone-300 bg-stone-50/50 p-3 dark:border-stone-700 dark:bg-stone-900/20">
      <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-stone-600 dark:text-stone-300">
        <span className="transition-transform group-open:rotate-90">▸</span>
        📎 {title}
        {items.length > 0 && (
          <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[11px] font-bold text-ink-700 dark:bg-ink-500/20 dark:text-ink-200">
            {items.length}
          </span>
        )}
      </summary>

      <div className="mt-3 space-y-2">
        {items.length === 0 && (
          <p className="text-xs text-stone-400">
            Aucun document. Ajoute les fiches, supports et documents à imprimer
            pour cette préparation (PDF ou image).
          </p>
        )}
        {rows}
        <p className="text-[11px] text-stone-400">
          Restent sur cet appareil (jamais envoyés). Aperçu avec la loupe, puis
          « Imprimer » depuis l'aperçu.
        </p>
      </div>
      {modal}
    </details>
  );
}
