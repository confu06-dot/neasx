
'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  PackageCheck,
  ShieldCheck,
  Truck,
  Download,
  Zap,
  CircleCheck,
  CircleAlert,
  Layers,
  ImageOff,
  FileText,
  BookOpen,
  HelpCircle,
} from 'lucide-react';

type Product = {
  id?: number | string;
  product_id?: number | string;
  name?: string;
  title?: string;
  description?: string;
  amount?: number | string;
  price?: number | string;
  is_stock?: boolean;
  stock_count?: number | null;
  category?: string;
  subcategory?: string;
  sub_category?: string;
  is_automatic_delivery?: boolean;
};

const IMAGE_MAP: Record<string, string> = {
  freepik: '/products/freepik.webp',
  envato: '/products/envato.webp',
  canva: '/products/canva.webp',
  adobe: '/products/adobe.webp',
  capcut: '/products/capcut.webp',
  chatgpt: '/products/chatgpt.webp',
  wordpress: '/products/wordpress.webp',
  flaticon: '/products/flaticon.webp',
  'motion array': '/products/motion-array.webp',
  windows: '/products/windows.webp',
  office: '/products/office.webp',
};

function getProductImage(product: Product): string {
  const text = [
    product.name,
    product.title,
    product.subcategory,
    product.sub_category,
  ]
    .filter(Boolean)
    .join(' ')
    .toLocaleLowerCase('tr-TR');

  // Daha spesifik eşleşmeler önce.
  const brands = [
    'motion array',
    'freepik',
    'envato',
    'flaticon',
    'wordpress',
    'chatgpt',
    'canva',
    'adobe',
    'capcut',
    'windows',
    'office',
  ];

  const brand = brands.find((b) =>
    text.includes(b)
  );

  return brand
    ? IMAGE_MAP[brand]
    : '/products/other-products.webp';
}

function getStock(product: Product): boolean {
  // Sağlayıcı açıkça stok yok diyorsa satışa uygun sayma.
  if (product.is_stock === false) return false;

  const count = product.stock_count;

  // Stok adedi geldiyse, true/false alanından bağımsız olarak kontrol et.
  if (count !== undefined && count !== null) {
    const numericCount = Number(count);
    if (Number.isFinite(numericCount)) {
      return numericCount > 0;
    }
  }

  // Adet yoksa yalnızca açıkça true olan stok bilgisini kabul et.
  return product.is_stock === true;
}

function getPrice(product: Product): number | null {
  const raw = product.amount ?? product.price;

  if (raw === undefined || raw === null || raw === '') {
    return null;
  }

  let value: number;

  if (typeof raw === 'number') {
    value = raw;
  } else {
    const normalized = raw.trim();
    if (!normalized) return null;

    // Belirsiz yerel sayı biçimlerini yanlış fiyat göstermemek için reddet.
    // Örnek kabul edilen değerler: "90", "90.50"
    if (!/^\d+(\.\d+)?$/.test(normalized)) {
      return null;
    }

    value = Number(normalized);
  }

  if (!Number.isFinite(value) || value < 0) {
    return null;
  }

  return value;
}

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState('');
  const [imageFailed, setImageFailed] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const controller = new AbortController();

    async function loadProduct() {
      try {
        setBusy(true);
        setError('');
        setProduct(null);
        setImageFailed(false);

        const response = await fetch(
          `/api/products/${encodeURIComponent(params.id)}`,
          {
            cache: 'no-store',
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(
            response.status === 404
              ? 'Ürün bulunamadı.'
              : 'Ürün bilgileri alınamadı.'
          );
        }

        const data: unknown = await response.json();

        if (!data || typeof data !== 'object') {
          throw new Error('Ürün verisi geçersiz.');
        }

        const item = (
          data as { product?: unknown }
        ).product ?? data;

        if (
          !item ||
          typeof item !== 'object' ||
          Array.isArray(item)
        ) {
          throw new Error('Ürün verisi geçersiz.');
        }

        const parsed = item as Product;

        if (
          typeof parsed.name !== 'string' &&
          typeof parsed.title !== 'string'
        ) {
          throw new Error('Ürün adı bulunamadı.');
        }

        setProduct(parsed);
      } catch (e) {
        if (
          e instanceof Error &&
          e.name === 'AbortError'
        ) {
          return;
        }

        setError(
          e instanceof Error
            ? e.message
            : 'Beklenmeyen bir hata oluştu.'
        );
      } finally {
        if (!controller.signal.aborted) {
          setBusy(false);
        }
      }
    }

    if (!params.id) {
      setError('Ürün ID bulunamadı.');
      setBusy(false);
      return;
    }

    void loadProduct();

    return () => controller.abort();
  }, [params.id]);

  const title = product?.name ?? product?.title ?? 'Ürün';

  const price = useMemo(
    () => product ? getPrice(product) : null,
    [product]
  );

  const stocked = product ? getStock(product) : false;

  const imageSrc = useMemo(
    () => product ? getProductImage(product) : '',
    [product]
  );

  const category = product?.category || 'Belirtilmemiş';

  const subcategory =
    product?.subcategory ??
    product?.sub_category ??
    'Belirtilmemiş';

  const delivery = product?.is_automatic_delivery;

  const formattedPrice =
    price !== null
      ? price.toLocaleString('tr-TR', {
          style: 'currency',
          currency: 'TRY',
        })
      : 'Fiyat bilgisi yok';

  const stockLabel =
    product?.stock_count != null
      ? `${product.stock_count} adet`
      : stocked
        ? 'Stokta mevcut'
        : 'Stokta yok';

  return (
    <main className="shell neasx-product-page">
      <header className="product-topbar">
        <button
          className="detail-btn"
          onClick={() => router.push('/')}
          type="button"
        >
          <ArrowLeft size={16} />
          Mağazaya dön
        </button>
      </header>

      {busy ? (
        <div className="product-state">
          <div className="product-spinner" />
          <p>Ürün bilgileri yükleniyor...</p>
        </div>
      ) : error ? (
        <section className="product-state product-error" role="alert">
          <CircleAlert size={34} />
          <h2>Bir sorun oluştu</h2>
          <p>{error}</p>

          <button
            className="detail-btn"
            onClick={() => window.location.reload()}
            type="button"
          >
            Tekrar dene
          </button>
        </section>
      ) : product ? (
        <>
          <nav className="product-breadcrumb">
            <button
              type="button"
              onClick={() => router.push('/')}
            >
              Mağaza
            </button>
            <span>›</span>
            <span>{category}</span>
            <span>›</span>
            <span>{subcategory}</span>
            <span>›</span>
            <strong>{title}</strong>
          </nav>

          <section className="product-layout">
            {/* SOL: ÜRÜN GÖRSELİ */}
            <div className="product-gallery">
              <div className="product-image">
                {!imageFailed ? (
                  <img
                    src={imageSrc}
                    alt={`${title} kapak görseli`}
                    onError={() => setImageFailed(true)}
                  />
                ) : (
                  <div className="product-image-fallback">
                    <div className="fallback-logo">
                      N
                    </div>
                    <ImageOff size={30} />
                    <p>Ürün görseli mevcut değil</p>
                    <span>{title}</span>
                  </div>
                )}
              </div>

              <p className="product-image-note">
                <ShieldCheck size={16} />
                Satın almadan önce ürün ve lisans
                koşullarını inceleyin.
              </p>
            </div>

            {/* ORTA: ÜRÜN BİLGİLERİ */}
            <div className="product-main-info">
              <div className="product-badges">
                <span className="product-badge primary">
                  {category}
                </span>
                <span className="product-badge">
                  {subcategory}
                </span>
              </div>

              <h1>{title}</h1>

              <p className="product-description">
                {product.description ||
                  'Bu ürün için henüz açıklama eklenmemiş.'}
              </p>

              <div className="product-features">
                <div className="product-feature">
                  <div className="feature-icon">
                    <Download size={20} />
                  </div>
                  <div>
                    <strong>Dijital ürün</strong>
                    <span>Fiziksel kargo yok</span>
                  </div>
                </div>

                <div className="product-feature">
                  <div className="feature-icon">
                    <Zap size={20} />
                  </div>
                  <div>
                    <strong>
                      {delivery === true
                        ? 'Otomatik teslimat'
                        : delivery === false
                          ? 'Manuel teslimat'
                          : 'Teslimat bilgisi'}
                    </strong>
                    <span>Ürünün teslimat yöntemi</span>
                  </div>
                </div>

                <div className="product-feature">
                  <div className="feature-icon">
                    <PackageCheck size={20} />
                  </div>
                  <div>
                    <strong>
                      {stocked ? 'Stokta mevcut' : 'Stokta yok'}
                    </strong>
                    <span>Güncel ürün durumu</span>
                  </div>
                </div>

                <div className="product-feature">
                  <div className="feature-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <strong>Lisans bilgisi</strong>
                    <span>Koşulları kontrol edin</span>
                  </div>
                </div>
              </div>

              <div className="product-meta">
                <div>
                  <span>Kategori</span>
                  <strong>{category}</strong>
                </div>

                <div>
                  <span>Alt kategori</span>
                  <strong>{subcategory}</strong>
                </div>
              </div>
            </div>

            {/* SAĞ: SATIN ALMA KARTI */}
            <aside className="purchase-card">
              <div className="purchase-card-heading">
                <span>Satış fiyatı</span>
                <span
                  className={
                    stocked
                      ? 'stock-pill in-stock'
                      : 'stock-pill out-stock'
                  }
                >
                  <span className="stock-dot" />
                  {stocked ? 'Stokta var' : 'Stokta yok'}
                </span>
              </div>

              <h2 className="product-price">
                {formattedPrice}
              </h2>

              <div className="purchase-divider" />

              <div className="purchase-row">
                <Layers size={19} />
                <span>Stok adedi</span>
                <strong>{stockLabel}</strong>
              </div>

              <div className="purchase-row">
                <Truck size={19} />
                <span>Teslimat</span>
                <strong>
                  {delivery == null
                    ? 'Belirtilmemiş'
                    : delivery
                      ? 'Otomatik teslimat'
                      : 'Manuel teslimat'}
                </strong>
              </div>

              <div className="purchase-row">
                <PackageCheck size={19} />
                <span>Kategori</span>
                <strong>{category}</strong>
              </div>

              <button
                className="purchase-button"
                disabled
                type="button"
                title="Ödeme sistemi henüz bağlanmadı"
              >
                Satın alma henüz aktif değil
              </button>

              <div className="purchase-notices">
                <p>
                  <ShieldCheck size={15} />
                  Lisans koşulları doğrulanmalıdır.
                </p>

                <p>
                  <CircleCheck size={15} />
                  Ödeme sistemi henüz bağlanmadı.
                </p>

                <p>
                  <CircleAlert size={15} />
                  Satın alma işlemi şu anda kapalıdır.
                </p>
              </div>
            </aside>
          </section>

          {/* ALT: DETAY SEKMELERİ */}
          <section className="product-tabs">
            <div className="product-tab-buttons">
              <button
                className={
                  activeTab === 'description' ? 'active' : ''
                }
                onClick={() => setActiveTab('description')}
                type="button"
              >
                <FileText size={17} />
                Ürün Açıklaması
              </button>

              <button
                className={
                  activeTab === 'features' ? 'active' : ''
                }
                onClick={() => setActiveTab('features')}
                type="button"
              >
                <Layers size={17} />
                Özellikler
              </button>

              <button
                className={
                  activeTab === 'usage' ? 'active' : ''
                }
                onClick={() => setActiveTab('usage')}
                type="button"
              >
                <BookOpen size={17} />
                Nasıl Kullanılır?
              </button>

              <button
                className={
                  activeTab === 'faq' ? 'active' : ''
                }
                onClick={() => setActiveTab('faq')}
                type="button"
              >
                <HelpCircle size={17} />
                SSS
              </button>
            </div>

            <div className="product-tab-content">
              {activeTab === 'description' && (
                <div>
                  <h3>
                    <FileText size={20} />
                    Ürün Açıklaması
                  </h3>
                  <p>
                    {product.description ||
                      'Ürün açıklaması mevcut değil.'}
                  </p>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h3>
                    <Layers size={20} />
                    Ürün Özellikleri
                  </h3>

                  <ul className="product-specs">
                    <li>
                      <span>Ürün adı</span>
                      <strong>{title}</strong>
                    </li>
                    <li>
                      <span>Kategori</span>
                      <strong>{category}</strong>
                    </li>
                    <li>
                      <span>Alt kategori</span>
                      <strong>{subcategory}</strong>
                    </li>
                    <li>
                      <span>Stok</span>
                      <strong>
                        {stocked ? 'Stokta' : 'Stokta yok'}
                      </strong>
                    </li>
                    <li>
                      <span>Teslimat</span>
                      <strong>
                        {delivery == null
                          ? 'Belirtilmemiş'
                          : delivery
                            ? 'Otomatik'
                            : 'Manuel'}
                      </strong>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'usage' && (
                <div>
                  <h3>
                    <BookOpen size={20} />
                    Nasıl Kullanılır?
                  </h3>
                  <p>
                    Ürünün kullanım ve etkinleştirme
                    adımlarını satın alma öncesinde
                    doğrulayın. Ürüne özel talimatlar
                    mevcutsa burada gösterilmelidir.
                  </p>
                </div>
              )}

              {activeTab === 'faq' && (
                <div>
                  <h3>
                    <HelpCircle size={20} />
                    Sıkça Sorulan Sorular
                  </h3>

                  <details>
                    <summary>Ürün nasıl teslim edilir?</summary>
                    <p>
                      {delivery == null
                        ? 'Teslimat yöntemi henüz belirtilmemiş.'
                        : delivery
                          ? 'Sağlayıcı otomatik teslimat olarak bildiriyor.'
                          : 'Sağlayıcı manuel teslimat olarak bildiriyor.'}
                    </p>
                  </details>

                  <details>
                    <summary>Ürün stokta mı?</summary>
                    <p>
                      {stocked
                        ? 'Ürün stok verisine göre mevcut.'
                        : 'Ürün şu anda satışa uygun görünmüyor.'}
                    </p>
                  </details>

                  <details>
                    <summary>Satın alma açık mı?</summary>
                    <p>
                      Hayır. Ödeme ve sipariş sistemi
                      bağlanana kadar satın alma kapalıdır.
                    </p>
                  </details>
                </div>
              )}
            </div>
          </section>
        </>
      ) : null}
    </main>
  );
}
