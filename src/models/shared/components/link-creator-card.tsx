"use client";

import type { ReactNode } from "react";
import { MarketplaceBadge } from "@/models/affiliate-shared/components/common";
import { LinkIcon, PasteIcon } from "@/models/affiliate-shared/components/icons";

export function LinkCreatorCard({
  onOpenCreate,
  children,
}: {
  onOpenCreate: () => void;
  children?: ReactNode;
}) {
  return (
    <section className="mt-8 rounded-[28px] border border-[#ecd6c9] bg-white p-6 shadow-[0_20px_60px_rgba(96,64,32,0.08)]">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 gap-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#ff6a00] text-white shadow-[0_16px_28px_rgba(255,106,0,0.28)]">
            <LinkIcon />
          </div>
          <div>
            <div className="text-[2rem] font-black tracking-[-0.04em] text-slate-800">Tao link hoan tien</div>
            <p className="text-slate-500">Nhan hoa hong len den 10% moi don hang</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenCreate}
          className="inline-flex items-center justify-center rounded-full bg-[#f6b79a] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#f3a682]"
        >
          <span className="mr-3 text-2xl leading-none">»</span>
          Tao ngay
        </button>
      </div>

      <button
        type="button"
        onClick={onOpenCreate}
        className="mt-6 flex w-full items-center justify-between gap-3 rounded-full border border-[#d9dee8] bg-[#faf6f3] px-5 py-4 text-left text-slate-400 transition hover:border-[#ff6a00]"
      >
        <span className="inline-flex items-center gap-3">
          <PasteIcon />
          Nhan de dan link Shopee/Lazada...
        </span>
        <span className="rounded-full bg-[#ffd2bb] px-4 py-2 text-sm font-bold text-[#ff6a00]">Tao nhanh</span>
      </button>

      <div className="mt-5 flex items-center gap-3 text-sm text-slate-500">
        <span>Ho tro:</span>
        <MarketplaceBadge className="bg-[#ff6a00] text-white">S</MarketplaceBadge>
        <MarketplaceBadge className="bg-black text-white">d</MarketplaceBadge>
        <MarketplaceBadge className="bg-[#ff5d2c] text-white">S</MarketplaceBadge>
        <MarketplaceBadge className="bg-[#4734ff] text-white">LZ</MarketplaceBadge>
        <MarketplaceBadge className="bg-[#dbdbdb] text-slate-500">T</MarketplaceBadge>
      </div>

      {children && <div className="mt-6 border-t border-[#edf1f5] pt-6">{children}</div>}
    </section>
  );
}
