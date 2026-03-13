import { useLanguage } from '../context/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="about">
      <div className="section">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3>{t('about.academicTitle')}</h3>
            <p>{t('about.academicDesc')}</p>
          </div>
          <div className="about-card">
            <div className="about-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3>{t('about.motivationTitle')}</h3>
            <p>{t('about.motivationDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
