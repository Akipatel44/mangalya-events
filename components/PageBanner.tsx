"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PageBanner({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-3 inline-block text-xs uppercase tracking-[0.3em] text-gold"
        >
          {subtitle}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60"
        >
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gold">{title}</span>
        </motion.div>
      </div>
    </section>
  );
}
