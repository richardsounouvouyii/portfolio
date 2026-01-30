"use client";
import Section from './Section';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/site';
import { motion } from 'framer-motion';

const projectImages = [
  '/assets/recent.png',
  '/assets/partie1.png',
  '/assets/partie2.png',
  '/assets/service.png',
];

export default function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Mon portfolio"
      title="Mes récents projets"
      titleClassName="text-5xl md:text-7xl font-bold"
      center
    >
      <p className="max-w-2xl mx-auto text-center text-lg md:text-xl text-white/80 mb-10">
        Bienvenue sur mon portfolio ! Explorez la collection des projets qui montrent mon expertise en développement web.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {projects.slice(0, 4).map((p, i) => {
          const directions = [
            { x: -60, y: 0 },
            { x: 60, y: 0 },
            { y: 60 },
            { y: -60 },
          ];
          const dir = directions[i % directions.length];
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, ...dir }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 1.2, delay: i * 0.22, type: 'spring', bounce: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-lg group h-[380px] flex flex-col justify-end cursor-pointer"
              tabIndex={0}
            >
              <Image
                src={projectImages[i % projectImages.length]}
                alt={p.title}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
                sizes="(max-width: 768px) 100vw, 25vw"
                priority={i === 0}
              />
              <div className="absolute left-4 right-4 bottom-6">
                <div className="flex items-center justify-between rounded-xl bg-white shadow-lg px-6 py-4 transition duration-200 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:scale-[1.03]">
                  <div>
                    <div className="font-bold text-base md:text-lg text-black leading-tight mb-1">{p.title}</div>
                    <div className="text-sm text-neutral-600 font-normal">{p.description}</div>
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 flex items-center justify-center w-11 h-11 rounded-full bg-black/90 text-white transition hover:bg-[#4ade80] hover:text-black focus:outline-none"
                    aria-label="Voir le projet"
                  >
                    <ExternalLink size={28} />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <a
          href="#work"
          className="pill pill-hover text-lg md:text-xl px-10 py-4 border-2 border-white/20 text-white flex items-center gap-2"
        >
          Voir plus
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </Section>
  );
}
