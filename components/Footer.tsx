import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Wedding Planning",
  "Corporate Events",
  "Birthday Parties",
  "Engagement Ceremonies",
  "Destination Weddings",
  "Stage & Decoration",
];

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-white">
      <div className="container-custom mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold">
                <span className="font-serif text-lg font-bold text-white">
                  M
                </span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">
                  Mangalya
                </h3>
                <p className="-mt-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                  Events
                </p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Creating unforgettable celebrations with elegance, precision, and
              passion. Your dream event is our commitment.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {["facebook", "instagram", "twitter", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-gold hover:text-white"
                >
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-gold">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold text-gold">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <p className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                123 Event Street, Mumbai, Maharashtra, India - 400001
              </p>
              <p className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@mangalamevents.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom mx-auto flex flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Mangalya Event Management. All rights reserved.</p>
          <p>Crafted with passion for celebrations</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "facebook":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
      );
    case "instagram":
      return (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><path d="M17.5 6.5h.01" /></svg>
      );
    case "twitter":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
      );
    case "youtube":
      return (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
      );
    default:
      return null;
  }
}
