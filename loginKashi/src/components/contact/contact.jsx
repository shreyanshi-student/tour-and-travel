import React from 'react';
import contactBanner from '../../assets/images/banner/banner4.jpg'; // Adjust if path differs

const Contact = () => {
  return (
    <div className="text-gray-800">
      {/* Banner */}
     <section
  className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('../../assets/images/banner/banner4.jpg')" }}
>

        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto">
            We're here to help you plan your spiritual journey.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Send Us a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Have Questions? Connect with Us</h2>
            <p className="text-gray-600">
              Reach out to us via phone, email, or visit one of our city centers.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>webcraft.shreyanshi@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+918577959697, +917620238450</p>
              </div>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>
                  Kashi Spiritual Office,<br />
                  Chandua Chhittupur, Sigra, Varanasi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-[400px] w-full">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1683952725294!2d83.00983627541037!3d25.311958427626235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31e78db73e6d%3A0xa9d39f3892f295c3!2sDashashwamedh%20Ghat%2C%20Varanasi!5e0!3m2!1sen!2sin!4v1718067030745!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
