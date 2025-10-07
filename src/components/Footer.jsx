"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// --- Mock Data (Replace with your actual constants) ---
const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { id: 1, label: "GitHub", href: "https://github.com/yourusername", icon: <FaGithub size={24} /> },
  { id: 2, label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: <FaLinkedin size={24} /> },
  { id: 3, label: "Email", href: "mailto:youremail@example.com", icon: <FaEnvelope size={24} /> },
];
// --- End Mock Data ---


// Starfield Canvas Component
const StarfieldCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const stars = [];
    const numStars = 100;
    
    // Fallback resize/creation function for SSR
    const safeWindow = typeof window !== 'undefined' ? window : { innerWidth: 800, innerHeight: 600 };
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth || safeWindow.innerWidth;
      canvas.height = canvas.offsetHeight || safeWindow.innerHeight;
    };

    const createStars = () => {
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.8,
          opacity: Math.random() * 0.3 + 0.3,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
        const currentOpacity = star.opacity + twinkle * 0.1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, currentOpacity))})`;
        ctx.shadowBlur = 2;
        ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    animate(0);

    const handleResize = () => {
      resizeCanvas();
      createStars();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
};

// Renamed and exported as "Footer"
const Footer = ({ portfolioName = "Developer" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div
        className="relative h-[550px] overflow-hidden" // Set fixed height to push content up
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 left-0 h-[550px] w-full"> {/* Fixes the footer to the bottom */}
          <footer
            className="relative flex h-full w-full flex-col justify-between bg-gray-950 text-white"
            role="contentinfo"
          >
            {/* Starfield Background */}
            <StarfieldCanvas />

            {/* Content Container */}
            <div
              className="relative flex flex-grow items-center px-4 md:px-8 lg:px-10"
              style={{ zIndex: 3 }}
            >
              <div className="mx-auto w-full max-w-7xl py-8 md:py-12">
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-12">
                  
                  {/* Navigation Links */}
                  <nav className="flex-1" aria-label="Footer navigation">
                    <ul className="space-y-4 text-white">
                      {NAV_ITEMS.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="block w-fit text-lg font-semibold transition-colors duration-200 hover:text-cyan-400 md:text-xl"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Social Links & Copyright */}
                  <div className="flex-1 md:text-right">
                    <h3 className="mb-6 text-xl font-bold tracking-wider text-cyan-400">
                      Let's Connect
                    </h3>
                    <div className="mb-8 flex gap-4 md:justify-end">
                      {SOCIAL_LINKS.map((social) => (
                        <motion.a
                          key={social.id}
                          href={social.href}
                          target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white transition-all duration-200 hover:bg-cyan-500 hover:text-gray-900"
                          aria-label={social.label}
                          title={social.label}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">
                      © {currentYear} | Built with {" "}
                      <span className="text-red-500">❤️</span> and{" "}
                      <span className="text-cyan-400">✨</span> by {portfolioName}.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Name Watermark */}
            <div
              className="relative py-4 text-center text-[12vw] font-extrabold leading-none tracking-tighter text-white opacity-10 md:text-[14vw]"
              style={{ zIndex: 3 }}
            >
              {portfolioName}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;