"use client";

import { APP_ROUTES } from "@/config/app-routes";
import { AppShell } from "@/models/shared/components/app-shell";

export function ProfilePage() {
  return (
    <AppShell currentPath={APP_ROUTES.profile} onOpenConfig={() => {}}>
      <div className="mx-auto flex max-w-[960px] flex-col">
        <div className="mb-6 flex flex-col items-center gap-6 rounded-xl border border-[#f7dce9] bg-white p-6 shadow-sm md:flex-row md:items-start">
          <div className="relative h-32 w-32 rounded-full border-4 border-[#ffd7ea] bg-[linear-gradient(135deg,#ffd7ea,#fff7fb)]" />
          <div className="flex flex-1 flex-col items-center gap-2 text-center md:items-start md:text-left">
            <div>
              <h1 className="text-2xl font-bold leading-tight text-slate-900">Hoang Nguyen</h1>
              <p className="text-base text-slate-500">hoang.nguyen@example.com</p>
            </div>
            <div className="mt-2 flex gap-3">
              <button className="flex h-10 min-w-[120px] items-center justify-center rounded-lg bg-[#ff6bb5] px-4 text-sm font-bold text-white">
                Chỉnh sửa hồ sơ
              </button>
              <button className="flex h-10 min-w-[120px] items-center justify-center rounded-lg bg-[#ffe5f2] px-4 text-sm font-bold text-[#ff6bb5]">
                Chia sẻ hồ sơ
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            ["150k", "Hoàn tiền (VNĐ)"],
            ["12", "Tổng đơn hàng"],
            ["4.8", "Đánh giá người mua"],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col items-center rounded-xl border border-[#f7dce9] bg-white p-5 text-center shadow-sm">
              <div className="mb-1 rounded-full bg-[#fff0f8] p-2 text-[#ff6bb5]">•</div>
              <p className="text-2xl font-bold leading-tight text-[#ff6bb5]">{value}</p>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        <div className="mb-6 flex gap-8 overflow-x-auto whitespace-nowrap border-b border-[#f7dce9] px-2">
          {["Bảng điều khiển", "Ví của bạn", "Đơn hàng", "Hồ sơ người dùng"].map((tab, index) => (
            <div
              key={tab}
              className={`flex items-center gap-2 border-b-2 px-1 pb-3 pt-4 text-sm font-bold ${
                index === 3 ? "border-[#ff6bb5] text-[#ff6bb5]" : "border-transparent text-slate-500"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[#f7dce9] bg-white p-6 shadow-sm">
          <h3 className="mb-6 text-lg font-bold text-slate-900">Cài đặt tài khoản</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                ["Họ và tên", "Hoang Nguyen"],
                ["Địa chỉ Email", "hoang.nguyen@example.com"],
                ["Số điện thoại", "+84 901 234 567"],
                ["Ngôn ngữ", "Tiếng Việt"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">{label}</label>
                  <input
                    className="w-full rounded-lg border border-[#f7dce9] bg-[#f8f5f7] px-4 py-3 text-slate-900 outline-none focus:border-[#ff6bb5]"
                    defaultValue={value}
                  />
                </div>
              ))}
            </div>

            <hr className="border-[#f7dce9]" />

            <div className="space-y-4">
              <h4 className="text-md font-bold text-slate-900">Tùy chỉnh thông báo</h4>
              {[
                ["Thông báo qua Email", "Nhận cập nhật về tình trạng hoàn tiền của bạn", true],
                ["Thông báo đẩy", "Nhận cảnh báo tức thì từ ứng dụng", false],
              ].map(([title, description, enabled]) => (
                <div key={title} className="flex items-center justify-between rounded-lg border border-[#f7dce9] bg-[#fff7fb] p-3">
                  <div>
                    <p className="text-sm font-bold">{title}</p>
                    <p className="text-xs text-slate-500">{description}</p>
                  </div>
                  <div className={`h-6 w-11 rounded-full ${enabled ? "bg-[#ff6bb5]" : "bg-slate-300"}`} />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 border-t border-[#f7dce9] pt-6">
              <button className="px-5 py-2 text-sm font-bold text-slate-600">Hủy bỏ</button>
              <button className="rounded-lg bg-[#ff6bb5] px-6 py-2 text-sm font-bold text-white">Lưu thay đổi</button>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-red-200/50 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-4">
            <div className="rounded-lg bg-red-100 p-2 text-red-500">!</div>
            <div>
              <h4 className="font-bold text-slate-900">Xóa tài khoản</h4>
              <p className="text-xs text-slate-500">Vĩnh viễn xóa tài khoản và tất cả dữ liệu liên quan của bạn</p>
            </div>
          </div>
          <button className="w-full rounded-lg border border-red-500 px-6 py-2 text-sm font-bold text-red-500 md:w-auto">
            Vô hiệu hóa tài khoản
          </button>
        </div>
      </div>
    </AppShell>
  );
}
