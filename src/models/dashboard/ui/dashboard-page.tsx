"use client";

import { APP_ROUTES } from "@/config/app-routes";
import { STAT_CARDS } from "@/models/affiliate-shared/constants/dashboard";
import { PanelCard, StatusChip } from "@/models/affiliate-shared/components/common";
import { StatCard } from "@/models/affiliate-shared/components/stat-card";
import { SharedPageWithModals } from "@/models/shared/components/global-modals";
import { AppShell, WelcomeBanner } from "@/models/shared/components/app-shell";
import { LinkCreatorCard } from "@/models/shared/components/link-creator-card";

export function DashboardPage() {
  return (
    <SharedPageWithModals currentPath={APP_ROUTES.dashboard} Shell={AppShell}>
      {({ openCreate, openConfig }) => (
        <>
          <WelcomeBanner onOpenConfig={openConfig} />

          <section className="mt-8 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {STAT_CARDS.map((card) => (
              <StatCard key={card.label} {...card} />
            ))}
          </section>

          <LinkCreatorCard onOpenCreate={openCreate} />

          <section className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[30px] border border-[#efe2d4] bg-[#fff5ea] shadow-[0_20px_60px_rgba(117,76,34,0.08)]">
              <div className="relative min-h-[420px] overflow-hidden px-8 py-10">
                <div className="absolute right-[-80px] top-[-40px] h-72 w-72 rounded-full bg-[#ffe0bc]" />
                <div className="absolute bottom-10 right-10 grid grid-cols-5 gap-4 opacity-70">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <span key={index} className="h-2.5 w-2.5 rounded-full bg-[#f0b06d]" />
                  ))}
                </div>
                <div className="relative z-10">
                  <div className="text-[3rem] font-black tracking-[-0.05em] text-[#f47b20]">Hoan Tien Online</div>
                  <div className="mt-10 max-w-2xl text-[4rem] font-black uppercase leading-[0.95] tracking-[-0.07em] text-[#1b140f] md:text-[5.3rem]">
                    Moi ban tham gia kiem cashback.
                  </div>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                    Dashboard tong quan cho he thong, tach rieng thanh route doc lap.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <PanelCard title="Trang thai cau hinh" subtitle="Dang luu noi bo tren trinh duyet" accent="orange">
                <div className="flex flex-wrap gap-2">
                  <StatusChip label="Cookie" ok={false} />
                  <StatusChip label="CSRF" ok={false} />
                  <StatusChip label="X-Sap-Sec" ok={false} />
                </div>
                <button
                  type="button"
                  onClick={openConfig}
                  className="mt-5 inline-flex rounded-full border border-[#ffd3bc] bg-[#fff2ea] px-5 py-3 text-sm font-bold text-[#ff6a00] transition hover:border-[#ff6a00]"
                >
                  Mo cau hinh cURL
                </button>
              </PanelCard>

              <PanelCard title="Lich su yeu cau rut tien" subtitle="Chua co yeu cau rut tien nao" accent="neutral">
                <div className="grid min-h-[180px] place-items-center rounded-[24px] border border-dashed border-[#d8dde7] bg-[#fbfcfd] text-center text-slate-400">
                  Chua co yeu cau rut tien nao
                </div>
              </PanelCard>
            </div>
          </section>
        </>
      )}
    </SharedPageWithModals>
  );
}
