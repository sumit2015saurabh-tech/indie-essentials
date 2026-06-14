import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from '@/context/CartContext';
import { Layout } from '@/components/Layout';
import { AgeGate } from '@/components/AgeGate';
import { HomePage } from '@/pages/Home';
import { ShopPage } from '@/pages/Shop';
import { ProductPage } from '@/pages/Product';
import { ConsultationsPage, CartPage, AboutPage, PrivacyPage } from '@/pages/More';
import { ReviewsPage } from '@/pages/Reviews';

function Redirect404() {
  const nav = useNavigate();
  useEffect(() => {
    const p = sessionStorage.getItem('ie_redirect');
    if (p) { sessionStorage.removeItem('ie_redirect'); nav(p, { replace: true }); }
  }, [nav]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <CartProvider>
        <AgeGate>
          <Redirect404 />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/:category" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/consultations" element={<ConsultationsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </Layout>
        </AgeGate>
      </CartProvider>
    </BrowserRouter>
  );
}
