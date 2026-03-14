"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-2xl border border-gold/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-gold/10"
    >
      {/* Decorative corner */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/5 transition-all group-hover:scale-150 group-hover:bg-gold/10" />

      <div className="relative">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 text-gold transition-all group-hover:from-gold group-hover:to-gold-dark group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-3 font-serif text-xl font-semibold text-maroon">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
