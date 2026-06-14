import { Link } from 'react-router-dom';
import { Star, Shield, Package, Heart, ArrowRight } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '@/data/products';

const HERO = `${import.meta.env.BASE_URL}images/hero.png`;

export function HomePage() {
  const featured = PRODUCTS.filter((p) => p.badge).slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden">
        <img src={HERO} alt="" className="w-full h-[420px] md:h-[500px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/85 via-cream/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">India&apos;s Indie Wellness Boutique</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-burgundy leading-tight max-w-xl">
              Wellness that honours your <span className="gold-text">intimacy</span>
            </h1>
            <p className="text-plum/70 mt-4 max-w-lg leading-relaxed">
              Ayurvedic remedies, verified vitamins, intimate care and private consultations —
              delivered discreetly to your door.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
                Explore Shop <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/consultations" className="btn-outline">Book Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Shield, label: 'Verified Products', desc: 'Lab-tested Ayurvedic' },
          { icon: Package, label: 'Discreet Delivery', desc: 'Plain packaging' },
          { icon: Heart, label: 'Expert Care', desc: 'Private consultations' },
          { icon: Star, label: '4.8★ Average', desc: '2,000+ happy customers' },
        ].map(({ icon: Icon, label, desc }) => (
          <div key={label} className="text-center p-4 rounded-2xl bg-white border border-cream-dark">
            <Icon className="w-6 h-6 text-burgundy mx-auto mb-2" />
            <p className="font-semibold text-sm text-plum">{label}</p>
            <p className="text-xs text-plum/50 mt-1">{desc}</p>
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="font-display text-3xl font-bold text-burgundy text-center mb-8">Shop by Category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              to={c.id === 'consultation' ? '/consultations' : `/shop/${c.id}`}
              className="card-product p-6 text-center group"
            >
              <span className="text-4xl">{c.icon}</span>
              <p className="font-display text-lg font-semibold text-burgundy mt-3 group-hover:text-rose-gold transition-colors">{c.label}</p>
              <p className="text-xs text-plum/50 mt-1">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-burgundy mb-8">Featured Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="card-product group">
                <div className="aspect-square bg-cream p-6 flex items-center justify-center overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  {p.badge && <span className="text-[10px] bg-burgundy text-cream px-2 py-0.5 rounded-full font-bold">{p.badge}</span>}
                  <p className="font-semibold text-sm mt-2 text-plum group-hover:text-burgundy transition-colors">{p.name}</p>
                  <p className="text-burgundy font-bold mt-1">₹{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/shop" className="btn-outline">View All Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
