'use client';

import { motion } from 'framer-motion';

// SVG Icon Components
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const integrations = [
  {
    name: 'Facebook',
    icon: FacebookIcon,
    description: 'Connect your Facebook analytics and track social media performance.',
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'Twitter / X',
    icon: TwitterIcon,
    description: 'Monitor Twitter engagement and analyze social media trends.',
    color: 'from-slate-800 to-slate-900',
  },
  {
    name: 'Google Analytics',
    icon: GoogleIcon,
    description: 'Integrate Google Analytics and search console data seamlessly.',
    color: 'from-red-500 to-orange-500',
  },
];

export default function SocialIntegrations() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-500 to-brand-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Powerful Integrations
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)]">
            Connect with your favorite platforms and centralize all your analytics data
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => {
            const IconComponent = integration.icon;
            return (
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
                  className="bg-white rounded-card p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${integration.color} mb-6 text-white shadow-lg`}>
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {integration.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {integration.description}
                  </p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-card font-semibold hover:bg-brand-700 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
