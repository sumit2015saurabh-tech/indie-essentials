export type TestimonialType = 'product' | 'consultation' | 'delivery';

export interface Testimonial {
  id: string;
  type: TestimonialType;
  name: string;
  location: string;
  rating: number;
  product?: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    type: 'product',
    name: 'Rahul M.',
    location: 'Mumbai, India',
    rating: 5,
    product: 'Indie Stamina Builder Syrup',
    quote: 'Noticed a real difference in energy within three weeks. The syrup tastes herbal but pleasant, and delivery was completely discreet — plain brown box, no branding outside.',
  },
  {
    id: 't2',
    type: 'product',
    name: 'Priya S.',
    location: 'Bengaluru, India',
    rating: 5,
    product: 'Ashwagandha Vitality Plus',
    quote: 'I was sceptical about ordering wellness products online, but everything arrived sealed and verified. Sleep improved and I feel more balanced day to day.',
  },
  {
    id: 't3',
    type: 'product',
    name: 'James T.',
    location: 'London, UK',
    rating: 5,
    product: 'Bullet Bliss Mini Vibrator',
    quote: 'Ordered from the UK and it reached me in nine days. Packaging was neutral, product quality is excellent, and customer support answered my questions quickly.',
  },
  {
    id: 't4',
    type: 'consultation',
    name: 'Ananya K.',
    location: 'Delhi, India',
    rating: 5,
    product: 'Private Wellness Consultation',
    quote: 'The counsellor was warm, non-judgemental and genuinely helpful. I finally had a safe space to ask questions I had avoided for years. Worth every rupee.',
  },
  {
    id: 't5',
    type: 'consultation',
    name: 'David & Meera',
    location: 'Dubai, UAE',
    rating: 5,
    product: 'Ayurvedic Couples Session',
    quote: 'We booked the couples session from abroad over video. Practical Ayurvedic advice on diet, stress and intimacy — no awkwardness, just clarity and care.',
  },
  {
    id: 't6',
    type: 'consultation',
    name: 'Sneha R.',
    location: 'Pune, India',
    rating: 5,
    product: 'Hormonal Health Assessment',
    quote: 'My lab reports were reviewed in detail and I got a clear supplement plan. Follow-up notes were sent privately. Felt heard, not rushed.',
  },
  {
    id: 't7',
    type: 'delivery',
    name: 'Arjun P.',
    location: 'Hyderabad, India',
    rating: 5,
    quote: 'Fast delivery across India — ordered on Monday, received Wednesday. Outer box had no product names. Exactly what you want for sensitive purchases.',
  },
  {
    id: 't8',
    type: 'delivery',
    name: 'Lisa H.',
    location: 'Toronto, Canada',
    rating: 4,
    quote: 'International shipping to Canada worked smoothly. Tracking was shared promptly and customs paperwork was handled well. Happy repeat customer.',
  },
];

export function testimonialsByType(type: TestimonialType) {
  return TESTIMONIALS.filter((t) => t.type === type);
}
