'use client';

import { motion } from 'framer-motion';
import { BarChart3, Zap, Link, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: BarChart3,
    title: 'Accurate Data Science',
    description: 'Model key KPIs and surface anomalies early with our advanced machine learning algorithms.',
  },
  {
    icon: Zap,
    title: 'Report Automation',
    description: 'Auto-generate stakeholder updates and save hours each week with intelligent automation.',
  },
  {
    icon: Link,
    title: 'Full Integrations',
    description: 'Connect Slack, Google, and more in minutes with our comprehensive integration suite.',
  },
  {
    icon: TrendingUp,
    title: 'Advanced Analytics',
    description: 'Drill down to segment trends with one click using our intuitive analytics interface.',
  },
];

export default function Benefits() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why choose Flowdash?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powerful features designed to transform your data into actionable insights
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-slate-50 rounded-card p-8 mb-6 group-hover:shadow-card transition-all duration-200"
              >
                <benefit.icon className="w-12 h-12 text-brand-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
