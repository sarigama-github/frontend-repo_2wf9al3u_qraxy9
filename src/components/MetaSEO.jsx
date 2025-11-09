import React, { useEffect } from 'react';

export default function MetaSEO() {
  useEffect(() => {
    const title = 'AR MOTIVATION — Daily Motivation, Mindset and Discipline';
    const description = 'Short, powerful videos and articles to help you build momentum, confidence, and discipline. Subscribe for daily motivation.';
    const url = window.location.origin || 'https://armotivation.example';
    const image = `${url}/og-card.jpg`;

    document.title = title;

    const setMeta = (name, attr, content) => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', 'name', description);
    setMeta('og:title', 'property', title);
    setMeta('og:description', 'property', description);
    setMeta('og:type', 'property', 'website');
    setMeta('og:url', 'property', url);
    setMeta('og:image', 'property', image);
    setMeta('twitter:card', 'name', 'summary_large_image');
    setMeta('twitter:title', 'name', title);
    setMeta('twitter:description', 'name', description);
    setMeta('twitter:image', 'name', image);

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AR MOTIVATION',
      url,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${url}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };

    const videos = [
      {
        '@type': 'VideoObject',
        name: 'Start before you feel ready',
        description: 'A quick push to take action today and build confidence.',
        thumbnailUrl: [`${url}/thumb1.jpg`],
        uploadDate: '2024-01-01',
        contentUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ];

    const blogArticles = [
      {
        '@type': 'Article',
        headline: 'How to build discipline in 10 minutes a day',
        description: 'A simple framework to stay consistent even when motivation fades.',
        author: { '@type': 'Person', name: 'AR Motivation' },
        datePublished: '2024-01-15'
      }
    ];

    const jsonLd = document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': [structuredData, ...videos, ...blogArticles] });
    document.head.appendChild(jsonLd);

    // Privacy-friendly analytics (Plausible). Replace domain with your live domain.
    const analytics = document.createElement('script');
    analytics.setAttribute('defer', '');
    analytics.setAttribute('data-domain', 'armotivation.site');
    analytics.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(analytics);

    return () => {
      if (jsonLd && jsonLd.parentNode) jsonLd.parentNode.removeChild(jsonLd);
      if (analytics && analytics.parentNode) analytics.parentNode.removeChild(analytics);
    };
  }, []);

  return null;
}
