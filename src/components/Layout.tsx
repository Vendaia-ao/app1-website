import { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import Footer from './Footer';
import GlobalSearch from './GlobalSearch';
import Breadcrumb from './Breadcrumb';
import MegaMenu from './MegaMenu';
import ScrollToTopButton from './ScrollToTopButton';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { mainNavigation } from '../data/navigation';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const { language, t, tMenu } = useLanguage();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  const toggleMobileSubmenu = (id: string) => {
    setExpandedMobileMenu(expandedMobileMenu === id ? null : id);
  };

  const getTranslatedLabel = (id: string, originalLabel: string) => {
    const key = `nav.${id}`;
    const translated = t(key);
    return translated !== key ? translated : originalLabel;
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col antialiased">
      <header className="bg-surface-container-lowest border-b border-isec-silver h-[64px] flex items-center sticky top-0 z-50 w-full shrink-0 print:hidden">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto h-full relative">
          <NavLink to="/" className="flex items-center gap-2 group shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex flex-col relative leading-none">
              <span className="text-isec-crimson text-3xl font-bold tracking-tighter">ISPTEC</span>
            </div>
            <span className="text-[12px] text-isec-dark-gray leading-[1.1] border-l border-isec-silver pl-2 hidden sm:block">Tecnologias e Ciências</span>
          </NavLink>
          
          <div className="hidden lg:flex h-full items-center pl-8">
            <MegaMenu />
          </div>
          
          <div className="hidden lg:flex items-center gap-4 ml-auto shrink-0 text-[11px] font-bold text-secondary uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <GlobalSearch />
              <LanguageSwitcher />
            </div>
            <Link to="/portal" className="bg-isec-crimson text-white px-4 py-2 rounded font-bold hover:bg-red-800 transition-colors tracking-widest text-[11px]">
              {t('nav.portal')}
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-4 ml-auto">
            <GlobalSearch />
            <LanguageSwitcher />
            <button 
              onClick={toggleMobileMenu}
              className="text-isec-dark-gray p-2 active:opacity-80 flex items-center justify-center"
              aria-label={language === 'en' ? "Toggle mobile menu" : "Alternar menu móvel"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="material-symbols-outlined" aria-hidden="true">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" role="navigation" aria-label={language === 'en' ? "Main mobile menu" : "Menu principal móvel"} className="lg:hidden fixed inset-0 top-[64px] z-40 bg-white overflow-y-auto border-t border-isec-silver animate-in slide-in-from-top-2 duration-200 print:hidden">
          <div className="flex flex-col p-6 gap-2">
            {mainNavigation.map((item) => (
              <div key={item.id} className="flex flex-col border-b border-isec-silver last:border-0 pb-2 mb-2">
                <div className="flex items-center justify-between">
                  <NavLink 
                    to={item.path} 
                    className="text-base font-bold text-isec-dark-gray uppercase py-2 flex-grow hover:text-isec-crimson transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {getTranslatedLabel(item.id, item.label)}
                  </NavLink>
                  {item.columns && item.columns.length > 0 && (
                    <button 
                      className="p-2 text-isec-dark-gray"
                      onClick={() => toggleMobileSubmenu(item.id)}
                      aria-label={language === 'en' ? `Expand submenu for ${item.label}` : `Expandir submenu de ${item.label}`}
                      aria-expanded={expandedMobileMenu === item.id}
                      aria-controls={`mobile-submenu-${item.id}`}
                    >
                      <span className="material-symbols-outlined" aria-hidden="true">
                        {expandedMobileMenu === item.id ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                  )}
                </div>
                
                {/* Mobile Submenu Expansion */}
                {expandedMobileMenu === item.id && item.columns && (
                  <div id={`mobile-submenu-${item.id}`} className="flex flex-col pl-4 pb-2 gap-4 mt-2 animate-in slide-in-from-top-1">
                    {item.columns.map((column, colIdx) => (
                      <div key={colIdx} className="flex flex-col gap-4">
                        {column.map((section, secIdx) => (
                          <div key={secIdx} className="flex flex-col gap-2">
                            {section.title && (
                              <h4 className="font-bold text-isec-dark-gray text-sm">{tMenu(section.title)}</h4>
                            )}
                            <div className="flex flex-col gap-2 pl-2 border-l border-isec-silver">
                              {section.links.map((link, linkIdx) => (
                                <Link
                                  key={linkIdx}
                                  to={link.path}
                                  className="text-sm text-secondary hover:text-isec-crimson py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {tMenu(link.label)}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link to="/portal" className="mt-4 bg-isec-crimson text-white px-4 py-3 rounded text-center font-bold hover:bg-red-800 transition-colors tracking-widest text-[12px] uppercase w-full" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.portal')}
            </Link>
          </div>
        </div>
      )}

      <main className="flex-grow flex flex-col w-full relative z-0">
        <Breadcrumb />
        <Outlet />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
