import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export function AgeGate({ children }: { children: ReactNode }) {
  const [ok, setOk] = useState(() => localStorage.getItem('ie_age_ok') === '1');

  if (ok) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-plum/95 backdrop-blur-md p-4">
      <div className="bg-cream rounded-3xl p-8 max-w-md text-center shadow-2xl">
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
        <h2 className="font-display text-2xl font-bold text-burgundy mb-2">Welcome to Indie Essentials</h2>
        <p className="text-plum/70 text-sm leading-relaxed mb-6">
          This site contains sexual wellness products for adults aged 18 and over.
          By entering, you confirm you meet the age requirement in your jurisdiction.
        </p>
        <div className="flex gap-3 justify-center">
          <button type="button" className="btn-primary" onClick={() => { localStorage.setItem('ie_age_ok', '1'); setOk(true); }}>
            I am 18 or older
          </button>
          <a href="https://google.com" className="btn-outline text-sm py-3">Exit</a>
        </div>
        <p className="text-xs text-plum/40 mt-6 flex items-center justify-center gap-1">
          <Shield className="w-3 h-3" /> Discreet · Verified · Confidential
        </p>
        <Link to="/privacy" className="text-xs text-burgundy/60 underline mt-2 inline-block">Privacy Policy</Link>
      </div>
    </div>
  );
}
