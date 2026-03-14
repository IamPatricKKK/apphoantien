"use client";

import Link from "next/link";
import { APP_ROUTES } from "@/config/app-routes";
import {
  BrandMark,
  ShareIcon,
} from "@/models/affiliate-shared/components/icons";
import { SharedPageWithModals } from "@/models/shared/components/global-modals";
import { MarketingShell } from "@/models/shared/components/app-shell";

const STEPS = [
  {
    title: "1. Sao chép Link",
    description: "Tìm sản phẩm bạn yêu thích trên Shopee và sao chép địa chỉ URL của sản phẩm đó.",
    icon: <CopyStepIcon />,
  },
  {
    title: "2. Chuyển đổi Link",
    description: "Dán link vào Hoantienvui.com để nhận link theo dõi cá nhân của riêng bạn.",
    icon: <SwapStepIcon />,
  },
  {
    title: "3. Nhận Hoàn tiền",
    description: "Hoàn tất mua sắm bằng link đó và xem số dư VNĐ của bạn tăng lên.",
    icon: <WalletStepIcon />,
  },
] as const;

const CATEGORIES = [
  { label: "Thời trang", icon: <ShirtIcon /> },
  { label: "Điện tử", icon: <DeviceIcon /> },
  { label: "Nhà cửa", icon: <HomeIcon /> },
  { label: "Làm đẹp", icon: <BeautyIcon /> },
  { label: "Đồ chơi", icon: <ToyIcon /> },
  { label: "Thực phẩm", icon: <FoodIcon /> },
] as const;

export function ShoppingPage() {
  return (
    <SharedPageWithModals currentPath={APP_ROUTES.home} Shell={MarketingShell}>
      {({ heroCreateLinkSection }) => (
        <>
          <main className="flex-1">
            <section className="relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(248,245,247,0.92)_44%,_rgba(248,245,247,0.78)_100%)]" />
              <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10 lg:py-20">
                <div className="relative flex flex-col items-center gap-8 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#ffe5f2] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#ff6bb5]">
                    <CoinIcon />
                    <span>Hoàn tiền Shopee độc quyền</span>
                  </div>

                  <div className="flex max-w-4xl flex-col gap-5">
                    <h1 className="text-5xl font-black leading-[1.08] tracking-[-0.05em] text-[#20151c] lg:text-[72px]">
                      Biến <span className="text-[#ff6bb5]">link Shopee</span> thành tiền mặt
                    </h1>
                    <p className="mx-auto max-w-2xl text-base leading-7 text-[#8d5e75] lg:text-lg">
                      Đừng chỉ mua sắm, hãy kiếm tiền. Dán bất kỳ liên kết sản phẩm Shopee nào vào bên dưới để tạo liên kết hoàn tiền cá nhân của bạn ngay lập tức.
                    </p>
                  </div>

                  <div className="w-full max-w-[760px]">
                    {heroCreateLinkSection}
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-[#a17c8f]">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full border-2 border-white bg-[#c2d1dc]" />
                      <div className="h-8 w-8 rounded-full border-2 border-white bg-[#b2c5d3]" />
                      <div className="h-8 w-8 rounded-full border-2 border-white bg-[#90a8bb]" />
                    </div>
                    <span>Hơn 10.000 người mua sắm thông minh đã tham gia trong tháng này</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white py-20">
              <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
                <div className="mb-12 text-center">
                  <h2 className="text-3xl font-black tracking-[-0.04em] text-[#20151c] lg:text-5xl">
                    Bắt đầu tiết kiệm với <span className="text-[#ff6bb5]">3 bước đơn giản</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                  {STEPS.map((step) => (
                    <div key={step.title} className="flex flex-col items-center gap-4 text-center">
                      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#fff1f8] text-[#ff6bb5] shadow-[0_10px_25px_rgba(255,107,181,0.12)]">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#20151c]">{step.title}</h3>
                      <p className="max-w-xs text-sm leading-6 text-[#8d5e75]">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
                <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-black tracking-[-0.04em] text-[#20151c]">Danh mục hoàn tiền hàng đầu</h2>
                    <p className="mt-1 text-sm text-[#8d5e75]">Nhận tới 20% hoàn tiền VNĐ từ các thương hiệu yêu thích</p>
                  </div>
                  <Link className="flex items-center gap-1 text-sm font-bold text-[#ff6bb5] transition hover:text-[#ea4ca0]" href={APP_ROUTES.howItWorks}>
                    Xem tất cả
                    <ArrowRightIcon />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                  {CATEGORIES.map((category) => (
                    <div
                      key={category.label}
                      className="flex flex-col items-center gap-3 rounded-2xl border border-white/80 bg-white px-5 py-6 shadow-[0_8px_30px_rgba(120,54,88,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(120,54,88,0.1)]"
                    >
                      <div className="text-[#ff6bb5]">{category.icon}</div>
                      <p className="text-sm font-bold text-[#20151c]">{category.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-[1280px] px-6 pb-20 lg:px-10">
              <div className="relative overflow-hidden rounded-[32px] bg-[#2a1720] px-8 py-16 text-center text-white shadow-[0_28px_70px_rgba(42,23,32,0.2)] lg:px-16 lg:py-20">
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#ff6bb5]/20 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#ff6bb5]/10 to-transparent" />
                <div className="relative z-10 flex flex-col items-center gap-5">
                  <h2 className="max-w-4xl text-4xl font-black tracking-[-0.05em] lg:text-6xl">Sẵn sàng tối đa hóa khoản tiết kiệm của bạn?</h2>
                  <p className="max-w-2xl text-base leading-7 text-white/75 lg:text-lg">
                    Đừng chỉ mua sắm, hãy kiếm tiền. Dán bất kỳ liên kết sản phẩm Shopee nào vào bên dưới để tạo liên kết hoàn tiền cá nhân của bạn ngay lập tức.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <Link
                      className="rounded-xl bg-[#ff6bb5] px-8 py-4 text-base font-bold text-white shadow-[0_16px_30px_rgba(255,107,181,0.2)] transition hover:scale-[1.02]"
                      href={APP_ROUTES.login}
                    >
                      Bắt đầu ngay - Miễn phí
                    </Link>
                    <Link
                      className="rounded-xl border border-white/15 bg-[#233246] px-8 py-4 text-base font-bold text-white transition hover:bg-[#2b3b52]"
                      href={APP_ROUTES.howItWorks}
                    >
                      Cài đặt tiện ích
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="border-t border-[#f7dce9] bg-white">
            <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex max-w-xs flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#ff6bb5] text-white">
                      <BrandMark />
                    </div>
                    <h2 className="text-lg font-extrabold tracking-tight text-[#20151c]">Hoantienvui.com</h2>
                  </div>
                  <p className="text-sm leading-6 text-[#8d5e75]">
                    Cách thông minh nhất để tiết kiệm tiền trên Shopee. Tạo link tức thì, rút tiền nhanh chóng và tỷ lệ cao nhất.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-12">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-bold text-[#20151c]">Sản phẩm</h4>
                    <nav className="flex flex-col gap-2 text-sm text-[#8d5e75]">
                      <Link href={APP_ROUTES.howItWorks}>Hỗ trợ mở rộng</Link>
                      <Link href={APP_ROUTES.login}>Ứng dụng di động</Link>
                      <Link href={APP_ROUTES.home}>Chương trình giới thiệu</Link>
                    </nav>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-bold text-[#20151c]">Hỗ trợ</h4>
                    <nav className="flex flex-col gap-2 text-sm text-[#8d5e75]">
                      <Link href={APP_ROUTES.howItWorks}>Trung tâm trợ giúp</Link>
                      <Link href={APP_ROUTES.login}>Liên hệ</Link>
                      <Link href={APP_ROUTES.home}>Điều khoản dịch vụ</Link>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-[#f4e6ee] pt-6 text-center text-xs font-medium text-[#b0909f]">
                © 2024 Hoantienvui.com. Bảo lưu mọi quyền.
              </div>
            </div>
          </footer>
        </>
      )}
    </SharedPageWithModals>
  );
}

function CopyStepIcon() {
  return <ShareIcon />;
}

function SwapStepIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.9">
      <path d="M7 7h11" />
      <path d="M14 4l4 3l-4 3" />
      <path d="M17 17H6" />
      <path d="M10 14l-4 3l4 3" />
    </svg>
  );
}

function WalletStepIcon() {
  return <CoinIcon />;
}

function ShirtIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 5l3 2l3-2l4 3l-2 4h-2v7H9v-7H7L5 8z" />
    </svg>
  );
}

function DeviceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="5" width="10" height="14" rx="2" />
      <path d="M8 19h2" />
      <rect x="16" y="8" width="4" height="8" rx="1" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 10.5L12 4l8 6.5" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

function BeautyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 5h6" />
      <path d="M10 5V3h4v2" />
      <path d="M8 9h8l-1 10H9z" />
      <path d="M8.5 9c0-1.7 1.6-3 3.5-3s3.5 1.3 3.5 3" />
    </svg>
  );
}

function ToyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="8" cy="9" r="2.5" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M8 11.5V18h8v-6.5" />
      <path d="M8 14h8" />
    </svg>
  );
}

function FoodIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 4v7" />
      <path d="M10 4v7" />
      <path d="M7 8h3" />
      <path d="M8.5 11v9" />
      <path d="M16 4c1.5 2 1.5 5 0 7v9" />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="8" />
      <path d="M10 10.5c0-1 1-1.8 2.2-1.8s2.3.8 2.3 1.8c0 1.1-1 1.7-2.3 2c-1.2.3-2.2.9-2.2 2c0 1 .9 1.8 2.2 1.8s2.3-.8 2.3-1.8" />
      <path d="M12.2 7.5v9" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="M13 6l6 6l-6 6" />
    </svg>
  );
}
