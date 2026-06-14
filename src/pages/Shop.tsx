import { Link, useParams } from 'react-router-dom';
import { Star, Shield, Package } from 'lucide-react';
import { CATEGORIES, productsByCategory, type Category } from '@/data/products';
import { useCart } from '@/context/CartContext';

export function ShopPage() {
  const { category } = useParams();
  const cat = category as Category | undefined;
  const products = productsByCategory(cat);
  const { add } = useCart();
  const catInfo = CATEGORIES.find((c) => c.id === cat);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold text-burgundy">
        {catInfo ? catInfo.label : 'All Products'}
      </h1>
      <p className="text-plum/60 text-sm mt-1 mb-6">
        {catInfo?.desc ?? 'Browse our full collection of wellness products'}
      </p>

      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        <Link to="/shop" className={`shrink-0 px-4 py-2 rounded-full text-sm border ${!cat ? 'bg-burgundy text-cream border-burgundy' : 'border-cream-dark text-plum/70 hover:border-burgundy'}`}>
          All
        </Link>
        {CATEGORIES.map((c) => (
          <Link
            key={c.id}
            to={c.id === 'consultation' ? '/consultations' : `/shop/${c.id}`}
            className={`shrink-0 px-4 py-2 rounded-full text-sm border transition-colors ${
              cat === c.id ? 'bg-burgundy text-cream border-burgundy' : 'border-cream-dark text-plum/70 hover:border-burgundy'
            }`}
          >
            {c.icon} {c.label}
          </Link>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="card-product flex flex-col">
            <Link to={`/product/${p.slug}`} className="aspect-square bg-cream p-8 flex items-center justify-center">
              <img src={p.image} alt={p.name} className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
            </Link>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex gap-2 flex-wrap mb-2">
                {p.badge && <span className="text-[10px] bg-burgundy text-cream px-2 py-0.5 rounded-full font-bold">{p.badge}</span>}
                {p.verified && <span className="text-[10px] bg-sage/20 text-sage px-2 py-0.5 rounded-full flex items-center gap-0.5"><Shield className="w-3 h-3" />Verified</span>}
                {p.discreet && <span className="text-[10px] bg-rose-gold/20 text-burgundy px-2 py-0.5 rounded-full flex items-center gap-0.5"><Package className="w-3 h-3" />Discreet</span>}
              </div>
              <Link to={`/product/${p.slug}`}>
                <h3 className="font-semibold text-plum hover:text-burgundy transition-colors">{p.name}</h3>
              </Link>
              <div className="flex items-center gap-1 mt-1 text-xs text-plum/50">
                <Star className="w-3 h-3 fill-rose-gold text-rose-gold" /> {p.rating} ({p.reviews})
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-burgundy font-bold text-lg">₹{p.price}</span>
                {p.originalPrice && <span className="text-plum/40 text-sm line-through">₹{p.originalPrice}</span>}
              </div>
              <button type="button" className="btn-primary w-full mt-4 text-sm py-2.5" onClick={() => add(p)}>
                Add to Bag
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
