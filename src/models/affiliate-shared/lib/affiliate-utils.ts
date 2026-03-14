import type { ConfigStatus } from "../models/dashboard";

export const SHOPEE_AFFILIATE_ID = "17348660462";
export const DEFAULT_SUB_ID = "default";
export const PRODUCT_DATA_ENDPOINT = "https://data.addlivetag.com/product-data/product-data.php";

type ProductDataResponse = {
  status?: string;
  productInfo?: {
    productName?: string;
    price?: number | string;
    imageUrl?: string;
    shopName?: string;
    commission?: number | string;
    sellerComFinal?: number | string;
    shopeeComFinal?: number | string;
  };
};

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

export function normalizeShopeeUrl(url: string) {
  return url.startsWith("http://") || url.startsWith("https://") ? url.trim() : `https://${url.trim()}`;
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
    const pathname = new URL(normalizeShopeeUrl(url)).pathname;
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

export function inferProductPrice(url: string) {
  try {
    const pathname = new URL(normalizeShopeeUrl(url)).pathname;
    const numericSeed = pathname.match(/\d+/g)?.join("").slice(-6) || "179000";
    const seededValue = Number.parseInt(numericSeed, 10);
    const normalizedPrice = 99_000 + (seededValue % 2_900_000);

    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(normalizedPrice);
  } catch {
    return "179.000 ₫";
  }
}

export function formatVndPrice(price: number | string | null | undefined) {
  if (price === null || price === undefined || price === "") {
    return "price";
  }

  const numericPrice =
    typeof price === "number"
      ? price
      : Number.parseInt(
          String(price)
            .replace(/[^\d]/g, ""),
          10,
        );

  if (Number.isNaN(numericPrice)) {
    return "price";
  }

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(numericPrice);
}

export async function fetchShopeeProductData(url: string) {
  const normalizedUrl = normalizeShopeeUrl(url);
  const endpoint = `${PRODUCT_DATA_ENDPOINT}?url=${encodeURIComponent(normalizedUrl)}`;
  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Product data request failed with status ${response.status}.`);
  }

  const payload = (await response.json()) as ProductDataResponse;
  const productInfo = payload.productInfo;
  const rawCommission = productInfo?.commission ?? productInfo?.sellerComFinal ?? productInfo?.shopeeComFinal ?? "";
  const numericCommission =
    typeof rawCommission === "number"
      ? rawCommission
      : Number.parseInt(
          String(rawCommission)
            .replace(/[^\d]/g, ""),
          10,
        );
  const cashbackEstimate = Number.isNaN(numericCommission) ? "" : formatVndPrice(Math.round(numericCommission * 0.8));

  return {
    productName: productInfo?.productName?.trim() || inferProductName(normalizedUrl),
    productPrice: formatVndPrice(productInfo?.price) || inferProductPrice(normalizedUrl),
    productImageUrl: productInfo?.imageUrl?.trim() || "",
    shopName: productInfo?.shopName?.trim() || "",
    productCommission: formatVndPrice(rawCommission),
    cashbackEstimate,
  };
}

export function isShopeeVnLink(url: string) {
  if (!url.trim()) {
    return false;
  }

  try {
    const normalizedUrl = normalizeShopeeUrl(url);
    const hostname = new URL(normalizedUrl).hostname.toLowerCase();
    return hostname === "shopee.vn" || hostname.endsWith(".shopee.vn");
  } catch {
    return false;
  }
}
