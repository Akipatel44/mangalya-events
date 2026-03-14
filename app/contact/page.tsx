"use client";

import { useState } from "react";
import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import { images } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get In Touch"
        image={images.contact}
      />

      <section className="section-padding bg-beige">
        <div className="container-custom mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <AnimatedSection direction="left">
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                Reach Out
              </span>
              <h2 className="mb-6 font-serif text-3xl font-bold text-maroon sm:text-4xl">
                Let&apos;s Plan Together
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-gray-600">
                Have a vision for your next celebration? We&apos;d love to hear
                about it. Reach out to us and let&apos;s start creating
                something extraordinary together.
              </p>

              <div className="mb-8 space-y-5">
                {[
                  {
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    ),
                    title: "Our Office",
                    detail: "123 Event Street, Andheri West, Mumbai, Maharashtra 400053, India",
                  },
                  {
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    ),
                    title: "Phone",
                    detail: "+91 98765 43210 / +91 98765 43211",
                  },
                  {
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    ),
                    title: "Email",
                    detail: "info@mangalamevents.com",
                  },
                  {
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    ),
                    title: "Working Hours",
                    detail: "Mon - Sat: 10:00 AM - 7:00 PM",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-maroon">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <p className="mb-3 text-sm font-medium text-gray-700">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {["Facebook", "Instagram", "Twitter", "YouTube"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="rounded-full bg-gold/10 px-4 py-2 text-xs font-medium text-gold transition-all hover:bg-gold hover:text-white"
                      >
                        {social}
                      </a>
                    )
                  )}
                </div>
              </div>
            </AnimatedSection>

            {/* Contact form */}
            <AnimatedSection direction="right">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mangalya Event Management Location"
        />
      </section>
    </>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full items-center justify-center rounded-2xl bg-white p-10 shadow-sm">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="mb-2 font-serif text-2xl font-bold text-maroon">
            Thank You!
          </h3>
          <p className="text-sm text-gray-600">
            We&apos;ve received your message and will get back to you within 24
            hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 rounded-full bg-gold px-6 py-2 text-sm font-medium text-white transition-all hover:bg-gold-dark"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-8 shadow-sm md:p-10"
    >
      <h3 className="mb-6 font-serif text-2xl font-bold text-maroon">
        Send Us a Message
      </h3>

      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="event-type"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            Event Type
          </label>
          <select
            id="event-type"
            required
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
          >
            <option value="">Select event type</option>
            <option>Wedding</option>
            <option>Corporate Event</option>
            <option>Birthday Party</option>
            <option>Engagement Ceremony</option>
            <option>Destination Wedding</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="date"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            Preferred Event Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            required
            className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="Tell us about your dream event..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gold py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/25"
      >
        Send Message
      </button>
    </form>
  );
}
