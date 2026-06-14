import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Shield, Package, Globe } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { PromoBar } from '@/components/PromoBar';

const link = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors ${isActive ? 'text-burgundy' : 'text-plum/70 hover:text-burgundy'}`;

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-xl border-b border-cream-dark">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Indie Essentials" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <p className="font-display text-xl font-bold text-burgundy leading-none">Indie Essentials</p>
            <p className="text-[10px] text-sage tracking-widest uppercase">Sexual Wellness</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          <NavLink to="/shop" className={link}>Shop</NavLink>
          <NavLink to="/shop/ayurvedic" className={link}>Ayurvedic</NavLink>
          <NavLink to="/shop/vitamins" className={link}>Vitamins</NavLink>
          <NavLink to="/shop/sextoys" className={link}>Sex Toys</NavLink>
          <NavLink to="/shop/creams" className={link}>Creams</NavLink>
          <NavLink to="/consultations" className={link}>Consultations</NavLink>
          <NavLink to="/reviews" className={link}>Reviews</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" className="p-2 text-plum/60 hover:text-burgundy hidden sm:block" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/cart" className="relative p-2 text-plum/60 hover:text-burgundy">
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-burgundy text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {count}
              </span>
            )}
          </Link>
          <button type="button" className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-cream-dark px-4 py-4 flex flex-col gap-3 bg-cream">
          <NavLink to="/shop" className={link} onClick={() => setOpen(false)}>Shop</NavLink>
          <NavLink to="/shop/ayurvedic" className={link} onClick={() => setOpen(false)}>Ayurvedic</NavLink>
          <NavLink to="/shop/vitamins" className={link} onClick={() => setOpen(false)}>Vitamins</NavLink>
          <NavLink to="/shop/sextoys" className={link} onClick={() => setOpen(false)}>Sex Toys</NavLink>
          <NavLink to="/shop/creams" className={link} onClick={() => setOpen(false)}>Creams & Care</NavLink>
          <NavLink to="/consultations" className={link} onClick={() => setOpen(false)}>Consultations</NavLink>
          <NavLink to="/reviews" className={link} onClick={() => setOpen(false)}>Reviews</NavLink>
          <NavLink to="/about" className={link} onClick={() => setOpen(false)}>About</NavLink>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-plum text-cream/80 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <p className="font-display text-2xl text-cream mb-2">Indie Essentials</p>
          <p className="text-sm leading-relaxed opacity-70">Premium sexual wellness, Ayurvedic care and discreet delivery across India and 40+ countries worldwide.</p>
        </div>
        <div>
          <p className="font-semibold text-cream mb-3">Shop</p>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/shop/ayurvedic" className="hover:text-rose-gold">Ayurvedic</Link></li>
            <li><Link to="/product/stamina-builder-syrup" className="hover:text-rose-gold">Stamina Builder Syrup</Link></li>
            <li><Link to="/shop/vitamins" className="hover:text-rose-gold">Vitamins</Link></li>
            <li><Link to="/shop/sextoys" className="hover:text-rose-gold">Sex Toys</Link></li>
            <li><Link to="/shop/creams" className="hover:text-rose-gold">Creams & Care</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-cream mb-3">Trust & Delivery</p>
          <ul className="space-y-2 text-sm opacity-70">
            <li className="flex items-center gap-2"><Shield className="w-4 h-4" /> Verified products only</li>
            <li className="flex items-center gap-2"><Package className="w-4 h-4" /> Discreet packaging</li>
            <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> India & international shipping</li>
            <li><Link to="/privacy" className="hover:text-rose-gold">Privacy Policy</Link></li>
          </ul>
          <p className="text-xs opacity-50 mt-4">18+ only · wellness@indieessentials.in</p>
        </div>
      </div>
      <p className="text-center text-xs opacity-40 py-4 border-t border-cream/10">© {new Date().getFullYear()} Indie Essentials. All rights reserved.</p>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PromoBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
