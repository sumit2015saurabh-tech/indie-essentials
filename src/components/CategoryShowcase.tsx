import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Category } from '@/data/products';
import { productsByCategoryId } from '@/data/products';

type Props = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: Category;
  shopLink: string;
  tags: string[];
  dark?: boolean;
  productLimit?: number;
};

export function CategoryShowcase({
  id, title, subtitle, description, image, category, shopLink, tags, dark = false, productLimit = 4,
}: Props) {
  const products = productsByCategoryId(category, productLimit);

  return (
    <section id={id} className={`py-14 scroll-mt-24 ${dark ? 'bg-burgundy text-cream' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
          <div className={dark ? 'order-2 lg:order-1' : ''}>
            <p className={`text-sm font-medium tracking-widest uppercase mb-3 ${dark ? 'text-rose-gold' : 'text-sage'}`}>{subtitle}</p>
            <h2 className="font-display text-4xl font-bold mb-4">{title}</h2>
            <p className={`leading-relaxed mb-6 ${dark ? 'text-cream/75' : 'text-plum/70'}`}>{description}</p>
            <div className="flex flex-wrap gap-3 text-xs">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1.5 rounded-full border ${dark ? 'bg-cream/10 border-cream/20' : 'bg-cream border-cream-dark text-plum/70'}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to={shopLink}
              className={`inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full font-semibold text-sm transition-colors ${
                dark ? 'bg-cream text-burgundy hover:bg-cream-dark' : 'bg-burgundy text-cream hover:bg-burgundy-dark'
              }`}
            >
              View All {title} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className={`rounded-2xl overflow-hidden border shadow-2xl ${dark ? 'border-cream/20 order-1 lg:order-2' : 'border-cream-dark'}`}>
            <img src={image} alt={title} className="w-full h-64 md:h-80 object-cover" loading="lazy" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.slug}`}
              className={`rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-lg ${
                dark ? 'bg-white' : 'bg-cream border border-cream-dark'
              }`}
            >
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
  );
}
