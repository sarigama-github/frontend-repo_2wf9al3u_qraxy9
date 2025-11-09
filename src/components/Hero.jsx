import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.12),transparent_40%),_radial-gradient(circle_at_80%_30%,rgba(244,63,94,0.12),transparent_45%),_radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_40%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 mb-4 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            Daily motivation. Practical wins.
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Build momentum. Fuel your day.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            AR MOTIVATION delivers bite-sized motivation and real-life strategies to help you show up, level up, and stay consistent.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#subscribe"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 text-base shadow-lg shadow-amber-500/30 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              Subscribe free
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#videos"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white bg-white/10 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Watch videos
            </a>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[{
            title: 'Fast hits of motivation',
            body: 'Short, powerful videos to spark action in minutes.'
          },{
            title: 'Real tactics',
            body: 'Simple steps to build habits, confidence, and discipline.'
          },{
            title: 'Made for your day',
            body: 'Mobile-first content with clean design and quick navigation.'
          }].map((b, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-1 text-sm text-white/80">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
