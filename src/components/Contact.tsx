import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/maqdgyjr", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Request a Free Quote
              </h2>
              <p className="text-gray-600">
                Ready to streamline your logistics? Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 bg-green-50 rounded-xl">
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-700">
                  Your quote request has been received. I will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="+65 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Tell me about your shipment needs..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Request"} 
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}