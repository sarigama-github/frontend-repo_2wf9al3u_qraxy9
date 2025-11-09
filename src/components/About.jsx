import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-black text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About AR MOTIVATION</h2>
        <p className="mt-3 text-white/80 text-base">
          AR MOTIVATION started with one promise: help you turn motivation into momentum. We create fast, practical content for students, creators, athletes, and anyone building their next chapter.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <h3 className="font-semibold">Mission</h3>
            <p className="text-sm text-white/70 mt-1">Deliver daily motivation and simple tactics that make action easier than excuses.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <h3 className="font-semibold">Values</h3>
            <p className="text-sm text-white/70 mt-1">Clarity, consistency, kindness. No fluff—only what helps you move.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <h3 className="font-semibold">Community</h3>
            <p className="text-sm text-white/70 mt-1">15–35 year olds seeking short, practical wins to build real confidence.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
