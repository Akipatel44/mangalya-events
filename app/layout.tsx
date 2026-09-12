import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mangalya Event Management | Wedding Planner in Ahmedabad, Gujarat",
    template: "%s | Mangalya Event Management Ahmedabad",
  },
  description:
    "Mangalya Event Management is a leading wedding and event planner in Ahmedabad, Gujarat. We specialize in luxury weddings, corporate events, and unforgettable celebrations.",
  keywords: [
    "event management Ahmedabad",
    "wedding planner Ahmedabad",
    "event planner Gujarat",
    "luxury weddings Ahmedabad",
    "corporate events Ahmedabad",
    "birthday party planner Ahmedabad",
    "destination weddings Gujarat",
  ],
  metadataBase: new URL('https://mangalya-events.vercel.app'),

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },

  verification: {
    google: "_Rsa-2EWYbP4oUmNqK1_BmcfDdHiNpSIp9PHxptiqzs",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Mangalya Event Management | Ahmedabad, Gujarat",
    description:
      "Top event management company in Ahmedabad, Gujarat specializing in weddings and corporate events.",
    type: "website",
    locale: "en_IN",
    siteName: "Mangalya Event Management",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-beige">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
