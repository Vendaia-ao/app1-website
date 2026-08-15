import { useLocation, Link } from 'react-router-dom';

const routeMap: Record<string, string> = {
  'institution': 'A Instituição',
  'departments': 'Departamentos',
  'education': 'Estudar',
  'news': 'Notícias',
  'student-area': 'Área do Aluno',
  'academic-services': 'Serviços Académicos',
  'documents': 'Documentos',
  'contacts': 'Contactos',
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Do not show breadcrumbs on the home page
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <div className="bg-surface-container-lowest border-b border-isec-silver py-3 px-margin-mobile md:px-margin-desktop w-full shrink-0">
      <div className="max-w-container-max mx-auto flex items-center text-[10px] font-bold text-secondary uppercase tracking-wider">
        <Link to="/" className="hover:text-isec-crimson transition-colors flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">home</span>
          Home
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = routeMap[value] || value.replace(/-/g, ' ');

          return (
            <div key={to} className="flex items-center">
              <span className="material-symbols-outlined text-[14px] mx-2 text-isec-silver">chevron_right</span>
              {isLast ? (
                <span className="text-isec-dark-gray">{label}</span>
              ) : (
                <Link to={to} className="hover:text-isec-crimson transition-colors">
                  {label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
