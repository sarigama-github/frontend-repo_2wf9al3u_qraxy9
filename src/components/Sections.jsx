import React, { useMemo, useState } from 'react';
import { Video, Scissors, Newspaper, ShoppingBag, Search, Send, Twitter, Instagram, Youtube } from 'lucide-react';
import About from './About';
import Newsletter from './Newsletter';

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16 sm:py-20 bg-black text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="text-white/70 mt-1 text-sm sm:text-base">{subtitle}</p>}
        </div>
        <div className="hidden sm:block text-white/60 text-sm">AR MOTIVATION</div>
      </div>
      {children}
    </div>
  </section>
);

export function VideoGallery() {
  const categories = ['All', 'Mindset', 'Discipline', 'Confidence'];
  const [active, setActive] = useState('All');

  const videos = useMemo(() => ([
    { id: 'dQw4w9WgXcQ', title: 'Start before you feel ready', cat: 'Confidence' },
    { id: '3GwjfUFyY6M', title: 'Daily discipline wins', cat: 'Discipline' },
    { id: 'oHg5SJYRHA0', title: 'Rewire your mindset', cat: 'Mindset' },
  ]), []);

  const filtered = active === 'All' ? videos : videos.filter(v => v.cat === active);

  return (
    <Section id="videos" title="Videos" subtitle="Bite-sized talks and deep dives to fuel your momentum.">
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-3 py-1.5 rounded-full text-sm border transition ${active===c ? 'bg-amber-500 text-black border-transparent' : 'border-white/15 text-white/80 hover:text-white hover:bg-white/[0.06]'}`}
            aria-pressed={active===c}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((v) => (
          <article key={v.id} className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.04]">
            <div className="aspect-video">
              <iframe
                title={v.title}
                width="560"
                height="315"
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${v.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{v.title}</h3>
              <p className="text-xs text-white/60 mt-1 inline-flex items-center gap-1"><Video className="h-3 w-3"/> {v.cat}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ShortsGrid() {
  const shorts = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `60-sec boost #${i + 1}`,
    thumb: `https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop`
  }));

  return (
    <Section id="shorts" title="Shorts / Clips" subtitle="Quick hits to reset your focus and energy.">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {shorts.map(s => (
          <a key={s.id} href="#videos" className="group block rounded-lg overflow-hidden border border-white/10 bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">
            <div className="aspect-[9/16] bg-cover bg-center" style={{ backgroundImage: `url(${s.thumb})` }} />
            <div className="p-2 text-xs sm:text-sm">
              <span className="line-clamp-1 group-hover:text-amber-400 transition">{s.title}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

export function BlogShopContact() {
  const posts = [
    { id: 1, title: 'How to build discipline in 10 minutes a day', excerpt: 'A simple framework to stay consistent even when motivation fades.' },
    { id: 2, title: 'Confidence is a skill — here’s how to train it', excerpt: 'Small daily reps that compound into unshakeable self-belief.' },
  ];

  const products = [
    { id: 1, title: 'Morning Momentum Pack (Digital)', price: '$9', tag: 'Download' },
    { id: 2, title: 'AR MOTIVATION Tee', price: '$25', tag: 'Merch' },
  ];

  const socials = [
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  ];

  return (
    <>
      <Section id="blog" title="Blog" subtitle="Searchable articles packed with practical motivation.">
        <div className="mb-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
          <Search className="h-4 w-4 text-white/60" />
          <input
            type="search"
            placeholder="Search articles..."
            className="w-full bg-transparent text-sm focus:outline-none placeholder:text-white/50"
            aria-label="Search blog"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map(p => (
            <article key={p.id} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-white/70 mt-1">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="shop" title="Shop" subtitle="Digital downloads and clean merch to keep you moving.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(prod => (
            <div key={prod.id} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{prod.title}</h3>
                <span className="text-amber-400 text-sm">{prod.tag}</span>
              </div>
              <p className="text-white mt-2 font-bold">{prod.price}</p>
              <button className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 px-3 py-1.5 text-sm">
                <ShoppingBag className="h-4 w-4" /> Add to cart
              </button>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Say hi or request a collab.">
        <div className="grid md:grid-cols-2 gap-6">
          <form className="rounded-xl border border-white/10 bg-white/[0.04] p-4 space-y-3" aria-label="Contact form">
            <input type="text" placeholder="Your name" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300" />
            <input type="email" placeholder="Email" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300" />
            <textarea placeholder="Message" rows={4} className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300" />
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold px-4 py-2 text-sm">
              <Send className="h-4 w-4" /> Send
            </button>
          </form>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <h3 className="font-semibold">Connect</h3>
            <p className="text-sm text-white/70 mt-1">Follow for daily clips and behind-the-scenes.</p>
            <div className="mt-4 flex gap-3">
              {socials.map(s => (
                <a key={s.name} href={s.href} className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 px-3 py-2 text-sm">
                  <s.icon className="h-4 w-4" /> {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default function SectionsContainer() {
  return (
    <>
      <About />
      <VideoGallery />
      <ShortsGrid />
      <BlogShopContact />
      <Newsletter />
    </>
  );
}
