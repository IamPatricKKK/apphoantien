import type { StatCardItem } from "../models/dashboard";

type StatCardProps = StatCardItem;

export function StatCard({ label, value, tone, icon }: StatCardProps) {
  const tones: Record<StatCardItem["tone"], string> = {
    blue: "bg-[#eef4ff] text-[#3872ff]",
    green: "bg-[#eaf8ef] text-[#2aa251]",
    orange: "bg-[#fff2e9] text-[#ff8a3d]",
    amber: "bg-[#fff6df] text-[#d59519]",
    violet: "bg-[#f4ebff] text-[#9747ff]",
    pink: "bg-[#ffe8f5] text-[#e4549c]",
  };

  return (
    <div className="rounded-[28px] border border-[#dce2eb] bg-white px-5 py-5 shadow-[0_12px_30px_rgba(52,78,105,0.06)]">
      <div className="flex items-center gap-4">
        <div className={`grid h-14 w-14 place-items-center rounded-full ${tones[tone]}`}>{icon}</div>
        <div>
          <div className="text-sm font-semibold leading-5 text-slate-500">{label}</div>
          <div className="mt-2 text-[2rem] font-black tracking-[-0.04em] text-slate-900">{value}</div>
        </div>
      </div>
    </div>
  );
}
