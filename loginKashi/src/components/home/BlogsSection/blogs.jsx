import React from 'react';
import blog1 from '../../../assets/images/blogs/blogsImage1.jpg';
import blog2 from '../../../assets/images/blogs/blogsImage2.jpg';
import blog3 from '../../../assets/images/blogs/blogsImage3.jpg';

const blogs = [
  {
    id: 1,
    title: 'Top 5 Spiritual Places to Visit in Kashi',
    desc: 'Explore the must-visit temples, ghats, and hidden gems of Varanasi.',
    img: blog3,
    link: '/singleblog',
    category: 'Kashi',
  },
  {
    id: 2,
    title: 'Ayodhya’s Spiritual Renaissance',
    desc: 'How Ram Mandir has transformed Ayodhya into a global spiritual center.',
    img: blog3,
    link: '/singleblog2',
    category: 'Ayodhya',
  },
  {
    id: 3,
    title: 'Kumbh Mela: Faith, Colors & Divinity',
    desc: 'A deep dive into the world’s largest religious gathering held in Prayagraj.',
    img: blog3,
    link: '/singleblog3',
    category: 'Prayagraj',
  },
];

const HomeBlogsSection = () => {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Explore Our Latest Blogs</h2>
          <p className="text-gray-600 text-lg">
            Inspirational reads from the spiritual cities of India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-56">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white text-sm text-gray-800 font-semibold px-3 py-1 rounded-full shadow">
                  {blog.category}
                </span>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-600">{blog.desc}</p>
                <a
                  href={blog.link}
                  className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/blogs"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition shadow-lg"
          >
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogsSection;
