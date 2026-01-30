"use client";
import { motion } from 'framer-motion';

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
  eyebrow?: string;
  titleClassName?: string;
  center?: boolean;
};

export default function Section({ id, title, children, eyebrow, titleClassName, center }: Props) {
  const baseTitle = "text-3xl md:text-4xl font-semibold";
  return (
    <section id={id} className="section-spacing">
      <div className="container-base">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-sm uppercase tracking-wide text-white/60 mb-2 ${center ? 'text-center' : ''}`}
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`${baseTitle} ${titleClassName ?? ''} ${center ? 'text-center' : ''} mb-8`}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
}
