export const APP_ROUTES = {
  dashboard: "/",
  shopping: "/mua-sam-hoan-tien",
  cashback: "/lich-su-hoan-tien",
  withdraw: "/rut-tien",
} as const;

export const APP_NAV_ITEMS = [
  { href: APP_ROUTES.dashboard, label: "Dashboard" },
  { href: APP_ROUTES.shopping, label: "Mua sắm hoàn tiền" },
  { href: APP_ROUTES.cashback, label: "Lịch sử hoàn tiền" },
  { href: APP_ROUTES.withdraw, label: "Rút tiền" },
] as const;
