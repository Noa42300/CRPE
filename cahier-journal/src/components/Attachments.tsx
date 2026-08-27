/**
 * Documents joints (« encoche » à imprimer)
 * -----------------------------------------
 * Petite zone repliable, en bas d'une séance ou d'une journée, où je range les
 * documents (PDF, images) qui vont avec : fiches élèves, supports, mise en page
 * à imprimer. Tout est stocké localement (IndexedDB) — jamais synchronisé ni
 * publié, car ces documents peuvent contenir des supports d'élèves.
 */
import { useEffect, useRef, useState } from "react";
import { attachmentsDB } from "../lib/db";
import type { Attachment, AttachmentMeta } from "../lib/types";
import { uid } from "../lib/dates";
import { Plus, Printer, Trash } from "./ui";

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

export function Attachments({
  refId,
  title = "Documents à imprimer",
}: {
  refId: string;
  title?: string;
}) {
  const [items, setItems] = useState<AttachmentMeta[]>([]);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let alive = true;
    void attachmentsDB.listMeta(refId).then((metas) => {
      if (alive) setItems(metas.sort((a, b) => a.createdAt - b.createdAt));
    });
    return () => { alive = false; };
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

  const open = async (id: string) => {
    const rec = await attachmentsDB.get(id);
    if (!rec) return;
    const blob = await (await fetch(rec.data)).blob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank", "noopener");
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  };

  const remove = async (id: string, name: string) => {
    if (!window.confirm(`Supprimer le document « ${name} » ?`)) return;
    await attachmentsDB.delete(id);
    setItems((prev) => prev.filter((x) => x.id !== id));
  };

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
        {items.length === 0 ? (
          <p className="text-xs text-stone-400">
            Aucun document. Ajoute les fiches, supports et documents à imprimer
            pour cette préparation (PDF ou image).
          </p>
        ) : (
          items.map((a) => (
            <div key={a.id} className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 dark:border-stone-700 dark:bg-stone-900/40">
              <span className="text-lg">{a.mime === "application/pdf" ? "📄" : "🖼️"}</span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-stone-800 dark:text-stone-100">{a.name}</div>
                <div className="text-[11px] text-stone-400">{fmtSize(a.size)}</div>
              </div>
              <button onClick={() => void open(a.id)} className="btn-outline py-1 text-xs" title="Ouvrir pour imprimer">
                <Printer className="h-3.5 w-3.5" /> Ouvrir
              </button>
              <button onClick={() => void remove(a.id, a.name)} className="text-stone-400 hover:text-rose-500" title="Supprimer">
                <Trash />
              </button>
            </div>
          ))
        )}

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
        <p className="text-[11px] text-stone-400">
          Restent sur cet appareil (jamais envoyés). Pour imprimer : « Ouvrir »,
          puis Ctrl/Cmd + P.
        </p>
      </div>
    </details>
  );
}
