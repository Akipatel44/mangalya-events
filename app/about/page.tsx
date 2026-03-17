import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { images } from "@/lib/data";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mangalya Event Management — our story, mission, vision, and why we're the best choice for your events.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Our Story"
        image={images.about}
      />

      {/* Company Story */}
      <section className="section-padding bg-beige">
        <div className="container-custom mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection direction="left">
              <div className="relative">
                <Image
                  src={images.wedding3}
                  alt="Our story"
                  width={600}
                  height={500}
                  className="rounded-2xl object-cover shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gold p-6 text-white shadow-xl md:block">
                  <p className="font-serif text-3xl font-bold">15+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Who We Are
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Crafting Celebrations Since 2010
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  Mangalya Event Management was born from a simple yet powerful
                  belief: every celebration deserves to be extraordinary. Founded
                  in 2010 by Arun Mehta, we started as a small team of
                  passionate event enthusiasts with a vision to transform the
                  event management landscape in India.
                </p>
                <p>
                  Over the past 15 years, we have grown into one of the most
                  trusted names in luxury event management. From intimate
                  gatherings to grand celebrations with thousands of guests, we
                  bring the same level of dedication, creativity, and attention
                  to detail to every event we undertake.
                </p>
                <p>
                  Our journey has been marked by countless smiles, grateful
                  families, and events that have set new benchmarks in elegance
                  and sophistication. Today, we are proud to have organized over
                  500 events across India and abroad.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={0}>
              <div className="rounded-2xl border border-gold/10 bg-beige p-8 md:p-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="mb-3 font-serif text-2xl font-bold text-maroon">
                  Our Vision
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  To be India's most sought-after Event Managment Company For Celebrations -Creating extraordinary That exceed expectations and become cherished lifelong memories. we envision a world where every Special Moment is celebrated with elegance and grandeur.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-gold/10 bg-beige p-8 md:p-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="mb-3 font-serif text-2xl font-bold text-maroon">
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  To deliver Outstanding event experiences driven by Imovation. Precision, and exceptional service, we are dedicated to understanding, our client's Unique Stories and Creating Celebrations That authentically reflect their Personality Culture and vision.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-beige">
        <div className="container-custom mx-auto">
          <SectionHeading
            subtitle="Our Promise"
            title="Why Choose Mangalya"
            description="we Strive beyond excellence to create events That are seamless, Memorable, and a true reflection of you."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                ),
                title: "Premium Quality",
                desc: "Delivering excellence Through Carefully Selected Vendors high-quality Materials and refined event Setups.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
                title: "Timely Execution",
                desc: "Careful planning and expert Management guarantee events That Run Smoothly and punctually.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                ),
                title: "Creative Design",
                desc: "Innovative and personalized design That transform your Vision Into Stunning reality.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                ),
                title: "Experienced Team",
                desc: "Our Team is experienced professionals is committed to crafting Seamless and exceptional celebrations.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl bg-white p-6 text-center transition-shadow hover:shadow-lg">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 font-serif text-lg font-semibold text-maroon">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
