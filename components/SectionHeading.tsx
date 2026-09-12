"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  subtitle,
  title,
  description,
  light = false,
}: {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center"
    >
      <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-gold">
        {subtitle}
      </span>
      <h2
        className={`font-serif text-3xl font-bold sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-maroon"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-sm leading-relaxed ${
            light ? "text-white/70" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
