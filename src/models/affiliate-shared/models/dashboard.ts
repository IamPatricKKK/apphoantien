import type { ReactNode } from "react";

export type ConfigStatus = {
  savedAt: string | null;
  hasCSRF: boolean;
  hasCookie: boolean;
  hasXSapSec: boolean;
};

export type StatTone = "blue" | "green" | "orange" | "amber" | "violet" | "pink";

export type StatCardItem = {
  label: string;
  value: string;
  tone: StatTone;
  icon: ReactNode;
};

export type DashboardState = {
  shopeeLink: string;
  curlText: string;
  affiliateLink: string;
  productName: string;
  commissionRate: string;
  loading: boolean;
  savingCurl: boolean;
  error: string;
  statusMessage: string;
  configStatus: ConfigStatus;
  isCreateModalOpen: boolean;
  isConfigModalOpen: boolean;
};
