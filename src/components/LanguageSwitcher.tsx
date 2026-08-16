import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const ariaLabel = language === 'en' ? 'Change language to Portuguese' : 'Mudar idioma para Inglês';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-2 py-1 text-secondary hover:text-isec-crimson transition-colors"
      aria-label={ariaLabel}
      title={ariaLabel}
      aria-live="polite"
    >
      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">language</span>
      <span className="text-[11px] font-bold tracking-wider uppercase">{language}</span>
    </button>
  );
}
