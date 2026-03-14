"use client";

import Link from "next/link";
import { APP_ROUTES } from "@/config/app-routes";
import { MarketingShell } from "@/models/shared/components/app-shell";

const FAQS = [
  {
    question: "Mất bao lâu để nhận được tiền hoàn?",
    answer:
      "Hầu hết các cửa hàng sẽ ghi nhận đơn hàng trong vòng 2-48 giờ. Sau khi cửa hàng xác minh giao dịch, tiền hoàn sẽ chuyển sang trạng thái có thể rút.",
  },
  {
    question: "Sử dụng có thực sự miễn phí không?",
    answer: "Vâng, hoàn toàn miễn phí. Chúng tôi chia sẻ phần lớn hoa hồng từ cửa hàng lại cho bạn dưới dạng tiền hoàn.",
  },
  {
    question: "Tại sao đơn hàng của tôi không được ghi nhận?",
    answer: "Điều này thường xảy ra khi cookie bị tắt, ad blocker hoạt động hoặc bạn truy cập một nguồn giảm giá khác sau khi bấm link.",
  },
  {
    question: "Số tiền rút tối thiểu là bao nhiêu?",
    answer: "Bạn có thể rút tiền khi có ít nhất 50.000 VNĐ trong số dư có thể rút.",
  },
] as const;

export function HowItWorksPage() {
  return (
    <MarketingShell currentPath={APP_ROUTES.howItWorks} onOpenConfig={() => {}}>
      <main className="flex flex-1 justify-center px-4 py-10 md:px-0">
        <div className="flex w-full max-w-[960px] flex-col">
          <div className="overflow-hidden rounded-xl bg-white">
            <div className="flex min-h-[320px] flex-col items-center justify-center bg-[linear-gradient(rgba(255,107,181,0.4),rgba(35,15,25,0.8))] px-8 text-center">
              <h1 className="mb-4 text-4xl font-black leading-tight text-white md:text-5xl">Hoantienvui hoạt động như thế nào</h1>
              <p className="text-lg font-medium text-white/90">
                Nhận tiền hoàn thật trên mỗi giao dịch. Không tích điểm, không chiêu trò, chỉ có tiền mặt chảy về ví của bạn.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-[#f7dce9] bg-white p-8 shadow-sm">
            <h2 className="pb-8 text-[28px] font-extrabold leading-tight tracking-tight">Nhận tiền hoàn với 3 bước đơn giản</h2>
            <div className="grid grid-cols-[48px_1fr] gap-x-6">
              {[
                ["1. Mua sắm qua liên kết của chúng tôi", "Chọn từ hơn 500+ cửa hàng yêu thích của bạn bao gồm Shopee, Lazada và Tiki."],
                ["2. Hoàn tất mua hàng", "Mua sắm như bình thường và chúng tôi sẽ tự động theo dõi đơn hàng cho bạn."],
                ["3. Nhận tiền hoàn nhanh chóng", "Sau khi cửa hàng xác nhận giao dịch, tiền hoàn sẽ được cộng vào tài khoản của bạn."],
              ].map(([title, description], index) => (
                <div key={title} className="contents">
                  <div className="flex flex-col items-center gap-1 pt-1">
                    <div
                      className={`flex size-12 items-center justify-center rounded-full ${
                        index === 2 ? "bg-[#ff6bb5] text-white shadow-lg shadow-[#ff6bb5]/30" : "bg-[#fff0f8] text-[#ff6bb5]"
                      }`}
                    >
                      {index + 1}
                    </div>
                    {index !== 2 && <div className="h-16 w-[2px] grow bg-[#ffd3e9]" />}
                  </div>
                  <div className={`flex flex-1 flex-col py-2 ${index !== 2 ? "mb-6" : ""}`}>
                    <h3 className="text-xl font-bold leading-normal text-[#ff6bb5]">{title}</h3>
                    <p className="text-base leading-relaxed text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="mb-20 mt-12">
            <h2 className="px-4 pb-8 text-[28px] font-extrabold leading-tight tracking-tight">Câu hỏi thường gặp</h2>
            <div className="flex flex-col gap-4 px-4">
              {FAQS.map((faq) => (
                <div key={faq.question} className="overflow-hidden rounded-xl border border-[#f7dce9] bg-white transition-all hover:border-[#ff6bb5]/30">
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-slate-800">{faq.question}</h4>
                    <div className="pt-4 leading-relaxed text-slate-600">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mb-10 rounded-2xl bg-[#ff6bb5] p-10 text-center shadow-2xl shadow-[#ff6bb5]/20">
            <h2 className="mb-4 text-3xl font-black text-white">Sẵn sàng để bắt đầu tiết kiệm?</h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-white/90">
              Tham gia cùng hơn 50.000 người mua sắm đang nhận tiền khi mua sắm trực tuyến.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#ff6bb5]" href={APP_ROUTES.login}>
                Tạo tài khoản miễn phí
              </Link>
              <Link className="rounded-xl border-2 border-white/40 bg-[#ff8bc7] px-8 py-4 text-lg font-bold text-white" href={APP_ROUTES.home}>
                Xem các cửa hàng
              </Link>
            </div>
          </div>
        </div>
      </main>
    </MarketingShell>
  );
}
