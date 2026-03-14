"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  showFilters?: boolean;
}

export default function GalleryGrid({
  images,
  showFilters = false,
}: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null
  );

  const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];

  const filtered =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <>
      {showFilters && (
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === cat
                  ? "bg-gold text-white shadow-lg shadow-gold/25"
                  : "bg-white text-gray-600 hover:bg-gold/10 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((image, i) => (
          <motion.div
            key={`${image.src}-${activeFilter}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-xl"
            onClick={() => setLightbox({ src: image.src, alt: image.alt })}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400 + (i % 3) * 100}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
              <div className="p-4">
                <p className="text-sm font-medium text-white">{image.alt}</p>
                <p className="text-xs text-gold">{image.category}</p>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          isOpen={!!lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
