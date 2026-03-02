import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Logistics Warehouse" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Customized Freight Solutions for <span className="text-orange-500">Singapore SMEs</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            Hi, I'm <span className="font-bold text-white">Gary</span>. I simplify global logistics so you can focus on growing your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={20} />
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
