import { motion } from 'motion/react';
import { TrendingUp, FileText, ShieldCheck } from 'lucide-react';

export default function PainPoints() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Challenges Singapore SMEs Face in Logistics
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We understand the hurdles small businesses encounter. Our customized solutions are designed to overcome these barriers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="text-center p-6"
          >
            <div className="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-500">
              <TrendingUp size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Unpredictable Costs</h3>
            <p className="text-gray-600">
              Hidden fees and fluctuating rates can kill your margins. We provide transparent, upfront pricing tailored to your budget.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="text-center p-6"
          >
            <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-500">
              <FileText size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Complex Documentation</h3>
            <p className="text-gray-600">
              Customs clearance and permits can be a nightmare. We handle all the paperwork so your goods move without delay.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="text-center p-6"
          >
            <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-500">
              <ShieldCheck size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Reliability Issues</h3>
            <p className="text-gray-600">
              Missed deadlines damage your reputation. Our network ensures your shipments arrive on time, every time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
