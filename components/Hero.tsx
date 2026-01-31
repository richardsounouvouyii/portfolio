"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, Instagram, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section-spacing">
      <div className="container-base pt-14 md:pt-32 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.2 }}
          className="-mt-4 md:-mt-6"
        >
          <Image
            src="/assets/logo.jpeg"
            alt="logo"
            width={240}
            height={240}
            className="mx-auto h-56 w-56 md:h-64 md:w-64 rounded-full object-contain border-2 border-white/20 bg-white"
            priority
          />
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.18, type: 'spring', bounce: 0.2 }}
          className="mt-6 text-white/85 text-lg md:text-xl"
        >
          Bonjour, Je suis <span className="font-semibold">Richard SOUNOUVOU</span> 👋
        </motion.p>

        {/* Big title */}
        <motion.h1
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.22, type: 'spring', bounce: 0.2 }}
          className="mt-4 text-5xl md:text-7xl font-bold leading-tight"
        >
          Développeur web full-
          <br className="hidden md:block" />
          stack et mobile.
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.3, type: 'spring', bounce: 0.2 }}
          className="mt-6 text-white/80 max-w-3xl mx-auto text-base md:text-lg"
        >
          Je suis développeur web full-stack et mobile résidant à Abomey-calavi, Bénin, avec 03 ans d'expérience dans de diverses entreprises.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.38, type: 'spring', bounce: 0.2 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#contact" className="pill pill-hover group flex items-center gap-3 text-xl md:text-2xl px-10 py-5 border-2">
            <span>me contacter</span>
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://portfolio-liart-psi-68.vercel.app/sample-resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="pill pill-hover group flex items-center gap-3 text-xl md:text-2xl px-10 py-5 text-white border-2"
          >
            <span>mon cv</span>
            <Download className="h-6 w-6" />
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.46, type: 'spring', bounce: 0.2 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <a href="https://github.com/richardsounouvou" aria-label="GitHub" className="hover:text-primary">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/richard-sounouvou/" aria-label="LinkedIn" className="hover:text-primary">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/declan_3.5?igsh=YzljYTk1ODg3Zg==" aria-label="Instagram" className="hover:text-primary">
            <Instagram />
          </a>
          <a href="mailto:richardsounouvou19@gmail.com" aria-label="Email" className="hover:text-primary">
            <Mail />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
