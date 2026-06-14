import { Link } from 'react-router-dom';
import { productsByCategory } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Shield, Video, Clock } from 'lucide-react';

export function ConsultationsPage() {
  const consults = productsByCategory('consultation');
  const { add } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="font-display text-4xl font-bold text-burgundy">Private Consultations</h1>
        <p className="text-plum/60 mt-2 max-w-lg mx-auto">
          Speak with certified sexual wellness experts and Ayurvedic practitioners — 100% confidential, from the comfort of your home.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {[
          { icon: Shield, title: 'Confidential', desc: 'End-to-end encrypted sessions' },
          { icon: Video, title: 'Video or Chat', desc: 'Choose your comfort level' },
          { icon: Clock, title: 'Flexible Slots', desc: 'Evenings & weekends available' },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white rounded-2xl p-6 text-center border border-cream-dark">
            <Icon className="w-8 h-8 text-burgundy mx-auto mb-3" />
            <p className="font-semibold text-plum">{title}</p>
            <p className="text-xs text-plum/50 mt-1">{desc}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {consults.map((p) => (
          <div key={p.id} className="card-product p-6 flex flex-col">
            <img src={p.image} alt="" className="w-32 h-32 mx-auto object-contain mb-4" />
            <h3 className="font-display text-xl font-semibold text-burgundy">{p.name}</h3>
            <p className="text-sm text-plum/60 mt-2 flex-1">{p.description}</p>
            <p className="text-2xl font-bold text-burgundy mt-4">₹{p.price}</p>
            <button type="button" className="btn-primary w-full mt-4" onClick={() => add(p)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CartPage() {
  const { items, remove } = useCart();
  const total = items.reduce((a, i) => a + i.product.price * i.qty, 0);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold text-burgundy mb-6">Your Bag</h1>
      {items.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-cream-dark">
          <p className="text-plum/50">Your bag is empty</p>
          <Link to="/shop" className="btn-primary inline-block mt-4">Start Shopping</Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {items.map(({ product, qty }) => (
              <div key={product.id} className="flex gap-4 bg-white rounded-2xl p-4 border border-cream-dark">
                <img src={product.image} alt="" className="w-20 h-20 object-contain bg-cream rounded-xl p-2" />
                <div className="flex-1">
                  <p className="font-semibold text-plum">{product.name}</p>
                  <p className="text-burgundy font-bold">₹{product.price} × {qty}</p>
                </div>
                <button type="button" className="text-plum/40 hover:text-burgundy text-sm" onClick={() => remove(product.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-white rounded-2xl p-6 border border-cream-dark">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span className="text-burgundy">₹{total}</span>
            </div>
            <p className="text-xs text-plum/40 mt-2">Checkout available when backend is connected. Discreet packaging guaranteed.</p>
            <button type="button" className="btn-primary w-full mt-4">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl font-bold text-burgundy mb-6">About Indie Essentials</h1>
      <div className="prose prose-plum space-y-4 text-plum/80 leading-relaxed">
        <p>Indie Essentials was founded on a simple belief: sexual wellness is essential health, and it deserves the same care, discretion and quality as any other aspect of wellbeing.</p>
        <p>We curate verified Ayurvedic formulations, science-backed vitamins, premium intimate wellness products and access to certified consultants — all with plain, discreet packaging and zero judgement.</p>
        <p>Every product is sourced from licensed manufacturers. Ayurvedic items carry proper certification. Consultations are end-to-end encrypted and never shared.</p>
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-sm text-plum/80 space-y-4 leading-relaxed">
      <h1 className="font-display text-3xl font-bold text-burgundy">Privacy Policy</h1>
      <p>Indie Essentials is committed to your privacy. All orders ship in plain, unmarked packaging with no product names visible.</p>
      <p>Consultation data is encrypted and never sold to third parties. Payment details are processed securely when checkout is enabled.</p>
      <p>Contact: wellness@indieessentials.in</p>
    </div>
  );
}
