"use client";
import Section from './Section';
import Image from 'next/image';
import { Code, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Introduction"
      title="A propos de moi"
      titleClassName="md:text-6xl text-4xl font-bold"
      center
    >
      <div className="grid md:grid-cols-2 items-start gap-10">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.2 }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-2 md:max-w-[380px] mx-auto md:mx-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&h=900&fit=crop"
            alt="Photo de profil"
            width={800}
            height={900}
            className="w-full h-auto rounded-xl object-cover"
          />
        </motion.div>

        {/* Texte + cartes */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.18, type: 'spring', bounce: 0.2 }}
          className="md:-ml-6 lg:-ml-70"
        >
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Je suis un développeur web full-stack et mobile expérimenté avec un peu plus de 03 ans d'expertise dans le
            domaine. À travers ma carrière jusqu'ici, j'ai eu le privilège de collaborer avec des entreprises
            prestigieuses pour contribuer à leurs succès. Avec l'aide de quelques experts dans le domaine, j'ai
            également acquis de nombreuses compétences.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[{ icon: Code, title: 'Languages', desc: 'HTML, CSS, JavaScript, React Js, Next Js, Laravel' },
              { icon: GraduationCap, title: 'Education', desc: 'Licence 2' },
              { icon: Briefcase, title: 'Projets', desc: 'Plus de 5 projets réalisés' }].map(({ icon: Icon, title, desc }, i) => {
                const directions = [
                  { x: -60, y: 0 },
                  { x: 60, y: 0 },
                  { x: 0, y: 60 },
                ];
                const dir = directions[i % directions.length];
                return (
                  <motion.button
                    key={title}
                    initial={{ opacity: 0, ...dir }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 1.2, delay: i * 0.22, type: 'spring', bounce: 0.2 }}
                    className="group text-left rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition transform hover:-translate-y-1 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer hover:border-r-4 hover:border-b-4 hover:border-white"
                    aria-label={title}
                  >
                    <Icon className="text-2xl md:text-3xl text-white/90 transition group-hover:scale-110" />
                    <h3 className="mt-3 text-lg md:text-xl font-semibold">{title}</h3>
                    <p className="text-base md:text-lg text-white/70 mt-1">{desc}</p>
                  </motion.button>
                );
              })}
          </div>

          {/* Outils (icônes) */}
          <h4 className="mt-10 mb-4 text-lg md:text-xl text-white/85 font-medium">Les outils que j'utilise</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 cursor-pointer">
            {[
              { name: 'VS Code', src: '/icons/vscode.svg' },
              { name: 'Firebase', src: '/icons/firebase.svg' },
              { name: 'MongoDB', src: '/icons/mongodb.svg' },
              { name: 'Figma', src: '/icons/figma.svg' },
              { name: 'Git', src: '/icons/git.svg' },
            ].map(({ name, src }, i) => {
              const directions = [
                { y: 60 },
                { x: -60 },
                { x: 60 },
                { y: -60 },
                { x: 0, y: 60 },
              ];
              const dir = directions[i % directions.length];
              return (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, ...dir }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 1.2, delay: i * 0.18, type: 'spring', bounce: 0.2 }}
                  className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] p-5 cursor-pointer transition-transform duration-200 hover:-translate-y-2"
                >
                  <Image src={src} alt={name} width={64} height={64} />
                  <span className="text-base md:text-lg text-white/80">{name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
