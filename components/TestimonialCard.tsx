"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  eventType: string;
  review: string;
  rating: number;
  index: number;
}

export default function TestimonialCard({
  name,
  eventType,
  review,
  rating,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="relative rounded-2xl border border-gold/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Quote mark */}
      <div className="absolute right-6 top-4 font-serif text-6xl leading-none text-gold/10">
        &ldquo;
      </div>

      {/* Stars */}
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${i < rating ? "text-gold" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="relative mb-6 text-sm leading-relaxed text-gray-600 italic">
        &ldquo;{review}&rdquo;
      </p>

      <div className="border-t border-gray-100 pt-4">
        <p className="font-serif font-semibold text-maroon">{name}</p>
        <p className="text-xs text-gold">{eventType}</p>
      </div>
    </motion.div>
  );
}
