import { useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { mainNavigation, MenuItem } from '../data/navigation';

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150); // slight delay to make moving to the dropdown easier
  };

  return (
    <nav className="h-full flex items-center" aria-label="Navegação Principal" onMouseLeave={handleMouseLeave}>
      <ul className="flex items-center h-full m-0 p-0 list-none">
        {mainNavigation.map((item: MenuItem) => (
          <li
            key={item.id}
            className="h-full flex items-center"
            onMouseEnter={() => handleMouseEnter(item.id)}
          >
            <NavLink
              to={item.path}
              aria-haspopup={item.columns && item.columns.length > 0 ? 'true' : undefined}
              aria-expanded={item.columns && item.columns.length > 0 ? activeMenu === item.id : undefined}
              className={({ isActive }) =>
                `px-3 lg:px-4 h-full flex items-center text-xs lg:text-sm font-bold uppercase tracking-wider transition-colors border-b-4 ${
                  isActive || activeMenu === item.id
                    ? 'text-isec-crimson border-isec-crimson bg-neutral-50'
                    : 'text-isec-dark-gray border-transparent hover:text-isec-crimson hover:bg-neutral-50'
                }`
              }
            >
              {item.label}
            </NavLink>

            {item.columns && item.columns.length > 0 && activeMenu === item.id && (
              <div 
                className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-isec-silver z-50 animate-in slide-in-from-top-2 duration-200"
                style={{ minHeight: '300px' }}
                role="region"
                aria-label={`Submenu de ${item.label}`}
              >
                <div className="max-w-[1280px] mx-auto px-10 py-10 flex flex-wrap gap-x-12 gap-y-10">
                  {item.columns.map((column, colIdx) => (
                    <div key={colIdx} className="flex-1 min-w-[200px] flex flex-col gap-8">
                      {column.map((section, secIdx) => (
                        <div key={secIdx} className="flex flex-col gap-3">
                          {section.title && (
                            <h3 className="text-lg text-isec-dark-gray mb-1">
                              {section.title}
                            </h3>
                          )}
                          <ul className="flex flex-col gap-2.5">
                            {section.links.map((link, linkIdx) => (
                              <li key={linkIdx}>
                                <Link
                                  to={link.path}
                                  className="text-[13px] text-secondary hover:text-isec-crimson hover:underline transition-colors"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
