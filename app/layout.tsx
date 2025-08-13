import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Flash USDT Sender - Ultimate Blockchain Platform",
  description:
    "The ultimate blockchain platform for secure, instant transactions across BTC, SOL, BNB, and USDT networks.",
  keywords: "Flash USDT, Blockchain, USDT Sender, Cryptocurrency, Educational Tool, Secure Testing, Multi-Network",
  authors: [{ name: "Flash USDT Sender Team" }],
  openGraph: {
    title: "Flash USDT Sender - Ultimate Blockchain Platform",
    description:
      "Comprehensive blockchain platform, secure testing, and professional learning for cryptocurrency transactions.",
    url: "https://flashusdtsender.xyz",
    siteName: "Flash USDT Sender",
    images: [
      {
        url: "/flash-usdt-sender-banner.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flash USDT Sender - Ultimate Blockchain Platform",
    description:
      "Comprehensive blockchain platform, secure testing, and professional learning for cryptocurrency transactions.",
    images: ["/flash-usdt-sender-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
