
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
  'Tümü',
  'Yapay Zeka',
  'SEO Araçları',
  'Görsel Ürünler',
  'Windows',
  'Office',
  'WordPress Eklentileri & Temaları',
  'VPN & Antivirüs',
  'Geliştirici Araçları',
  'Diğer Ürünler',
];

const featured: Product[] = [
  {
    id: -1,
    name: 'ChatGPT Plus Kişisel Hesap · 1 Aylık',
    description: 'Örnek ürün',
    amount: 250,
    is_stock: false,
  },
  {
    id: -2,
    name: 'Envato · 1 Aylık',
    description: 'Örnek ürün',
    amount: 35,
    is_stock: false,
  },
  {
    id: -3,
    name: 'Windows 10/11 Pro Retail',
    description: 'Örnek ürün',
    amount: 20,
    is_stock: false,
  },
  {
    id: -4,
    name: 'Elementor Pro · 1 Yıllık',
    description: 'Örnek ürün',
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
  const [selected, setSelected] = useState('Tümü');
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
        throw new Error(`Katalog alınamadı (${response.status})`);
      }

      const data: CatalogResponse = await response.json();

      if (!Array.isArray(data.products)) {
        throw new Error('API ürün listesi beklenen formatta değil.');
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
        Array.isArray(data.categories) ?data.categories : []
      );

      if (validProducts.length !== data.products.length) {
        setNotice('Bazı ürünler geçersiz veri nedeniyle gösterilmedi.');
      }
    } catch (err) {
      setError(
        err instanceof Error
          ?err.message
          : 'Beklenmeyen bir hata oluştu.'
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
        ?['Tümü', ...categories.map((c) => c.name)]
        : categoryFallback,
    [categories]
  );

  const visible = useMemo(() => {
    const query = search.toLocaleLowerCase('tr-TR').trim();

    return products.filter((p) => {
      const matchesCategory =
        selected === 'Tümü' || p.category === selected;

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
          <a href="#catalog">Mağaza</a>
          <a href="#why">Neden NEASX?</a>
          <a href="#footer">Destek</a>
        </nav>

        <a className="nav-action" href="#catalog">
          Ürünleri keşfet <ArrowUpRight size={15} />
        </a>

        <button
          className="mobile-menu"
          aria-label="Mağazaya git"
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
            <Sparkles size={14} /> DİJİTAL ÜRÜN MAĞAZASI
          </div>

          <h1>
            Dijital dünyanda
            <br />
            <span>bir adım önde.</span>
          </h1>

          <p>
            Üretkenlik, tasarım ve yazılım araçlarını tek yerde keşfet.
            İhtiyacına uygun dijital ürünü kolayca bul.
          </p>

          <div className="hero-buttons">
            <a className="primary" href="#catalog">
              Mağazayı keşfet <ArrowUpRight size={16} />
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
            DIGITAL GOODS <span>✳</span>
          </div>
        </div>
      </section>

      <section className="trust-strip shell">
        <div>
          <PackageCheck />
          <span>
            <b>Dijital ürün kataloğu</b>
            <small>Ürünlerini tek yerde keşfet</small>
          </span>
        </div>

        <div>
          <ShieldCheck />
          <span>
            <b>Net ürün bilgisi</b>
            <small>Koşulları satın almadan gör</small>
          </span>
        </div>

        <div>
          <Sparkles />
          <span>
            <b>Kolay keşif</b>
            <small>Kategori ve aramayla bul</small>
          </span>
        </div>
      </section>

      <section className="catalog shell" id="catalog">
        <div className="section-top">
          <div>
            <div className="eyebrow">NEASX MARKETPLACE</div>
            <h2>
              Ürünleri keşfet<span>.</span>
            </h2>
            <p>Aradığın dijital aracı kolayca bul.</p>
          </div>

          <div className="search">
            <Search size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Ürün ara..."
              aria-label="Ürün ara"
            />
          </div>
        </div>

        <div className="filters">
          {categoryNames.map((category) => (
            <button
              key={category}
              className={
                selected === category ?'filter active' : 'filter'
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
            <p>Katalog yüklenemedi: {error}</p>
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
            {visible.length} ürün bulundu · {availableCount} ürün stokta
          </div>
        )}

        {busy ?(
          <div className="loading" role="status">
            Katalog hazırlanıyor…
          </div>
        ) : error ?(
          <div className="empty">
            Ürünleri şu anda görüntüleyemiyoruz.
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

                    <span className="product-type">DİJİTAL ÜRÜN</span>

                    <button
                      className="round-arrow"
                      aria-label={`${p.name} ürün bilgisi`}
                      onClick={() =>
                        setNotice(
                          `${p.name}: ${
                            p.description || 'Ürün açıklaması bulunmuyor.'
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

                      {stocked ?(
                        <span className="stock yes">Stokta</span>
                      ) : (
                        <span className="stock">Stokta yok</span>
                      )}
                    </div>

                    <h3>{p.name}</h3>

                    <p>
                      {p.description ||
                        'Dijital ürün. Satın almadan önce ürün koşullarını inceleyin.'}
                    </p>

                    <div className="product-bottom">
                      <div>
                        <small>Gösterilen fiyat</small>
                        <strong>{formatPrice(p.amount)}</strong>
                      </div>

                      <button
                        className="detail-btn"
                        disabled={!stocked}
                        onClick={() => {
                        window.location.href = `/products/${p.id}`;
                        }}


                      >
                        {stocked ?'Detayları gör' : 'Stokta yok'}
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
            Bu aramayla eşleşen ürün bulunamadı.
          </div>
        )}

        <div className="catalog-foot">
          Ürün fiyatları, lisans koşulları ve stok bilgileri satın alma
          öncesinde doğrulanmalıdır. Gösterilen fiyatların satış fiyatı
          olduğu henüz teyit edilmemiştir.
        </div>
      </section>

      <section className="why shell" id="why">
        <div>
          <div className="eyebrow">NEASX STORE</div>
          <h2>
            İhtiyacın olan dijital
            <br />
            araçlar, <span>tek noktada.</span>
          </h2>
        </div>

        <div className="why-copy">
          <p>
            Ürün detaylarını, kullanım süresini, lisans türünü ve teslimat
            biçimini açıkça inceleyebileceğin bir mağaza deneyimi.
          </p>

          <div className="why-points">
            <span>
              <ShieldCheck /> Açık ürün koşulları
            </span>
            <span>
              <PackageCheck /> Sipariş takibi hedefi
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
          © {new Date().getFullYear()} NEASX. Tüm hakları saklıdır.
        </span>

        <span>Dijital ürünler • Destek</span>
      </footer>
    </main>
  );
}
