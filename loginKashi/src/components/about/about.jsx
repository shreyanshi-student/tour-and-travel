import React from 'react';
import aboutMainImg from '../../assets/images/aboutus.avif';
import bannerImg from '../../assets/images/aboutus.avif';
import team1 from '../../assets/images/aboutus.avif';
import team2 from '../../assets/images/aboutus.avif';
import team3 from '../../assets/images/aboutus.avif';

const About = () => {
  return (
    <div className="text-gray-800">
      {/* Banner */}
      <section
        className="h-[70vh] flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold">About Spiritual Trails</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Embark on a sacred journey through India’s holiest cities – Kashi, Ayodhya, and Prayagraj.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src={aboutMainImg}
            alt="About Spiritual Trails"
            className="rounded-xl shadow-lg w-full object-cover"
          />
          <div>
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              We’re a team of spiritual enthusiasts and travel experts committed to connecting souls to India’s divine roots.
              Our packages focus on experience, meaning, and devotion — not just sightseeing.
            </p>
            <p className="mb-6 text-lg text-gray-600">
              Whether you seek the peace of the Ganges in Kashi, the divinity of Ram Janmabhoomi in Ayodhya, or the sacred union at Prayagraj, we’re here to guide you.
            </p>
            <a href="/contact" className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full shadow hover:bg-blue-800">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 text-center">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To craft soulful travel experiences that bring people closer to their spiritual essence and Indian heritage.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become India’s leading spiritual travel brand, known for authenticity, reverence, and transformative journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Why Choose Spiritual Trails?</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="p-6 rounded-lg bg-yellow-50 shadow hover:shadow-md">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Tailored Pilgrimage Packages</h4>
              <p className="text-gray-600">Handcrafted itineraries for every age group and faith seeker, combining convenience and devotion.</p>
            </div>
            <div className="p-6 rounded-lg bg-yellow-50 shadow hover:shadow-md">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Local Spiritual Experts</h4>
              <p className="text-gray-600">Our guides are local residents who know the rituals, stories, and sacred paths personally.</p>
            </div>
            <div className="p-6 rounded-lg bg-yellow-50 shadow hover:shadow-md">
              <h4 className="text-xl font-semibold text-blue-700 mb-2">Trusted by Thousands</h4>
              <p className="text-gray-600">We’ve served countless pilgrims from across the world with honesty and spiritual commitment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 px-6 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[team1, team2, team3].map((img, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <img src={img} alt={`Team Member ${idx + 1}`} className="rounded-full w-40 h-40 mx-auto mb-4 object-cover" />
                <h4 className="text-xl font-semibold text-blue-800">Team Member {idx + 1}</h4>
                <p className="text-gray-600 text-sm">Spiritual Guide & Tour Coordinator</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
