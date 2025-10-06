'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // DVD screensaver state
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ dx: 2, dy: 2 });
  const [color, setColor] = useState('#22c55e'); // initial green

  // Array of bright colors
  const colors = ['#22c55e', '#f87171', '#facc15', '#38bdf8', '#a78bfa', '#f472b6', '#fbbf24'];

  // Contact form handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  // DVD logo animation
  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      const container = containerRef.current;
      const logo = logoRef.current;
      if (!container || !logo) return;

      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const logoWidth = logo.clientWidth;
      const logoHeight = logo.clientHeight;

      let newX = position.x + velocity.dx;
      let newY = position.y + velocity.dy;
      let newDx = velocity.dx;
      let newDy = velocity.dy;
      let hitWall = false;

      // Bounce inside the container bounds
      if (newX <= 0 || newX + logoWidth >= containerWidth) {
        newDx = -newDx;
        hitWall = true;
      }
      if (newY <= 0 || newY + logoHeight >= containerHeight) {
        newDy = -newDy;
        hitWall = true;
      }

      // Change color on wall hit
      if (hitWall) {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(newColor);
      }

      setPosition({ x: newX, y: newY });
      setVelocity({ dx: newDx, dy: newDy });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, velocity]);

  return (
    <section className="min-h-screen bg-black text-white py-12 px-6 relative overflow-hidden flex items-center">
      {/* Background map effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-xs text-gray-600 transform -rotate-12">
          Brooklyn • Prospect Park • Empire Blvd
        </div>
        <div className="absolute top-1/2 right-1/3 text-xs text-gray-600 transform rotate-6">
          Sterling St • Lincoln Rd • Maple St
        </div>
        <div className="absolute bottom-1/3 left-1/2 text-xs text-gray-600">
          Clarkson Ave • Parkside Ave • Winthrop St
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
          Contact Us<span className="text-green-400">.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column: Info + DVD Screensaver */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="border-l-4 border-green-400 pl-6 space-y-6">
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-2">Store hours</h3>
              </div>
              <div>
                <div className="text-base">
                  <p className="font-semibold">New Delhi, Delhi</p>
                </div>
              </div>
              <div>
                <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Contacts</h3>
                <div className="space-y-2">
                  <a href="mailto:mountain@point.com" className="flex items-center gap-2 text-base hover:text-green-400 transition-colors">
                    <Mail className="w-4 h-4" /> mountain@point.com
                  </a>
                  <a href="tel:4155007665" className="flex items-center gap-2 text-base hover:text-green-400 transition-colors">
                    <Phone className="w-4 h-4" /> 415 500 7665
                  </a>
                </div>
              </div>
            </div>

            {/* DVD Screensaver */}
            <div
              ref={containerRef}
              className="bg-zinc-900 p-4 border-l-4 border-green-400 rounded-md mt-6 relative h-[200px] md:h-[250px] overflow-hidden"
            >
              <div
                ref={logoRef}
                className="absolute w-24 h-12 flex items-center justify-center font-bold text-black text-sm rounded-md"
                style={{ left: position.x, top: position.y, backgroundColor: color }}
              >
                DVD
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative">
            {/* Corner Borders */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-green-400"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-green-400"></div>

            <div className="bg-zinc-900 p-6 md:p-8 relative">
              <h3 className="text-xl font-bold mb-6">Contact form</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-700 py-2 text-base focus:border-green-400 focus:outline-none transition-colors placeholder-gray-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-700 py-2 text-base focus:border-green-400 focus:outline-none transition-colors placeholder-gray-600"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-700 py-2 text-base focus:border-green-400 focus:outline-none transition-colors placeholder-gray-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-400 text-black font-bold text-base py-3 px-6 hover:bg-green-300 transition-colors uppercase tracking-wider"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
