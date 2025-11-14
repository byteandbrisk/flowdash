'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly can I get started with Flowdash?',
    answer: 'You can get started in minutes! Simply sign up, connect your data sources, and our AI will automatically create your first dashboard. Most users see their first insights within 15 minutes of setup.',
  },
  {
    question: 'What data sources does Flowdash support?',
    answer: 'Flowdash integrates with over 100+ data sources including Google Analytics, Salesforce, HubSpot, Stripe, Slack, and many more. We also support custom APIs and CSV uploads for complete flexibility.',
  },
  {
    question: 'Is my data secure with Flowdash?',
    answer: 'Absolutely. We use enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and regular security audits. Your data is never shared with third parties without your explicit consent.',
  },
  {
    question: 'Can I customize reports and dashboards?',
    answer: 'Yes! Flowdash offers extensive customization options including custom metrics, branded reports, white-label dashboards, and API access for advanced integrations. Our Pro and Enterprise plans include dedicated support for custom implementations.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about Flowdash. Can&apos;t find the answer you&apos;re looking for?
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-slate-200 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-6 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-inset rounded-lg"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
