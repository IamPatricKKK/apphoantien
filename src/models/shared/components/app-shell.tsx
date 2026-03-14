"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { APP_NAV_ITEMS, APP_ROUTES, MARKETING_NAV_ITEMS } from "@/config/app-routes";
import { BellIcon, BrandMark, CogIcon } from "@/models/affiliate-shared/components/icons";

type ShellProps = {
  currentPath: string;
  children: ReactNode;
  onOpenConfig: () => void;
};

function BrandLockup() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#ff6bb5] text-white">
        <BrandMark />
      </div>
      <div className="text-xl font-extrabold tracking-tight text-slate-900">Hoantienvui.com</div>
    </div>
  );
}

export function MarketingShell({ currentPath, children }: ShellProps) {
  return (
    <div className="min-h-screen bg-[#f8f5f7] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#f7dce9] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-10">
          <BrandLockup />

          <nav className="hidden items-center gap-8 md:flex">
            {MARKETING_NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors ${isActive ? "text-[#ff6bb5]" : "hover:text-[#ff6bb5]"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={APP_ROUTES.login}
              className="hidden rounded-lg bg-[#ffe5f2] px-4 py-2 text-sm font-bold text-[#ff6bb5] transition hover:bg-[#ffd8eb] sm:block"
            >
              Đăng nhập
            </Link>
            <Link
              href={APP_ROUTES.login}
              className="rounded-lg bg-[#ff6bb5] px-5 py-2 text-sm font-bold text-white shadow-lg shadow-[#ff6bb5]/20 transition hover:scale-[1.02]"
            >
              Đăng ký miễn phí
            </Link>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}

export function AppShell({ currentPath, children, onOpenConfig }: ShellProps) {
  return (
    <div className="min-h-screen bg-[#f8f5f7] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#f7dce9] bg-white">
        <div className="flex items-center justify-between px-6 py-3 md:px-10">
          <BrandLockup />

          <div className="flex flex-1 justify-end gap-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onOpenConfig}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffe5f2] text-[#ff6bb5] transition hover:bg-[#ffd8eb]"
              >
                <BellIcon />
              </button>
              <button
                type="button"
                onClick={onOpenConfig}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ffe5f2] text-[#ff6bb5] transition hover:bg-[#ffd8eb]"
              >
                <CogIcon />
              </button>
            </div>
            <div className="size-10 rounded-full border-2 border-[#ffcde5] bg-[linear-gradient(135deg,#ffe2f1,#fff7fb)]" />
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        <aside className="w-full border-r border-[#f7dce9] bg-white p-4 md:min-h-[calc(100vh-65px)] md:w-64">
          <div className="flex items-center gap-3 px-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffe5f2] text-[#ff6bb5]">
              <BrandMark />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm font-bold">Ví của tôi</h1>
              <p className="text-xs font-medium uppercase tracking-wider text-[#ff6bb5]">Thành viên Premium</p>
            </div>
          </div>

          <nav className="mt-6 flex flex-col gap-1">
            {APP_NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                    isActive
                      ? "border border-[#ffcde5] bg-[#fff0f8] font-bold text-[#ff6bb5]"
                      : "font-medium text-slate-600 hover:bg-[#fff7fb] hover:text-[#ff6bb5]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 rounded-xl border border-[#f7dce9] bg-[#fff7fb] p-4 md:mt-auto">
            <p className="mb-1 text-xs font-semibold text-[#ff6bb5]">Hỗ trợ</p>
            <p className="mb-3 text-[11px] leading-relaxed text-slate-500">Cần trợ giúp về hoàn tiền hoặc rút tiền?</p>
            <button className="w-full rounded-lg bg-[#ff6bb5] py-2 text-xs font-bold text-white shadow-sm">Liên hệ ngay</button>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto px-4 py-8 md:px-10">{children}</main>
      </div>
    </div>
  );
}

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8f5f7] text-slate-900">
      <header className="border-b border-[#f7dce9] bg-white px-6 py-4 md:px-20">
        <div className="flex items-center justify-between">
          <BrandLockup />
          <div className="flex items-center gap-4">
            <Link className="hidden rounded-lg bg-[#ffe5f2] px-4 py-2 text-sm font-bold text-[#ff6bb5] sm:flex" href={APP_ROUTES.howItWorks}>
              Trung tâm trợ giúp
            </Link>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
              <GlobeIcon />
            </div>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}
