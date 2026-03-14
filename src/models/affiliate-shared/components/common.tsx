import type { ReactNode } from "react";

export function PanelCard({
  title,
  subtitle,
  accent,
  children,
}: {
  title: string;
  subtitle: string;
  accent: "orange" | "neutral";
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[28px] border p-6 shadow-[0_24px_70px_rgba(161,70,118,0.08)] ${
        accent === "orange" ? "border-[#f5cfe2] bg-[#fff0f8]" : "border-[#f5cfe2] bg-white"
      }`}
    >
      <div className="text-[1.8rem] font-black tracking-[-0.04em] text-slate-900">{title}</div>
      {subtitle && <div className="mt-2 text-slate-500">{subtitle}</div>}
      <div className="mt-5">{children}</div>
    </div>
  );
}

export function ModalFrame({
  title,
  children,
  footer,
  onClose,
}: {
  title: string;
  children: ReactNode;
  footer: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2a1320]/30 px-4 py-8 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-auto rounded-[28px] bg-white shadow-[0_40px_100px_rgba(124,39,85,0.2)]">
        <div className="flex items-center justify-between border-b border-[#f7dce9] px-7 py-5">
          <div className="text-[2rem] font-black tracking-[-0.05em] text-slate-900">{title}</div>
          <button type="button" onClick={onClose} className="text-3xl text-slate-400 transition hover:text-slate-800">
            ×
          </button>
        </div>
        <div className="px-7 py-6">{children}</div>
        <div className="border-t border-[#f7dce9] px-7 py-5">{footer}</div>
      </div>
    </div>
  );
}

export function StatusChip({ label, ok }: { label: string; ok: boolean }) {
  return (
    <div
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${
        ok ? "bg-[#effcf3] text-[#28844d]" : "bg-[#fff0f8] text-[#b62f78]"
      }`}
    >
      {label}: {ok ? "OK" : "Thieu"}
    </div>
  );
}

export function SoftIcon({
  tone,
  children,
}: {
  tone: "orange" | "green" | "amber";
  children: ReactNode;
}) {
  const tones = {
    orange: "bg-[#fff0f8] text-[#ff6bb5]",
    green: "bg-[#eaf8ef] text-[#2aa251]",
    amber: "bg-[#fff3dd] text-[#d59519]",
  };

  return <div className={`grid h-14 w-14 place-items-center rounded-2xl ${tones[tone]}`}>{children}</div>;
}

export function MarketplaceBadge({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return <div className={`grid h-10 w-10 place-items-center rounded-xl text-xs font-black ${className}`}>{children}</div>;
}
