import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SidebarLayout from '../components/SidebarLayout';
import heroImg from '../assets/images/angolan_students_community_1786829400627.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const SIDEBAR_ITEMS = [
  { label: 'Departamento de Engenharias e Tecnologias', path: 'engenharias-tecnologias' },
  { label: 'Departamento de Ciências Sociais Aplicadas', path: 'ciencias-sociais' },
];

export default function Departments() {
  const { subpage } = useParams();
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when subpage changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [subpage]);

  if (!subpage) {
    return <Navigate to="/departments/engenharias-tecnologias" replace />;
  }

  return (
    <SidebarLayout 
      title={language === 'en' ? 'Departments' : 'Departamentos'}
      basePath="/departments"
      items={SIDEBAR_ITEMS}
      heroImageUrl={heroImg}
    >
      {isLoading ? (
        // Skeleton Loader
        <div className="animate-in fade-in duration-300">
          <div className="w-3/4 h-8 bg-surface-container-high rounded mb-6 animate-pulse"></div>
          <div className="space-y-4 mb-8">
            <div className="w-full h-4 bg-surface-variant rounded animate-pulse"></div>
            <div className="w-full h-4 bg-surface-variant rounded animate-pulse"></div>
            <div className="w-5/6 h-4 bg-surface-variant rounded animate-pulse"></div>
          </div>
          
          <div className="w-1/2 h-6 bg-surface-container-high rounded mt-8 mb-4 animate-pulse"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4 animate-pulse">
                <div className="w-10 h-10 bg-surface-container-high rounded-full shrink-0"></div>
                <div className="flex-1">
                  <div className="w-3/4 h-4 bg-surface-container-high rounded mb-2"></div>
                  <div className="w-1/3 h-3 bg-surface-variant rounded"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-1/3 h-6 bg-surface-container-high rounded mt-8 mb-4 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="bg-neutral-50 p-6 border border-isec-silver rounded-lg animate-pulse">
                <div className="w-1/2 h-5 bg-surface-container-high rounded mb-4"></div>
                <div className="w-full h-4 bg-surface-variant rounded mb-2"></div>
                <div className="w-4/5 h-4 bg-surface-variant rounded"></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {subpage === 'engenharias-tecnologias' && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-light text-isec-dark-gray mb-6">
                {language === 'en' ? 'Department of Engineering and Technologies (DET)' : 'Departamento de Engenharias e Tecnologias (DET)'}
              </h2>
              <div className="prose prose-neutral max-w-none text-secondary space-y-4">
                <p>
                  {language === 'en' 
                    ? 'The Department of Engineering and Technologies (DET) is the organic unit of ISPTEC dedicated to teaching, research, and providing services in the areas of Engineering and Information Technology.' 
                    : 'O Departamento de Engenharias e Tecnologias (DET) é a unidade orgânica do ISPTEC vocacionada para o ensino, investigação e prestação de serviços nas áreas das Engenharias e Tecnologias de Informação.'}
                </p>
                <p>
                  {language === 'en' 
                    ? 'The strong connection to the business sector (such as Sonangol) and excellence laboratories gives the courses taught here a highly practical application component, allowing the employability rates of graduates to be exceptional in the Angolan job market.' 
                    : 'A forte ligação ao tecido empresarial (como a Sonangol) e aos laboratórios de excelência confere aos cursos aqui lecionados uma componente de elevada aplicação prática, permitindo que as taxas de empregabilidade dos diplomados sejam excecionais no mercado de trabalho angolano.'}
                </p>
                
                <h3 className="text-xl font-bold text-isec-dark-gray mt-8 mb-4">
                  {language === 'en' ? 'Knowledge Areas and Courses' : 'Áreas de Conhecimento e Cursos'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                    <span className="material-symbols-outlined text-3xl text-isec-crimson">computer</span>
                    <div>
                      <h4 className="font-bold text-isec-dark-gray">{language === 'en' ? 'Computer Engineering' : 'Engenharia Informática'}</h4>
                      <p className="text-xs text-secondary mt-1">{language === 'en' ? 'Bachelor' : 'Licenciatura'}</p>
                    </div>
                  </div>
                  <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                    <span className="material-symbols-outlined text-3xl text-isec-crimson">precision_manufacturing</span>
                    <div>
                      <h4 className="font-bold text-isec-dark-gray">{language === 'en' ? 'Mechanical Engineering' : 'Engenharia Mecânica'}</h4>
                      <p className="text-xs text-secondary mt-1">{language === 'en' ? 'Bachelor' : 'Licenciatura'}</p>
                    </div>
                  </div>
                  <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                    <span className="material-symbols-outlined text-3xl text-isec-crimson">bolt</span>
                    <div>
                      <h4 className="font-bold text-isec-dark-gray">{language === 'en' ? 'Electrical Engineering' : 'Engenharia Eletrotécnica'}</h4>
                      <p className="text-xs text-secondary mt-1">{language === 'en' ? 'Bachelor' : 'Licenciatura'}</p>
                    </div>
                  </div>
                  <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                    <span className="material-symbols-outlined text-3xl text-isec-crimson">science</span>
                    <div>
                      <h4 className="font-bold text-isec-dark-gray">{language === 'en' ? 'Chemical Engineering' : 'Engenharia Química'}</h4>
                      <p className="text-xs text-secondary mt-1">{language === 'en' ? 'Bachelor' : 'Licenciatura'}</p>
                    </div>
                  </div>
                  <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                    <span className="material-symbols-outlined text-3xl text-isec-crimson">architecture</span>
                    <div>
                      <h4 className="font-bold text-isec-dark-gray">{language === 'en' ? 'Civil Engineering' : 'Engenharia Civil'}</h4>
                      <p className="text-xs text-secondary mt-1">{language === 'en' ? 'Bachelor' : 'Licenciatura'}</p>
                    </div>
                  </div>
                  <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                    <span className="material-symbols-outlined text-3xl text-isec-crimson">oil_barrel</span>
                    <div>
                      <h4 className="font-bold text-isec-dark-gray">{language === 'en' ? 'Petroleum Engineering' : 'Engenharia de Petróleos'}</h4>
                      <p className="text-xs text-secondary mt-1">{language === 'en' ? 'Master' : 'Mestrado'}</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-isec-dark-gray mt-8 mb-4">
                  {language === 'en' ? 'Board Contacts' : 'Contactos da Direção'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-neutral-50 p-6 border border-isec-silver rounded-lg">
                    <h4 className="font-bold text-isec-dark-gray mb-2">
                      {language === 'en' ? 'Coordination' : 'Coordenação'}
                    </h4>
                    <p className="text-sm">{language === 'en' ? 'DET Board' : 'Direção do DET'}</p>
                    <p className="text-sm">{language === 'en' ? 'Office: Main Building, Talatona Campus' : 'Gabinete: Edifício Principal, Campus de Talatona'}</p>
                  </div>
                  <div className="bg-neutral-50 p-6 border border-isec-silver rounded-lg">
                    <h4 className="font-bold text-isec-dark-gray mb-2">
                      {language === 'en' ? 'Contacts' : 'Contactos'}
                    </h4>
                    <p className="text-sm">{language === 'en' ? 'Phone:' : 'Telefone:'} (+244) 226 690 323</p>
                    <p className="text-sm">Email: det@isptec.co.ao</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {subpage === 'ciencias-sociais' && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-light text-isec-dark-gray mb-6">
                {language === 'en' ? 'Department of Applied Social Sciences (DCSA)' : 'Departamento de Ciências Sociais Aplicadas (DCSA)'}
              </h2>
              <div className="prose prose-neutral max-w-none text-secondary space-y-4">
                <p>
                  {language === 'en' 
                    ? 'The Department of Applied Social Sciences (DCSA) is responsible for developing teaching and research activities centered in the areas of Economics, Management, Accounting and Finance, vital for the business fabric and national development.' 
                    : 'O Departamento de Ciências Sociais Aplicadas (DCSA) é responsável por desenvolver atividades de ensino e investigação centradas nas áreas da Economia, Gestão, Contabilidade e Finanças, vitais para o tecido empresarial e desenvolvimento nacional.'}
                </p>
                <p>
                  {language === 'en' 
                    ? 'The DCSA is distinguished by its highly qualified teaching staff and the promotion of teaching that combines academic rigor with the resolution of practical cases from the Angolan and international business landscape.' 
                    : 'O DCSA distingue-se pelo seu corpo docente altamente qualificado e pela promoção de um ensino que alia o rigor académico à resolução de casos práticos do panorama empresarial angolano e internacional.'}
                </p>
                
                <h3 className="text-xl font-bold text-isec-dark-gray mt-8 mb-4">
                  {language === 'en' ? 'Knowledge Areas and Courses' : 'Áreas de Conhecimento e Cursos'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                    <span className="material-symbols-outlined text-3xl text-isec-crimson">bar_chart</span>
                    <div>
                      <h4 className="font-bold text-isec-dark-gray">{language === 'en' ? 'Business Management' : 'Gestão de Empresas'}</h4>
                      <p className="text-xs text-secondary mt-1">{language === 'en' ? 'Bachelor' : 'Licenciatura'}</p>
                    </div>
                  </div>
                  <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                    <span className="material-symbols-outlined text-3xl text-isec-crimson">account_balance</span>
                    <div>
                      <h4 className="font-bold text-isec-dark-gray">{language === 'en' ? 'Economics' : 'Economia'}</h4>
                      <p className="text-xs text-secondary mt-1">{language === 'en' ? 'Bachelor' : 'Licenciatura'}</p>
                    </div>
                  </div>
                  <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                    <span className="material-symbols-outlined text-3xl text-isec-crimson">business_center</span>
                    <div>
                      <h4 className="font-bold text-isec-dark-gray">{language === 'en' ? 'Business Management (MBA)' : 'Gestão de Empresas (MBA)'}</h4>
                      <p className="text-xs text-secondary mt-1">{language === 'en' ? 'Master' : 'Mestrado'}</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-isec-dark-gray mt-8 mb-4">
                  {language === 'en' ? 'Board Contacts' : 'Contactos da Direção'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-neutral-50 p-6 border border-isec-silver rounded-lg">
                    <h4 className="font-bold text-isec-dark-gray mb-2">
                      {language === 'en' ? 'Coordination' : 'Coordenação'}
                    </h4>
                    <p className="text-sm">{language === 'en' ? 'DCSA Board' : 'Direção do DCSA'}</p>
                    <p className="text-sm">{language === 'en' ? 'Office: Main Building, Talatona Campus' : 'Gabinete: Edifício Principal, Campus de Talatona'}</p>
                  </div>
                  <div className="bg-neutral-50 p-6 border border-isec-silver rounded-lg">
                    <h4 className="font-bold text-isec-dark-gray mb-2">
                      {language === 'en' ? 'Contacts' : 'Contactos'}
                    </h4>
                    <p className="text-sm">{language === 'en' ? 'Phone:' : 'Telefone:'} (+244) 226 690 325</p>
                    <p className="text-sm">Email: dcsa@isptec.co.ao</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Fallback for other sections */}
      {!SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <Navigate to="/departments/engenharias-tecnologias" replace />
      )}
    </SidebarLayout>
  );
}