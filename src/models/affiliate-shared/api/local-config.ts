import { STORAGE_KEYS } from "../constants/dashboard";

export function loadSavedCurlConfig() {
  if (typeof window === "undefined") {
    return { curlText: "", savedAt: null as string | null };
  }

  return {
    curlText: window.localStorage.getItem(STORAGE_KEYS.savedCurl) || "",
    savedAt: window.localStorage.getItem(STORAGE_KEYS.savedCurlAt),
  };
}

export function saveCurlConfig(curlText: string) {
  const savedAt = new Date().toISOString();
  window.localStorage.setItem(STORAGE_KEYS.savedCurl, curlText);
  window.localStorage.setItem(STORAGE_KEYS.savedCurlAt, savedAt);
  return savedAt;
}
