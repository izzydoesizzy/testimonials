// More variety: short, medium, long testimonials + mixed ratings (3–5)
// Note: keeping your existing HTML structure, accessibility, and rendering logic intact.

const testimonials = [
  {
    id: 'testimonial-izzy-1',
    testimonial:
      'Two sessions, zero fluff. My LinkedIn finally sounds like me.',
    name: 'Marisol Vega',
    job: 'Founder, Suncrest Studio',
    image: {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Marisol Vega.',
    },
    rating: 5,
  },
  {
    id: 'testimonial-izzy-2',
    testimonial:
      'We came in with a messy offer and too many “maybe” ideas. Izzy helped us pick a lane, sharpen the promise, and build a simple plan we could actually ship. Within six weeks, we doubled inbound inquiries and cut our sales cycle down because the story was finally clear.',
    name: 'Dylan Brooks',
    job: 'Growth Lead, Northlane',
    image: {
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Dylan Brooks.',
    },
    rating: 5,
  },
  {
    id: 'testimonial-izzy-3',
    testimonial:
      'Actionable feedback, no ego, no confusion.',
    name: 'Priya Nair',
    job: 'Product Manager, Clearpath',
    image: {
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Priya Nair.',
    },
    rating: 4,
  },
  {
    id: 'testimonial-izzy-4',
    testimonial:
      'I was stuck in perfection mode, rewriting the same intro over and over. Izzy got me out of my head and into execution. We landed on a simple positioning statement, a weekly content rhythm, and a launch plan I could run immediately. I posted the next day, got DMs, and booked two calls that week.',
    name: 'Harper Lewis',
    job: 'Coach & Consultant',
    image: {
      src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Harper Lewis.',
    },
    rating: 5,
  },
  {
    id: 'testimonial-izzy-5',
    testimonial:
      'Big-picture clarity plus practical steps. Exactly what our team needed.',
    name: 'Jules Kim',
    job: 'Creative Director, Arc + Field',
    image: {
      src: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Jules Kim.',
    },
    rating: 4,
  },
  {
    id: 'testimonial-izzy-6',
    testimonial:
      'Izzy has this calm, structured way of cutting through noise. We walked out with a one-page roadmap that I could forward to stakeholders without adding “context” paragraphs. It reduced back-and-forth instantly, and our internal alignment got noticeably better. The work felt lighter because the decision-making was finally crisp.',
    name: 'Theo Carter',
    job: 'Operations, Horizon Labs',
    image: {
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Theo Carter.',
    },
    rating: 5,
  },
  {
    id: 'testimonial-izzy-7',
    testimonial:
      'Best alignment workshop we have had in ages. Our next sprint was a monster.',
    name: 'Amina Yusuf',
    job: 'Team Lead, Harbor Collective',
    image: {
      src: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Amina Yusuf.',
    },
    rating: 5,
  },
  {
    id: 'testimonial-izzy-8',
    testimonial:
      'The positioning improvements were real, our proposals got tighter. I wanted a bit more help on follow-up scripts, but the core strategy absolutely helped conversions.',
    name: 'Luis Moreno',
    job: 'Sales Director, Lantern',
    image: {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Luis Moreno.',
    },
    rating: 4,
  },
  {
    id: 'testimonial-izzy-9',
    testimonial:
      'We had a solid product but the story was muddy. Izzy found the missing thread and helped us articulate it in plain language that partners could repeat. That new narrative changed our outreach overnight. We reopened conversations we had “lost,” secured two partnership intros within a month, and our pitch deck finally feels like it matches the quality of what we do.',
    name: 'Sofia Patel',
    job: 'Partnerships, Brightline',
    image: {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Sofia Patel.',
    },
    rating: 5,
  },
  {
    id: 'testimonial-izzy-10',
    testimonial:
      'Quick win: clearer headline, stronger “about” section, better calls-to-action. I stopped sounding like a resume and started sounding like a human.',
    name: 'Ethan Park',
    job: 'Senior Engineer',
    image: {
      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Ethan Park.',
    },
    rating: 4,
  },
  {
    id: 'testimonial-izzy-11',
    testimonial:
      'I was skeptical that “messaging work” would move the needle. It did. Izzy helped me turn vague expertise into a clear offer with a clean before/after story. The biggest shift was confidence, I stopped hedging. The week after our sprint, I raised my rates, sent three outreach messages, and closed a client at my new price. No hype, just clarity and execution.',
    name: 'Nadia Chen',
    job: 'Consultant',
    image: {
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Nadia Chen.',
    },
    rating: 5,
  },
  {
    id: 'testimonial-izzy-12',
    testimonial:
      'Helpful structure and strong edits. A couple steps took longer than I expected on my side, but the direction was spot on.',
    name: 'Jordan Sinclair',
    job: 'Marketing Lead',
    image: {
      src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      alt: 'Portrait of Jordan Sinclair.',
    },
    rating: 3,
  },
];

const container = document.getElementById('testimonial-grid');

const starSvg = (filled) => `
  <svg class="testimonial-star ${filled ? '' : 'testimonial-star-empty'}" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
`;

const renderCard = (item) => {
  const card = document.createElement('article');
  card.className = 'testimonial-card';
  card.innerHTML = `
    <div class="testimonial-rating" aria-hidden="true">
      ${Array.from({ length: 5 })
        .map((_, index) => starSvg(index < item.rating))
        .join('')}
    </div>
    <span class="sr-only">${item.rating} out of 5 stars</span>
    <p class="testimonial-content">“${item.testimonial}”</p>
    <div class="testimonial-meta">
      <div class="testimonial-avatar">
        <img src="${item.image.src}" alt="${item.image.alt}" loading="lazy" />
      </div>
      <div class="testimonial-author">
        <strong>${item.name}</strong>
        <span>${item.job}</span>
      </div>
    </div>
  `;
  return card;
};

if (container) {
  testimonials.forEach((item) => {
    container.appendChild(renderCard(item));
  });
}
