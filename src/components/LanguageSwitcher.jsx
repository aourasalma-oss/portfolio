import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

const languages = [
  { code: 'en', label: 'EN', fullLabel: 'English' },
  { code: 'fr', label: 'FR', fullLabel: 'Français' },
  { code: 'ar', label: 'AR', fullLabel: 'العربية' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lang-switcher">
      <button
        className="lang-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Change language"
      >
        <span className="lang-current">{languages.find((l) => l.code === lang)?.label || 'EN'}</span>
        <svg className="lang-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <ul
          className="lang-dropdown"
          role="listbox"
          onMouseLeave={() => setIsOpen(false)}
        >
          {languages.map((l) => (
            <li key={l.code} role="option">
              <button
                className={`lang-option ${lang === l.code ? 'active' : ''}`}
                onClick={() => {
                  setLang(l.code);
                  setIsOpen(false);
                }}
              >
                {l.fullLabel}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
