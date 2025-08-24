import React from 'react';
import img1 from '../../../assets/images/varanasi/varanasi1.jpg'; // Sunrise Boat Ride
import img2 from '../../../assets/images/varanasi/varanasi2.jpg'; // Ganga Aarti
import img3 from '../../../assets/images/varanasi/varanasi3.jpg'; // Streets of Varanasi

const VaranasiHighlight = () => {
  return (
    <section className="bg-yellow-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-800 mb-4">
            Discover the Soul of Varanasi
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Let the holy river guide your spirit and the timeless ghats awaken your soul. Varanasi is not just a city—
            it's an experience of life, death, and the divine.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img
            src={img1}
            alt="Sunrise Boat Ride in Varanasi"
            className="rounded-xl shadow-lg object-cover w-full h-64"
          />
          <img
            src={img1}
            alt="Ganga Aarti at Dashashwamedh Ghat"
            className="rounded-xl shadow-lg object-cover w-full h-64"
          />
          <img
            src={img1}
            alt="Spiritual Streets of Varanasi"
            className="rounded-xl shadow-lg object-cover w-full h-64"
          />
        </div>

        {/* Description and CTA */}
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
            Watch the golden sunrise over the Ganges, walk the narrow alleys filled with chants and incense, and witness
            the hypnotic Ganga Aarti. In Varanasi, every moment feels like eternity.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-700 transition"
          >
            Book Your Spiritual Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default VaranasiHighlight;
