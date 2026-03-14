"use client";

import Link from "next/link";
import { useState } from "react";
import { APP_ROUTES } from "@/config/app-routes";
import { AuthShell } from "@/models/shared/components/app-shell";

type AuthTab = "signin" | "signup";

export function LoginPage() {
  const [activeTab, setActiveTab] = useState<AuthTab>("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  return (
    <AuthShell>
      <main className="flex flex-1 items-center justify-center p-4 md:p-10">
        <div className="grid w-full max-w-[1100px] grid-cols-1 overflow-hidden rounded-[32px] bg-white shadow-[0_32px_90px_rgba(120,54,88,0.08)] lg:grid-cols-2">
          <section className="relative hidden min-h-[720px] flex-col justify-between bg-[#ff6bb5] p-12 lg:flex">
            <div className="relative z-10 max-w-md">
              <h1 className="text-6xl font-black leading-[1.08] tracking-[-0.05em] text-white">
                Nhận tiền hoàn lại trên mọi giao dịch.
              </h1>
              <p className="mt-8 text-[28px] leading-relaxed text-white/88">
                Tham gia cùng hơn 1 triệu người mua sắm thông thái tiết kiệm tiền mỗi ngày với Hoantienvui.
              </p>
            </div>

            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white blur-3xl" />
            </div>

            <div className="relative z-10 max-w-md rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white">
                  <QuoteIcon />
                </div>
                <div>
                  <p className="text-sm font-bold leading-6 text-white">&quot;Nền tảng hoàn tiền nhanh nhất khu vực. Rất đáng dùng!&quot;</p>
                  <p className="mt-1 text-xs text-white/70">Sarah J., Thành viên Vàng</p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col justify-center p-8 md:p-16">
            <div className="mb-10">
              <h2 className="mb-2 text-3xl font-black tracking-[-0.04em] text-slate-900">
                {activeTab === "signin" ? "Chào mừng quay trở lại" : "Tạo tài khoản mới"}
              </h2>
              <p className="text-slate-500">
                {activeTab === "signin"
                  ? "Vui lòng nhập thông tin để đăng nhập vào tài khoản của bạn"
                  : "Điền thông tin bên dưới để bắt đầu nhận hoàn tiền cùng Hoantienvui"}
              </p>
            </div>

            <div className="mb-8 flex border-b border-slate-100">
              <button
                type="button"
                onClick={() => setActiveTab("signin")}
                className={`flex-1 border-b-2 pb-4 text-sm font-bold transition ${
                  activeTab === "signin" ? "border-[#ff6bb5] text-[#ff6bb5]" : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                Đăng nhập
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("signup")}
                className={`flex-1 border-b-2 pb-4 text-sm font-bold transition ${
                  activeTab === "signup" ? "border-[#ff6bb5] text-[#ff6bb5]" : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                Đăng ký
              </button>
            </div>

            {activeTab === "signin" ? (
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-semibold text-slate-700">Email</label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <MailIcon />
                    </span>
                    <input
                      className="w-full rounded-xl bg-slate-50 py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:ring-2 focus:ring-[#ff6bb5]"
                      placeholder="name@example.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="ml-1 flex items-center justify-between">
                    <label className="text-sm font-semibold text-slate-700">Mật khẩu</label>
                    <button className="text-xs font-bold text-[#ff6bb5]" type="button">
                      Quên mật khẩu?
                    </button>
                  </div>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <LockIcon />
                    </span>
                    <input
                      className="w-full rounded-xl bg-slate-50 py-4 pl-12 pr-12 text-slate-900 outline-none transition focus:ring-2 focus:ring-[#ff6bb5]"
                      placeholder="••••••••"
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
                    >
                      <EyeIcon visible={showPassword} />
                    </button>
                  </div>
                </div>

                <label className="ml-1 flex items-center gap-3 text-sm text-slate-600">
                  <input className="size-5 rounded border-slate-300 text-[#ff6bb5] focus:ring-[#ff6bb5]" type="checkbox" />
                  Ghi nhớ đăng nhập trong 30 ngày
                </label>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff6bb5] py-4 font-bold text-white shadow-lg shadow-[#ff6bb5]/20 transition hover:bg-[#f254a8]">
                  Đăng nhập
                  <ArrowRightIcon />
                </button>
              </form>
            ) : (
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-semibold text-slate-700">Họ và tên</label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <UserIcon />
                    </span>
                    <input
                      className="w-full rounded-xl bg-slate-50 py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:ring-2 focus:ring-[#ff6bb5]"
                      placeholder="Nguyen Van A"
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-sm font-semibold text-slate-700">Email</label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <MailIcon />
                    </span>
                    <input
                      className="w-full rounded-xl bg-slate-50 py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:ring-2 focus:ring-[#ff6bb5]"
                      placeholder="name@example.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-sm font-semibold text-slate-700">Mật khẩu</label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <LockIcon />
                    </span>
                    <input
                      className="w-full rounded-xl bg-slate-50 py-4 pl-12 pr-12 text-slate-900 outline-none transition focus:ring-2 focus:ring-[#ff6bb5]"
                      placeholder="Tối thiểu 8 ký tự"
                      type={showSignupPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowSignupPassword((value) => !value)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
                    >
                      <EyeIcon visible={showSignupPassword} />
                    </button>
                  </div>
                </div>

                <label className="ml-1 flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <input className="mt-1 size-5 rounded border-slate-300 text-[#ff6bb5] focus:ring-[#ff6bb5]" type="checkbox" />
                  Tôi đồng ý với điều khoản dịch vụ và chính sách bảo mật của Hoantienvui.
                </label>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff6bb5] py-4 font-bold text-white shadow-lg shadow-[#ff6bb5]/20 transition hover:bg-[#f254a8]">
                  Tạo tài khoản
                  <ArrowRightIcon />
                </button>
              </form>
            )}

            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 font-medium tracking-[0.18em] text-slate-400">Hoặc tiếp tục với</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
                <GoogleIcon />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
                <FacebookIcon />
                Facebook
              </button>
            </div>

            <p className="mt-10 text-center text-sm text-slate-500">
              {activeTab === "signin" ? "Chưa có tài khoản? " : "Đã có tài khoản? "}
              <button
                type="button"
                onClick={() => setActiveTab(activeTab === "signin" ? "signup" : "signin")}
                className="font-bold text-[#ff6bb5] hover:underline"
              >
                {activeTab === "signin" ? "Đăng ký ngay" : "Đăng nhập"}
              </button>
            </p>
          </section>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:px-20">
        <div className="flex flex-wrap justify-center gap-6">
          <Link className="transition-colors hover:text-[#ff6bb5]" href={APP_ROUTES.home}>
            Chính sách bảo mật
          </Link>
          <Link className="transition-colors hover:text-[#ff6bb5]" href={APP_ROUTES.home}>
            Điều khoản dịch vụ
          </Link>
          <Link className="transition-colors hover:text-[#ff6bb5]" href={APP_ROUTES.home}>
            Liên hệ
          </Link>
        </div>
        <p>© 2024 Hoantienvui.com. Bảo lưu mọi quyền.</p>
      </footer>
    </AuthShell>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M10 7H6.5C5.1 7 4 8.1 4 9.5V13c0 1.1.9 2 2 2h1.2c-.5 1.5-1.6 2.8-3.2 3.8l1 1.7c3.7-1.8 5.7-5 5.7-9.2V9.5C10.7 8.1 11.8 7 13.2 7H10zM20 7h-3.5C15.1 7 14 8.1 14 9.5V13c0 1.1.9 2 2 2h1.2c-.5 1.5-1.6 2.8-3.2 3.8l1 1.7c3.7-1.8 5.7-5 5.7-9.2V9.5C20.7 8.1 21.8 7 23.2 7H20z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16v12H4z" />
      <path d="M4 8l8 6l8-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

function EyeIcon({ visible }: { visible: boolean }) {
  return visible ? (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12s3.5-6 9-6s9 6 9 6s-3.5 6-9 6s-9-6-9-6z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4l16 16" />
      <path d="M10.6 10.7a2.5 2.5 0 0 0 3 3" />
      <path d="M9.4 5.5A9.8 9.8 0 0 1 12 5c5.5 0 9 7 9 7a16.2 16.2 0 0 1-3.2 3.8" />
      <path d="M6.2 7.2C4.2 8.8 3 12 3 12s3.5 7 9 7c1 0 1.9-.2 2.8-.5" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="M13 6l6 6l-6 6" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.5 3.8-5.5 3.8a6.1 6.1 0 1 1 0-12.2c2.3 0 3.9 1 4.8 1.8l3.2-3.1A10.8 10.8 0 1 0 12 22c6.2 0 10.3-4.3 10.3-10.4c0-.7-.1-1.1-.2-1.5z" />
      <path fill="#34A853" d="M3.9 14.8l3.2-2.5a6 6 0 0 0 0-4.1L4 5.7A10 10 0 0 0 2 12c0 1 .2 2 .5 2.8z" />
      <path fill="#4A90E2" d="M12 22c2.9 0 5.3-.9 7-2.6l-3.4-2.7c-.9.6-2.1 1.1-3.6 1.1c-2.8 0-5.2-1.9-6.1-4.5l-3.3 2.5A10 10 0 0 0 12 22z" />
      <path fill="#FBBC05" d="M3.9 9.2A10 10 0 0 1 12 2c2.8 0 5.2 1 7.1 2.7l-3.2 3.1C15 7 13.8 6.5 12 6.5c-2.8 0-5.2 1.9-6.1 4.5z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#1877F2" aria-hidden="true">
      <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1c0 6 4.4 11 10.1 11.9v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7c1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.2h3.3l-.5 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z" />
    </svg>
  );
}
