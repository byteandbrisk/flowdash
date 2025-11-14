'use client';

import { motion } from 'framer-motion';

const logos = [
  { name: 'Stripe', href: '#' },
  { name: 'Slack', href: '#' },
  { name: 'Figma', href: '#' },
  { name: 'Intercom', href: '#' },
  { name: 'Vercel', href: '#' },
  { name: 'Linear', href: '#' },
];

export default function Logos() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-slate-600 text-lg">
            Trusted by leading companies worldwide
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {logos.map((logo, index) => (
            <motion.a
              key={logo.name}
              href={logo.href}
              className="flex items-center justify-center p-4 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              aria-label={`${logo.name} logo`}
            >
              <div className="text-slate-400 text-lg font-semibold">
                {logo.name}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
