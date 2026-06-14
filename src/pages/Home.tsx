import { Link } from 'react-router-dom';
import { Star, Shield, Package, ArrowRight, Globe, Truck, MapPin } from 'lucide-react';
import { CATEGORIES, PRODUCTS, sexToys } from '@/data/products';
import { TESTIMONIALS } from '@/data/testimonials';
import { TestimonialCard } from '@/components/TestimonialCard';

const B = import.meta.env.BASE_URL;
const HERO = `${B}images/hero.jpg`;
const SEX_TOYS_BANNER = `${B}images/sex-toys-banner.jpg`;
const STAMINA = PRODUCTS.find((p) => p.slug === 'stamina-builder-syrup')!;

export function HomePage() {
  const featured = [STAMINA, ...PRODUCTS.filter((p) => p.badge && p.category !== 'sextoys' && p.slug !== 'stamina-builder-syrup').slice(0, 3)];
  const toys = sexToys().slice(0, 4);
  const productReviews = TESTIMONIALS.filter((t) => t.type === 'product').slice(0, 3);
  const consultReviews = TESTIMONIALS.filter((t) => t.type === 'consultation').slice(0, 2);

  return (
    <div>
      <section className="relative overflow-hidden">
        <img src={HERO} alt="" className="w-full h-[420px] md:h-[500px] object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/85 via-cream/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <p className="text-sage text-sm font-medium tracking-widest uppercase mb-3">India&apos;s Indie Wellness Boutique</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-burgundy leading-tight max-w-xl">
              Wellness that honours your <span className="gold-text">intimacy</span>
            </h1>
            <p className="text-plum/70 mt-4 max-w-lg leading-relaxed">
              Ayurvedic remedies, verified vitamins, premium sex toys, intimate creams and private consultations —
              delivered discreetly across India and worldwide.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
                Explore Shop <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/shop/sextoys" className="btn-outline">Shop Sex Toys</Link>
              <Link to="/consultations" className="btn-outline">Book Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Shield, label: 'Verified Products', desc: 'Lab-tested Ayurvedic' },
          { icon: Package, label: 'Discreet Delivery', desc: 'Plain packaging' },
          { icon: Globe, label: 'India & Abroad', desc: 'Worldwide shipping' },
          { icon: Star, label: '4.8★ Average', desc: '2,000+ happy customers' },
        ].map(({ icon: Icon, label, desc }) => (
          <div key={label} className="text-center p-4 rounded-2xl bg-white border border-cream-dark">
            <Icon className="w-6 h-6 text-burgundy mx-auto mb-2" />
            <p className="font-semibold text-sm text-plum">{label}</p>
            <p className="text-xs text-plum/50 mt-1">{desc}</p>
          </div>
        ))}
      </section>

      <section id="stamina" className="bg-white py-12 border-y border-cream-dark scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden bg-cream p-8 flex items-center justify-center">
              <img src={STAMINA.image} alt={STAMINA.name} className="max-h-72 object-contain" loading="eager" />
            </div>
            <div>
              <span className="text-[10px] bg-burgundy text-cream px-2 py-0.5 rounded-full font-bold">Indie Signature</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-burgundy mt-3">{STAMINA.name}</h2>
              <p className="text-plum/70 mt-3 leading-relaxed">{STAMINA.description}</p>
              <ul className="mt-4 space-y-2">
                {STAMINA.benefits.map((b) => (
                  <li key={b} className="text-sm text-plum/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage" /> {b}
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline gap-3 mt-6">
                <span className="text-3xl font-bold text-burgundy">₹{STAMINA.price}</span>
                {STAMINA.originalPrice && <span className="text-plum/40 line-through">₹{STAMINA.originalPrice}</span>}
                <span className="text-sm text-plum/50">· 100ml syrup</span>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link to={`/product/${STAMINA.slug}`} className="btn-primary">View Product</Link>
                <Link to="/shop/ayurvedic" className="btn-outline">All Ayurvedic</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-14 bg-cream border-b border-cream-dark scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-burgundy">What Our Customers Say</h2>
            <p className="text-plum/60 mt-2">Real reviews from product buyers and consultation clients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {productReviews.map((t) => <TestimonialCard key={t.id} t={t} />)}
          </div>
          <h3 className="font-display text-xl font-semibold text-burgundy mb-4 text-center">Consultation Reviews</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {consultReviews.map((t) => <TestimonialCard key={t.id} t={t} />)}
          </div>
          <div className="text-center">
            <Link to="/reviews" className="btn-outline">Read All Reviews</Link>
          </div>
        </div>
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

      <section className="bg-burgundy text-cream py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <p className="text-rose-gold text-sm font-medium tracking-widest uppercase mb-3">Pleasure Collection</p>
              <h2 className="font-display text-4xl font-bold mb-4">Sex Toys</h2>
              <p className="text-cream/75 leading-relaxed mb-6">
                Explore our curated range of body-safe vibrators, couples toys, wands and starter kits.
                Every order ships in plain, unmarked packaging — your privacy is guaranteed.
              </p>
              <div className="flex flex-wrap gap-3 text-xs">
                {['Body-safe silicone', 'Discreet delivery', '1-year warranty', 'Beginner kits'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-cream/10 border border-cream/20">{tag}</span>
                ))}
              </div>
              <Link to="/shop/sextoys" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-cream text-burgundy font-semibold text-sm hover:bg-cream-dark transition-colors">
                View All Sex Toys <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-cream/20 shadow-2xl">
              <img src={SEX_TOYS_BANNER} alt="Sex toys collection" className="w-full h-64 md:h-80 object-cover" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toys.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="bg-white rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <div className="aspect-square bg-cream p-5 flex items-center justify-center">
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  {p.badge && <span className="text-[10px] bg-burgundy text-cream px-2 py-0.5 rounded-full font-bold">{p.badge}</span>}
                  <p className="font-semibold text-sm mt-2 text-plum group-hover:text-burgundy transition-colors">{p.name}</p>
                  <p className="text-burgundy font-bold mt-1">₹{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-burgundy mb-8">Featured Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="card-product group">
                <div className="aspect-square bg-cream p-6 flex items-center justify-center overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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

      <section className="py-14 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sage text-sm font-medium tracking-widest uppercase mb-2">We Ship Everywhere</p>
            <h2 className="font-display text-3xl font-bold text-burgundy">Delivery Across India &amp; Abroad</h2>
            <p className="text-plum/60 mt-2 max-w-2xl mx-auto">
              Whether you are in Mumbai, Delhi, London, Dubai or Toronto — Indie Essentials delivers discreetly to your doorstep.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: 'Pan-India Delivery', desc: '2–5 business days across all major cities and towns. Free shipping on orders above ₹1,499.', tag: 'India' },
              { icon: Globe, title: 'International Shipping', desc: 'We deliver to the UK, UAE, USA, Canada, Australia, Singapore and 40+ countries worldwide.', tag: 'Abroad' },
              { icon: Truck, title: 'Discreet Packaging', desc: 'Plain outer box with no product names or branding. Your privacy is protected on every order, domestic or international.', tag: 'Always' },
            ].map(({ icon: Icon, title, desc, tag }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-cream-dark">
                <span className="text-[10px] bg-sage/20 text-sage px-2 py-0.5 rounded-full font-bold">{tag}</span>
                <Icon className="w-8 h-8 text-burgundy mt-4 mb-3" />
                <h3 className="font-display text-xl font-semibold text-burgundy">{title}</h3>
                <p className="text-sm text-plum/60 mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
