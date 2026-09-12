"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  index: number;
}

export default function EventCard({
  image,
  title,
  description,
  date,
  index,
}: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-white">
          {date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-serif text-xl font-semibold text-maroon">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
