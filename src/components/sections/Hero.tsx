'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Advanced analytics to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                grow your business
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Turn data into decisions with real-time insights, automated reporting, and seamless collaboration.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#"
                className="bg-accent-gradient text-white px-8 py-4 rounded-card font-semibold text-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Now
              </motion.a>
              <motion.a
                href="#"
                className="border-2 border-white text-white px-8 py-4 rounded-card font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Trial
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right Column - Hero Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Browser Mock Card */}
            <div className="bg-white rounded-card shadow-card p-6 max-w-2xl mx-auto">
              {/* Browser Header */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1 bg-slate-100 rounded px-3 py-1 ml-4">
                  <div className="text-xs text-slate-500">flowdash.com/dashboard</div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="space-y-6">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-slate-900">$12.4K</div>
                    <div className="text-sm text-slate-600">Revenue</div>
                    <div className="text-xs text-green-600">+12.5%</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-slate-900">1,234</div>
                    <div className="text-sm text-slate-600">Users</div>
                    <div className="text-xs text-green-600">+8.2%</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-slate-900">89%</div>
                    <div className="text-sm text-slate-600">Satisfaction</div>
                    <div className="text-xs text-green-600">+2.1%</div>
                  </div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="bg-slate-50 rounded-lg p-6 h-48 flex items-center justify-center">
                  <div className="text-slate-400 text-sm">📊 Analytics Dashboard</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
