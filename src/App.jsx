import { useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Flowers from './components/Flowers';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Languages from './components/Languages';
import Contact from './components/Contact';
import './App.css';

function App() {
  const { t } = useLanguage();
  return (
    <div className="app">
      <div className="bg-float bg-float-1" aria-hidden="true" />
      <div className="bg-float bg-float-2" aria-hidden="true" />
      <div className="bg-float bg-float-3" aria-hidden="true" />
      <Flowers />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Languages />
      <Contact />
      <footer className="footer">
        <div className="section">
          <p>{t('footer')}</p>
          <a href="https://salma-dev.netlify.app" className="footer-link" target="_blank" rel="noopener noreferrer">salma-dev.netlify.app</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
