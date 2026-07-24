import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://heisenbergrv.com"),
  title: "luoxiansheng | Embedded Systems & Edge AI",
  description:
    "luoxiansheng 的个人主页：Embedded Systems、Edge AI、MCU Firmware、Power Electronics 与 Hardware Systems。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "luoxiansheng | Embedded Systems & Edge AI",
    description:
      "入门级嵌入式开发者，关注 Edge AI、MCU Firmware、Power Electronics 与 Hardware Systems。",
    type: "website",
    url: "https://heisenbergrv.com",
  },
  twitter: {
    card: "summary",
    title: "luoxiansheng | Embedded Systems & Edge AI",
    description:
      "入门级嵌入式开发者，关注 Edge AI、MCU Firmware、Power Electronics 与 Hardware Systems。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
