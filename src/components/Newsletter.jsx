import React from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section id="subscribe" className="py-16 sm:py-20 bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Join 10,000+ getting daily motivation</h2>
        <p className="text-white/70 mt-2">One click. Zero spam. Pure momentum in your inbox.</p>
        <form
          className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
          onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}
          aria-label="Newsletter signup"
        >
          <div className="flex-1 min-w-0">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-full bg-black/40 border border-white/15 px-4 py-3 text-sm placeholder:text-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 text-sm shadow-lg shadow-amber-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            <Mail className="h-4 w-4" /> 1‑click Subscribe
          </button>
        </form>
        <p className="text-xs text-white/50 mt-3">We respect your privacy. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
