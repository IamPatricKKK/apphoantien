"use client";

import { APP_ROUTES } from "@/config/app-routes";
import { CASHBACK_FILTERS } from "@/models/affiliate-shared/constants/dashboard";
import { HistoryTable, SummaryBand } from "@/models/affiliate-shared/components/history";
import { SharedPageWithModals } from "@/models/shared/components/global-modals";
import { AppShell, WelcomeBanner } from "@/models/shared/components/app-shell";
import { LinkCreatorCard } from "@/models/shared/components/link-creator-card";

export function CashbackPage() {
  return (
    <SharedPageWithModals currentPath={APP_ROUTES.cashback} Shell={AppShell}>
      {({ openCreate, openConfig }) => (
        <>
          <WelcomeBanner onOpenConfig={openConfig} />
          <LinkCreatorCard onOpenCreate={openCreate} />

          <section className="mt-8 space-y-6">
            <div className="text-[3rem] font-black tracking-[-0.05em] text-slate-900">Lich su hoan tien</div>
            <div className="rounded-full border border-[#d9dee8] bg-white px-5 py-4 text-slate-400 shadow-sm">
              Tim kiem theo ma don hang hoac ten san pham...
            </div>
            <div className="flex flex-wrap gap-3">
              {CASHBACK_FILTERS.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={`rounded-full border px-5 py-3 text-lg font-bold ${
                    index === 0 ? "border-[#ff6a00] bg-[#ff6a00] text-white" : "border-[#d9dee8] bg-white text-slate-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <SummaryBand />
            <SummaryBand success />
            <HistoryTable />
          </section>
        </>
      )}
    </SharedPageWithModals>
  );
}
