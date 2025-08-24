import React from 'react';
import ayodhya1 from '../../../assets/images/AyodhyaImage/ayodhya1.jpg'; // Ram Mandir
import ayodhya2 from '../../../assets/images/AyodhyaImage/ayodhya1.jpg'; // Saryu River
import ayodhya3 from '../../../assets/images/AyodhyaImage/ayodhya1.jpg'; // Dev Deepawali

const AyodhyaHighlight = () => {
  return (
    <section className="bg-gradient-to-b from-pink-50 via-white to-yellow-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4">
            Ayodhya — The Eternal Birthplace of Shri Ram
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            A sacred city that echoes with divinity, devotion, and the glorious legacy of the Ramayana.
          </p>
        </div>

        {/* Image with captions */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          <div className="group relative">
            <img
              src={ayodhya1}
              alt="Ram Mandir"
              className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 bg-pink-700 bg-opacity-80 text-white text-center w-full py-2 rounded-b-xl text-sm">
              Ram Janmbhoomi Mandir – A Symbol of Devotion
            </div>
          </div>

          <div className="group relative">
            <img
              src={ayodhya2}
              alt="Saryu River"
              className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 bg-yellow-700 bg-opacity-80 text-white text-center w-full py-2 rounded-b-xl text-sm">
              Tranquility of the Saryu River at Sunset
            </div>
          </div>

          <div className="group relative">
            <img
              src={ayodhya3}
              alt="Dev Deepawali"
              className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 bg-pink-700 bg-opacity-80 text-white text-center w-full py-2 rounded-b-xl text-sm">
              Dev Deepawali – Ayodhya Lit with a Million Lamps
            </div>
          </div>
        </div>

        {/* Description + CTA */}
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Ayodhya is more than a destination—it's a divine journey into dharma, faith, and inner peace. Walk in the
            footsteps of Lord Rama, explore ancient temples, and witness a spiritual awakening unlike any other.
          </p>
          <a
            href="/contact"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow transition"
          >
            Discover Ayodhya Tours
          </a>
        </div>
      </div>
    </section>
  );
};

export default AyodhyaHighlight;
