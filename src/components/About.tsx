import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img 
              src="/gary.jpg" 
              alt="Gary - Freight Forwarding Specialist" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6">Meet Gary</h2>
            <h3 className="text-2xl text-orange-400 mb-6 font-medium">Your Dedicated Freight Partner</h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With years of experience at Richwell Global Forwarding, I specialize in crafting logistics solutions that fit the unique needs of Singapore's SMEs. I believe in personalized service—not just moving boxes, but moving your business forward.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                <Phone className="text-orange-400" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Call or WhatsApp</p>
                  <p className="text-xl font-bold">+65 8945 1426</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                <Mail className="text-orange-400" size={24} />
                <div>
                  <p className="text-sm text-gray-400">Email Me</p>
                  <p className="text-xl font-bold">cs5@rgf.com.sg</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
