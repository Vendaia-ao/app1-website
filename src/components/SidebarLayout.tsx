import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarItem {
  label: string;
  path: string;
}

interface SidebarLayoutProps {
  title: string;
  heroImageUrl?: string;
  items: SidebarItem[];
  basePath: string;
  children: React.ReactNode;
}

export default function SidebarLayout({ title, heroImageUrl, items, basePath, children }: SidebarLayoutProps) {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[250px] md:h-[300px] bg-isec-dark-gray print:bg-transparent print:h-auto print:py-8 flex items-center justify-center relative overflow-hidden shrink-0">
        {heroImageUrl && (
          <img 
            src={heroImageUrl} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay print:hidden"
          />
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white print:text-black relative z-10 drop-shadow-md print:drop-shadow-none text-center px-4">
          {title}
        </h1>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1280px] mx-auto w-full px-10 py-12 flex flex-col lg:flex-row print:flex-col gap-12 flex-grow">
        
        {/* Sidebar */}
        <aside aria-label="Menu de navegação lateral" className="w-full lg:w-[280px] shrink-0 flex flex-col gap-2 print:hidden">
          <nav className="flex flex-col gap-2" aria-label="Navegação secundária">
            {items.map((item) => (
              <NavLink
                key={item.path}
                to={`${basePath}/${item.path}`}
                className={({ isActive }) => 
                  `px-6 py-4 rounded text-sm text-center lg:text-left transition-all ${
                    isActive 
                      ? 'bg-isec-crimson text-white shadow-lg font-bold'
                      : 'bg-neutral-100 text-isec-dark-gray hover:bg-neutral-200'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Dynamic Content */}
        <main className="flex-grow min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
