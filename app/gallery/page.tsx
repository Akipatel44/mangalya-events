import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import { images, galleryImages, galleryCategories } from "@/lib/data";

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
            description="Discover a collection of our finest events, thoughtfully planned and flawlessly executed. Each image reflects our passion for creating memorable celebrations, meaningful moments, and extraordinary experiences."
          />
          <GalleryGrid images={galleryImages} categories={galleryCategories} showFilters />
        </div>
      </section>
    </>
  );
}
