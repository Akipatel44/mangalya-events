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
    "Explore our comprehensive event management services — wedding planning, corporate events, birthday parties, destination weddings, and more.",
};

const detailedServices = [
  {
    ...services[0],
    longDescription:
      "Our wedding planning service covers every aspect of your special day. From venue selection and decoration to catering, entertainment, photography, and guest management — we handle it all. Our experienced wedding planners work closely with you to understand your vision and bring it to life with creativity and perfection.",
    features: [
      "Venue Selection & Setup",
      "Catering & Menu Planning",
      "Photography & Videography",
      "Entertainment & Music",
      "Guest Management",
      "Invitation Design",
    ],
    image: images.wedding1,
  },
  {
    ...services[1],
    longDescription:
      "We bring professionalism and creativity to corporate events. Whether it's an annual conference, product launch, awards ceremony, or team-building retreat, our corporate events team ensures flawless execution and memorable experiences that align with your brand values.",
    features: [
      "Conference Management",
      "Product Launches",
      "Awards Ceremonies",
      "Team Building Events",
      "Exhibition Setup",
      "AV & Tech Support",
    ],
    image: images.corporate1,
  },
  {
    ...services[2],
    longDescription:
      "From themed children's parties to milestone celebrations, we create birthday events that are fun, memorable, and perfectly tailored to the guest of honor. Our creative team designs unique experiences that guests of all ages will love.",
    features: [
      "Theme Design & Setup",
      "Entertainment & Games",
      "Custom Cakes & Catering",
      "Balloon & Decor Art",
      "Photo Booth Setup",
      "Return Gift Planning",
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
      "Dream of getting married under the Tuscan sun or on a pristine beach in Goa? Our destination wedding service takes care of every detail — from travel and accommodation to venue décor and local coordination — so you can focus on celebrating your love.",
    features: [
      "Destination Scouting",
      "Travel & Accommodation",
      "Local Coordination",
      "Legal Documentation",
      "Cultural Integration",
      "Multi-day Event Planning",
    ],
    image: images.wedding2,
  },
  {
    ...services[5],
    longDescription:
      "Our stage and decoration team transforms ordinary spaces into extraordinary venues. With an eye for detail and a passion for design, we create stunning visual experiences using flowers, lighting, fabrics, and thematic elements that leave guests in awe.",
    features: [
      "Stage Design & Build",
      "Floral Art Design",
      "Lighting & Effects",
      "Theme Conceptualization",
      "Entrance & Pathway Decor",
      "Table & Chair Styling",
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
            description="We offer a full spectrum of event management services, each delivered with our signature blend of creativity and precision."
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
              Every event is unique. Contact us to discuss your specific needs
              and let us create a customized plan just for you.
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
