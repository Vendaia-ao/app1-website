import { Link } from 'react-router-dom';

export default function News() {
  return (
    <>
      <section className="bg-surface-container-highest py-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto text-center">
          <h1 className="text-headline-display font-headline-display font-bold text-isec-dark-gray mb-4">Notícias ISPTEC</h1>
          <p className="text-body-lg font-body-lg text-secondary max-w-2xl mx-auto">
            Acompanhe as últimas novidades, eventos, investigações e conquistas da nossa comunidade académica.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-16">
            <div className="lg:col-span-8 rounded-lg overflow-hidden relative min-h-[400px] flex items-end group cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAkIs0NxgkQ87ptJMKFyQ_Z8H0q0Nx790Z2ez-JbbjilzjYXdPBCw5ROexf64FStj2U3c6bOBq5f-FH1m8MSOfEW-kOhT-LKdKWQUodW1kfWh2DZu1t-1YsAJgDhuDmcESw_8tSQMawfkPh8SCqY_9tLCwXva7efwaF6AV1hj-mnZIcNyOxIFfDqcWYzyfJ8_KP1_kOkRw8Bi_mZL1QbS73XVlH-4z7rBHcfNn3jX2qEpbop25bVAtRg')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-isec-black via-isec-black/60 to-transparent"></div>
              
              <div className="relative z-10 p-8 md:p-12 w-full">
                <span className="inline-block px-3 py-1 bg-isec-crimson text-white text-label-sm font-label-sm font-bold uppercase tracking-wider rounded mb-4">Destaque</span>
                <h2 className="text-headline-lg font-headline-lg font-bold text-white mb-4 line-clamp-2 group-hover:text-primary-fixed transition-colors">
                  ISPTEC acolhe Feira de Tecnologia e Inovação de Luanda
                </h2>
                <div className="flex items-center gap-4 text-surface-variant text-label-sm font-label-sm">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> 12 Agosto 2026</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> 3 min leitura</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <h3 className="text-headline-md font-headline-md font-bold text-isec-dark-gray border-b border-isec-silver pb-2">Mais Lidas</h3>
              
              <Link to="/news" className="group flex gap-4 items-start">
                <div className="w-24 h-24 shrink-0 rounded overflow-hidden">
                  <img src="https://placehold.co/100x100/eeeeee/333333?text=Imagem" alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="text-body-md font-body-md font-semibold text-isec-dark-gray group-hover:text-isec-crimson transition-colors line-clamp-2 mb-1">
                    Estudantes do ISPTEC vencem Hackathon Unitel
                  </h4>
                  <span className="text-label-sm font-label-sm text-secondary">08 Agosto 2026</span>
                </div>
              </Link>
              
              <Link to="/news" className="group flex gap-4 items-start">
                <div className="w-24 h-24 shrink-0 rounded overflow-hidden">
                  <img src="https://placehold.co/100x100/eeeeee/333333?text=Imagem" alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="text-body-md font-body-md font-semibold text-isec-dark-gray group-hover:text-isec-crimson transition-colors line-clamp-2 mb-1">
                    Candidaturas abertas para os novos Cursos de Pós-Graduação e Mestrado
                  </h4>
                  <span className="text-label-sm font-label-sm text-secondary">01 Agosto 2026</span>
                </div>
              </Link>

              <Link to="/news" className="group flex gap-4 items-start">
                <div className="w-24 h-24 shrink-0 rounded overflow-hidden">
                  <img src="https://placehold.co/100x100/eeeeee/333333?text=Imagem" alt="Thumbnail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="text-body-md font-body-md font-semibold text-isec-dark-gray group-hover:text-isec-crimson transition-colors line-clamp-2 mb-1">
                    Parceria estratégica com a Sonangol reforça investigação científica
                  </h4>
                  <span className="text-label-sm font-label-sm text-secondary">25 Julho 2026</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="mb-12 border-b border-isec-silver">
            <h2 className="text-headline-md font-headline-md font-bold text-isec-dark-gray pb-4 inline-block border-b-2 border-isec-crimson -mb-[1px]">Últimas Notícias</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            
            <article className="bg-surface-container-lowest border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg overflow-hidden flex flex-col group">
              <div className="w-full h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-isec-silver">image</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-3">
                  <span className="text-label-sm font-label-sm text-isec-crimson font-bold">INSTITUCIONAL</span>
                  <span className="text-label-sm font-label-sm text-secondary">• 01-08-2026</span>
                </div>
                <h3 className="text-headline-md font-headline-md font-semibold text-isec-dark-gray mb-3 leading-tight group-hover:text-isec-crimson transition-colors">
                  ISPTEC inaugura novo Laboratório de Inteligência Artificial Aplicada
                </h3>
                <p className="text-body-sm font-body-sm text-secondary mb-6 flex-grow line-clamp-3">
                  O novo espaço de investigação vai permitir aos estudantes desenvolverem projetos em parceria com empresas tecnológicas de Luanda...
                </p>
                <Link to="/news" className="text-label-md font-label-md text-isec-crimson font-bold hover:underline inline-flex items-center gap-1">
                  Ler artigo <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </article>

            <article className="bg-surface-container-lowest border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg overflow-hidden flex flex-col group">
              <div className="w-full h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-isec-silver">image</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-3">
                  <span className="text-label-sm font-label-sm text-isec-crimson font-bold">INVESTIGAÇÃO</span>
                  <span className="text-label-sm font-label-sm text-secondary">• 05-08-2026</span>
                </div>
                <h3 className="text-headline-md font-headline-md font-semibold text-isec-dark-gray mb-3 leading-tight group-hover:text-isec-crimson transition-colors">
                  Estudantes de Engenharia desenvolvem nova solução para o Setor Petrolífero
                </h3>
                <p className="text-body-sm font-body-sm text-secondary mb-6 flex-grow line-clamp-3">
                  Um programa de investigação focado na otimização da extração sustentável, desenvolvido em parceria com a Sonangol...
                </p>
                <Link to="/news" className="text-label-md font-label-md text-isec-crimson font-bold hover:underline inline-flex items-center gap-1">
                  Ler artigo <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </article>

            <article className="bg-surface-container-lowest border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg overflow-hidden flex flex-col group">
              <div className="w-full h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-isec-silver">image</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-3">
                  <span className="text-label-sm font-label-sm text-isec-crimson font-bold">EMPREGABILIDADE</span>
                  <span className="text-label-sm font-label-sm text-secondary">• 05-08-2026</span>
                </div>
                <h3 className="text-headline-md font-headline-md font-semibold text-isec-dark-gray mb-3 leading-tight group-hover:text-isec-crimson transition-colors">
                  Diplomados do ISPTEC com 100% de empregabilidade na Banca e Telecomunicações
                </h3>
                <p className="text-body-sm font-body-sm text-secondary mb-6 flex-grow line-clamp-3">
                  Os cursos de Engenharia Informática e Gestão continuam a revelar uma taxa de integração profissional recorde em Angola...
                </p>
                <Link to="/news" className="text-label-md font-label-md text-isec-crimson font-bold hover:underline inline-flex items-center gap-1">
                  Ler artigo <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </article>

          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 border border-isec-dark-gray text-isec-dark-gray font-label-md text-label-md px-8 py-3 rounded hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-[18px]">refresh</span>
              Carregar mais notícias
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
