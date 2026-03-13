import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className="hero">
      <div className="hero-shapes">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>
      
      <div className="hero-grid">
        <div className="hero-dev-side hero-dev-top">
          <div className="hero-code-window">
            <div className="code-window-header">
              <span className="code-dot code-dot-pink"></span>
              <span className="code-dot code-dot-lavender"></span>
              <span className="code-dot code-dot-purple"></span>
              <span className="code-window-title">portfolio.jsx</span>
            </div>
            <pre className="code-window-content">
              <code>
                <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}{' '}
                <span className="code-key">name</span>: <span className="code-string">"Salma"</span>,
                {' '}<span className="code-key">role</span>: <span className="code-string">"Génie Informatique"</span>,
                {' '}<span className="code-key">passion</span>: <span className="code-string">"code & design"</span>,
                {' '}<span className="code-key">seeking</span>: <span className="code-string">"PFE ✨"</span>
                {' '}{'}'};
              </code>
            </pre>
          </div>
          <div className="hero-floating-code hero-floating-1">&lt;/&gt;</div>
          <div className="hero-floating-code hero-floating-2">{'{ }'}</div>
          <div className="hero-floating-code hero-floating-3">import ✨</div>
        </div>

        <div className="hero-content">
          <p className="hero-greeting animate-delay-1">{t('hero.greeting')}</p>
          <h1 className="hero-name animate-delay-2">Salma Aoura</h1>
          <p className="hero-title animate-delay-3">{t('hero.title')}</p>
          <p className="hero-intro animate-delay-4">{t('hero.intro')}</p>
          <div className="hero-cta animate-delay-5">
            <a href="#projects" className="btn btn-primary">{t('hero.viewProjects')}</a>
            <a href="#contact" className="btn btn-outline">{t('hero.getInTouch')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
