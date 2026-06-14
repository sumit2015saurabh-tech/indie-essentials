import { Star } from 'lucide-react';
import type { Testimonial } from '@/data/testimonials';

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-cream-dark h-full flex flex-col">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-rose-gold text-rose-gold" />
        ))}
      </div>
      <p className="text-plum/80 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
      <div className="mt-4 pt-4 border-t border-cream-dark">
        <p className="font-semibold text-plum text-sm">{t.name}</p>
        <p className="text-xs text-plum/50">{t.location}</p>
        {t.product && <p className="text-xs text-burgundy/70 mt-1">{t.product}</p>}
      </div>
    </div>
  );
}
