"use client";

import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { loadSavedCurlConfig, saveCurlConfig } from "../api/local-config";
import { EMPTY_CONFIG_STATUS } from "../constants/dashboard";
import {
  buildConfigStatus,
  createShopeeAffiliateLink,
  encodeShopeeProductUrl,
  inferProductName,
  isShopeeVnLink,
  normalizeSubId,
} from "../lib/affiliate-utils";
import type { ConfigStatus } from "../models/dashboard";

export function useAffiliateDashboard() {
  const [shopeeLink, setShopeeLink] = useState("");
  const [subId, setSubId] = useState("");
  const [curlText, setCurlText] = useState("");
  const [affiliateLink, setAffiliateLink] = useState("");
  const [encodedProductUrl, setEncodedProductUrl] = useState("");
  const [generatedSubId, setGeneratedSubId] = useState("");
  const [productName, setProductName] = useState("");
  const [commissionRate, setCommissionRate] = useState("");
  const [loading, setLoading] = useState(false);
  const [savingCurl, setSavingCurl] = useState(false);
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [configStatus, setConfigStatus] = useState<ConfigStatus>(EMPTY_CONFIG_STATUS);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  const isValidShopeeLink = useMemo(() => isShopeeVnLink(shopeeLink), [shopeeLink]);
  const hasGeneratedLink = Boolean(affiliateLink);

  useEffect(() => {
    const { curlText: savedCurl, savedAt } = loadSavedCurlConfig();
    if (!savedCurl) {
      return;
    }

    setCurlText(savedCurl);
    setConfigStatus(buildConfigStatus(savedCurl, savedAt));
  }, []);

  async function handleSaveCurl(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatusMessage("");

    if (!curlText.trim()) {
      setError("Vui long dan full cURL batchCustomLink.");
      return;
    }

    setSavingCurl(true);

    try {
      const savedAt = saveCurlConfig(curlText);
      setConfigStatus(buildConfigStatus(curlText, savedAt));
      setStatusMessage("Da luu cau hinh cURL tren trinh duyet.");
      setIsConfigModalOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Da co loi xay ra.");
    } finally {
      setSavingCurl(false);
    }
  }

  async function handleCreateLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatusMessage("");
    setAffiliateLink("");
    setEncodedProductUrl("");
    setGeneratedSubId("");
    setProductName("");
    setCommissionRate("");

    if (!shopeeLink.trim()) {
      setError("Vui long dan link Shopee.");
      return;
    }

    if (!isValidShopeeLink) {
      setError("Link can thuoc domain shopee.vn.");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const normalizedSubId = normalizeSubId(subId);
      setEncodedProductUrl(encodeShopeeProductUrl(shopeeLink));
      setGeneratedSubId(normalizedSubId);
      setAffiliateLink(createShopeeAffiliateLink(shopeeLink, normalizedSubId));
      setProductName(inferProductName(shopeeLink));
      setCommissionRate("Shopee Affiliate");
      setStatusMessage(`Da tao link affiliate voi sub_id: ${normalizedSubId}.`);
    } finally {
      setLoading(false);
    }
  }

  async function copyText(text: string, message: string) {
    try {
      await navigator.clipboard.writeText(text);
      setStatusMessage(message);
    } catch {
      setError("Khong the sao chep vao clipboard.");
    }
  }

  async function pasteFromClipboard() {
    try {
      const value = await navigator.clipboard.readText();
      setShopeeLink(value);
    } catch {
      setError("Khong the doc clipboard.");
    }
  }

  return {
    state: {
      shopeeLink,
      subId,
      curlText,
      affiliateLink,
      encodedProductUrl,
      generatedSubId,
      productName,
      commissionRate,
      loading,
      savingCurl,
      error,
      statusMessage,
      configStatus,
      isConfigModalOpen,
      isValidShopeeLink,
      hasGeneratedLink,
    },
    actions: {
      setShopeeLink,
      setSubId,
      setCurlText,
      setIsConfigModalOpen,
      handleSaveCurl,
      handleCreateLink,
      copyText,
      pasteFromClipboard,
    },
  };
}
