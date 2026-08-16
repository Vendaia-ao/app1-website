import { useLanguage } from '../contexts/LanguageContext';

export default function Documents() {
  const { language, t } = useLanguage();

  return (
    <>
      <section className="bg-surface-container-highest py-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <h1 className="text-headline-display font-headline-display font-bold text-isec-dark-gray mb-4">{t('documents.title')}</h1>
          <p className="text-body-lg font-body-lg text-secondary max-w-3xl">
            {t('documents.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-isec-dark-gray" aria-hidden="true">search</span>
              <input 
                type="text" 
                aria-label={t('documents.searchPlaceholder') as string}
                placeholder={t('documents.searchPlaceholder') as string} 
                className="w-full h-12 pl-12 pr-4 bg-surface-container-lowest border border-isec-silver rounded focus:outline-none focus:border-isec-crimson transition-colors"
              />
            </div>
            <select aria-label={language === 'en' ? "Filter by category" : "Filtrar por categoria"} className="h-12 px-4 bg-surface-container-lowest border border-isec-silver rounded focus:outline-none focus:border-isec-crimson transition-colors md:w-64">
              <option value="all">{t('documents.allCategories')}</option>
              <option value="estatutos">{t('documents.statutes')}</option>
              <option value="regulamentos">{t('documents.regulations')}</option>
              <option value="legislacao">{t('documents.legislation')}</option>
              <option value="diversos">{t('documents.others')}</option>
            </select>
          </div>

          <div className="bg-surface-container-lowest border border-isec-silver rounded-lg overflow-hidden">
            <div className="grid grid-cols-12 bg-surface-container-low border-b border-isec-silver p-4">
              <div className="col-span-8 md:col-span-6 font-label-md text-label-md font-bold text-isec-dark-gray">{t('documents.colTitle')}</div>
              <div className="col-span-4 md:col-span-3 font-label-md text-label-md font-bold text-isec-dark-gray hidden md:block">{t('documents.colCategory')}</div>
              <div className="col-span-4 md:col-span-2 font-label-md text-label-md font-bold text-isec-dark-gray text-right md:text-left">{t('documents.colDate')}</div>
              <div className="col-span-4 md:col-span-1 font-label-md text-label-md font-bold text-isec-dark-gray text-center hidden md:block">{t('documents.colAction')}</div>
            </div>
            
            <div className="divide-y divide-isec-silver">
              
              <div className="grid grid-cols-12 p-4 items-center hover:bg-surface-container-highest transition-colors group">
                <div className="col-span-12 md:col-span-6 mb-2 md:mb-0 pr-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-isec-crimson shrink-0 mt-0.5">picture_as_pdf</span>
                    <div>
                      <h3 className="font-body-md text-body-md text-isec-dark-gray group-hover:text-isec-crimson transition-colors cursor-pointer">Estatutos do ISPTEC (Revisão 2024)</h3>
                      <p className="text-label-sm font-label-sm text-secondary md:hidden mt-1">Estatutos • 12/09/2024</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 hidden md:block">
                  <span className="inline-block px-2 py-1 bg-surface-container border border-isec-silver rounded text-label-sm font-label-sm text-isec-dark-gray">Estatutos</span>
                </div>
                <div className="col-span-2 hidden md:block">
                  <span className="text-body-sm font-body-sm text-secondary">12/09/2021</span>
                </div>
                <div className="col-span-12 md:col-span-1 text-right md:text-center mt-2 md:mt-0">
                  <button aria-label={language === 'en' ? 'Download Document' : 'Transferir Documento'} className="text-isec-crimson hover:bg-primary-fixed p-2 rounded-full transition-colors inline-flex items-center justify-center">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-12 p-4 items-center hover:bg-surface-container-highest transition-colors group">
                <div className="col-span-12 md:col-span-6 mb-2 md:mb-0 pr-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-isec-crimson shrink-0 mt-0.5">picture_as_pdf</span>
                    <div>
                      <h3 className="font-body-md text-body-md text-isec-dark-gray group-hover:text-isec-crimson transition-colors cursor-pointer">Regulamento de Avaliação de Conhecimentos e Competências</h3>
                      <p className="text-label-sm font-label-sm text-secondary md:hidden mt-1">Regulamentos • 05/10/2023</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 hidden md:block">
                  <span className="inline-block px-2 py-1 bg-surface-container border border-isec-silver rounded text-label-sm font-label-sm text-isec-dark-gray">Regulamentos</span>
                </div>
                <div className="col-span-2 hidden md:block">
                  <span className="text-body-sm font-body-sm text-secondary">05/10/2023</span>
                </div>
                <div className="col-span-12 md:col-span-1 text-right md:text-center mt-2 md:mt-0">
                  <button aria-label={language === 'en' ? 'Download Document' : 'Transferir Documento'} className="text-isec-crimson hover:bg-primary-fixed p-2 rounded-full transition-colors inline-flex items-center justify-center">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-12 p-4 items-center hover:bg-surface-container-highest transition-colors group">
                <div className="col-span-12 md:col-span-6 mb-2 md:mb-0 pr-4">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-isec-crimson shrink-0 mt-0.5">picture_as_pdf</span>
                    <div>
                      <h3 className="font-body-md text-body-md text-isec-dark-gray group-hover:text-isec-crimson transition-colors cursor-pointer">Plano Estratégico do ISPTEC 2024-2027</h3>
                      <p className="text-label-sm font-label-sm text-secondary md:hidden mt-1">Diversos • 15/01/2024</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 hidden md:block">
                  <span className="inline-block px-2 py-1 bg-surface-container border border-isec-silver rounded text-label-sm font-label-sm text-isec-dark-gray">Diversos</span>
                </div>
                <div className="col-span-2 hidden md:block">
                  <span className="text-body-sm font-body-sm text-secondary">15/01/2024</span>
                </div>
                <div className="col-span-12 md:col-span-1 text-right md:text-center mt-2 md:mt-0">
                  <button aria-label={language === 'en' ? 'Download Document' : 'Transferir Documento'} className="text-isec-crimson hover:bg-primary-fixed p-2 rounded-full transition-colors inline-flex items-center justify-center">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
          
          <nav aria-label={language === 'en' ? "Pagination" : "Navegação de páginas"} className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <button disabled aria-label={language === 'en' ? "Previous page" : "Página anterior"} className="w-10 h-10 flex items-center justify-center rounded border border-isec-silver text-isec-silver cursor-not-allowed">
                <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
              </button>
              <button aria-label={language === 'en' ? "Page 1" : "Página 1"} aria-current="page" className="w-10 h-10 flex items-center justify-center rounded border border-isec-crimson bg-isec-crimson text-white font-label-sm">1</button>
              <button aria-label={language === 'en' ? "Page 2" : "Página 2"} className="w-10 h-10 flex items-center justify-center rounded border border-isec-silver text-isec-dark-gray hover:bg-surface-container transition-colors font-label-sm">2</button>
              <button aria-label={language === 'en' ? "Page 3" : "Página 3"} className="w-10 h-10 flex items-center justify-center rounded border border-isec-silver text-isec-dark-gray hover:bg-surface-container transition-colors font-label-sm">3</button>
              <button aria-label={language === 'en' ? "Next page" : "Próxima página"} className="w-10 h-10 flex items-center justify-center rounded border border-isec-silver text-isec-dark-gray hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
              </button>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
