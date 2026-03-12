import type { ConfigStatus, StatCardItem } from "../models/dashboard";
import {
  BagIcon,
  BankIcon,
  ShareIcon,
  TrendIcon,
  UsersIcon,
  WalletIcon,
} from "../components/icons";

export const STORAGE_KEYS = {
  savedCurl: "affiliate_saved_curl",
  savedCurlAt: "affiliate_saved_curl_at",
} as const;

export const EMPTY_CONFIG_STATUS: ConfigStatus = {
  savedAt: null,
  hasCSRF: false,
  hasCookie: false,
  hasXSapSec: false,
};

export const STAT_CARDS: StatCardItem[] = [
  { label: "Tổng đơn hàng", value: "0", tone: "blue", icon: <BagIcon /> },
  { label: "Tổng hoa hồng", value: "0 đ", tone: "green", icon: <TrendIcon /> },
  { label: "Số dư khả dụng", value: "0 đ", tone: "orange", icon: <BankIcon /> },
  { label: "Số tiền đã rút", value: "0 đ", tone: "amber", icon: <WalletIcon /> },
  { label: "Người đã mời", value: "0", tone: "violet", icon: <UsersIcon /> },
  { label: "Hoa hồng giới thiệu", value: "0 đ", tone: "pink", icon: <ShareIcon /> },
];

export const CASHBACK_FILTERS = ["Tat ca", "Cho xu ly", "Dang xu ly", "Hoan tat", "Huy"] as const;
