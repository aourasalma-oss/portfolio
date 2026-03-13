import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const navLinks = [
  { href: '#home', key: 'home' },
  { href: '#about', key: 'about' },
  { href: '#skills', key: 'skills' },
  { href: '#projects', key: 'projects' },
  { href: '#experience', key: 'experience' },
  { href: '#certificates', key: 'certificates' },
  { href: '#languages', key: 'languages' },
  { href: '#contact', key: 'contact' },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="navbar-logo">Salma Aoura</a>
      <button
        className={`navbar-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar-link"
            onClick={() => setIsOpen(false)}
          >
            {t(`nav.${link.key}`)}
          </a>
        ))}
        <div className="navbar-lang">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
