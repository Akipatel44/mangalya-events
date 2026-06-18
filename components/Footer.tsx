import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const servicesList = [
  "Wedding Planning",
  "Corporate Events",
  "Birthday Parties",
  "Education Events",
  "Festival Events",
  "Stage & Decoration",
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E]">
      {/* Gold gradient top accent bar */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container-custom mx-auto px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <div className="inline-flex rounded-2xl bg-white px-5 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-shadow hover:shadow-[0_6px_32px_rgba(201,169,112,0.2)]">
                <Image
                  src="/images/Mangalyacolor.png"
                  alt="Mangalya Events"
                  width={800}
                  height={213}
                  className="h-auto w-36 object-contain sm:w-40"
                />
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              We create unforgettable celebrations through exceptional planning, elegant design, and flawless execution, transforming your vision into a truly memorable experience.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5">
              {[
                { name: "facebook", href: "#" },
                { name: "instagram", href: "https://www.instagram.com/mangalya.co?igsh=bXRhb2Jncmw4YWRq" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-white/40 transition-all duration-200 hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-4 w-[2px] rounded-full bg-gold" />
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-gold">
                Quick Links
              </h4>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/50 transition-all duration-200 hover:text-white"
                  >
                    <span className="h-px w-0 rounded-full bg-gold transition-all duration-200 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-4 w-[2px] rounded-full bg-gold" />
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-gold">
                Our Services
              </h4>
            </div>
            <ul className="space-y-3">
              {servicesList.map((service) => (
                <li key={service} className="flex items-center gap-2.5 text-sm text-white/50">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-4 w-[2px] rounded-full bg-gold" />
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-gold">
                Get In Touch
              </h4>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-start gap-3 rounded-xl bg-white/[0.04] px-3.5 py-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-xs leading-relaxed text-white/50">
                  A Block 1020, Sun WestBank, Near Vallabh Sadan, Opp City Gold Cinema, Ashram Road, Ahmedabad - 380009
                </p>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white/[0.04] px-3.5 py-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-xs leading-relaxed text-white/50">
                  +91 9909428973<br />
                  +91 9624519202<br />
                  +91 9265572669
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-3.5 py-3">
                <svg className="h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-xs text-white/50">mangalya.co@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/[0.07] pt-6">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Mangalya Event Management. All rights reserved.
            </p>
            <p className="text-xs text-white/30">Crafted with passion for celebrations</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "facebook":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <path d="M17.5 6.5h.01" />
        </svg>
      );
    default:
      return null;
  }
}
