'use client';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button only after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 z-20 right-6 p-3 rounded-full shadow-lg border border-gray-300 
        transition-all duration-300 bg-white hover:bg-gray-100 flex items-center justify-center
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 text-black" />
    </button>
  );
}
