import React, { useRef, useState } from "react";
// FIX: Changed import path from "motion/react" to the standard "framer-motion"
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// Icons from the requested @tabler/icons-react library
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconLayoutNavbarCollapse,
} from "@tabler/icons-react";
// clsx and twMerge utility implementations (equivalent to the npm packages requested)
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to conditionally join class names and merge Tailwind classes.
 * This is the equivalent of importing 'clsx' and 'tailwind-merge'.
 */
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Component Definitions ---

/**
 * Main wrapper for the Floating Dock. Renders both desktop and mobile versions.
 */
export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName
}) => {
  return (
    // The main container for the dock. Uses 'fixed' positioning and z-index to stay on top.
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4">
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </div>
  );
};

/**
 * Mobile-specific collapsible dock, best positioned at the bottom right.
 */
const FloatingDockMobile = ({
  items,
  className
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {/* Render dock items when open */}
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute right-0 bottom-full mb-2 flex flex-col gap-3 rounded-xl p-2 bg-white/90 backdrop-blur-sm shadow-xl dark:bg-neutral-900/90">
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                // Animate items in a staggered fashion from bottom to top
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 20,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                // NOTE: Framer Motion uses a single 'transition' prop instead of 'transition' and 'delay' separately for exit.
                transition={{ delay: (items.length - 1 - idx) * 0.05, type: 'spring', stiffness: 200, damping: 20 }}>
                <a
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100/80 dark:bg-neutral-800/80 hover:bg-gray-200 dark:hover:bg-neutral-700 transition duration-200 shadow-md">
                  <div className="h-5 w-5">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl dark:bg-neutral-800 transition duration-200 transform hover:scale-105">
        <IconLayoutNavbarCollapse className="h-6 w-6 text-indigo-500 dark:text-indigo-300" />
      </button>
    </div>
  );
};

/**
 * Desktop-specific dock with mouse-follow/magnification effect.
 */
const FloatingDockDesktop = ({
  items,
  className
}) => {
  // Motion value to track the mouse X position
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "hidden md:flex items-end gap-3 rounded-[32px] bg-white/80 backdrop-blur-md px-6 pb-4 shadow-2xl border border-white/50 dark:bg-neutral-900/80 dark:border-neutral-800 transition duration-300",
        className
      )}>
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

/**
 * Individual icon container with the spring-based magnification effect.
 */
function IconContainer({
  mouseX,
  title,
  icon,
  href
}) {
  let ref = useRef(null);
  const BASE_SIZE = 48; // Base width/height for the icon container
  const MAX_SIZE = 80;  // Maximum magnified width/height

  // Calculates the distance of the mouse from the center of the icon
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Maps the distance to the container size (width and height)
  // [-150, 0, 150] is the range in pixels from the center of the icon
  let sizeTransform = useTransform(distance, [-150, 0, 150], [BASE_SIZE, MAX_SIZE, BASE_SIZE]);
  
  // Maps the distance to the icon size (internal SVG/Image)
  let iconSizeTransform = useTransform(distance, [-150, 0, 150], [BASE_SIZE / 2.4, MAX_SIZE / 2, BASE_SIZE / 2.4]);

  // Apply spring physics for smooth magnification effect
  const springConfig = { mass: 0.1, stiffness: 200, damping: 15 };

  let size = useSpring(sizeTransform, springConfig);
  let iconSize = useSpring(iconSizeTransform, springConfig);

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200/50 dark:bg-neutral-800/50 transition duration-200 shadow-lg hover:bg-gray-200 dark:hover:bg-neutral-700">
        <AnimatePresence>
          {/* Tooltip that appears on hover */}
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 5, x: "-50%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute -top-10 left-1/2 w-fit rounded-lg bg-neutral-900 px-3 py-1 text-sm whitespace-pre text-white shadow-xl dark:bg-neutral-800 dark:text-neutral-200">
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Icon container whose size also changes */}
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center text-neutral-600 dark:text-neutral-400">
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

// --- Main Application Component (Demo) ---

/**
 * Main application component that uses the FloatingDock.
 * This component is named 'App' for the runnable context.
 */
export default function Socials() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-indigo-500" />
      ),
      href: "#",
    },
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-teal-500" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-amber-500" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        // Using an <img> tag as specified in the original request
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={24}
          height={24}
          alt="Aceternity Logo"
          className="rounded-full" />
      ),
      href: "https://ui.aceternity.com",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-sky-500" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-800 dark:text-white" />
      ),
      href: "https://x.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-purple-500" />
      ),
      href: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-800 dark:text-neutral-200 mb-4">
        Magnetic Floating Dock
      </h1>
      <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-12 text-center max-w-xl">
        Hover over the dock icons below on desktop to see the magnetic effect, or tap the menu button on mobile.
      </p>

      {/* Placeholder content to show the dock stays at the bottom */}
      <div className="h-[40vh]"></div>

      <FloatingDock
        items={links}
        // Positioning the mobile dock to the bottom right for better UX
        mobileClassName="fixed bottom-6 right-6" 
      />
    </div>
  );
}