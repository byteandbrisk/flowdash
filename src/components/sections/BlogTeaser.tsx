'use client';

import { motion } from 'framer-motion';

const blogPosts = [
  {
    category: 'Analytics',
    title: 'How to Build a Data-Driven Culture in Your Organization',
    excerpt: 'Learn the key strategies for fostering a data-driven mindset across your team and organization.',
    image: '📊',
    readTime: '5 min read',
  },
  {
    category: 'Productivity',
    title: '10 Ways to Automate Your Business Reporting',
    excerpt: 'Discover automation tools and techniques that can save you hours every week.',
    image: '⚡',
    readTime: '7 min read',
  },
  {
    category: 'Insights',
    title: 'The Future of Business Intelligence',
    excerpt: 'Explore emerging trends and technologies shaping the future of business analytics.',
    image: '🔮',
    readTime: '6 min read',
  },
];

export default function BlogTeaser() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Latest from our blog
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and trends in analytics
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white rounded-card shadow-card hover:shadow-lg transition-all duration-200 overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-slate-100 flex items-center justify-center text-4xl">
                  {post.image}
                </div>
                
                <div className="p-6">
                  {/* Category Pill */}
                  <span className="inline-block bg-brand-100 text-brand-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                    <motion.a
                      href="#"
                      className="text-brand-600 font-semibold hover:text-brand-700 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      Read more →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
