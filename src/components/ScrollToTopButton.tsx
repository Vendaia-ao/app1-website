import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label={language === 'en' ? 'Back to top' : 'Voltar ao topo'}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-isec-crimson text-white shadow-lg hover:bg-red-800 hover:-translate-y-1 transition-all duration-300 print:hidden flex items-center justify-center ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <span className="material-symbols-outlined" aria-hidden="true">arrow_upward</span>
    </button>
  );
}
