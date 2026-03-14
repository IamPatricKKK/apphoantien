import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoantienvui.com",
  description: "Nen tang hoan tien cho mua sam truc tuyen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
