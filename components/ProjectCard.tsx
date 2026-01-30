"use client";
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tags, link }: { title: string; description: string; tags: string[]; link?: string }) {
  return (
    <motion.a
      href={link || '#'}
      target={link ? '_blank' : undefined}
      rel={link ? 'noreferrer' : undefined}
      className="block rounded-lg border border-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition"
      whileHover={{ y: -2 }}
    >
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-base md:text-lg text-white/70">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-sm md:text-base px-3 py-1 rounded bg-white/5 border border-white/10">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
