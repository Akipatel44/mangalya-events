import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/EventCard";
import AnimatedSection from "@/components/AnimatedSection";
import { images, eventsList } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover the memorable events organized by Mangalya Event Management — weddings, corporate conferences, birthday celebrations, and more.",
};

const moreEvents = [
  {
    image: images.kankotriLekhan,
    title: "Kankotri Lekhan Ceremony",
    description:
      "A beautifully curated kankotri lekhan ceremony honoring tradition with elegant decor, ritual arrangements, and family-centered moments.",
    date: "Aug 20, 2025",
  },
  {
    image: images.corporate3,
    title: "StartupFest Networking Gala",
    description:
      "An evening of innovation and connection, featuring pitch sessions, panel discussions, and a gourmet dinner for 800 entrepreneurs.",
    date: "Jul 15, 2025",
  },
  {
    image: images.religiousEventShreenathji,
    title: "Shreenathji Theme Religious Event",
    description:
      "A devotional event inspired by Shreenathji aesthetics featuring thematic decor, spiritual performances, and graceful ceremonial flow.",
    date: "Jun 8, 2025",
  },
  {
    image: images.engagementCeremony,
    title: "Engagement Celebration",
    description:
      "A modern engagement celebration with personalized styling, floral detailing, and warm guest experiences.",
    date: "May 22, 2025",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageBanner
        title="Events"
        subtitle="Recent Celebrations"
        image={images.events}
      />

      <section className="section-padding bg-beige">
        <div className="container-custom mx-auto">
          <SectionHeading
            subtitle="Our Work"
            title="Featured Events"
            description="A showcase of our most memorable celebrations that exemplify our commitment to excellence and creativity."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {eventsList.map((event, i) => (
              <EventCard key={event.title} {...event} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            subtitle="More Celebrations"
            title="Past Events"
            description="Every event we organize adds a new chapter to our story of creating joy and unforgettable experiences."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {moreEvents.map((event, i) => (
              <EventCard key={event.title} {...event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src={images.religiousEventShreenathji}
            alt="Events"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-maroon-dark/85" />
        </div>
        <div className="container-custom relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="mb-6 font-serif text-3xl font-bold text-white sm:text-4xl">
              Want Your Event Featured Here?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/70">
              Let us create your next unforgettable celebration. From concept to
              execution, we handle everything.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25"
            >
              Plan Your Event
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
