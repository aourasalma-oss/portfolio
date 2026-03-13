import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

const skills = [
  { nameKey: 'HTML', icon: 'html' },
  { nameKey: 'CSS', icon: 'css' },
  { nameKey: 'Bootstrap', icon: 'bootstrap' },
  { nameKey: 'JavaScript', icon: 'js' },
  { nameKey: 'React.js', icon: 'react' },
  { nameKey: 'PHP', icon: 'php' },
  { nameKey: 'Java', icon: 'java' },
  { nameKey: 'Python', icon: 'python' },
  { nameKey: 'C', icon: 'c' },
  { nameKey: 'MySQL', icon: 'mysql' },
  { nameKey: 'Linux', icon: 'linux' },
  { nameKey: 'Responsive Design', icon: 'responsive' },
];

const getSkillIcon = (icon) => {
  const icons = {
    html: '</>', css: '{ }', bootstrap: 'Bt', js: 'JS', react: '⚛', php: 'PHP',
    java: '☕', c: 'C', python: 'Py', mysql: 'DB', linux: '🐧', responsive: '📱',
  };
  return icons[icon] || icon;
};

export default function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="skills">
      <div className="section">
        <h2 className="section-title">{t('skills.title')}</h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={skill.nameKey} className="skill-card" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="skill-icon">{getSkillIcon(skill.icon)}</div>
              <span className="skill-name">{skill.nameKey}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
