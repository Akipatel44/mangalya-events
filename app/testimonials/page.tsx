import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import AnimatedSection from "@/components/AnimatedSection";
import { images, testimonials } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what our clients say about Mangalya Event Management. Real reviews from real celebrations.",
};

const moreTestimonials = [
  {
    name: "Arjun & Nisha Singh",
    eventType: "Destination Wedding",
    review:
      "Our Goa wedding was like a dream. From the beachside mandap to the sunset reception, every moment was picture-perfect. The Mangalya team coordinated with local vendors seamlessly.",
    rating: 5,
  },
  {
    name: "Dr. Kavita Nair",
    eventType: "Medical Conference",
    review:
      "Organizing a medical conference with 500+ doctors is no small feat. Mangalya handled the registration, AV setup, and networking dinner with absolute professionalism.",
    rating: 5,
  },
  {
    name: "Rohan Malhotra",
    eventType: "Surprise Birthday",
    review:
      "They pulled off an incredible surprise party for my wife's 40th. The secret coordination, the themed decorations, and the emotional video montage — everything was perfect.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner
        title="Testimonials"
        subtitle="Client Love"
        image={images.testimonials}
      />

      {/* Stats bar */}
      <section className="bg-maroon py-10">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { number: "4.9/5", label: "Average Rating" },
              { number: "350+", label: "Happy Clients" },
              { number: "98%", label: "Would Recommend" },
              { number: "500+", label: "Events Completed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-2xl font-bold text-gold sm:text-3xl">
                  {stat.number}
                </p>
                <p className="mt-1 text-xs text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige">
        <div className="container-custom mx-auto">
          <SectionHeading
            subtitle="Real Reviews"
            title="What Our Clients Say"
            description="Every review is a testament to our commitment to creating extraordinary celebrations."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            subtitle="More Reviews"
            title="Client Experiences"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {moreTestimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src={images.wedding3}
            alt="Join our happy clients"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-maroon-dark/85" />
        </div>
        <div className="container-custom relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="mb-6 font-serif text-3xl font-bold text-white sm:text-4xl">
              Join Our Family of Happy Clients
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/70">
              Let us create your success story. Contact us today to start
              planning your unforgettable event.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25"
            >
              Start Planning
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
