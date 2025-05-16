import React from 'react'

const Hero = () => {
  return (
        <>
        <div className='-mt-30 top-0 bg-black '>
        <img src="https://eventsmanagementkerala.com/wp-content/uploads/2023/02/blog-2.27e5a04.webp" alt="" className=' opacity-55 w-full h-[600px] object-cover'/>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-xl md:text-6xl font-bold uppercase mb-4">Crafting Unforgettable Moments</h1>
            <p className="text-sm md:text-2xl max-w-2xl">
                From weddings to corporate galas, we turn your vision into reality with seamless execution and creative flair.
            </p>
            <div className="flex justify-center mt-10">
            <button
                className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition cursor-pointer "
            
            >
                Contact us
            </button>
            </div>
            </div>
        </>
    )
    }

    export default Hero



