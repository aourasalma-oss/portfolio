import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const projectKeys = [
  { key: 'luxryAuto', tech: ['React', 'PHP', 'MySQL'], gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)', icon: '🚗' },
  { key: 'pcLicense', tech: ['PHP', 'MySQL', 'HTML/CSS'], gradient: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)', icon: '💻' },
  { key: 'universityPlatform', tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'], gradient: 'linear-gradient(135deg, #ec4899 0%, #a78bfa 100%)', icon: '🎓' },
  { key: 'stagiaireApp', tech: ['PHP', 'MySQL', 'Bootstrap'], gradient: 'linear-gradient(135deg, #c084fc 0%, #818cf8 100%)', icon: '📋' },
  { key: 'librarySystem', tech: ['Java', 'UML', 'OOP'], gradient: 'linear-gradient(135deg, #f472b6 0%, #c084fc 100%)', icon: '📚' },
  { key: 'recipeExplorer', tech: ['React', 'Firebase', 'CSS'], gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)', icon: '🍳' },
  { key: 'taskFlow', tech: ['React', 'Node.js', 'Express', 'MongoDB'], gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)', icon: '✅' },
];

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="projects">
      <div className="section">
        <h2 className="section-title">{t('projects.title')}</h2>
        <div className="projects-grid">
          {projectKeys.map((p, i) => (
            <article key={p.key} className="project-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="project-image" style={{ background: p.gradient }}>
                <span className="project-icon">{p.icon}</span>
              </div>
              <div className="project-content">
                <h3>{t(`projects.${p.key}`)}</h3>
                <p>{t(`projects.${p.key}Desc`)}</p>
                <div className="project-tech">
                  {p.tech.map((t2) => (
                    <span key={t2} className="tech-tag">{t2}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
