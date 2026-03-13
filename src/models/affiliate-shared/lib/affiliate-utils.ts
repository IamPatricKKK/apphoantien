import type { ConfigStatus } from "../models/dashboard";

export const SHOPEE_AFFILIATE_ID = "17348660462";
export const DEFAULT_SUB_ID = "default";

export function buildConfigStatus(curl: string, savedAt: string | null): ConfigStatus {
  const normalized = curl.toLowerCase();

  return {
    savedAt,
    hasCookie: normalized.includes("-b ") || normalized.includes("cookie:"),
    hasCSRF: normalized.includes("csrf-token"),
    hasXSapSec: normalized.includes("x-sap-sec"),
  };
}

// Encode the product URL before embedding it into the Shopee affiliate redirect link.
export function encodeShopeeProductUrl(url: string) {
  return encodeURIComponent(url.trim());
}

// Build the final redirect URL entirely on the frontend, no backend required.
export function createShopeeAffiliateLink(url: string, subId: string) {
  const encodedProductUrl = encodeShopeeProductUrl(url);
  const normalizedSubId = normalizeSubId(subId);

  return `https://s.shopee.vn/an_redir?origin_link=${encodedProductUrl}&affiliate_id=${SHOPEE_AFFILIATE_ID}&sub_id=${encodeURIComponent(normalizedSubId)}`;
}

export function normalizeSubId(subId: string) {
  return subId.trim() || DEFAULT_SUB_ID;
}

export function inferProductName(url: string) {
  try {
    const pathname = new URL(url).pathname;
    const slug = pathname.split("/").filter(Boolean).pop() || "";

    return (
      decodeURIComponent(slug)
        .replace(/-i\.\d+\.\d+$/, "")
        .replace(/-/g, " ")
        .trim() || "San pham Shopee"
    );
  } catch {
    return "San pham Shopee";
  }
}

export function isShopeeVnLink(url: string) {
  if (!url.trim()) {
    return false;
  }

  try {
    const normalizedUrl = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    const hostname = new URL(normalizedUrl).hostname.toLowerCase();
    return hostname === "shopee.vn" || hostname.endsWith(".shopee.vn");
  } catch {
    return false;
  }
}
