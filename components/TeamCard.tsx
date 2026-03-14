"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  index: number;
}

export default function TeamCard({ name, role, image, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="group text-center"
    >
      <div className="relative mx-auto mb-4 h-56 w-56 overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="224px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <h3 className="font-serif text-lg font-semibold text-maroon">{name}</h3>
      <p className="text-sm text-gold">{role}</p>
    </motion.div>
  );
}
