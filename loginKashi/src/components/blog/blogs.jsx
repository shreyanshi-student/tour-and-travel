import React from 'react';
import { motion } from 'framer-motion';
// src/constants/imageConstants.js
// import { BLOG_IMAGES } from '../constants/imageConstants';
import blog1 from '../../assets/images/blogs/blogs1.avif';
import blog2 from '../../assets/images/blogs/blogs2.avif';
import blog3 from '../../assets/images/blogs/blogs3.avif';
import blog4 from '../../assets/images/blogs/blogs4.avif';

export const BLOG_IMAGES = {
  blog1,
  blog2,
  blog3,
  blog4,
};


// Sample blog data (replace with actual props or API call)
const blogs = [
  {
    id: 1,
    title: 'Kashi Vishwanath Temple: History, Importance & Darshan Guide',
    excerpt: 'Kashi Vishwanath Temple, dedicated to Lord Shiva, is the spiritual heart of Varanasi (Kashi) and one of the 12 Jyotirlingas in India. Located on the western bank of the Ganga, it draws millions of pilgrims each year who come seeking darshan and moksha....',
    date: 'June 10, 2025',
    image: BLOG_IMAGES.blog1,
    link: 'singleblog'
  },
  {
    id: 2,
    title: 'A Day in Kashi: How to Make the Most of Your Pilgrimage',
    excerpt: 'Experiencing Kashi in a day is both humbling and transformative. From the early morning Mangala Aarti to the peaceful Ganga Aarti at night, every hour in this sacred city offers spiritual enrichment and cultural immersion....',
    date: 'June 12, 2025',
    image: BLOG_IMAGES.blog2,
    link: 'singleblog2'
  },
  {
    id: 3,
    title: 'Ganga Aarti at Dashashwamedh Ghat: What Makes It So Special?',
    excerpt: 'Every evening at Dashashwamedh Ghat, a sacred spectacle unfolds — the grand Ganga Aarti. Its not just a ritual, it’s an experience of light, devotion, and divine rhythm performed by priests with synchronized movements, chants, and flaming lamps...',
    date: 'June 14, 2025',
    image: BLOG_IMAGES.blog3,
    link: 'singleblog3'
  },
  // {
  //   id: 4,
  //   title: '5 Powerful Poojas You Can Perform in Kashi',
  //   excerpt: 'A flavorful journey through Varanasi\'s street food...',
  //   date: 'June 15, 2025',
  //   image: BLOG_IMAGES.blog4,
  //   link: 'singleblog3'
  // },
];

const AllBlogs = () => {
  return (
    <div className="text-gray-800">

      {/* Banner */}
      <section className="relative h-[45vh] flex items-center justify-center bg-cover bg-center ">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Our Spiritual Blogs</h1>
          <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto">
            Dive into stories, guides, and insights from the heart of Kashi.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <motion.div
                key={blog.id}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-2xl overflow-hidden"
              >
            <a href={blog.link}>     <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                /></a>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
                <a href={blog.link}>  <h3 className="text-xl font-semibold mb-2 text-blue-900">{blog.title}</h3></a>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <a href={blog.link}>
                    <button className="text-blue-700 font-medium hover:underline">
                      Read More →
                    </button></a>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllBlogs;
