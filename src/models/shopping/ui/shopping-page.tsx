"use client";

import { APP_ROUTES } from "@/config/app-routes";
import { SharedPageWithModals } from "@/models/shared/components/global-modals";
import { AppShell, WelcomeBanner } from "@/models/shared/components/app-shell";
import { LinkCreatorCard } from "@/models/shared/components/link-creator-card";

export function ShoppingPage() {
  return (
    <SharedPageWithModals currentPath={APP_ROUTES.shopping} Shell={AppShell}>
      {({ openCreate, openConfig, createLinkSection }) => (
        <>
          <WelcomeBanner onOpenConfig={openConfig} />
          <LinkCreatorCard onOpenCreate={openCreate}>{createLinkSection}</LinkCreatorCard>

          <section className="mt-8">
            <div className="rounded-[30px] border border-[#efe2d4] bg-white p-8 shadow-[0_20px_60px_rgba(117,76,34,0.08)]">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-[3rem] font-black tracking-[-0.05em] text-slate-900">Mua sam hoan tien</div>
                  <p className="mt-2 max-w-2xl text-lg leading-8 text-slate-500">
                    Trang mua sam doc lap, giu rieng route va UI cho viec tao link affiliate.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={openCreate}
                  className="rounded-full bg-[#ff6a00] px-7 py-4 text-lg font-bold text-white transition hover:bg-[#ea6100]"
                >
                  Tao link dau tien
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </SharedPageWithModals>
  );
}
