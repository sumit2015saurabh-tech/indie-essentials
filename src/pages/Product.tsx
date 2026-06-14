import { useParams, Link } from 'react-router-dom';
import { Star, Shield, Package, Check, ArrowLeft } from 'lucide-react';
import { getProduct } from '@/data/products';
import { useCart } from '@/context/CartContext';

export function ProductPage() {
  const { slug } = useParams();
  const product = getProduct(slug ?? '');
  const { add } = useCart();

  if (!product) return <p className="p-12 text-center text-plum/50">Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link to="/shop" className="text-sm text-plum/50 hover:text-burgundy flex items-center gap-1 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to shop
      </Link>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-cream rounded-3xl p-12 flex items-center justify-center border border-cream-dark aspect-square">
          <img src={product.image} alt={product.name} className="w-full max-h-80 object-contain" />
        </div>
        <div>
          <div className="flex gap-2 flex-wrap mb-3">
            {product.badge && <span className="text-xs bg-burgundy text-cream px-3 py-1 rounded-full font-bold">{product.badge}</span>}
            {product.verified && <span className="text-xs bg-sage/20 text-sage px-3 py-1 rounded-full flex items-center gap-1"><Shield className="w-3 h-3" />Verified</span>}
            {product.discreet && <span className="text-xs bg-rose-gold/20 text-burgundy px-3 py-1 rounded-full flex items-center gap-1"><Package className="w-3 h-3" />Discreet Shipping</span>}
          </div>
          <h1 className="font-display text-3xl font-bold text-burgundy">{product.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">{Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-rose-gold text-rose-gold' : 'text-cream-dark'}`} />
            ))}</div>
            <span className="text-sm text-plum/50">{product.rating} · {product.reviews} reviews</span>
          </div>
          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-3xl font-bold text-burgundy">₹{product.price}</span>
            {product.originalPrice && <span className="text-plum/40 line-through">₹{product.originalPrice}</span>}
          </div>
          <p className="text-plum/70 mt-4 leading-relaxed">{product.description}</p>
          <ul className="mt-6 space-y-2">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-plum/80">
                <Check className="w-4 h-4 text-sage shrink-0" /> {b}
              </li>
            ))}
          </ul>
          <button type="button" className="btn-primary w-full mt-8" onClick={() => add(product)}>
            Add to Bag — ₹{product.price}
          </button>
          <p className="text-xs text-plum/40 text-center mt-3">Discreet packaging · Free shipping over ₹999</p>
        </div>
      </div>
    </div>
  );
}
