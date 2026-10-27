
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!/^[1-9]\d*$/.test(id)) {
    return NextResponse.json(
      { error: 'Geçersiz ürün ID' },
      { status: 400 }
    );
  }

  const base = process.env.BACKEND_URL?.trim();

  if (!base) {
    return NextResponse.json(
      { error: 'BACKEND_URL tanımlanmamış' },
      { status: 500 }
    );
  }

  let url: URL;

  try {
    url = new URL(base);

    const local =
      url.hostname === 'localhost' ||
      url.hostname === '127.0.0.1' ||
      url.hostname === '[::1]' ||
      url.hostname === '::1';

    if (
      url.protocol !== 'https:' &&
      !(
        process.env.NODE_ENV !== 'production' &&
        local &&
        url.protocol === 'http:'
      )
    ) {
      throw new Error('Invalid backend protocol');
    }
  } catch {
    return NextResponse.json(
      { error: 'Backend adresi geçersiz.' },
      { status: 500 }
    );
  }

  const controller = new AbortController();

  const timeout = setTimeout(
    () => controller.abort(),
    10000
  );

  try {
    const response = await fetch(
      `${url.toString().replace(/\/+$/, '')}/products/${id}`,
      {
        method: 'GET',
        cache: 'no-store',
        signal: controller.signal,
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.error('Product API error:', {
        status: response.status,
        productId: id,
      });

      return NextResponse.json(
        {
          error:
            response.status === 404
              ? 'Ürün bulunamadı.'
              : 'Ürün bilgileri alınamadı.',
        },
        {
          status: response.status === 404 ? 404 : 502,
        }
      );
    }

    const contentType =
      response.headers.get('content-type') ?? '';

    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Backend geçersiz yanıt döndürdü.' },
        { status: 502 }
      );
    }

    const data: unknown = await response.json();

    if (
      !data ||
      typeof data !== 'object' ||
      Array.isArray(data)
    ) {
      return NextResponse.json(
        { error: 'Ürün verisi geçersiz.' },
        { status: 502 }
      );
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    const timedOut =
      error instanceof Error &&
      error.name === 'AbortError';

    console.error('Product API request failed:', {
      productId: id,
      reason: timedOut ? 'timeout' : 'connection_error',
    });

    return NextResponse.json(
      {
        error: timedOut
          ? 'Backend yanıt süresi aşıldı.'
          : 'Backend bağlantısı kurulamadı.',
      },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeout);
  }
}
