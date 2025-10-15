'use client'
import React from 'react';
import { ArrowUpRight } from 'lucide-react'; 

const MySelfSection = () => {

  const profile = {
    name: "Anuj",
    role: "Frontend Developer",
    location: "Building digital experiences",
    description: "Specialized in Next.js and React development. I create performant, accessible interfaces that solve real business problems. Currently available for select projects.",
    buttonText: "Contact",
    email: "hello@anuj.dev",
    images: {
      main: "./pfp.png",
    },
  };

  return (
    <section className="min-h-screen bg-zinc-900 text-white flex items-center p-6 sm:p-12 lg:p-20">

      <div className="max-w-7xl w-full mx-auto">
        
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left column - Image */}
          <div className="md:col-span-4">
            <div className="sticky top-20">
              <div className="aspect-[3/4] w-full max-w-sm overflow-hidden bg-zinc-800">
                <img 
                  src={profile.images.main} 
                  alt={`${profile.name}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x400/27272a/fff?text=A"; }}
                />
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="md:col-span-8 flex flex-col justify-center space-y-12">
            
            <div className="space-y-8">
              <div className="space-y-3">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight">
                  {profile.name}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-zinc-400">
                  <span className="text-base font-mono">{profile.role}</span>
                  <span className="hidden sm:block text-zinc-600">—</span>
                  <span className="text-sm">{profile.location}</span>
                </div>
              </div>

              <div className="h-px bg-zinc-800 w-20"></div>

              <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed font-light">
                {profile.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <button
                onClick={() => { /* Add your navigation logic here */ }}
                className="group inline-flex items-center justify-between sm:justify-start gap-3 px-6 py-4 bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors"
              >
                <span>{profile.buttonText}</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              
              <a 
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-6 py-4 text-zinc-400 hover:text-white transition-colors font-mono text-sm"
              >
                {profile.email}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MySelfSection;