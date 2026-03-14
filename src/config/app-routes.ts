export const APP_ROUTES = {
  home: "/",
  howItWorks: "/cach-hoat-dong",
  login: "/dang-nhap",
  dashboard: "/bang-dieu-khien",
  wallet: "/vi-cua-ban",
  profile: "/ho-so-nguoi-dung",
  shopping: "/mua-sam-hoan-tien",
  cashback: "/lich-su-hoan-tien",
  withdraw: "/rut-tien",
} as const;

export const APP_NAV_ITEMS = [
  { href: APP_ROUTES.dashboard, label: "Bảng điều khiển" },
  { href: APP_ROUTES.wallet, label: "Ví của bạn" },
  { href: APP_ROUTES.profile, label: "Hồ sơ người dùng" },
] as const;

export const MARKETING_NAV_ITEMS = [
  { href: APP_ROUTES.howItWorks, label: "Cách hoạt động" },
  { href: APP_ROUTES.home, label: "Cửa hàng" },
  { href: APP_ROUTES.home, label: "Ưu đãi" },
] as const;
