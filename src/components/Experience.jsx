import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

const experiences = [
  { periodKey: 'internship', titleKey: 'exp1Title', roleKey: 'exp1Role', descKey: 'exp1Desc', icon: '💼' },
  { periodKey: 'event', titleKey: 'exp2Title', roleKey: 'exp2Role', descKey: 'exp2Desc', icon: '🤖' },
  { periodKey: 'club', titleKey: 'exp3Title', roleKey: 'exp3Role', descKey: 'exp3Desc', icon: '🎨' },
];

export default function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="experience">
      <div className="section">
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div key={exp.titleKey} className="experience-card" style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="experience-icon">{exp.icon}</div>
              <div className="experience-content">
                <span className="experience-period">{t(`experience.${exp.periodKey}`)}</span>
                <h3>{t(`experience.${exp.titleKey}`)}</h3>
                <p className="experience-role">{t(`experience.${exp.roleKey}`)}</p>
                <p className="experience-desc">{t(`experience.${exp.descKey}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
