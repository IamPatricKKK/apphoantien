import { BagIcon, BankIcon, WalletIcon } from "./icons";
import { SoftIcon } from "./common";

export function SummaryBand({ success = false }: { success?: boolean }) {
  return (
    <div
      className={`rounded-[28px] border p-5 shadow-sm ${
        success ? "border-[#dce2eb] bg-white" : "border-[#efcdb8] bg-[#fbefe7]"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SoftIcon tone={success ? "green" : "orange"}>
            {success ? <WalletIcon /> : <BankIcon />}
          </SoftIcon>
          <div>
            <div className="text-sm font-semibold text-slate-400">
              {success ? "So tien da rut" : "So du kha dung"}
            </div>
            <div className={`mt-2 text-[2rem] font-black ${success ? "text-[#2aa251]" : "text-[#ff6a00]"}`}>
              0 d
            </div>
          </div>
        </div>
        {!success && <div className="text-3xl text-slate-300">›</div>}
      </div>
    </div>
  );
}

export function HistoryTable() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#dce2eb] bg-white shadow-[0_20px_60px_rgba(96,64,32,0.08)]">
      <div className="grid grid-cols-6 gap-4 border-b border-[#eef1f5] px-6 py-5 text-sm font-black uppercase tracking-[0.04em] text-slate-500">
        <div>Ngay</div>
        <div>Ma don hang</div>
        <div>San pham</div>
        <div>Gia tri don</div>
        <div>Cashback</div>
        <div>Trang thai</div>
      </div>
      <div className="grid min-h-[360px] place-items-center bg-[#fbfcfd] text-center">
        <div>
          <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border-[18px] border-[#f7e8df] text-[#ff6a00]">
            <BagIcon />
          </div>
          <div className="mt-6 text-[2rem] font-black tracking-[-0.04em] text-slate-800">
            Bat dau nhan hoan tien ngay!
          </div>
          <p className="mt-3 max-w-xl text-lg leading-8 text-slate-500">
            Tao link affiliate, mua sam va nhan cashback cho moi don hang thanh cong.
          </p>
        </div>
      </div>
    </div>
  );
}
