
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const sections = [
  {
    title: 'Corporate Event Management',
    description:
      'If you want to make a statement at your next corporate event, partner with Melodia Event Management Company in Kerala..',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/2023/05/grand-hyatt-kochi-bolgatty-p058-hotel-facade16x9-1-1024x576.jpg',
  },
  {
    title: 'Wedding Planners',
    description:
      'Have you ever dreamed of planning the perfect dream event to be remembered forever?.',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/beautiful-woman-long-red-dress-walks-around-city-with-her-husband-q70rlitsxvchphike6wx3yab6qugnp9pceipxzu1w8.webp',
  },
  {
    title: 'Destination Wedding In Kerala',
    description:
      'Celebrate your special day in paradise as you enjoy a luxurious destination event with us!.',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/front-view-rich-arch-decorated-with-adorable-fresh-roses-flowers-q6tn21cv10nwdkkn53p5dhtg5rdlgj16wzttmhdpnc.webp',
  },
  {
    title: 'Beach Weddings',
    description:
      'Celebrate your love amidst the serene shores and palm-fringed beaches of Kerala',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/blue-white-wedding-aisle-beach-surrounded-by-palms-with-sea-background-q6tn246dlirrcegjomx12z3txwzp3mcdxdsa2b9j4o.webp',
  },
  {
    title: 'Music & Entertainment',
    description:
      'From live bands and DJs to mesmerising performers, we have everything you need.',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/34-q5t8fsj7kjq6kjf0bbfr8rq44enp0usgmkbb8ayryw.webp',
  },
  {
    title: 'Private Parties',
    description:
      'Melodia Event Management in Kerala holds Private Parties and crafts unforgettable moments that leave lasting memories..',
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/bithday-event-management-kerala-q748lic5phhlw318mu3dlw9vlgzhycwj19nbptnriw.webp',
  },
];

const Services = () => {
  const { scrollYProgress } = useScroll();
  const parallaxXLeft = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxXRight = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-16 lg:px-28 xl:px-40 space-y-20 mt-20">
      {sections.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              isEven ? '' : 'md:flex-row-reverse'
            }`}
            style={{ x: isEven ? parallaxXLeft : parallaxXRight }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, rotate: isEven ? -10 : 10, opacity: 0 }}
              whileInView={{ scale: 1, rotate: isEven ? -6 : 6, opacity: 1 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className="  md:w-1/2 flex justify-center "
            >
              <img
                src={`${item.image}?auto=format&fit=crop&w=600&q=80`}
                alt={item.title}
                className="w-[160px] sm:w-[280px] md:w-[300px] lg:w-[340px] xl:w-[380px] shadow-xl rounded-lg object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className=" md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.h2
                className="text-xl  md:text-xl font-semibold tracking-widest text-gray-300 mb-4 pe-12 px-5  "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {item.title}
              </motion.h2>

              <motion.p
                className="sm:text-sm md:text-xl pe-15 px-5 md:pe-0 md:px-0 text-gray-300 leading-relaxed mb-6 "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {item.description}
              </motion.p>

              <motion.button
                className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition-transform duration-300 mx-auto md:mx-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.5 }}
              >
                <FaLongArrowAltRight />
              </motion.button>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Services;
// import React from 'react';
// import { FaLongArrowAltRight } from "react-icons/fa";
// import { motion, useScroll, useTransform } from "framer-motion";

// const sections = [
//   {
//     title: 'Corporate Event Management',
//     description:
//       'If you want to make a statement at your next corporate event, partner with Melodia Event Management Company in Kerala..',
//     image: 'https://eventsmanagementkerala.com/wp-content/uploads/2023/05/grand-hyatt-kochi-bolgatty-p058-hotel-facade16x9-1-1024x576.jpg',
//   },
//   {
//     title: 'Wedding Planners',
//     description:
//       'Have you ever dreamed of planning the perfect dream event to be remembered forever?.',
//     image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/beautiful-woman-long-red-dress-walks-around-city-with-her-husband-q70rlitsxvchphike6wx3yab6qugnp9pceipxzu1w8.webp',
//   },
//   {
//     title: 'Destination Wedding In Kerala',
//     description:
//       'Celebrate your special day in paradise as you enjoy a luxurious destination event with us!.',
//     image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/front-view-rich-arch-decorated-with-adorable-fresh-roses-flowers-q6tn21cv10nwdkkn53p5dhtg5rdlgj16wzttmhdpnc.webp',
//   },
//   {
//     title: 'Beach Weddings',
//     description:
//       'Celebrate your love amidst the serene shores and palm-fringed beaches of Kerala',
//     image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/blue-white-wedding-aisle-beach-surrounded-by-palms-with-sea-background-q6tn246dlirrcegjomx12z3txwzp3mcdxdsa2b9j4o.webp',
//   },
//   {
//     title: 'Music & Entertainment',
//     description:
//       'From live bands and DJs to mesmerising performers, we have everything you need.',
//     image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/34-q5t8fsj7kjq6kjf0bbfr8rq44enp0usgmkbb8ayryw.webp',
//   },
//   {
//     title: 'Private Parties',
//     description:
//       'Melodia Event Management in Kerala holds Private Parties and crafts unforgettable moments that leave lasting memories..',
//     image: 'https://eventsmanagementkerala.com/wp-content/uploads/elementor/thumbs/bithday-event-management-kerala-q748lic5phhlw318mu3dlw9vlgzhycwj19nbptnriw.webp',
//   },
// ];

// const Services = () => {
//   const { scrollYProgress } = useScroll();
//   const parallaxXLeft = useTransform(scrollYProgress, [0, 1], [0, -100]);
//   const parallaxXRight = useTransform(scrollYProgress, [0, 1], [0, 100]);

//   return (
//     <div className="bg-gray-900 text-white py-16 px-24 sm:px-6 md:px-10 lg:px-16 xl:px-24 space-y-38 mt-20">
//       {sections.map((item, index) => {
//         const isEven = index % 2 === 0;

//         return (
//           <motion.div
//             key={index}
//             className={`flex flex-col lg:flex-row items-center gap-10 ${
//               isEven ? '' : 'lg:flex-row-reverse'
//             }`}
//             style={{ x: isEven ? parallaxXLeft : parallaxXRight }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//           >
//             {/* Image */} 
//             <motion.div
//               initial={{ scale: 0.8, rotate: isEven ? -10 : 10, opacity: 0 }}
//               whileInView={{ scale: 1, rotate: isEven ? -6 : 6, opacity: 1 }}
//               whileHover={{ scale: 1.05, rotate: 0 }}
//               transition={{ type: 'spring', stiffness: 100, damping: 15 }}
//               className="w-55 h-55 lg:w-1/2 lg:h-full flex justify-center border border-red-700"
//             >
//               <img
//                 src={`${item.image}?auto=format&fit=crop&w=600&q=80`}
//                 alt={item.title}
//                 className="w-[100%] sm:w-[70%] md:w-[60%] lg:w-[90%] xl:w-[75%] shadow-xl rounded-lg object-cover"
//               />
//             </motion.div>

//             {/* Text */}
//             <motion.div
//               className="w-50 lg:w-1/2 text-center lg:text-left px-4  border border-red-700"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               <motion.h2
//                 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 {item.title}
//               </motion.h2>

//               <motion.p
//                 className="text-sm md:text-base text-gray-300 leading-relaxed mb-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 {item.description}
//               </motion.p>

//               <motion.button
//                 className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <FaLongArrowAltRight />
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default Services;
