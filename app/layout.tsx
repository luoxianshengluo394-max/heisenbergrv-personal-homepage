import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://heisenbergrv.com"),
  title: "罗罗先生 | Embedded Systems & Edge AI",
  description:
    "罗罗先生的个人主页：嵌入式系统、边缘 AI、MCU 固件、电力电子与硬件项目。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "罗罗先生 | Embedded Systems & Edge AI",
    description: "从电路到代码，把想法做成能运行的系统。",
    type: "website",
    url: "https://heisenbergrv.com",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "罗罗先生的嵌入式系统与边缘 AI 个人主页",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "罗罗先生 | Embedded Systems & Edge AI",
    description: "从电路到代码，把想法做成能运行的系统。",
    images: ["/og.png"],
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
