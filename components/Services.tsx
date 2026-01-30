"use client";
import Section from './Section';
import { motion } from 'framer-motion';

import { Globe, Smartphone, Bean, Image as ImageIcon } from 'lucide-react';

const services = [
  {
    title: 'Développement web',
    description: 'Le développement web est le processus de contruction, de programmation...',
    icon: Globe,
    color: 'bg-[#ff3b6b] text-white',
  },
  {
    title: 'Développement mobile',
    description: 'Le développement mobile indique la création de logiciels pour les appareils mobiles...',
    icon: Smartphone,
    color: 'bg-[#ff3b6b] text-white',
  },
  {
    title: 'Design UI/UX',
    description: "La conception UI/UX se concentre sur la création d'expérience utilisateur transparente...",
    icon: Bean,
    color: 'bg-[#ff3b6b] text-white',
  },
  {
    title: 'Design Graphique',
    description: "J'offre des solutions de conception créatives pour améliorer la communication visuelle...",
    icon: ImageIcon,
    color: 'bg-[#ff3b6b] text-white',
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Ce que j'offre"
      title="Mes services"
      titleClassName="text-5xl md:text-7xl font-bold"
      center
    >
      <p className="max-w-2xl mx-auto text-center text-lg md:text-xl text-white/80 mb-10">
        Je suis un développeur web full-stack et mobile résidant à Abomey-calavi avec 03 ans d'expérience en collaboration avec des experts dans le domaine et diverses entreprises.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ title, description, icon: Icon, color }, i) => {
          // Animation direction aléatoire
          const directions = [
            { x: -60, y: 0 }, // gauche
            { x: 60, y: 0 },  // droite
            { x: 0, y: 60 },  // bas
            { x: 0, y: -60 }  // haut
          ];
          const dir = directions[i % directions.length];
          return (
            <motion.div
              key={title}
              initial={{ opacity: 0, ...dir }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 1.2, delay: i * 0.22, type: 'spring', bounce: 0.2 }}
              className="rounded-2xl border border-white/20 bg-white/[0.01] p-8 flex flex-col h-full shadow-lg hover:shadow-xl transition group cursor-pointer hover:border-r-4 hover:border-b-4 hover:border-white hover:-translate-y-2"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 text-2xl ${color}`}>
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white/90">{title}</h3>
              <p className="text-base text-white/80 mb-6 flex-1">{description}</p>
              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 text-white/90 font-medium group-hover:text-primary transition"
              >
                Voir plus
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
