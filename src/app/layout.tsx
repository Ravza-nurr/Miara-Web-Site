// /app/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import App from "@/App";
export const metadata: Metadata = {
  title: {
    default: "MİARA",
    template: "%s | Miara",
  },
  description:
    "Moda, güzellik ve yaşam tarzındaki en son trendleri ve öngörüleri keşfedin. Özenle seçilmiş hikayelerimizle stilinizi yeniden tanımlayın.",
  keywords: ["moda", "güzellik", "yaşam tarzı", "stil", "trend", "burçlar"],
  authors: [{ name: "Miara Editör Ekibi" }],
  creator: "Miara",
  publisher: "Miara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://miara-moda.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://miara-moda.com",
    title: "Miara - Stil ile Zarafetin Buluştuğu Yer",
    description:
      "Moda, güzellik ve yaşam tarzındaki en son trendleri ve öngörüleri keşfedin.",
    siteName: "Miara",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miara - Stil ile Zarafetin Buluştuğu Yer",
    description:
      "Moda, güzellik ve yaşam tarzındaki en son trendleri ve öngörüleri keşfedin.",
    creator: "@miara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="overflow-x-hidden">
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        {/* <main className="flex-grow mt-[20vh]">{children}</main> */}
        <App/>
      </body>
    </html>
  );
}
