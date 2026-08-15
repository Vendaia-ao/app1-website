import { useLocation } from 'react-router-dom';

export default function GenericPage() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const title = pathSegments[pathSegments.length - 1]?.replace(/-/g, ' ') || 'Página';

  return (
    <div className="max-w-[1280px] mx-auto px-10 py-24 w-full flex-grow flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
      <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-4xl text-isec-silver">construction</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-isec-dark-gray capitalize mb-4">
        {decodeURIComponent(title)}
      </h1>
      <p className="text-secondary max-w-lg text-lg">
        Esta secção encontra-se atualmente em desenvolvimento no âmbito da reestruturação do portal do ISPTEC.
      </p>
      <a href="/" className="mt-8 px-6 py-3 bg-isec-crimson text-white font-bold uppercase text-xs tracking-wider hover:bg-red-800 transition-colors rounded">
        Voltar à Home
      </a>
    </div>
  );
}
