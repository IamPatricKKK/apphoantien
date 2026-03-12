"use client";

import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { loadSavedCurlConfig, saveCurlConfig } from "../api/local-config";
import { EMPTY_CONFIG_STATUS } from "../constants/dashboard";
import { buildConfigStatus, createDemoAffiliateLink, inferProductName, isShopeeLink } from "../lib/affiliate-utils";
import type { ConfigStatus } from "../models/dashboard";

export function useAffiliateDashboard() {
  const [shopeeLink, setShopeeLink] = useState("");
  const [curlText, setCurlText] = useState("");
  const [affiliateLink, setAffiliateLink] = useState("");
  const [productName, setProductName] = useState("");
  const [commissionRate, setCommissionRate] = useState("");
  const [loading, setLoading] = useState(false);
  const [savingCurl, setSavingCurl] = useState(false);
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [configStatus, setConfigStatus] = useState<ConfigStatus>(EMPTY_CONFIG_STATUS);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  const isValidShopeeLink = useMemo(() => isShopeeLink(shopeeLink), [shopeeLink]);
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
    setProductName("");
    setCommissionRate("");

    if (!shopeeLink.trim()) {
      setError("Vui long dan link Shopee.");
      return;
    }

    if (!isValidShopeeLink) {
      setError("Link chua dung dinh dang Shopee.");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setAffiliateLink(createDemoAffiliateLink(shopeeLink));
      setProductName(inferProductName(shopeeLink));
      setCommissionRate("1.6%");
      setStatusMessage("Da tao link demo tren giao dien. Backend va service da duoc go bo.");
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
      curlText,
      affiliateLink,
      productName,
      commissionRate,
      loading,
      savingCurl,
      error,
      statusMessage,
      configStatus,
      isCreateModalOpen,
      isConfigModalOpen,
      isValidShopeeLink,
      hasGeneratedLink,
    },
    actions: {
      setShopeeLink,
      setCurlText,
      setIsCreateModalOpen,
      setIsConfigModalOpen,
      handleSaveCurl,
      handleCreateLink,
      copyText,
      pasteFromClipboard,
    },
  };
}
