import { motion } from 'motion/react';
import { Ship, Plane, Truck, Clock, FlaskConical, Warehouse, User, Globe } from 'lucide-react';

const services = [
  {
    title: "Sea Freight",
    description: "Comprehensive sea freight solutions for FCL and LCL shipments. Reliable ocean transport connecting Singapore to global ports.",
    icon: <Ship size={32} className="text-white" />,
    image: "/images/sea.jpg"
  },
  {
    title: "Air Freight",
    description: "Fast and efficient air freight services for time-sensitive cargo. Global reach with premium carrier partnerships.",
    icon: <Plane size={32} className="text-white" />,
    image: "/images/air.jpg"
  },
  {
    title: "Road Transport",
    description: "Seamless cross-border trucking and local distribution. Flexible road transport solutions tailored to your schedule.",
    icon: <Truck size={32} className="text-white" />,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Project Cargo",
    description: "Specialized handling for project cargo and time-critical shipments. Expert planning for oversized and heavy lift cargo.",
    icon: <Clock size={32} className="text-white" />,
    image: "/images/project.jpg"
  },
  {
    title: "Chemical Logistics",
    description: "Certified handling of hazardous materials and chemical logistics. Safety-first approach compliant with international regulations.",
    icon: <FlaskConical size={32} className="text-white" />,
    image: "/images/chemical.jpg"
  },
  {
    title: "Warehousing",
    description: "Secure warehousing and inventory management. Flexible storage solutions to optimize your supply chain.",
    icon: <Warehouse size={32} className="text-white" />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Door-to-Door Delivery",
    description: "Personalized door-to-door delivery services. White-glove handling for sensitive and high-value items.",
    icon: <User size={32} className="text-white" />,
    image: "/images/door-to-door.jpg"
  },
  {
    title: "Integrated Logistics",
    description: "Integrated logistics solutions including customs brokerage, documentation, and insurance. A single point of contact for all your needs.",
    icon: <Globe size={32} className="text-white" />,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Logistics Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From sea to sky, we cover every aspect of your supply chain with precision and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[450px] rounded-3xl overflow-hidden group shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent opacity-90" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                <div className="mb-4">
                   <div className="mb-4 p-2 bg-white/20 backdrop-blur-md rounded-xl w-fit">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-extrabold mb-3 uppercase tracking-wide">{service.title}</h3>
                  <p className="text-blue-100 text-base leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
