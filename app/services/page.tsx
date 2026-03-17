import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { images, services } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive event management services — wedding planning, corporate events, product launches, education events, and festival management.",
};

const detailedServices = [
  {
    ...services[0],
    longDescription:
      "We offer end-to-end wedding Planning Services designed to Create a Flawless and Unforgettable experience. from Selecting the Perfect Venue To Curating exquisite Decor, Fine catering, entertainment and guest Coordination every detail is Throught fullly managed. Our dedicated team Collaborates with you to Transform your vision into a beautifully executed Celebration.",
    features: [
      "Venue Selection & Premium setup",
      "Gourmet catering & curated menus",
      "Luxury photography & Videography",
      "live Entertainment & music",
      "personalised guest Management",
      "Designer Invitation suites",
    ],
    image: images.wedding1,
  },
  {
    ...services[1],
    longDescription:
      "Our Corporate event are designed to reflect professionalism, Irmovation and brand experience, from confernce and Product launches to awards Ceremonies and tecum, building experiences i que curate and execute events that leave a lasting Imppression while staying True To your brand Identitur",
    features: [
      "End-To-End Conference management",
      "Strategic Product launches",
      "Elegant Awards ceremonies",
      "Engiging team-building Experiences",
      "Exhibition & Stall Design",
      "Advance Av & Technical solution",
    ],
    image: images.corporate1,
  },
  {
    ...services[2],
    longDescription:
      "Launch your products with maximum impact! We create buzz and excitement through innovative presentations, live demonstrations, interactive booths, and memorable brand experiences that captivate your target audience and generate lasting impressions.",
    features: [
      "Venue Selection & Setup",
      "Product Display Design",
      "Live Demonstrations",
      "Media & Press Management",
      "Guest Experience",
      "Post-Launch Analytics",
    ],
    image: images.birthday1,
  },
  {
    ...services[3],
    longDescription:
      "An engagement is the beautiful beginning of a new chapter. We create intimate yet grand ceremonies that celebrate your love story with elegance, traditional charm, and modern sophistication. Every detail is curated to make your ring ceremony truly special.",
    features: [
      "Ceremony Design",
      "Floral Arrangements",
      "Ring Ceremony Setup",
      "Traditional Rituals",
      "Photography & Video",
      "Guest Hospitality",
    ],
    image: images.engagement1,
  },
  {
    ...services[4],
    longDescription:
      "Our educational events are Thoughtfully designed To Inspire learning, encourage engagement and promote Professional growth. From seminars, and workshops To large-Scale Conferences and Training Programs We ensure Seamless execution and enriching enxperiences That drive knowledge sharing.",
    features: [
      "Premium venue Selection",
      "Professional speaker Management",
      "State-Of-The-Art Audio/Visval setup",
      "Immersive Interactive workshops",
      "Accredited certification Programs",
      "Curated Networking Experiences",
    ],
    image: images.wedding2,
  },
  {
    ...services[5],
    longDescription:
      "Bring communities together with spectacular festivals! Our comprehensive festival management covers everything from large-scale setup and vibrant decorations to entertainment coordination, crowd management, and safety measures. We create unforgettable celebration experiences.",
    features: [
      "Festival Planning & Design",
      "Entertainment Coordination",
      "Vendor/Stall Management",
      "Crowd Management",
      "Safety & Security Setup",
      "Post-Festival Cleanup",
    ],
    image: images.decoration1,
  },
];

function ServiceIcon({ type }: { type: string }) {
  const cls = "h-8 w-8";
  switch (type) {
    case "rings":
      return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
    case "briefcase":
      return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
    case "cake":
      return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>;
    case "heart":
      return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
    case "plane":
      return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>;
    case "sparkles":
      return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
    default:
      return null;
  }
}

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="What We Offer"
        image={images.services}
      />

      <section className="section-padding bg-beige">
        <div className="container-custom mx-auto">
          <SectionHeading
            subtitle="Comprehensive Solutions"
            title="Event Services"
            description="we provide end-to-end event Management services Thought Fully delivered with creativity, Precision and attention to detail."
          />

          <div className="space-y-20">
            {detailedServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={0.1}>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <ServiceIcon type={service.icon} />
                    </div>
                    <h3 className="mb-4 font-serif text-2xl font-bold text-maroon sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-gray-600">
                      {service.longDescription}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <svg className="h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src={images.stage1}
            alt="Stage setup"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-maroon-dark/85" />
        </div>
        <div className="container-custom relative mx-auto px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="mb-6 font-serif text-3xl font-bold text-white sm:text-4xl">
              Have a Specific Requirement?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/70">
              Every Celebration is Unique get In Touch with us to discuss your needs. and we will create a customized Plan That perfectly reflects your Vision.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25"
            >
              Request a Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
