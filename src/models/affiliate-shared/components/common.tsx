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
      className={`rounded-[28px] border p-6 shadow-[0_20px_60px_rgba(96,64,32,0.08)] ${
        accent === "orange" ? "border-[#efcdb8] bg-[#fbefe7]" : "border-[#dce2eb] bg-white"
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2d211a]/30 px-4 py-8 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-auto rounded-[28px] bg-white shadow-[0_40px_100px_rgba(45,33,26,0.25)]">
        <div className="flex items-center justify-between border-b border-[#e5e8ee] px-7 py-5">
          <div className="text-[2rem] font-black tracking-[-0.05em] text-slate-900">{title}</div>
          <button type="button" onClick={onClose} className="text-3xl text-slate-400 transition hover:text-slate-800">
            ×
          </button>
        </div>
        <div className="px-7 py-6">{children}</div>
        <div className="border-t border-[#e5e8ee] px-7 py-5">{footer}</div>
      </div>
    </div>
  );
}

export function StatusChip({ label, ok }: { label: string; ok: boolean }) {
  return (
    <div
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${
        ok ? "bg-[#dff6e8] text-[#2aa251]" : "bg-[#eef1f5] text-slate-500"
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
    orange: "bg-[#fff2e9] text-[#ff8a3d]",
    green: "bg-[#eaf8ef] text-[#2aa251]",
    amber: "bg-[#fff6df] text-[#d59519]",
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
