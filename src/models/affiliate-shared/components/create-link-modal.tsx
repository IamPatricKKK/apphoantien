import Image from "next/image";
import type { FormEventHandler } from "react";
import { BrandShopIcon, CartIcon, LinkIcon, PasteIcon } from "./icons";

type CreateLinkModalProps = {
  hasGeneratedLink: boolean;
  shopeeLink: string;
  subId: string;
  loading: boolean;
  error: string;
  statusMessage: string;
  affiliateLink: string;
  productName: string;
  productPrice: string;
  productImageUrl: string;
  productCommission: string;
  cashbackEstimate: string;
  onChangeLink: (value: string) => void;
  onChangeSubId: (value: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onPaste: () => void;
  onCopyLink?: () => void;
  onShareLink?: () => void;
  variant?: "default" | "hero";
};

export function CreateLinkModal({
  hasGeneratedLink,
  shopeeLink,
  subId,
  loading,
  error,
  statusMessage,
  affiliateLink,
  productName,
  productPrice,
  productImageUrl,
  productCommission,
  cashbackEstimate,
  onChangeLink,
  onChangeSubId,
  onSubmit,
  onPaste,
  onCopyLink,
  onShareLink,
  variant = "default",
}: CreateLinkModalProps) {
  const primaryProductName = productName || "name Product";
  const primaryProductPrice = productPrice || "price";
  const primaryCommission = productCommission || "Dang cap nhat";
  const primaryCashbackEstimate = cashbackEstimate || "Dang cap nhat";

  if (variant === "hero") {
    return (
      <div id="affiliate-create-section" className="w-full">
        <form onSubmit={onSubmit} className="rounded-2xl border border-[#f7dce9] bg-white p-2 shadow-[0_24px_60px_rgba(120,54,88,0.12)]">
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex h-12 flex-1 items-center gap-3 rounded-xl bg-[#faf4f7] px-4 text-[#8d5e75] transition focus-within:bg-[#f5edf2]">
              <span className="text-[#a68b9a]">
                <LinkIcon />
              </span>
              <input
                id="affiliate-product-link-input"
                value={shopeeLink}
                onChange={(e) => onChangeLink(e.target.value)}
                placeholder="Dán link sản phẩm Shopee tại đây (Cần đăng nhập)..."
                className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-[#8d5e75]"
              />
              <button
                type="button"
                onClick={onPaste}
                className="inline-flex h-8 items-center rounded-lg px-2 text-xs font-bold text-[#a17c8f] transition hover:bg-white hover:text-[#ff6bb5]"
              >
                Dán
              </button>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#ff6bb5] px-6 text-sm font-bold text-white shadow-[0_12px_24px_rgba(255,107,181,0.28)] transition hover:bg-[#f255a8] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <SparklesIcon />
              {loading ? "Đang tạo..." : "Tạo link"}
            </button>
          </div>
        </form>

        {(error || statusMessage) && (
          <div
            className={`mt-3 rounded-[18px] border px-4 py-3 text-left text-sm leading-6 ${
              error ? "border-[#f3b9c9] bg-[#fff2f6] text-[#c12e6f]" : "border-[#bce0c7] bg-[#effcf3] text-[#28844d]"
            }`}
          >
            {error || statusMessage}
          </div>
        )}

        {hasGeneratedLink && (
          <div className="mt-4 rounded-[28px] border border-[#f5cfe2] bg-[#fffbfd] p-4 text-left shadow-sm md:p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              <div className="w-[120px] shrink-0 md:w-[180px]">
                <ProductPreview productImageUrl={productImageUrl} heroCard />
              </div>

              <div className="min-w-0 flex-1 space-y-4">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#fff0f8] px-3 py-1 text-xs font-bold text-[#ff6bb5] md:text-sm">
                    <SuccessIcon />
                    Tạo link thành công!
                  </div>

                  <div
                    className="break-words overflow-hidden text-ellipsis text-[15px] font-bold leading-snug text-slate-800 md:text-[16px]"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {primaryProductName}
                  </div>

                  <div className="text-[18px] font-black leading-none text-[#ff6bb5] md:text-[20px]">{primaryProductPrice}</div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <InfoCard title="Hoa hồng Shopee" value={primaryCommission} />
                  <InfoCard title="Hoàn tiền cho bạn (80%)" value={primaryCashbackEstimate} highlight />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={affiliateLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-3 rounded-[18px] bg-[#ff6bb5] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 md:text-base"
                  >
                    <OpenProductIcon />
                    Mở sản phẩm
                  </a>
                  <button
                    type="button"
                    onClick={onCopyLink}
                    className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-3 rounded-[18px] border-2 border-[#ffc3e1] bg-white px-5 py-3 text-sm font-bold text-[#ff6bb5] transition hover:border-[#ff6bb5] md:text-base"
                  >
                    <CopyIcon />
                    Sao chép link
                  </button>
                </div>

                <div className="min-w-0 rounded-[20px] border border-[#f5cfe2] bg-white px-4 py-4 md:px-5">
                  <div className="flex min-w-0 items-center gap-3 text-[#ff6bb5]">
                    <LinkBadgeIcon />
                    <span className="min-w-0 truncate font-mono text-[11px] font-bold md:text-sm">{affiliateLink}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div id="affiliate-create-section" className="rounded-[28px] border border-[#f5cfe2] bg-[#fffafd] p-5 shadow-sm">
      <div className="flex items-center gap-5 border-b border-[#f7dce9] pb-5">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#ffe3f1] text-[#ff6bb5]">
          <BrandShopIcon />
        </div>
        <div>
          <div className="text-lg font-semibold text-slate-500">
            Affiliate ID: <span className="font-black text-[#ff6bb5]">17348660462</span>
          </div>
          <div className="mt-1 text-slate-500">Dán link Shopee và hệ thống sẽ tạo ngay link mua có hoàn tiền cho bạn.</div>
        </div>
      </div>

      <form id="create-link-form" onSubmit={onSubmit} className="mt-5">
        <label className="text-[1.05rem] font-black text-slate-900">Dán link sản phẩm</label>
        <div className="mt-3 flex flex-col gap-3 md:flex-row">
          <div className="flex min-h-16 flex-1 items-center rounded-[20px] border border-[#f5cfe2] bg-white px-4">
            <input
              id="affiliate-product-link-input"
              value={shopeeLink}
              onChange={(e) => onChangeLink(e.target.value)}
              placeholder="https://shopee.vn/..."
              className="w-full bg-transparent text-[1.05rem] font-medium text-slate-800 outline-none placeholder:text-slate-400"
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
            className="inline-flex min-h-16 items-center justify-center gap-3 rounded-[20px] border border-[#f5cfe2] bg-white px-6 text-lg font-bold text-slate-600 transition hover:border-[#ff6bb5] hover:text-[#ff6bb5]"
          >
            <PasteIcon />
            Dán
          </button>
        </div>

        <div className="mt-4 rounded-[18px] border border-[#f8ddea] bg-[#fff0f8] px-4 py-3 text-sm font-medium leading-6 text-[#b62f78]">
          Luôn mua hàng bằng link vừa tạo để hệ thống ghi nhận hoàn tiền chính xác.
        </div>

        <div className="mt-5">
          <label className="text-[1.05rem] font-black text-slate-900">sub_id</label>
          <input
            value={subId}
            onChange={(e) => onChangeSubId(e.target.value)}
            placeholder="Nhập sub_id, nếu để trống sẽ dùng default"
            className="mt-3 min-h-16 w-full rounded-[20px] border border-[#f5cfe2] bg-white px-4 text-[1.05rem] font-medium text-slate-800 outline-none transition focus:border-[#ff6bb5]"
          />
          <div className="mt-2 text-sm text-slate-500">Có thể để trống nếu bạn không cần phân loại đơn hàng.</div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="submit"
            form="create-link-form"
            disabled={loading}
            className="rounded-[18px] bg-[#ff6bb5] px-7 py-4 text-lg font-bold text-white shadow-[0_12px_30px_rgba(255,107,181,0.24)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Đang tạo..." : "Tạo link"}
          </button>
        </div>
      </form>

      {(error || statusMessage) && (
        <div
          className={`mt-5 rounded-[20px] border px-4 py-3 text-sm leading-6 ${
            error ? "border-[#f3b9c9] bg-[#fff2f6] text-[#c12e6f]" : "border-[#bce0c7] bg-[#effcf3] text-[#28844d]"
          }`}
        >
          {error || statusMessage}
        </div>
      )}

      {hasGeneratedLink && (
        <div className="mt-5 rounded-[28px] border border-[#f5cfe2] bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="w-[120px] shrink-0 md:w-[136px]">
              <ProductPreview productImageUrl={productImageUrl} />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-between gap-5">
              <div>
                <div className="break-words text-[1rem] font-bold leading-snug text-slate-800 md:text-[1.125rem]">{primaryProductName}</div>
                <div className="mt-2 text-lg font-black text-[#ff6bb5] md:text-xl">{primaryProductPrice}</div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <InfoCard title="Hoa hồng Shopee" value={primaryCommission} />
                  <InfoCard title="Số tiền hoàn có thể nhận được lên tới" value={primaryCashbackEstimate} highlight />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-500">Link hoàn tiền đã sẵn sàng. Nhấn Mua ngay để đi qua đúng affiliate link này.</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onCopyLink}
                  className="inline-flex items-center gap-2 rounded-[18px] border border-[#f5cfe2] bg-white px-5 py-4 text-base font-bold text-[#8d5e75] transition hover:border-[#ff6bb5] hover:text-[#ff6bb5]"
                >
                  <CopyIcon />
                  Sao chép link
                </button>
                <button
                  type="button"
                  onClick={onShareLink}
                  className="inline-flex items-center gap-2 rounded-[18px] border border-[#f5cfe2] bg-white px-5 py-4 text-base font-bold text-[#8d5e75] transition hover:border-[#ff6bb5] hover:text-[#ff6bb5]"
                >
                  <ShareLineIcon />
                  Chia sẻ link
                </button>
                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-[18px] bg-[#ff6bb5] px-6 py-4 text-lg font-bold text-white transition hover:opacity-90"
                >
                  <CartIcon />
                  Mua ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SparklesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
    </svg>
  );
}

function ProductPreview({ productImageUrl, compact = false, heroCard = false }: { productImageUrl: string; compact?: boolean; heroCard?: boolean }) {
  const shellHeight = compact ? "min-h-[112px]" : heroCard ? "min-h-[220px] sm:min-h-[260px]" : "min-h-[128px]";
  const capsuleSize = compact ? "h-14 w-20 rounded-[40px]" : heroCard ? "h-24 w-32 rounded-[56px]" : "h-16 w-24 rounded-[44px]";

  if (productImageUrl) {
    return (
      <div className={`relative overflow-hidden rounded-[24px] bg-white ${heroCard ? "aspect-square w-full" : "aspect-square w-full"}`}>
        <Image src={productImageUrl} alt="Shopee product" fill className="object-contain" unoptimized />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[20px] bg-gradient-to-br from-[#ffd2e9] via-[#fff0f8] to-[#fffafd] p-3">
      <div className={`relative ${shellHeight} rounded-[16px] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(255,107,181,0.12),_transparent_35%)]`}>
        <div className="absolute inset-x-3 top-3 rounded-full bg-white px-3 py-1 text-center text-[11px] font-black uppercase tracking-[0.2em] text-[#b62f78]">
          Shopee
        </div>
        <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 border-4 border-[#ffd7ea] bg-white shadow-[0_12px_30px_rgba(255,107,181,0.18)] ${capsuleSize}`} />
      </div>
    </div>
  );
}

function InfoCard({ title, value, highlight = false }: { title: string; value: string; highlight?: boolean }) {
  return (
    <div className={`min-w-0 rounded-[20px] border px-4 py-4 md:px-5 ${highlight ? "border-[#ffd1e8] bg-[#fff0f8]" : "border-[#f2e4ec] bg-[#fff7fb]"}`}>
      <div
        className={`overflow-hidden text-ellipsis text-[11px] font-black uppercase tracking-[0.08em] md:text-xs ${highlight ? "text-[#ff6bb5]" : "text-[#cf5a9b]"}`}
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {title}
      </div>
      <div className={`mt-2 overflow-hidden text-ellipsis text-[15px] font-bold md:text-[16px] ${highlight ? "text-[#ff6bb5]" : "text-slate-900"}`}>{value}</div>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function ShareLineIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 10.7l6.8-3.4" />
      <path d="M8.6 13.3l6.8 3.4" />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
      <path d="M8.5 12.5l2.3 2.3l4.7-5.3" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.1 0l2.8-2.8a5 5 0 0 0-7.1-7.1L11 4" />
      <path d="M14 11a5 5 0 0 0-7.1 0L4 13.8a5 5 0 1 0 7.1 7.1L13 20" />
    </svg>
  );
}

function OpenProductIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 5h5v5" />
      <path d="M10 14L19 5" />
      <path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
    </svg>
  );
}
