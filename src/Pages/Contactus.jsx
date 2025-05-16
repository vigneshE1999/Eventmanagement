import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contactus= () => {
  const { scrollYProgress } = useScroll();

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const formY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <div className="min-h-screen bg-[#f8f6f3] flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-20 gap-20 -mt-40 ">
      {/* Left Image */}
      <motion.div
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 60 }}
        className=" px-6 lg:w-full md:w-1/2   max-w-[500px]"
      >
        <img
          src="https://eventsmanagementkerala.com/wp-content/uploads/2023/10/342066241_808106290744158_4973728954059401482_n.jpg"
          alt="Event"
          className="mt-30 w-full h-auto rounded shadow-2xl object-cover"
        />
      </motion.div>

      {/* Right Form */}
      <motion.div
        style={{ y: formY }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 60 }}
        className="w-full md:w-1/2 max-w-xl mb-60 -mt-30 lg:mt-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-8 tracking-widest">
         CONTACTUS
        </h2>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1 tracking-wide text-sm">
              NAME<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full bg-transparent border-b border-gray-300 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1 tracking-wide text-sm">
              EMAIL<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent border-b border-gray-300 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1 tracking-wide text-sm">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full bg-transparent border-b border-gray-300 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1 tracking-wide text-sm">
             Message
            </label>
            <textarea
              rows="4"
              placeholder="Please type your message here...."
              className="w-full bg-transparent border-b border-gray-300 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-700"
            ></textarea>
          </div>

          {/* Terms & Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-4">
            <div className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                id="terms"
                className="form-checkbox mr-2"
              />
              <label htmlFor="terms">
              I agree with the{' '}
                <a href="#" className="underline text-gray-600">
                 Terms of use
                </a>
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-700 text-white px-3 py-1 rounded-full hover:bg-gray-800 transition"
            >
             Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contactus;
