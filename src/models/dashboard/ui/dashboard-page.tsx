"use client";

import { APP_ROUTES } from "@/config/app-routes";
import { SharedPageWithModals } from "@/models/shared/components/global-modals";
import { AppShell } from "@/models/shared/components/app-shell";
import { LinkCreatorCard } from "@/models/shared/components/link-creator-card";

const RECENT_LINKS = [
  { shortLink: "hoantienvui.ly/abcd123", originalUrl: "shopee.vn/iphone-15-pro-max", clicks: 0, created: "Vừa xong" },
  { shortLink: "hoantienvui.ly/fashion88", originalUrl: "shopee.vn/tui-xach-nu-cao-cap", clicks: 84, created: "2 giờ trước" },
  { shortLink: "hoantienvui.ly/home24", originalUrl: "shopee.vn/noi-chien-khong-dau", clicks: 36, created: "Hôm qua" },
] as const;

export function DashboardPage() {
  return (
    <SharedPageWithModals currentPath={APP_ROUTES.dashboard} Shell={AppShell}>
      {({ openCreate, createLinkSection }) => (
        <div className="space-y-8">
          <section className="space-y-2">
            <h1 className="text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-4xl">Bảng điều khiển Affiliate</h1>
            <p className="text-slate-500">Quản lý các link giới thiệu và theo dõi hoa hồng của bạn.</p>
          </section>

          <section className="overflow-hidden rounded-[32px] border-2 border-[#ffb9dc] bg-white p-1 shadow-[0_24px_70px_rgba(161,70,118,0.08)]">
            <div className="rounded-[28px] bg-[#fff7fb] p-6 lg:p-8">
              <div className="flex flex-col gap-8 lg:flex-row">
                <div className="h-52 w-full shrink-0 overflow-hidden rounded-[24px] border border-[#f8ddea] bg-[linear-gradient(135deg,#ffd2e9,#fff7fb)] lg:w-52" />

                <div className="flex-1">
                  <div className="flex items-center gap-2 text-[#ff6bb5]">
                    <span className="text-lg">●</span>
                    <span className="text-sm font-bold uppercase tracking-[0.2em]">Tạo link thành công</span>
                  </div>
                  <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-900">
                    Apple iPhone 15 Pro Max - 256GB - Titanium
                  </h2>
                  <p className="mt-2 text-3xl font-black text-[#ff6bb5]">34,990,000d</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#f3d8e5] bg-white p-4">
                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Total Shopee Commission</div>
                      <div className="mt-2 text-xl font-black text-slate-900">1,574,550d</div>
                    </div>
                    <div className="rounded-2xl border border-[#f5cfe2] bg-[#fff0f8] p-4">
                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff6bb5]">Buyer Cashback 80%</div>
                      <div className="mt-2 text-xl font-black text-[#ff6bb5]">1,259,640d</div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-[#f5cfe2] bg-white px-4 py-3 text-sm font-bold text-[#ff6bb5]">
                    hoantienvui.ly/abcd123
                  </div>
                </div>

                <div className="flex min-w-[180px] flex-col justify-center gap-3">
                  <button className="rounded-2xl bg-[#ff6bb5] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(255,107,181,0.22)]">
                    Mở sản phẩm
                  </button>
                  <button className="rounded-2xl border-2 border-[#ff6bb5] px-6 py-3 text-sm font-bold text-[#ff6bb5]">Sao chép link</button>
                </div>
              </div>

              <div className="mt-8 border-t border-[#f7dce9] pt-6">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Chia sẻ qua</div>
                <div className="mt-4 flex flex-wrap gap-4">
                  {["Facebook", "Zalo", "WhatsApp", "Email"].map((item) => (
                    <div key={item} className="flex flex-col items-center gap-2">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-[#fff0f8] text-sm font-bold text-[#ff6bb5]">
                        {item.slice(0, 1)}
                      </div>
                      <span className="text-xs font-medium text-slate-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 sm:grid-cols-3">
            {[
              { label: "Tổng lượt click", value: "1,284", hint: "+12% tuần này" },
              { label: "Lượt chuyển đổi", value: "42", hint: "Tỷ lệ 3.2%" },
              { label: "Tổng thu nhập", value: "32,500,000₫", hint: "Rút tiền" },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-[#f5cfe2] bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-slate-500">{item.label}</div>
                <div className="mt-2 text-3xl font-black tracking-[-0.03em] text-slate-900">{item.value}</div>
                <div className="mt-3 text-xs font-bold text-[#ff6bb5]">{item.hint}</div>
              </div>
            ))}
          </section>

          <LinkCreatorCard onOpenCreate={openCreate}>{createLinkSection}</LinkCreatorCard>

          <section className="overflow-hidden rounded-[28px] border border-[#f5cfe2] bg-white shadow-[0_24px_70px_rgba(161,70,118,0.08)]">
            <div className="flex items-center justify-between border-b border-[#f7dce9] px-6 py-5">
              <h3 className="text-lg font-bold text-slate-900">Link gần đây</h3>
              <button className="text-sm font-bold text-[#ff6bb5]">Xem tất cả</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#fff0f8] text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                  <tr>
                    <th className="px-6 py-4">Link rút gọn</th>
                    <th className="px-6 py-4">Link gốc</th>
                    <th className="px-6 py-4">Lượt click</th>
                    <th className="px-6 py-4">Ngày tạo</th>
                    <th className="px-6 py-4 text-right">Hành động</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f8ddea]">
                  {RECENT_LINKS.map((item, index) => (
                    <tr key={item.shortLink} className={index === 0 ? "bg-[#fff7fb]" : ""}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#ff6bb5]">{item.shortLink}</span>
                          {index === 0 && <span className="rounded bg-[#ff6bb5] px-1.5 py-0.5 text-[10px] font-bold text-white">MỚI</span>}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{item.originalUrl}</td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.clicks}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{item.created}</td>
                      <td className="px-6 py-4 text-right text-sm font-bold text-[#ff6bb5]">Sao chép</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}
    </SharedPageWithModals>
  );
}
