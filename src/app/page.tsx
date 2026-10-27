
'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Search,
  ShoppingBag,
  PackageCheck,
  Sparkles,
  Menu,
  ArrowUpRight,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

type Product = {
  id: number;
  name: string;
  description?: string;
  amount: number;
  is_stock: boolean;
  stock_count?: number | null;
  is_automatic_delivery?: boolean;
  category?: string;
  subcategory?: string;
};

type Category = {
  id: number;
  name: string;
  subcategories?: { id: number; name: string }[];
};

type CatalogResponse = {
  categories?: Category[];
  products?: Product[];
};

const categoryFallback = [
  'TÃ¼mÃ¼',
  'Yapay Zeka',
  'SEO AraÃ§larÄ±',
  'GÃ¶rsel ÃœrÃ¼nler',
  'Windows',
  'Office',
  'WordPress Eklentileri & TemalarÄ±',
  'VPN & AntivirÃ¼s',
  'GeliÅŸtirici AraÃ§larÄ±',
  'DiÄŸer ÃœrÃ¼nler',
];

const featured: Product[] = [
  {
    id: -1,
    name: 'ChatGPT Plus KiÅŸisel Hesap Â· 1 AylÄ±k',
    description: 'Ã–rnek Ã¼rÃ¼n',
    amount: 250,
    is_stock: false,
  },
  {
    id: -2,
    name: 'Envato Â· 1 AylÄ±k',
    description: 'Ã–rnek Ã¼rÃ¼n',
    amount: 35,
    is_stock: false,
  },
  {
    id: -3,
    name: 'Windows 10/11 Pro Retail',
    description: 'Ã–rnek Ã¼rÃ¼n',
    amount: 20,
    is_stock: false,
  },
  {
    id: -4,
    name: 'Elementor Pro Â· 1 YÄ±llÄ±k',
    description: 'Ã–rnek Ã¼rÃ¼n',
    amount: 140,
    is_stock: false,
  },
];

function isInStock(product: Product) {
  return (
    product.is_stock === true &&
    (product.stock_count == null || product.stock_count > 0)
  );
}

function formatPrice(amount: number) {
  if (!Number.isFinite(amount)) return 'Fiyat bilgisi yok';

  return amount.toLocaleString('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  });
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>(featured);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selected, setSelected] = useState('TÃ¼mÃ¼');
  const [search, setSearch] = useState('');
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  async function loadCatalog() {
    setBusy(true);
    setError('');
    setNotice('');

    try {
      const response = await fetch('/api/catalog', {
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Katalog alÄ±namadÄ± (${response.status})`);
      }

      const data: CatalogResponse = await response.json();

      if (!Array.isArray(data.products)) {
        throw new Error('API Ã¼rÃ¼n listesi beklenen formatta deÄŸil.');
      }

      const validProducts = data.products.filter(
        (p) =>
          typeof p.id === 'number' &&
          typeof p.name === 'string' &&
          typeof p.amount === 'number' &&
          Number.isFinite(p.amount) &&
          typeof p.is_stock === 'boolean'
      );

      setProducts(validProducts);
      setCategories(
        Array.isArray(data.categories) ? data.categories : []
      );

      if (validProducts.length !== data.products.length) {
        setNotice('BazÄ± Ã¼rÃ¼nler geÃ§ersiz veri nedeniyle gÃ¶sterilmedi.');
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Beklenmeyen bir hata oluÅŸtu.'
      );
      setProducts([]);
      setCategories([]);
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    void loadCatalog();
  }, []);

  const categoryNames = useMemo(
    () =>
      categories.length > 0
        ? ['TÃ¼mÃ¼', ...categories.map((c) => c.name)]
        : categoryFallback,
    [categories]
  );

  const visible = useMemo(() => {
    const query = search.toLocaleLowerCase('tr-TR').trim();

    return products.filter((p) => {
      const matchesCategory =
        selected === 'TÃ¼mÃ¼' || p.category === selected;

      const searchableText = [
        p.name,
        p.description ?? '',
        p.category ?? '',
        p.subcategory ?? '',
      ]
        .join(' ')
        .toLocaleLowerCase('tr-TR');

      const matchesSearch = searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [products, selected, search]);

  const availableCount = products.filter(isInStock).length;

  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#" aria-label="NEASX Store ana sayfa">
          <span className="brand-mark">
            <ShoppingBag size={19} />
          </span>
          <span>
            NEASX<span className="brand-soft"> STORE</span>
          </span>
        </a>

        <nav>
          <a href="#catalog">MaÄŸaza</a>
          <a href="#why">Neden NEASX?</a>
          <a href="#footer">Destek</a>
        </nav>

        <a className="nav-action" href="#catalog">
          ÃœrÃ¼nleri keÅŸfet <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu"
          aria-label="MaÄŸazaya git"
          onClick={() =>
            document.getElementById('catalog')?.scrollIntoView({
              behavior: 'smooth',
            })
          }
        >
          <Menu />
        </button>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={14} /> DÄ°JÄ°TAL ÃœRÃœN MAÄAZASI
          </div>

          <h1>
            Dijital dÃ¼nyanda
            <br />
            <span>bir adÄ±m Ã¶nde.</span>
          </h1>

          <p>
            Ãœretkenlik, tasarÄ±m ve yazÄ±lÄ±m araÃ§larÄ±nÄ± tek yerde keÅŸfet.
            Ä°htiyacÄ±na uygun dijital Ã¼rÃ¼nÃ¼ kolayca bul.
          </p>

          <div className="hero-buttons">
            <a className="primary" href="#catalog">
              MaÄŸazayÄ± keÅŸfet <ArrowUpRight size={16} />
            </a>

            <span className="hero-note">
              <ShieldCheck size={15} />
              Åeffaf Ã¼rÃ¼n ve teslimat bilgileri
            </span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="hero-glow" />

          <div className="hero-tile tile-one">
            <Sparkles />
            <span>CREATE</span>
          </div>

          <div className="hero-tile tile-two">
            <PackageCheck />
            <span>DISCOVER</span>
          </div>

          <div className="hero-center">
            <ShoppingBag size={45} />
            <b>NX</b>
          </div>

          <div className="float-chip">
            DIGITAL GOODS <span>âœ³</span>
          </div>
        </div>
      </section>

      <section className="trust-strip shell">
        <div>
          <PackageCheck />
          <span>
            <b>Dijital Ã¼rÃ¼n kataloÄŸu</b>
            <small>ÃœrÃ¼nlerini tek yerde keÅŸfet</small>
          </span>
        </div>

        <div>
          <ShieldCheck />
          <span>
            <b>Net Ã¼rÃ¼n bilgisi</b>
            <small>KoÅŸullarÄ± satÄ±n almadan gÃ¶r</small>
          </span>
        </div>

        <div>
          <Sparkles />
          <span>
            <b>Kolay keÅŸif</b>
            <small>Kategori ve aramayla bul</small>
          </span>
        </div>
      </section>

      <section className="catalog shell" id="catalog">
        <div className="section-top">
          <div>
            <div className="eyebrow">NEASX MARKETPLACE</div>
            <h2>
              ÃœrÃ¼nleri keÅŸfet<span>.</span>
            </h2>
            <p>AradÄ±ÄŸÄ±n dijital aracÄ± kolayca bul.</p>
          </div>

          <div className="search">
            <Search size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ÃœrÃ¼n ara..."
              aria-label="ÃœrÃ¼n ara"
            />
          </div>
        </div>

        <div className="filters">
          {categoryNames.map((category) => (
            <button
              key={category}
              className={
                selected === category ? 'filter active' : 'filter'
              }
              onClick={() => setSelected(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {notice && <div className="notice">{notice}</div>}

        {error && (
          <div className="notice" role="alert">
            <p>Katalog yÃ¼klenemedi: {error}</p>
            <button
              className="detail-btn"
              onClick={() => void loadCatalog()}
              disabled={busy}
            >
              <RefreshCw size={15} />
              Tekrar dene
            </button>
          </div>
        )}

        {!busy && !error && (
          <div className="catalog-foot">
            {visible.length} Ã¼rÃ¼n bulundu Â· {availableCount} Ã¼rÃ¼n stokta
          </div>
        )}

        {busy ? (
          <div className="loading" role="status">
            Katalog hazÄ±rlanÄ±yorâ€¦
          </div>
        ) : error ? (
          <div className="empty">
            ÃœrÃ¼nleri ÅŸu anda gÃ¶rÃ¼ntÃ¼leyemiyoruz.
          </div>
        ) : (
          <div className="product-grid">
            {visible.map((p) => {
              const stocked = isInStock(p);

              return (
                <article className="product-card" key={p.id}>
                  <div className="product-visual">
                    <div className="product-icon">
                      <PackageCheck size={27} />
                    </div>

                    <span className="product-type">DÄ°JÄ°TAL ÃœRÃœN</span>

                    <button
                      className="round-arrow"
                      aria-label={`${p.name} Ã¼rÃ¼n bilgisi`}
                      onClick={() =>
                        setNotice(
                          `${p.name}: ${
                            p.description || 'ÃœrÃ¼n aÃ§Ä±klamasÄ± bulunmuyor.'
                          }`
                        )
                      }
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                  <div className="product-info">
                    <div className="product-meta">
                      <span>{p.category || 'NEASX Store'}</span>

                      {stocked ? (
                        <span className="stock yes">Stokta</span>
                      ) : (
                        <span className="stock">Stokta yok</span>
                      )}
                    </div>

                    <h3>{p.name}</h3>

                    <p>
                      {p.description ||
                        'Dijital Ã¼rÃ¼n. SatÄ±n almadan Ã¶nce Ã¼rÃ¼n koÅŸullarÄ±nÄ± inceleyin.'}
                    </p>

                    <div className="product-bottom">
                      <div>
                        <small>GÃ¶sterilen fiyat</small>
                        <strong>{formatPrice(p.amount)}</strong>
                      </div>

                      <button
                        className="detail-btn"
                        disabled={!stocked}
                        onClick={() => {
                        window.location.href = `/products/${p.id}`;
                        }}


                      >
                        {stocked ? 'DetaylarÄ± gÃ¶r' : 'Stokta yok'}
                        <ArrowUpRight size={15} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {!busy && !error && visible.length === 0 && (
          <div className="empty">
            Bu aramayla eÅŸleÅŸen Ã¼rÃ¼n bulunamadÄ±.
          </div>
        )}

        <div className="catalog-foot">
          ÃœrÃ¼n fiyatlarÄ±, lisans koÅŸullarÄ± ve stok bilgileri satÄ±n alma
          Ã¶ncesinde doÄŸrulanmalÄ±dÄ±r. GÃ¶sterilen fiyatlarÄ±n satÄ±ÅŸ fiyatÄ±
          olduÄŸu henÃ¼z teyit edilmemiÅŸtir.
        </div>
      </section>

      <section className="why shell" id="why">
        <div>
          <div className="eyebrow">NEASX STORE</div>
          <h2>
            Ä°htiyacÄ±n olan dijital
            <br />
            araÃ§lar, <span>tek noktada.</span>
          </h2>
        </div>

        <div className="why-copy">
          <p>
            ÃœrÃ¼n detaylarÄ±nÄ±, kullanÄ±m sÃ¼resini, lisans tÃ¼rÃ¼nÃ¼ ve teslimat
            biÃ§imini aÃ§Ä±kÃ§a inceleyebileceÄŸin bir maÄŸaza deneyimi.
          </p>

          <div className="why-points">
            <span>
              <ShieldCheck /> AÃ§Ä±k Ã¼rÃ¼n koÅŸullarÄ±
            </span>
            <span>
              <PackageCheck /> SipariÅŸ takibi hedefi
            </span>
          </div>
        </div>
      </section>

      <footer className="footer shell" id="footer">
        <a className="brand" href="#">
          <span className="brand-mark">
            <ShoppingBag size={18} />
          </span>
          NEASX<span className="brand-soft"> STORE</span>
        </a>

        <span>
          Â© {new Date().getFullYear()} NEASX. TÃ¼m haklarÄ± saklÄ±dÄ±r.
        </span>

        <span>Dijital Ã¼rÃ¼nler â€¢ Destek</span>
      </footer>
    </main>
  );
}
