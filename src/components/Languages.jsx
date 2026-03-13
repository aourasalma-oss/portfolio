import { useLanguage } from '../context/LanguageContext';
import './Languages.css';

const languages = [
  { nameKey: 'arabic', levelKey: 'native', flag: '🇲🇦' },
  { nameKey: 'french', level: 'B2', flag: '🇫🇷' },
  { nameKey: 'english', level: 'C1', flag: '🇬🇧' },
];

export default function Languages() {
  const { t } = useLanguage();
  return (
    <section id="languages" className="languages">
      <div className="section">
        <h2 className="section-title">{t('languages.title')}</h2>
        <div className="languages-grid">
          {languages.map((lang, i) => (
            <div key={lang.nameKey} className="language-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="language-flag">{lang.flag}</span>
              <h3>{t(`languages.${lang.nameKey}`)}</h3>
              <span className="language-level">
                {lang.levelKey ? t(`languages.${lang.levelKey}`) : lang.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
