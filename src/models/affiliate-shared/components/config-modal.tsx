import type { FormEventHandler } from "react";
import type { ConfigStatus } from "../models/dashboard";
import { ModalFrame, StatusChip } from "./common";

type ConfigModalProps = {
  curlText: string;
  configStatus: ConfigStatus;
  savingCurl: boolean;
  isOpen: boolean;
  onChangeCurl: (value: string) => void;
  onClose: () => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export function ConfigModal({
  curlText,
  configStatus,
  savingCurl,
  isOpen,
  onChangeCurl,
  onClose,
  onSubmit,
}: ConfigModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalFrame
      title="Cau hinh cURL batchCustomLink"
      onClose={onClose}
      footer={
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={onClose} className="rounded-[18px] border border-[#d8dee8] bg-white px-7 py-4 text-lg font-bold text-slate-500">
            Dong
          </button>
          <button
            type="submit"
            form="save-curl-form"
            disabled={savingCurl}
            className="rounded-[18px] bg-[#ff6a00] px-7 py-4 text-lg font-bold text-white transition hover:bg-[#ea6100] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {savingCurl ? "Dang luu..." : "Luu cURL"}
          </button>
        </div>
      }
    >
      <form id="save-curl-form" onSubmit={onSubmit}>
        <div className="mb-4 flex flex-wrap gap-2">
          <StatusChip label="Cookie" ok={configStatus.hasCookie} />
          <StatusChip label="CSRF" ok={configStatus.hasCSRF} />
          <StatusChip label="X-Sap-Sec" ok={configStatus.hasXSapSec} />
        </div>
        <textarea
          value={curlText}
          onChange={(e) => onChangeCurl(e.target.value)}
          placeholder="Dan nguyen cURL copy tu Network -> Copy as cURL (bash)"
          className="min-h-[260px] w-full rounded-[24px] border border-[#d9dee8] bg-[#fbfcfd] px-5 py-4 font-mono text-sm leading-7 text-slate-700 outline-none transition focus:border-[#ff6a00]"
        />
        <div className="mt-4 text-sm text-slate-500">
          {configStatus.savedAt
            ? `Da luu luc ${new Date(configStatus.savedAt).toLocaleString("vi-VN")}`
            : "Chua co cURL luu trong trinh duyet"}
        </div>
      </form>
    </ModalFrame>
  );
}
