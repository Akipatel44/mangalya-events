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
      "Our bespoke wedding planning services are designed to create extraordinary celebrations that are seamless, elegant, and unforgettable. From venue selection and stunning decor to exceptional catering, entertainment, and guest management, every aspect of your wedding is meticulously curated and flawlessly executed. With a passion for perfection and a commitment to excellence, our experienced team collaborates closely with you to transform your vision into a breathtaking celebration that will be cherished for a lifetime.",
    features: [
      "Exclusive Venue Selection & Elegant Event Setup",
      "Gourmet Catering with Curated Culinary Experiences",
      "Luxury Photography & Cinematic Videography",
      "Live Entertainment, Music & Performances",
      "Personalized Guest Management & Hospitality",
      "Bespoke Designer Invitation Suites",
    ],
    image: images.luxuryGardenWeddingSetup,
  },
  {
    ...services[1],
    longDescription:
      "We create impactful corporate events that embody professionalism, innovation, and brand excellence. Whether it's a conference, product launch, award ceremony, or team-building experience, our team delivers seamless execution and strategic event solutions that enhance your brand presence and create meaningful, lasting impressions.",
    features: [
      "Comprehensive Conference Planning & Management",
      "Strategic Product Launches & Brand Activations",
      "Prestigious Award Ceremonies",
      "Interactive Team-Building Experiences",
      "Creative Exhibition & Stall Design",
      "Advanced Audiovisual & Technical Solutions",
    ],
    image: images.corporate1,
  },
  {
    ...services[2],
    longDescription:
      "Elevate your product launch with innovative presentations, engaging live demonstrations, interactive brand experiences, and strategic event execution designed to capture attention, generate excitement, and maximize brand impact.",
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
      "Celebrate the start of your forever with an engagement ceremony designed to reflect your unique love story. Combining timeless traditions, refined elegance, and modern sophistication, we thoughtfully curate every detail to create a memorable and meaningful celebration that you and your guests will cherish for years to come.",
    features: [
      "Ceremony Design",
      "Floral Arrangements",
      "Ring Ceremony Setup",
      "Traditional Rituals",
      "Photography & Video",
      "Guest Hospitality",
    ],
    image: images.marigoldHaldiCeremony,
  },
  {
    ...services[4],
    longDescription:
      "We create impactful educational events that inspire learning, encourage active participation, and support professional development. Whether it's a seminar, workshop, conference, or training program, our team delivers seamlessly organized experiences that promote knowledge exchange, innovation, and continuous growth.",
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
      "We specialize in creating extraordinary festivals that unite communities and celebrate culture. From stunning event setups and captivating entertainment to efficient crowd management and comprehensive safety measures, our expert team ensures every festival is flawlessly executed, delivering memorable experiences for all.",
    features: [
      "Festival Planning & Design",
      "Entertainment Coordination",
      "Vendor/Stall Management",
      "Crowd Management",
      "Safety & Security Setup",
      "Post-Festival Cleanup",
    ],
    image: images.decoration2,
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
            description="We provide end-to-end event management services, thoughtfully delivered with creativity, precision, and meticulous attention to detail."
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
              Every event is unique, and so is our approach. Connect with us to discuss your vision, and we'll design a personalized plan tailored to your needs, ensuring a seamless and unforgettable celebration.
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
