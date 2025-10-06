'use client'
import React from 'react';
import { Mail, ArrowRight } from 'lucide-react'; 

const getPlaceholderImage = (width, height, text) => {
  const base = "https://placehold.co/";
  const bgColor = "222222"; 
  const textColor = "ffffff"; 
  return `${base}${width}x${height}/${bgColor}/${textColor}?text=${text}`;
};

const MySelfSection = () => {

  const profile = {
    name: "Anuj",
    title: "Hi, I'm Anuj",
    description: "A frontend developer focused on building fast, accessible, and intelligent web interfaces using Next.js and React. I combine clean design with cutting-edge technology to create seamless, business-driven digital experiences.",
    buttonText: "Contact Me",
    
    // REPLACE THESE WITH YOUR ACTUAL IMAGE URLS
    images: {
      main: "./pfp.png",
    },
  };

  return (
    <section className="h-200px bg-black-950 text-white font-sans flex items-center justify-center p-4 sm:p-8 lg:p-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col space-y-8 order-2 md:order-1">
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            {profile.title}
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-lg leading-relaxed">
            {profile.description}
          </p>

          <button
            onClick={() => { /* Add your navigation logic here */ }}
            className="group w-fit flex items-center space-x-2 px-6 py-3 bg-white text-gray-950 font-bold rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.02] hover:bg-gray-200"
          >
            <Mail className="w-5 h-5" />
            <span>{profile.buttonText}</span>
            <ArrowRight className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="order-1 md:order-2 flex justify-center items-center relative h-[450px] sm:h-[550px] p-8">

            <div className="relative w-[400px] h-[400px] sm:w-[450px] sm:h-[450px] z-10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/50 transition-all duration-500 hover:scale-[1.05]">
                <img 
                src={profile.images.main} 
                alt={`${profile.name} main profile picture`}
                className="w-full h-full object-cover"
                // Fallback image on error
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x400/000/fff?text=Main+Image+Error"; }}
                />
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default MySelfSection;
