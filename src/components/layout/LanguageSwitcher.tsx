"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, Check } from "lucide-react";

const locales = ['en', 'tr', 'es', 'fr', 'de', 'pt', 'ru', 'ja', 'ko', 'zh', 'ar'] as const;
type Locale = typeof locales[number];

const localeNames: Record<Locale, string> = {
  en: 'English',
  tr: 'Türkçe',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ru: 'Русский',
  ja: '日本語',
  ko: '한국어',
  zh: '简体中文',
  ar: 'العربية',
};

const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  tr: '🇹🇷',
  es: '🇪🇸',
  fr: '🇫🇷',
  de: '🇩🇪',
  pt: '🇵🇹',
  ru: '🇷🇺',
  ja: '🇯🇵',
  ko: '🇰🇷',
  zh: '🇨🇳',
  ar: '🇸🇦',
};

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    // Remove current locale from pathname
    const segments = pathname.split('/').filter(Boolean);
    const currentLangIndex = segments.findIndex(seg => locales.includes(seg as Locale));
    
    if (currentLangIndex !== -1) {
      segments[currentLangIndex] = newLocale;
    }
    
    const newPath = '/' + segments.join('/');
    
    // Set cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    
    // Navigate to new path
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
        aria-label="Change language"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{localeFlags[currentLocale as Locale]}</span>
        <span className="hidden md:inline">{localeNames[currentLocale as Locale]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]/95 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <div className="max-h-96 overflow-y-auto">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className="flex w-full items-center justify-between px-4 py-3 text-sm transition-all duration-200 hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{localeFlags[locale]}</span>
                  <span className={currentLocale === locale ? "font-semibold text-white" : "text-slate-400"}>
                    {localeNames[locale]}
                  </span>
                </div>
                {currentLocale === locale && (
                  <Check size={16} className="text-emerald-400" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
