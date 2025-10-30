"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Play, Pause } from "lucide-react";
import Button from "../ui/buttons";
import { FadeIn, SlideInUp, ZoomIn } from "@/components/ui/animations";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const dynamicTexts = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Digital Marketing",
    "SaaS Solutions",
    "SEO Optimization",
    " Graphic Designing",
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [dynamicTexts.length, isPlaying]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("services");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex  items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-bg.jpg"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 "></div>
      </div>

  
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 z-20  rounded-full p-2 hover:bg-white/30 transition-colors duration-300"
      >
        {isPlaying ? (
          <Pause size={20} className="text-white" />
        ) : (
          <Play size={20} className="text-white" />
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 text-center  mt-20 text-white px-4 max-w-6xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transforming Ideas Into
            <br />
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="block text-transparent bg-[#0cf9ee] 
                           mt-4  bg-clip-text "
              >
                {dynamicTexts[currentTextIndex]}
              </motion.span>
            </AnimatePresence>
          </h1>
        </FadeIn>

        
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 leading-relaxed max-w-4xl mx-auto">
            We create digital experiences that drive growth and innovation for
            your business
          </p>
       

      
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 ">
            <Link
              href="/services"
              size="lg"
              className="h-[45px] w-[170px] cursor-pointer rounded-full text-center flex items-center justify-center bg-white text-black font-semibold shadow-[0_0_12px_rgba(0,255,180,0.4)] hover:shadow-[0_0_20px_rgba(0,200,255,0.6)] transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Explore Services
            </Link>

            <Link 
            href={"/contact"}
            className="h-[45px] flex justify-center items-center w-[140px] rounded-full bg-white text-black font-semibold shadow-[0_0_12px_rgba(0,255,180,0.5)] hover:shadow-[0_0_20px_rgba(0,200,255,0.7)] transition-all duration-300 ease-in-out cursor-pointer">
              Get In Touch
            </Link>
          </div>
        

      
          {/* <div className="flex justify-center items-center space-x-4  mt-10 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>200+ Projects Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>50+ Happy Clients</span>
            </div>
          </div> */}
       
      </div>

      
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 cursor-pointer left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-blue-400 transition-colors duration-300"
        whileHover={{ y: 6 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;
