"use client";

import type { ReactNode } from "react";
import { LinkIcon } from "@/models/affiliate-shared/components/icons";

export function LinkCreatorCard({
  onOpenCreate,
  children,
}: {
  onOpenCreate: () => void;
  children?: ReactNode;
}) {
  return (
    <section className="group relative flex w-full flex-col gap-2 rounded-xl border-2 border-[#ffcde5] bg-white p-2 shadow-2xl shadow-[#ff6bb5]/10">
      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={onOpenCreate}
          className="flex flex-1 items-center gap-3 rounded-lg bg-[#f8f5f7] px-4 py-3 text-left text-slate-500 transition hover:bg-[#f4eef2]"
        >
          <span className="text-slate-400">
            <LinkIcon />
          </span>
          <span className="truncate">Dán link sản phẩm Shopee tại đây...</span>
        </button>
        <button
          type="button"
          onClick={onOpenCreate}
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#ff6bb5] px-8 font-bold text-white shadow-lg shadow-[#ff6bb5]/30 transition hover:bg-[#f254a8]"
        >
          Tạo link
        </button>
      </div>

      {children && <div className="pt-4">{children}</div>}
    </section>
  );
}
