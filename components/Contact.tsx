"use client";
import { useRef } from 'react';
import { Mail } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="section-spacing">
      <div className="container-base flex flex-col items-center">
        {/** Use a ref + useInView so animation runs even when already in viewport on load */}
        <HeaderAnimated />
        <form
          action="https://formspree.io/f/mvzrlzrl"
          method="POST"
          className="w-full max-w-2xl flex flex-col gap-6 mb-10"
        >
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <input
              className="flex-1 px-5 py-3 rounded-lg bg-transparent border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="votre nom"
              name="name"
              autoComplete="off"
              required
            />
            <input
              className="flex-1 px-5 py-3 rounded-lg bg-transparent border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
              placeholder="votre email"
              name="email"
              type="email"
              autoComplete="off"
              required
            />
          </div>
          <textarea
            className="px-5 py-3 rounded-lg bg-transparent border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition min-h-[240px]"
            style={{ color: '#e9e9f1' }}
            placeholder="Entrez votre message"
            name="message"
            required
          />
          <button
            type="submit"
            className="mx-auto mt-2 px-8 py-3 rounded-full border border-white/30 text-white text-lg font-medium flex items-center gap-2 hover:bg-white/10 transition"
          >
            Soumettre <span className="ml-2">→</span>
          </button>
        </form>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.26, type: 'spring', bounce: 0.2 }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">Richard SOUNOUVOU<span className="text-primary">.</span></div>
          <div className="flex items-center gap-2 text-white/90 text-lg">
            <Mail className="w-5 h-5" />
            <span>richardsounouvou19@gmail.com</span>
          </div>
        </motion.div>
        <motion.footer
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.34, type: 'spring', bounce: 0.2 }}
          className="w-full mt-16 border-t border-white/10 pt-6 pb-2"
        >
          <div className="container-base flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-white/60 text-sm">© 2025 Richard SOUNOUVOU. Tous droits réservés.</span>
            <div className="flex gap-8 text-white/80 text-sm">
              <a href="https://github.com/Tedel12" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
              <a href="https://www.linkedin.com/in/ben-ephraim-agbannon-948819311/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
              <a href="https://www.instagram.com/declan_3.5?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Instagram</a>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}

function HeaderAnimated() {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 1.2, type: 'spring', bounce: 0.2 }}
    >
      <div className="text-sm text-white/70 text-center mb-2">Me contacter</div>
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">Prendre contact avec moi</h2>
      <p className="text-white/80 max-w-2xl text-center mb-10 text-base md:text-lg">
        Je pense qu'il serait mémorable de recevoir une correspondance de votre part ! Si vous avez n'importe qu'elle questions, commentaires, ou avis / suggestions, s'il vous plaît, utilisez le formulaire suivant.
      </p>
    </motion.div>
  );
}
