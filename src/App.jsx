import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { VideoGallery, ShortsGrid, BlogShopContact } from './components/Sections';
import Newsletter from './components/Newsletter';
import MetaSEO from './components/MetaSEO';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <MetaSEO />
      <a href="#home" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-amber-500 text-black px-3 py-2 rounded">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <VideoGallery />
        <ShortsGrid />
        <BlogShopContact />
        <Newsletter />
      </main>
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} AR MOTIVATION. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#blog" className="hover:text-white">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
