import type { ConfigStatus } from "../models/dashboard";

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
