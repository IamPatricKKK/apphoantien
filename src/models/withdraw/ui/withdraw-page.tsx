"use client";

import { APP_ROUTES } from "@/config/app-routes";
import { PanelCard, SoftIcon } from "@/models/affiliate-shared/components/common";
import { WalletIcon, BankIcon } from "@/models/affiliate-shared/components/icons";
import { SharedPageWithModals } from "@/models/shared/components/global-modals";
import { AppShell, WelcomeBanner } from "@/models/shared/components/app-shell";
import { LinkCreatorCard } from "@/models/shared/components/link-creator-card";

export function WithdrawPage() {
  return (
    <SharedPageWithModals currentPath={APP_ROUTES.withdraw} Shell={AppShell}>
      {({ openCreate, openConfig }) => (
        <>
          <WelcomeBanner onOpenConfig={openConfig} />
          <LinkCreatorCard onOpenCreate={openCreate} />

          <section className="mt-8 space-y-6">
            <div className="text-[3rem] font-black tracking-[-0.05em] text-slate-900">Lich su rut tien</div>
            <PanelCard title="So du co the rut" subtitle="Them tai khoan nhan tien truoc" accent="orange">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <SoftIcon tone="orange">
                    <BankIcon />
                  </SoftIcon>
                  <div>
                    <div className="text-sm font-semibold text-slate-400">So du co the rut</div>
                    <div className="text-[2rem] font-black text-[#ff9b62]">0 d</div>
                  </div>
                </div>
                <div className="text-3xl text-slate-300">›</div>
              </div>
            </PanelCard>

            <div className="rounded-[24px] border border-[#edd866] bg-[#f5f1d9] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <SoftIcon tone="amber">
                  <WalletIcon />
                </SoftIcon>
                <div>
                  <div className="text-xl font-black text-[#8b5d00]">Chua co tai khoan nhan tien</div>
                  <p className="mt-1 text-[#9f7a1f]">Vui long them thong tin tai khoan ngan hang hoac vi dien tu de nhan tien rut</p>
                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#d59a00] px-6 py-4 text-lg font-bold text-white transition hover:bg-[#bf8d05]"
                  >
                    <span className="text-2xl leading-none">+</span>
                    Them tai khoan
                  </button>
                </div>
              </div>
            </div>

            <PanelCard title="Lich su yeu cau rut tien" subtitle="" accent="neutral">
              <div className="grid min-h-[180px] place-items-center text-center text-xl font-semibold text-slate-400">
                Chua co yeu cau rut tien nao
              </div>
            </PanelCard>
          </section>
        </>
      )}
    </SharedPageWithModals>
  );
}
