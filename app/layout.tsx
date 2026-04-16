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
  // ✅ Google Verification Added Here
  verification: {
    google: "_Rsa-2EWYbP4oUmNqK1_BmcfDdHiNpSIp9PHxptiqzs",
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
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
