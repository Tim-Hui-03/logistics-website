import { motion } from 'motion/react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-900">Gary<span className="text-orange-500">Logistics</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About Gary</a>
            <a href="#contact" className="bg-blue-900 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-800 transition-colors">
              Get Quote
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md" onClick={() => setIsOpen(false)}>About Gary</a>
            <a href="#contact" className="block px-3 py-2 text-blue-900 font-bold hover:bg-blue-50 rounded-md" onClick={() => setIsOpen(false)}>Get Quote</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
