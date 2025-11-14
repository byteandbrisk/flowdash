'use client';

import { motion } from 'framer-motion';

const integrations = [
  {
    name: 'Facebook',
    icon: '📘',
    description: 'Connect your Facebook analytics and track social media performance.',
  },
  {
    name: 'Twitter',
    icon: '🐦',
    description: 'Monitor Twitter engagement and analyze social media trends.',
  },
  {
    name: 'Google',
    icon: '🔍',
    description: 'Integrate Google Analytics and search console data seamlessly.',
  },
];

export default function SocialIntegrations() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-500 to-brand-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Social Integrations
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Connect with your favorite platforms and streamline your workflow
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white/10 backdrop-blur-sm rounded-card p-8 text-center hover:bg-white/20 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{integration.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {integration.name}
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {integration.description}
                </p>
                <motion.a
                  href="#"
                  className="inline-block bg-white text-brand-600 px-6 py-3 rounded-card font-semibold hover:bg-blue-50 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
