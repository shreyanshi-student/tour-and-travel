import React from 'react';
import prayagraj1 from '../../../assets/images/prayagrajImage/prayagraj1.jpg'; // Sangam
import prayagraj2 from '../../../assets/images/prayagrajImage/prayagraj2.jpg'; // Kumbh Mela
import prayagraj3 from '../../../assets/images/prayagrajImage/prayagraj3.webp'; // Allahabad Fort

const PrayagrajHighlight = () => {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-left md:text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800">
            Prayagraj – Where Rivers Meet and Faith Rises
          </h2>
          <p className="text-gray-700 text-lg mt-4 max-w-2xl mx-auto">
            Known for the sacred Triveni Sangam, historic Kumbh Mela, and ancient wisdom, Prayagraj is a city of convergence — of rivers, cultures, and salvation.
          </p>
        </div>

        {/* Image Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center">
            <img src={prayagraj1} alt="Triveni Sangam" className="rounded-lg mb-4 h-48 w-full object-cover" />
            <h3 className="text-blue-700 font-semibold text-xl mb-2">Triveni Sangam</h3>
            <p className="text-gray-600 text-sm">The sacred confluence of Ganga, Yamuna & the mythical Saraswati—believed to cleanse all sins.</p>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center">
            <img src={prayagraj2} alt="Kumbh Mela" className="rounded-lg mb-4 h-48 w-full object-cover" />
            <h3 className="text-blue-700 font-semibold text-xl mb-2">Kumbh Mela</h3>
            <p className="text-gray-600 text-sm">The largest religious gathering on Earth, where millions bathe in divine belief and unity.</p>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center">
            <img src={prayagraj3} alt="Allahabad Fort" className="rounded-lg mb-4 h-48 w-full object-cover" />
            <h3 className="text-blue-700 font-semibold text-xl mb-2">Allahabad Fort</h3>
            <p className="text-gray-600 text-sm">A Mughal marvel near the Sangam, echoing centuries of cultural fusion and royal patronage.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            Whether you're seeking spiritual cleansing, divine darshan, or historical exploration, Prayagraj offers a soul-touching experience that stays with you forever.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow transition"
          >
            Plan Your Prayagraj Pilgrimage
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrayagrajHighlight;
