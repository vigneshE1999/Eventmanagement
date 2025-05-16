import React from 'react'

import { RiAddCircleFill } from "react-icons/ri";

const Aboutus = () => {
  return (
    <>
     
    <div className=''>
    <div className="bg-[#FAF9F6] py-16 px-4 md:px-16 mt-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left Content */}
    <div>
      <h2 className="text-3xl md:text-5xl font-light text-gray-500 mb-6 leading-tight">
        Stories by Js Event Management
      </h2>
      <p className="text-gray-700 text-lg mb-8">
       Melodia Event Management offers a diverse range of blogs that cover topics related to event management and planning From destination wedding planning to corporate events, each blog provides valuable insights to help you plan your next event seamlessly.
      </p>
      {/* <button className="bg-gray-600 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300">
        MORE
      </button> */}
    </div>

    {/* Right Image */}
    {/* <div className='px-30'>
      <img
        src="https://www.planetariumevents.gr/portal-img/block_f_v/1/planetarium-wedding-venue-thessaloniki-2.jpg"
        alt="Event table setting"
        className="w-[400px] h-auto object-cover rounded-md "
      />
    </div> */}
   
  <iframe  src="https://www.youtube.com/embed/hTor-Ed8e50" title="Malayali Vietnamese Destination Wedding in Thrissur, Venue - KR Thekkedathu Mana | #1 Kerala Wedding" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='lg:w-[578px] lg:h-[326px]'></iframe>

  </div>
</div>
    </div>
    </>
   
   
  )
}

export default Aboutus


