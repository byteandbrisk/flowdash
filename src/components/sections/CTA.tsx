'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let&apos;s start growing your business
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Join thousands of businesses already using Flowdash to make data-driven decisions and accelerate growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              className="bg-accent-gradient text-white px-8 py-4 rounded-card font-semibold text-lg hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.a>
            <motion.a
              href="#"
              className="border-2 border-white text-white px-8 py-4 rounded-card font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
