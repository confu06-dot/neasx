
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const base = process.env.BACKEND_URL;

  if (!base) {
    return NextResponse.json(
      { error: 'BACKEND_URL tanımlanmamış' },
      { status: 500 }
    );
  }

  try {
    const url = `${base.replace(/\/+$/, '')}/catalog`;

    const response = await fetch(url, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Backend hatası: ${response.status}` },
        { status: 502 }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Catalog API error:', error);

    return NextResponse.json(
      { error: 'Backend bağlantısı kurulamadı' },
      { status: 502 }
    );
  }
}
