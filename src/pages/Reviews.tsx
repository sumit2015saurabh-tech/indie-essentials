import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '@/data/testimonials';
import { TestimonialCard } from '@/components/TestimonialCard';

export function ReviewsPage() {
  const products = TESTIMONIALS.filter((t) => t.type === 'product');
  const consults = TESTIMONIALS.filter((t) => t.type === 'consultation');
  const delivery = TESTIMONIALS.filter((t) => t.type === 'delivery');

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="font-display text-4xl font-bold text-burgundy">Customer Reviews</h1>
        <p className="text-plum/60 mt-2 max-w-lg mx-auto">
          Real feedback from Indie Essentials buyers and consultation clients across India and abroad.
        </p>
      </div>

      <h2 className="font-display text-2xl font-semibold text-burgundy mb-4">Product Reviews</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {products.map((t) => <TestimonialCard key={t.id} t={t} />)}
      </div>

      <h2 className="font-display text-2xl font-semibold text-burgundy mb-4">Consultation Reviews</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {consults.map((t) => <TestimonialCard key={t.id} t={t} />)}
      </div>

      <h2 className="font-display text-2xl font-semibold text-burgundy mb-4">Delivery Reviews</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {delivery.map((t) => <TestimonialCard key={t.id} t={t} />)}
      </div>

      <div className="text-center">
        <Link to="/product/stamina-builder-syrup" className="btn-primary mr-3">Try Stamina Syrup</Link>
        <Link to="/shop" className="btn-outline">Shop All</Link>
      </div>
    </div>
  );
}
