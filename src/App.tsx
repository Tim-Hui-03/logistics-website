/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PainPoints from './components/PainPoints';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <PainPoints />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
