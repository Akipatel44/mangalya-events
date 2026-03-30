import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mangalya Event Management | Creating Unforgettable Celebrations",
    template: "%s | Mangalya Event Management",
  },
  description:
    "Mangalya Event Management specializes in luxury weddings, corporate events, and celebrations. Creating unforgettable moments with elegance and perfection.",
  keywords: [
    "event management",
    "wedding planning",
    "luxury weddings",
    "corporate events",
    "birthday parties",
    "destination weddings",
    "event decoration",
  ],
  // ✅ Google Verification Added Here
  verification: {
    google: "_Rsa-2EWYbP4oUmNqK1_BmcfDdHiNpSIp9PHxptiqzs",
  },
  openGraph: {
    title: "Mangalya Event Management | Creating Unforgettable Celebrations",
    description:
      "Specializing in luxury weddings, corporate events, and celebrations. Creating unforgettable moments with elegance and perfection.",
    type: "website",
    locale: "en_US",
    siteName: "Mangalya Event Management",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
