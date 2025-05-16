import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import js from "../assets/images/js decor png.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

// Nav links
const navLinks = [
  { title: "Home", href: "/" },
  { title: "Aboutus", href: "/" },
  { title: "Services", href: "/" },
  { title: "Blog", href: "/" },
  { title: "Contactus", href: "/" },
  
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Fullscreen menu animation
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Container animation for stagger
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  // Individual link animation
  const mobileLinkVars = {
    initial: {
      y: "30vh",
      opacity: 0,
      transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
    },
  };

  return (
    <div className="relative z-50">
      {/* Top Navbar */}
      <nav className="flex justify-between items-center  px-4 lg:px-8 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-20 ">
            <img src={js} alt="" className="" />
          </div>
        </div>



        {/* Mobile Toggle Button */}
        <div className="text-sm text-gray-800 cursor-pointer " onClick={toggleMenu}>
          {open ? "Close" : <GiHamburgerMenu className="size-7 "/>}
        </div>
      </nav>
    
      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 w-full h-screen origin-top bg-gradient-to-r from-gray-900 to-yellow-400 text-black p-8 "
           
            
          >
            <div className="flex flex-col h-full justify-between  ">
              <div className="flex justify-between items-center">
                 <img src={js} alt="" className="w-20" />
                <p className="cursor-pointer" onClick={toggleMenu}>
                <GrClose />
                </p>
              </div>
              
            
    

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col justify-center items-center h-full gap-4"
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    variants={mobileLinkVars}
                    className="space-y-6 text-xl leading-tight font-serif italic uppercase md:text-5xl font-light text-black mb-6"
                    onClick={() => setOpen(false)}
                  >
                    {link.title}
                  </motion.a>
                ))}
              </motion.div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
    
  );
};

export default Navbar;



        