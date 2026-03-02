export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Gary<span className="text-orange-500">Logistics</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in global freight forwarding. Delivering excellence, safety, and timing for Singapore's SMEs.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Gary</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Get Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-200">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Gary</li>
              <li>Freight Forwarding Specialist</li>
              <li><a href="mailto:cs5@rgf.com.sg" className="hover:text-white transition-colors">cs5@rgf.com.sg</a></li>
              <li><a href="tel:+6589451426" className="hover:text-white transition-colors">+65 8945 1426</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Gary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
