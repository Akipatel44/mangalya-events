import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import { images, galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our stunning portfolio of weddings, corporate events, birthdays, and engagement ceremonies organized by Mangalya Event Management.",
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        subtitle="Our Portfolio"
        image={images.gallery}
      />

      <section className="section-padding bg-beige">
        <div className="container-custom mx-auto">
          <SectionHeading
            subtitle="Browse Our Work"
            title="Event Gallery"
            description="Explore our portfolio of beautifully organized events. Each photo tells a story of celebration, love, and meticulous attention to detail."
          />
          <GalleryGrid images={galleryImages} showFilters />
        </div>
      </section>
    </>
  );
}
