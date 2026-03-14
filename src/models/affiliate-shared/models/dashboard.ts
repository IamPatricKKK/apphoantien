export type ConfigStatus = {
  savedAt: string | null;
  hasCSRF: boolean;
  hasCookie: boolean;
  hasXSapSec: boolean;
};

export type DashboardState = {
  shopeeLink: string;
  subId: string;
  curlText: string;
  affiliateLink: string;
  productName: string;
  productPrice: string;
  productImageUrl: string;
  productCommission: string;
  cashbackEstimate: string;
  loading: boolean;
  savingCurl: boolean;
  error: string;
  statusMessage: string;
  configStatus: ConfigStatus;
  isConfigModalOpen: boolean;
};
