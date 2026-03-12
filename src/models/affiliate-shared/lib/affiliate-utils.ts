import type { ConfigStatus } from "../models/dashboard";

export function buildConfigStatus(curl: string, savedAt: string | null): ConfigStatus {
  const normalized = curl.toLowerCase();

  return {
    savedAt,
    hasCookie: normalized.includes("-b ") || normalized.includes("cookie:"),
    hasCSRF: normalized.includes("csrf-token"),
    hasXSapSec: normalized.includes("x-sap-sec"),
  };
}

export function createDemoAffiliateLink(url: string) {
  let hash = 0;
  for (let index = 0; index < url.length; index += 1) {
    hash = (hash * 31 + url.charCodeAt(index)) >>> 0;
  }

  return `https://s.shopee.vn/${hash.toString(36).padStart(10, "0").slice(0, 10)}`;
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

export function isShopeeLink(url: string) {
  if (!url.trim()) {
    return false;
  }

  return /shopee\.(vn|sg|ph|co\.id|co\.th|com\.my|tw)/i.test(url);
}
