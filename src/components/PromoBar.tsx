import { Link } from 'react-router-dom';

export function PromoBar() {
  return (
    <div className="bg-burgundy text-cream text-center text-xs sm:text-sm py-2.5 px-4">
      <span className="opacity-90">
        🌿 <strong>Indie Stamina Builder Syrup</strong> — 100ml, ₹999 &nbsp;|&nbsp; <Link to="/shop/ayurvedic" className="underline font-semibold hover:text-rose-gold">Ayurvedic</Link>
        {' · '}
        <Link to="/shop/vitamins" className="underline font-semibold hover:text-rose-gold">Vitamins</Link>
        {' · '}
        Ships across <strong>India &amp; 40+ countries</strong>
      </span>
      {' '}
      <Link to="/product/stamina-builder-syrup" className="underline font-semibold hover:text-rose-gold ml-1">Shop now</Link>
      {' · '}
      <Link to="/reviews" className="underline font-semibold hover:text-rose-gold">Read reviews</Link>
    </div>
  );
}
