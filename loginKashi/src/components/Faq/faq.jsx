import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: ' What services does Login-2-Kashi provide?',
    answer:
      'We offer fully guided spiritual tours in Kashi (Varanasi) — including temple darshan, pooja arrangements, accommodations, transport, rituals like pind daan, and personalized local experiences.',
  },
  {
    question: 'Can you arrange Kashi Vishwanath temple darshan and special poojas?',
    answer:
      'Yes. Login-2-Kashi ensures smooth entry for darshan, priority bookings, and authentic pooja experiences guided by experienced local priests.',
  },
  {
    question: 'Do you provide airport/railway station pickup and drop?',
    answer:
      'Absolutely. Our packages include safe and timely pickup/drop services from Varanasi Airport or Railway Station.',
  },
  {
    question: 'Are your tour guides knowledgeable and local?',
    answer:
      'Yes. Our guides are Kashi natives, fluent in multiple languages, and deeply familiar with the spiritual, cultural, and historical essence of the city.',
  },
  {
    question: 'Can I customize my Kashi yatra itinerary?',
    answer:
      'Yes. We design flexible, customized tour plans based on your needs — whether it’s a spiritual visit, cultural walk, or peaceful solo retreat.',
  },
  {
    question: 'Is your service suitable for senior citizens?',
    answer:
      'Definitely. We provide comfortable accommodations, wheelchairs (on request), slower-paced tours, and full support for elderly pilgrims.',
  },
  {
    question: 'Do you organize Ganga Aarti experiences?',
    answer:
      'Yes, Login-2-Kashi arranges Ganga Aarti viewings — from the ghats or private boats — including VIP seating and guided narration.',
  },
  {
    question: 'What kind of accommodation do you provide?',
    answer:
      'We offer clean, comfortable stays — from budget lodges to premium hotels — located near key temples and ghats.',
  },
  {
    question: 'Can you help with rituals like pind daan or asthi visarjan?',
    answer:
      'Yes, we make all arrangements with trusted priests, boats, and logistics, ensuring sacred rituals are performed with care and authenticity.',
  },
  {
    question: 'How can I book a guided visit with Login-2-Kashi?',
    answer:
      'Just call us, WhatsApp us, or fill out the form on our website. Our team will get in touch to plan everything for your divine journey.',
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-gray-800 bg-white">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center bg-black bg-opacity-60 text-white py-16 px-4"
      >
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Find answers to the most common questions about our services and spiritual travel experiences.
        </p>
      </motion.section>

      {/* FAQ List */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="border rounded-xl shadow-sm overflow-hidden transition"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-all"
              >
                <span className="text-lg font-medium text-left">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 py-4 bg-white border-t text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black bg-opacity-60 text-white py-16 text-center px-6"
      >
        <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
        <p className="mb-6 text-lg">We're here to help you. Get in touch with us directly.</p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
        >
          Contact Us
        </Link>
      </motion.section>
    </div>
  );
};

export default FaqPage;
