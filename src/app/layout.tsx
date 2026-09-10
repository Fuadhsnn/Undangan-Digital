import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
  display: "swap",
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://haul-muhammad-hasan.vercel.app"
  ),
  title: "Haul H. Muhammad Hasan bin H. Idi | 12 September 2026",
  description:
    "Undangan Haul Almarhum H. Muhammad Hasan bin H. Idi – Sabtu, 12 September 2026. Dengan memohon rahmat dan ridha Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir.",
  keywords: [
    "Undangan Haul",
    "Haul H. Muhammad Hasan bin H. Idi",
    "Haul Akbar",
    "Undangan Digital Islami",
    "Doa Bersama",
    "Tahlil",
  ],
  authors: [{ name: "Keluarga Besar Almarhum H. Muhammad Hasan bin H. Idi" }],
  openGraph: {
    title: "Haul H. Muhammad Hasan bin H. Idi | 12 September 2026",
    description:
      "Undangan Haul Almarhum H. Muhammad Hasan bin H. Idi – Sabtu, 12 September 2026 di Rumah Almarhum (Jl Abdul Wahab RT03/09 No 21 Sawangan, Depok).",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Undangan Haul Almarhum H. Muhammad Hasan bin H. Idi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haul H. Muhammad Hasan bin H. Idi | 12 September 2026",
    description:
      "Undangan Haul Almarhum H. Muhammad Hasan bin H. Idi – Sabtu, 12 September 2026.",
    images: ["/images/og-image.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${jakarta.variable} ${amiri.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#1E2420] antialiased selection:bg-[#2D4030] selection:text-[#FAF8F5]">
        {children}
      </body>
    </html>
  );
}
