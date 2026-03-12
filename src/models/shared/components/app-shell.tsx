"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { APP_NAV_ITEMS } from "@/config/app-routes";
import { BellIcon, BrandMark, ChatIcon, CogIcon } from "@/models/affiliate-shared/components/icons";

type AppShellProps = {
  currentPath: string;
  children: ReactNode;
  onOpenConfig: () => void;
};

export function AppShell({ currentPath, children, onOpenConfig }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#f7f1ed] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-[#e6d9cf] bg-[#fbf7f4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#ff6a00] text-white shadow-[0_10px_24px_rgba(255,106,0,0.18)]">
              <BrandMark />
            </div>
            <div className="text-[1.9rem] font-black tracking-[-0.03em] text-[#ff6a00]">HoanTienOnline</div>
          </div>

          <nav className="hidden items-center gap-8 text-[1.05rem] font-semibold text-slate-500 md:flex">
            {APP_NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition ${isActive ? "text-[#ff6a00]" : "hover:text-slate-800"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenConfig}
              className="grid h-10 w-10 place-items-center rounded-full border border-[#e1d7cf] bg-white text-slate-500 transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
            >
              <BellIcon />
            </button>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#ff6a00] text-sm font-bold text-white">PT</div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-10">{children}</main>

      <button className="fixed bottom-6 right-6 grid h-14 w-14 place-items-center rounded-full bg-[#ff6a00] text-white shadow-[0_18px_40px_rgba(255,106,0,0.35)]">
        <ChatIcon />
      </button>
    </div>
  );
}

export function WelcomeBanner({ onOpenConfig }: { onOpenConfig: () => void }) {
  return (
    <section className="rounded-[28px] border border-[#efcdb8] bg-[#fbefe7] px-6 py-6 shadow-[0_12px_40px_rgba(158,99,56,0.06)]">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-[2rem] font-black tracking-[-0.04em] text-slate-800">Chao buoi chieu, ban!</div>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#d6deea] bg-[#eef4fb] px-3 py-1 text-sm font-semibold text-slate-500">
            Muc 0
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onOpenConfig}
            className="grid h-12 w-12 place-items-center rounded-full border border-[#d6deea] bg-white text-slate-500 transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
          >
            <BellIcon />
          </button>
          <button
            type="button"
            onClick={onOpenConfig}
            className="grid h-12 w-12 place-items-center rounded-full border border-[#d6deea] bg-white text-slate-500 transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
          >
            <CogIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
