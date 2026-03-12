import type { FormEventHandler } from "react";
import { CopyIcon, BrandShopIcon, CartIcon, MoneyIcon, PasteIcon, QrIcon, TagIcon } from "./icons";
import { ModalFrame } from "./common";

type CreateLinkModalProps = {
  isOpen: boolean;
  hasGeneratedLink: boolean;
  shopeeLink: string;
  loading: boolean;
  error: string;
  statusMessage: string;
  affiliateLink: string;
  productName: string;
  commissionRate: string;
  onClose: () => void;
  onChangeLink: (value: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onPaste: () => void;
  onCopy: () => void;
};

export function CreateLinkModal({
  isOpen,
  hasGeneratedLink,
  shopeeLink,
  loading,
  error,
  statusMessage,
  affiliateLink,
  productName,
  commissionRate,
  onClose,
  onChangeLink,
  onSubmit,
  onPaste,
  onCopy,
}: CreateLinkModalProps) {
  if (!isOpen) {
    return null;
  }

  const primaryProductName = productName || "Chuot gaming Rawm Leviathan V4";
  const primaryCommission = commissionRate || "1.6%";

  return (
    <ModalFrame
      title="Tao link hoan tien Shopee"
      onClose={onClose}
      footer={
        hasGeneratedLink ? (
          <div className="flex flex-wrap justify-between gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-[18px] border border-[#d8dee8] bg-white px-6 py-4 text-lg font-bold text-slate-600 transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
            >
              <QrIcon />
              Hien QR
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-[18px] bg-[#ff6a00] px-6 py-4 text-lg font-bold text-white transition hover:bg-[#ea6100]"
            >
              <CartIcon />
              Mua ngay
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-[18px] border border-[#d8dee8] bg-white px-7 py-4 text-lg font-bold text-slate-500 transition hover:border-slate-400"
            >
              Dong
            </button>
            <button
              type="submit"
              form="create-link-form"
              disabled={loading}
              className="rounded-[18px] bg-[#ff6a00] px-7 py-4 text-lg font-bold text-white transition hover:bg-[#ea6100] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Dang tao..." : "Tao lien ket"}
            </button>
          </div>
        )
      }
    >
      <div className="flex items-center gap-5 border-b border-[#e5e8ee] pb-5">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#ff6a00] text-white">
          <BrandShopIcon />
        </div>
        <div>
          <div className="text-lg font-semibold text-slate-500">
            Hoa hong: <span className="font-black text-[#ff6a00]">2-8%</span>
          </div>
          <div className="mt-1 text-slate-500">Thoi gian: 7-14 ngay ke tu ngay giao hang thanh cong</div>
        </div>
      </div>

      <form id="create-link-form" onSubmit={onSubmit} className="mt-5">
        <label className="text-[1.1rem] font-black text-slate-900">Dan link san pham</label>
        <div className="mt-3 flex flex-col gap-3 md:flex-row">
          <div className="flex min-h-16 flex-1 items-center rounded-[20px] border border-[#d9dee8] bg-[#f9fbfd] px-4">
            <input
              value={shopeeLink}
              onChange={(e) => onChangeLink(e.target.value)}
              placeholder="https://shopee.vn/..."
              className="w-full bg-transparent text-[1.05rem] font-medium text-slate-800 outline-none"
            />
            {shopeeLink && (
              <button type="button" onClick={() => onChangeLink("")} className="ml-3 text-xl text-slate-400 transition hover:text-slate-700">
                ×
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={onPaste}
            className="inline-flex min-h-16 items-center justify-center gap-3 rounded-[20px] border border-[#d9dee8] bg-white px-6 text-lg font-bold text-slate-600 transition hover:border-[#ff6a00] hover:text-[#ff6a00]"
          >
            <PasteIcon />
            Dan
          </button>
        </div>

        <div className="mt-4 rounded-[18px] border border-[#f0cb54] bg-[#fff7dc] px-4 py-3 text-sm font-medium leading-6 text-[#cb6a00]">
          Luu y: Hay mua hang ngay tu lien ket, khong click vao link shopee tu cac nen tang khac hoac livestream de tranh rot don hang
        </div>
      </form>

      {(error || statusMessage) && (
        <div
          className={`mt-5 rounded-[20px] border px-4 py-3 text-sm leading-6 ${
            error ? "border-[#f3b9b9] bg-[#fff1f1] text-[#d13a3a]" : "border-[#bce0c7] bg-[#effcf3] text-[#28844d]"
          }`}
        >
          {error || statusMessage}
        </div>
      )}

      {hasGeneratedLink && (
        <div className="mt-5 space-y-4">
          <div className="rounded-[28px] border border-[#dfe5ee] bg-[#fbfcfd] p-5 shadow-sm">
            <div className="grid gap-5 md:grid-cols-[136px_1fr]">
              <div className="overflow-hidden rounded-[20px] bg-gradient-to-br from-[#0f1b59] via-[#253cff] to-[#61a2ff] p-3">
                <div className="relative h-full min-h-[128px] rounded-[16px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.5),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.25),_transparent_35%)]">
                  <div className="absolute inset-x-3 top-3 rounded-full bg-white/85 px-3 py-1 text-center text-[11px] font-black uppercase tracking-[0.2em] text-[#0f1b59]">
                    Shopee
                  </div>
                  <div className="absolute bottom-3 left-1/2 h-16 w-24 -translate-x-1/2 rounded-[44px] border-4 border-[#dce6f7] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.3)]" />
                </div>
              </div>

              <div>
                <div className="text-[1.6rem] font-black tracking-[-0.04em] text-slate-900">{primaryProductName}</div>
                <div className="mt-2 text-[1.7rem] font-black text-slate-800">1.570.000 d</div>

                <div className="mt-5 overflow-hidden rounded-[22px] border border-[#dfe5ee]">
                  <div className="flex items-center justify-between border-b border-[#dfe5ee] px-5 py-4 text-[1.05rem] font-semibold text-slate-600">
                    <span className="inline-flex items-center gap-2">
                      <TagIcon />
                      Hoa hong co ban ({primaryCommission})
                    </span>
                    <span className="font-black text-[#ff6a00]">+d25.000</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#edf8ef] px-5 py-4 text-[1.2rem] font-black text-[#2aa251]">
                    <span className="inline-flex items-center gap-2">
                      <MoneyIcon />
                      Tong hoan tien
                    </span>
                    <span>25.000d</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#dfe5ee] bg-[#fbfcfd] p-4">
            <div className="mb-3 text-sm font-semibold text-slate-500">Link hoan tien cua ban</div>
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="flex min-h-16 flex-1 items-center rounded-[18px] border border-[#d9dee8] bg-white px-4 text-slate-700">
                <span className="truncate">{affiliateLink}</span>
              </div>
              <button
                type="button"
                onClick={onCopy}
                className="inline-flex min-h-16 items-center justify-center gap-2 rounded-[18px] bg-[#ff6a00] px-6 text-lg font-bold text-white transition hover:bg-[#ea6100]"
              >
                <CopyIcon />
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </ModalFrame>
  );
}
