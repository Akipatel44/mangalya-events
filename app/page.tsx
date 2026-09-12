import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import GalleryGrid from "@/components/GalleryGrid";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import Image from "next/image";
import {
  services,
  galleryImages,
  images,
  heroSliderImages,
} from "@/lib/data";

function ServiceIcon({ type }: { type: string }) {
  const cls = "h-6 w-6";
  switch (type) {
    case "rings":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      );
    case "briefcase":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      );
    case "cake":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
      );
    case "heart":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      );
    case "plane":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
      );
    case "sparkles":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
      );
    default:
      return null;
  }
}

export default function Homepage() {
  const homeGalleryImages = [
    {
      src: images.engagementCeremony,
      alt: "Engagement Ceremony Setup",
      category: "Engagements",
    },
    {
      src: images.kankotriLekhan,
      alt: "Kankotri Lekhan Ceremony",
      category: "Cultural",
    },
    {
      src: images.religiousEventShreenathji,
      alt: "Shreenathji Theme Religious Event",
      category: "Religious",
    },
    {
      src: images.entryDecoration,
      alt: "Grand Entry Decoration",
      category: "Decorations",
    },
    {
      src: images.dharmikEvent,
      alt: "Dharmik Event Celebration",
      category: "Religious",
    },
    {
      src: images.littleBirthdayBaby,
      alt: "Little Baby Birthday Celebration",
      category: "Birthdays",
    },
    {
      src: images.panamGroupBusiness,
      alt: "Panam Group Business Event",
      category: "Corporate",
    },
    {
      src: images.concertEvents,
      alt: "Live Concert Events",
      category: "Concerts",
    },
    {
      src: images.rkGroupBusiness,
      alt: "RK Group Business Event",
      category: "Corporate",
    },
    {
      src: images.concertDholBeats,
      alt: "Dhol Beats Concert Performance",
      category: "Concerts",
    },
    {
      src: images.concertImage2,
      alt: "Concert Performance Stage",
      category: "Concerts",
    },
    {
      src: images.wedding1,
      alt: "Royal Wedding Ceremony",
      category: "Weddings",
    },
    {
      src: images.corporate1,
      alt: "Corporate Conference",
      category: "Corporate",
    },
  ];

  return (
    <>
      {/* Image Slider */}
      <ImageSlider images={heroSliderImages} />

      {/* Services */}
      <section className="section-padding bg-beige">
        <div className="container-custom mx-auto">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Services"
            description="From intimate gatherings to grand celebrations, we bring your vision to life with creativity, precision, and meticulous attention to every detail."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard
                key={service.title}
                icon={<ServiceIcon type={service.icon} />}
                title={service.title}
                description={service.description}
                index={i}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border-2 border-gold px-8 py-3 text-sm font-semibold uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-white"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            subtitle="Our Portfolio"
            title="Event Gallery"
            description="Explore our portfolio of beautifully crafted celebrations and extraordinary events, each thoughtfully designed and flawlessly executed to create lasting memories."
          />
          <GalleryGrid images={homeGalleryImages} />
          <div className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-block rounded-full border-2 border-gold px-8 py-3 text-sm font-semibold uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-white"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src={images.entryDecoration}
            alt="CTA Background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-maroon-dark/85" />
        </div>
        <div className="container-custom relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-gold">
              Let&apos;s Create Magic Together
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready to Plan Your Dream Event?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/70">
              Whether a grand wedding a corporate gala, or Intimate gathering Our team ensure your vision Is brought to life with elegance and precision.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
