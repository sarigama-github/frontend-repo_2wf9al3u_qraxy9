import React from 'react';
import { Rocket, Play, ShoppingBag, Newspaper, Video, Mail } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md transition"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-black/40 border-b border-white/10">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center gap-2 text-white">
          <Rocket className="h-6 w-6 text-amber-400" aria-hidden="true" />
          <span className="font-semibold tracking-tight">AR MOTIVATION</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#videos"><span className="inline-flex items-center gap-1"><Video className="h-4 w-4" /> Videos</span></NavLink>
          <NavLink href="#shorts">Shorts</NavLink>
          <NavLink href="#blog"><Newspaper className="h-4 w-4" /> Blog</NavLink>
          <NavLink href="#shop"><ShoppingBag className="h-4 w-4" /> Shop</NavLink>
          <NavLink href="#contact"><Mail className="h-4 w-4" /> Contact</NavLink>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#subscribe"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold px-4 py-2 text-sm shadow-lg shadow-amber-500/30 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            aria-label="Subscribe to the newsletter"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Subscribe
          </a>
        </div>
      </nav>
    </header>
  );
}
