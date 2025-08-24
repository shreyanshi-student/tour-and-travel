import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import footerBg from '../../../assets/images/footer.jpg'; // Use your actual image path

const Footer = () => {
  return (
    <footer
      className="relative text-white bg-no-repeat
 bg-[#000]"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: 'contain',
        backgroundPosition: '',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Login2Kashi</h2>
          <p className="text-gray-300 text-sm">
           Step into the sacred city of Kashi (Varanasi), where devotion flows with the Ganges.Every ghat holds centuries of stories, rituals, and divine energy. Experience a journey of faith, culture, and spiritual awakening.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/blogs" className="hover:text-white">Blogs</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>Email: webcraft.shreyanshi@gmail.com</li>
            <li>Phone: +918577959697, +917620238450</li>
            <li>Location: Chandua Chhittupur, Sigra, Varanasi</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <p className="text-gray-300 text-sm mb-4">Get in touch to plan your divine trip to Kashi today!</p>
          <div className="flex space-x-4 text-white text-lg">
            {/* <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a> */}
             <p className="text-gray-300 text-sm mb-4">Our Instagram Profile:</p>
            <a href="https://www.instagram.com/login_2_kashi?igsh=dXA3N3lheXJnaHM0" className="hover:text-yellow-400"><FaInstagram /></a>
            {/* <a href="#" className="hover:text-yellow-400"><FaTwitter /></a> */}
            {/* <a href="#" className="hover:text-yellow-400"><FaYoutube /></a> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 text-center py-4 border-t border-gray-600 text-gray-400 text-sm bg-black bg-opacity-80">
        © {new Date().getFullYear()} login2kasi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
