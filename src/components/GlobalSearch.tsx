import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock data for search
const mockData = [
  { id: 1, title: 'Engenharia Informática (Licenciatura)', category: 'Cursos', path: '/education' },
  { id: 2, title: 'Engenharia Civil (Mestrado)', category: 'Cursos', path: '/education' },
  { id: 3, title: 'Engenharia Eletrotécnica (Mestrado)', category: 'Cursos', path: '/education' },
  { id: 4, title: 'CTeSP em Desenvolvimento Web', category: 'Cursos', path: '/education' },
  { id: 5, title: 'Departamento de Engenharia Informática', category: 'Departamentos', path: '/departments' },
  { id: 6, title: 'Departamento de Física e Matemática', category: 'Departamentos', path: '/departments' },
  { id: 7, title: 'Departamento de Engenharia Civil', category: 'Departamentos', path: '/departments' },
  { id: 8, title: 'Estatutos do ISEC', category: 'Documentos', path: '/documents' },
  { id: 9, title: 'Regulamento de Avaliação', category: 'Documentos', path: '/documents' },
  { id: 10, title: 'Guia Académico 2026/27', category: 'Documentos', path: '/documents' },
];

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const filteredResults = query.trim() === '' 
    ? [] 
    : mockData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [wrapperRef]);

  const handleResultClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={wrapperRef} className="relative hidden md:block ml-4" role="search" aria-label="Pesquisa global">
      <div className="relative">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-isec-dark-gray/50 text-[18px]" aria-hidden="true">
          search
        </span>
        <input
          type="text"
          aria-label="Pesquisar no site"
          aria-expanded={isOpen && query.trim() !== ''}
          aria-controls="search-results"
          placeholder="Pesquisar..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-48 lg:w-64 h-9 pl-9 pr-4 rounded-full bg-surface-container border border-transparent focus:border-isec-crimson focus:bg-white focus:outline-none transition-all text-sm text-isec-dark-gray"
        />
      </div>

      {isOpen && query.trim() !== '' && (
        <div id="search-results" className="absolute top-full mt-2 right-0 w-80 max-h-96 overflow-y-auto bg-white border border-isec-silver rounded-lg shadow-xl z-50 py-2">
          {filteredResults.length > 0 ? (
            <div className="flex flex-col">
              {filteredResults.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result.path)}
                  className="w-full text-left px-4 py-2 hover:bg-surface-container-low transition-colors group border-b border-isec-silver last:border-b-0"
                >
                  <div className="text-[10px] font-bold text-isec-crimson uppercase mb-0.5">
                    {result.category}
                  </div>
                  <div className="text-sm font-semibold text-isec-dark-gray group-hover:text-isec-crimson transition-colors truncate">
                    {result.title}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-6 text-center text-secondary text-sm">
              Nenhum resultado encontrado para "{query}".
            </div>
          )}
        </div>
      )}
    </div>
  );
}
