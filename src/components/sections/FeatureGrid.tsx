'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Real-time Analytics',
    description: 'Monitor your business metrics in real-time with our advanced dashboard.',
    chart: '📈',
  },
  {
    title: 'Data Visualization',
    description: 'Create stunning charts and graphs to better understand your data.',
    chart: '📊',
  },
  {
    title: 'Custom Reports',
    description: 'Generate personalized reports tailored to your business needs.',
    chart: '📋',
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Powerful Data & Charts
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your data into actionable insights with our comprehensive analytics suite
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-card p-8 shadow-card hover:shadow-lg transition-all duration-200"
              >
                {/* Chart Placeholder */}
                <div className="aspect-[16/10] bg-slate-100 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-4xl">{feature.chart}</div>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
