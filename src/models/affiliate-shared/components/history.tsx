const TRANSACTIONS = [
  { merchant: "Shopee Mall", date: "24 Th10, 2023", amount: "6.000.000đ", cashback: "300.000đ", status: "Đã xác nhận" },
  { merchant: "Agoda Travels", date: "21 Th10, 2023", amount: "21.250.000đ", cashback: "1.062.500đ", status: "Đang chờ" },
  { merchant: "GrabFood", date: "18 Th10, 2023", amount: "1.125.000đ", cashback: "56.250đ", status: "Đã xác nhận" },
  { merchant: "Lazada Electronics", date: "15 Th10, 2023", amount: "27.500.000đ", cashback: "1.375.000đ", status: "Đã hủy" },
] as const;

const WITHDRAWALS = [
  { amount: "3.750.000đ", bank: "Techcombank", date: "12 Th10, 2023", status: "Hoàn thành" },
  { amount: "5.000.000đ", bank: "Vietcombank", date: "28 Th9, 2023", status: "Hoàn thành" },
  { amount: "2.250.000đ", bank: "Momo Wallet", date: "09 Th9, 2023", status: "Đang xử lý" },
] as const;

function statusClasses(status: string) {
  if (status === "Đã xác nhận" || status === "Hoàn thành") {
    return "bg-green-100 text-green-700";
  }

  if (status === "Đang chờ" || status === "Đang xử lý") {
    return "bg-amber-100 text-amber-700";
  }

  return "bg-red-100 text-red-700";
}

export function SummaryBand({ success = false }: { success?: boolean }) {
  if (success) {
    return (
      <div className="rounded-[28px] border border-[#f5cfe2] bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Tổng tiền đã nhận</div>
            <div className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-900">31.250.000đ</div>
            <div className="mt-4 inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
              +12.5% so với tháng trước
            </div>
          </div>
          <div className="rounded-2xl bg-[#fff0f8] p-4 text-[#ff6bb5]">+</div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] bg-[#ff6bb5] p-6 text-white shadow-[0_18px_40px_rgba(255,107,181,0.28)]">
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">Số dư khả dụng</div>
      <div className="mt-3 text-4xl font-black tracking-[-0.04em]">10.500.000đ</div>
      <button className="mt-5 rounded-full bg-white px-5 py-2 text-sm font-bold text-[#ff6bb5] transition hover:bg-[#fff5fa]">
        Rút tiền ngay
      </button>
    </div>
  );
}

export function HistoryTable() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#f5cfe2] bg-white shadow-[0_24px_70px_rgba(161,70,118,0.08)]">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-[#fff0f8] text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
            <tr>
              <th className="px-6 py-4">Thương hiệu</th>
              <th className="px-6 py-4">Ngày</th>
              <th className="px-6 py-4">Số tiền</th>
              <th className="px-6 py-4">Hoàn tiền</th>
              <th className="px-6 py-4">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f8ddea]">
            {TRANSACTIONS.map((item) => (
              <tr key={`${item.merchant}-${item.date}`} className="transition hover:bg-[#fff7fb]">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 text-xs font-black text-slate-600">
                      {item.merchant.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-sm font-semibold text-slate-900">{item.merchant}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">{item.date}</td>
                <td className="px-6 py-4 text-sm text-slate-700">{item.amount}</td>
                <td className="px-6 py-4 text-sm font-bold text-[#ff6bb5]">+{item.cashback}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${statusClasses(item.status)}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-[#f8ddea] bg-[#fffafd] px-6 py-4">
        <p className="text-xs text-slate-500">Hiển thị 4 trên 128 giao dịch</p>
        <div className="flex gap-2">
          <button className="rounded-lg border border-[#f5cfe2] px-3 py-1 text-xs font-bold text-slate-500">Trước</button>
          <button className="rounded-lg bg-[#ff6bb5] px-3 py-1 text-xs font-bold text-white">Tiếp</button>
        </div>
      </div>
    </div>
  );
}

export function WithdrawalCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {WITHDRAWALS.map((item) => (
        <div key={`${item.bank}-${item.date}`} className="rounded-[24px] border border-[#f5cfe2] bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="rounded-xl bg-[#fff0f8] p-3 text-[#ff6bb5]">$</div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{item.date}</div>
          </div>
          <div className="mt-5 text-2xl font-black tracking-[-0.03em] text-slate-900">{item.amount}</div>
          <p className="mt-2 text-sm text-slate-500">Chuyển khoản đến {item.bank}</p>
          <span className={`mt-5 inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${statusClasses(item.status)}`}>
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
}
