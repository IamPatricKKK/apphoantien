"use client";

import { SummaryBand, HistoryTable, WithdrawalCards } from "@/models/affiliate-shared/components/history";
import { APP_ROUTES } from "@/config/app-routes";
import { SharedPageWithModals } from "@/models/shared/components/global-modals";
import { AppShell } from "@/models/shared/components/app-shell";

const FILTERS = ["Tất cả giao dịch", "Đang chờ", "Đã xác nhận"] as const;

export function CashbackPage() {
  return (
    <SharedPageWithModals currentPath={APP_ROUTES.wallet} Shell={AppShell}>
      {() => (
        <div className="space-y-8">
          <section className="grid gap-6 md:grid-cols-2">
            <SummaryBand success />
            <SummaryBand />
          </section>

          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 border-b border-[#f5cfe2] pb-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-6">
                {FILTERS.map((filter, index) => (
                  <button
                    key={filter}
                    className={`border-b-2 pb-3 pt-2 text-sm font-bold transition-colors ${
                      index === 0 ? "border-[#ff6bb5] text-[#ff6bb5]" : "border-transparent text-slate-500 hover:text-[#ff6bb5]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="relative">
                <input
                  className="w-full rounded-xl border border-[#f5cfe2] bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-[#ff6bb5] md:w-72"
                  placeholder="Tìm kiếm thương hiệu..."
                  type="text"
                />
              </div>
            </div>

            <HistoryTable />
          </section>

          <section>
            <div className="mb-6 text-xl font-bold tracking-[-0.02em] text-slate-900">Hoạt động rút tiền</div>
            <WithdrawalCards />
          </section>
        </div>
      )}
    </SharedPageWithModals>
  );
}
