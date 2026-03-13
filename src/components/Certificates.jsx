import { useLanguage } from '../context/LanguageContext';
import './Certificates.css';

const certificates = [
  { titleKey: 'cert1Title', roleKey: 'cert1Role', descKey: 'cert1Desc', icon: '📜' },
  { titleKey: 'cert2Title', roleKey: 'cert2Role', descKey: 'cert2Desc', icon: '🏆' },
];

export default function Certificates() {
  const { t } = useLanguage();
  return (
    <section id="certificates" className="certificates">
      <div className="section">
        <h2 className="section-title">{t('certificates.title')}</h2>
        <div className="certificates-grid">
          {certificates.map((cert, i) => (
            <div key={cert.titleKey} className="certificate-card" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="certificate-icon">{cert.icon}</div>
              <div className="certificate-content">
                <h3>{t(`certificates.${cert.titleKey}`)}</h3>
                <p className="certificate-role">{t(`certificates.${cert.roleKey}`)}</p>
                <p className="certificate-desc">{t(`certificates.${cert.descKey}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
