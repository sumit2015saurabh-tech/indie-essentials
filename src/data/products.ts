export type Category = 'ayurvedic' | 'vitamins' | 'sextoys' | 'creams' | 'consultation';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: Category;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  description: string;
  benefits: string[];
  verified?: boolean;
  discreet?: boolean;
}

const B = import.meta.env.BASE_URL;

export const CATEGORIES: { id: Category; label: string; desc: string; icon: string }[] = [
  { id: 'ayurvedic', label: 'Ayurvedic', desc: 'Verified traditional formulations', icon: '🌿' },
  { id: 'vitamins', label: 'Vitamins', desc: 'Science-backed supplements', icon: '💊' },
  { id: 'sextoys', label: 'Sex Toys', desc: 'Premium pleasure devices & kits', icon: '💋' },
  { id: 'creams', label: 'Creams & Care', desc: 'Sensual skincare & lubricants', icon: '🧴' },
  { id: 'consultation', label: 'Consultations', desc: 'Private expert guidance', icon: '💬' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1', name: 'Ashwagandha Vitality Plus', slug: 'ashwagandha-vitality',
    category: 'ayurvedic', price: 899, originalPrice: 1199, rating: 4.8, reviews: 342,
    image: `${B}images/products/ayurvedic.png`, badge: 'Bestseller', verified: true,
    description: 'Ayurvedic adaptogen blend for stress relief, stamina and hormonal balance. GMP-certified, lab-tested.',
    benefits: ['Reduces cortisol', 'Supports libido naturally', 'Improves sleep quality'],
  },
  {
    id: 'p2', name: 'Shilajit Resin Pure', slug: 'shilajit-resin',
    category: 'ayurvedic', price: 1499, rating: 4.9, reviews: 218,
    image: `${B}images/products/shilajit.png`, badge: 'Premium', verified: true,
    description: 'Himalayan shilajit resin — mineral-rich Ayurvedic supplement for energy and vitality.',
    benefits: ['Natural energy boost', 'Mineral replenishment', 'Traditional purity tested'],
  },
  {
    id: 'p3', name: 'Kama Sutra Wellness Oil', slug: 'wellness-oil',
    category: 'ayurvedic', price: 649, rating: 4.7, reviews: 156,
    image: `${B}images/products/oil.png`, verified: true,
    description: 'Warm Ayurvedic massage oil with ashwagandha, saffron and sesame — for couples wellness rituals.',
    benefits: ['Aromatic relaxation', 'Skin nourishment', 'Couples bonding ritual'],
  },
  {
    id: 'p4', name: 'Vitamin D3 + K2 Complex', slug: 'vitamin-d3-k2',
    category: 'vitamins', price: 599, rating: 4.6, reviews: 89,
    image: `${B}images/products/vitamins.png`, verified: true,
    description: 'High-absorption D3 with K2 for bone health, immunity and mood support.',
    benefits: ['Immune support', 'Bone density', 'Mood regulation'],
  },
  {
    id: 'p5', name: 'Libido Support Multivitamin', slug: 'libido-multivitamin',
    category: 'vitamins', price: 799, originalPrice: 999, rating: 4.5, reviews: 124,
    image: `${B}images/products/vitamins.png`, badge: 'New',
    description: 'Zinc, maca, B-complex and L-arginine blend formulated for sexual wellness support.',
    benefits: ['Hormonal balance', 'Energy & stamina', 'Daily wellness'],
  },
  {
    id: 'p6', name: 'Omega-3 Intimate Health', slug: 'omega-3',
    category: 'vitamins', price: 699, rating: 4.4, reviews: 67,
    image: `${B}images/products/vitamins.png`,
    description: 'Pure fish oil omega-3 for circulation, heart health and overall vitality.',
    benefits: ['Circulation support', 'Anti-inflammatory', 'Heart health'],
  },
  {
    id: 'p7', name: 'Aura Personal Massager', slug: 'aura-massager',
    category: 'sextoys', price: 2499, originalPrice: 3299, rating: 4.9, reviews: 412,
    image: `${B}images/products/sex-toy-massager.png`, badge: 'Top Rated', discreet: true,
    description: 'Whisper-quiet, body-safe silicone massager with 10 modes. USB rechargeable, waterproof.',
    benefits: ['Body-safe silicone', 'Discreet packaging', '1-year warranty'],
  },
  {
    id: 'p8', name: 'Couples Connect Ring', slug: 'couples-ring',
    category: 'sextoys', price: 1299, rating: 4.7, reviews: 198,
    image: `${B}images/products/sex-toy-ring.png`, discreet: true,
    description: 'Stretchable silicone ring designed for couples — enhances shared intimate experiences.',
    benefits: ['Flexible fit', 'Rechargeable', 'Travel pouch included'],
  },
  {
    id: 'p9', name: 'Silk Touch Wand', slug: 'silk-touch-wand',
    category: 'sextoys', price: 1899, rating: 4.8, reviews: 267,
    image: `${B}images/products/sex-toy-wand.png`, badge: 'Popular', discreet: true,
    description: 'Elegant curved wand massager with velvet-touch finish and warming mode.',
    benefits: ['Warming technology', 'Medical-grade silicone', 'Quiet motor'],
  },
  {
    id: 'p16', name: 'Bullet Bliss Mini Vibrator', slug: 'bullet-bliss',
    category: 'sextoys', price: 999, originalPrice: 1299, rating: 4.8, reviews: 534,
    image: `${B}images/products/sex-toy-bullet.png`, badge: 'Bestseller', discreet: true,
    description: 'Pocket-sized bullet vibrator with 8 intensity levels. Perfect for beginners — discreet, powerful, travel-friendly.',
    benefits: ['Ultra-discreet size', 'USB rechargeable', 'Waterproof IPX7'],
  },
  {
    id: 'p17', name: 'Pulse Remote Couples Set', slug: 'pulse-remote-set',
    category: 'sextoys', price: 3499, originalPrice: 4299, rating: 4.9, reviews: 289,
    image: `${B}images/products/sex-toy-remote.png`, badge: 'Couples Pick', discreet: true,
    description: 'App and remote-controlled couples vibrator set — sync rhythms together from across the room.',
    benefits: ['App + remote control', 'Dual motor design', 'Premium gift packaging'],
  },
  {
    id: 'p18', name: 'Velvet Curve Pleasure Wand', slug: 'velvet-curve-wand',
    category: 'sextoys', price: 2199, rating: 4.7, reviews: 176,
    image: `${B}images/products/sex-toy-wand.png`, discreet: true,
    description: 'Ergonomic curved wand with dual-zone stimulation, velvet-soft silicone and 12 vibration patterns.',
    benefits: ['Dual stimulation zones', 'Velvet-touch finish', '2-year warranty'],
  },
  {
    id: 'p19', name: 'Indie Starter Pleasure Kit', slug: 'starter-pleasure-kit',
    category: 'sextoys', price: 2799, originalPrice: 3599, rating: 4.8, reviews: 412,
    image: `${B}images/products/sex-toy-kit.png`, badge: 'Starter Kit', discreet: true,
    description: 'Curated beginner kit — bullet vibrator, ring, water-based lube sample and illustrated guide. Everything to explore confidently.',
    benefits: ['Beginner-friendly', 'Includes lube sample', 'Illustrated pleasure guide'],
  },
  {
    id: 'p10', name: 'Sensation Enhancement Gel', slug: 'sensation-gel',
    category: 'creams', price: 449, rating: 4.6, reviews: 183,
    image: `${B}images/products/cream.png`, discreet: true,
    description: 'Water-based, pH-balanced gel for enhanced sensitivity. Dermatologist tested.',
    benefits: ['pH balanced', 'Non-sticky formula', 'Compatible with latex'],
  },
  {
    id: 'p11', name: 'Intimate Moisturising Cream', slug: 'intimate-cream',
    category: 'creams', price: 549, rating: 4.7, reviews: 145,
    image: `${B}images/products/cream.png`, verified: true,
    description: 'Hyaluronic acid intimate moisturiser for daily comfort — fragrance-free, gynaecologist approved.',
    benefits: ['Long-lasting moisture', 'Fragrance-free', 'Daily use safe'],
  },
  {
    id: 'p12', name: 'Rose & Saffron Body Butter', slug: 'rose-body-butter',
    category: 'creams', price: 699, rating: 4.5, reviews: 92,
    image: `${B}images/products/cream.png`,
    description: 'Luxurious body butter with rose, saffron and shea — for sensual self-care rituals.',
    benefits: ['Deep hydration', 'Natural ingredients', 'Aromatherapy benefits'],
  },
  {
    id: 'p13', name: 'Private Wellness Consultation', slug: 'wellness-consult-30',
    category: 'consultation', price: 999, rating: 5.0, reviews: 78,
    image: `${B}images/products/consultation.png`, badge: 'Expert',
    description: '30-minute confidential video call with a certified sexual wellness counsellor.',
    benefits: ['100% confidential', 'Certified experts', 'Personalised guidance'],
  },
  {
    id: 'p14', name: 'Ayurvedic Couples Session', slug: 'ayurvedic-couples',
    category: 'consultation', price: 1499, rating: 4.9, reviews: 45,
    image: `${B}images/products/consultation.png`,
    description: '60-minute Ayurvedic practitioner session for couples — intimacy, diet and lifestyle guidance.',
    benefits: ['Holistic approach', 'Custom wellness plan', 'Follow-up notes'],
  },
  {
    id: 'p15', name: 'Hormonal Health Assessment', slug: 'hormonal-assessment',
    category: 'consultation', price: 1999, rating: 4.8, reviews: 34,
    image: `${B}images/products/consultation.png`, badge: 'Comprehensive',
    description: 'Full hormonal health review with lab report analysis and supplement recommendations.',
    benefits: ['Lab report review', 'Supplement plan', '3-month follow-up'],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCategory(cat?: Category) {
  if (!cat) return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === cat);
}

export function sexToys() {
  return PRODUCTS.filter((p) => p.category === 'sextoys');
}
