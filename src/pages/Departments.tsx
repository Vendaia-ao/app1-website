import { useParams, Navigate } from 'react-router-dom';
import SidebarLayout from '../components/SidebarLayout';
import heroImg from '../assets/images/angolan_engineers_1786829365741.jpg';

const SIDEBAR_ITEMS = [
  { label: 'Engenharias e Tecnologias', path: 'engenharias-tecnologias' },
  { label: 'Ciências Sociais Aplicadas', path: 'ciencias-sociais' },
];

export default function Departments() {
  const { subpage } = useParams();

  if (!subpage) {
    return <Navigate to="/departments/engenharias-tecnologias" replace />;
  }

  return (
    <SidebarLayout 
      title="Departamentos"
      basePath="/departments"
      items={SIDEBAR_ITEMS}
      heroImageUrl={heroImg}
    >
      {subpage === 'engenharias-tecnologias' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Departamento de Engenharias e Tecnologias (DET)</h2>
          <div className="prose prose-neutral max-w-none text-secondary space-y-4">
            <p>
              O Departamento de Engenharias e Tecnologias (DET) é a unidade orgânica do ISPTEC vocacionada para o ensino, investigação e prestação de serviços nas áreas das Engenharias e Tecnologias de Informação.
            </p>
            <p>
              A forte ligação ao tecido empresarial (como a Sonangol) e aos laboratórios de excelência confere aos cursos aqui lecionados uma componente de elevada aplicação prática, permitindo que as taxas de empregabilidade dos diplomados sejam excecionais no mercado de trabalho angolano.
            </p>
            
            <h3 className="text-xl font-bold text-isec-dark-gray mt-8 mb-4">Áreas de Conhecimento e Cursos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-isec-crimson">computer</span>
                <div>
                  <h4 className="font-bold text-isec-dark-gray">Engenharia Informática</h4>
                  <p className="text-xs text-secondary mt-1">Licenciatura</p>
                </div>
              </div>
              <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-isec-crimson">precision_manufacturing</span>
                <div>
                  <h4 className="font-bold text-isec-dark-gray">Engenharia Mecânica</h4>
                  <p className="text-xs text-secondary mt-1">Licenciatura</p>
                </div>
              </div>
              <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-isec-crimson">bolt</span>
                <div>
                  <h4 className="font-bold text-isec-dark-gray">Engenharia Eletrotécnica</h4>
                  <p className="text-xs text-secondary mt-1">Licenciatura</p>
                </div>
              </div>
              <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-isec-crimson">science</span>
                <div>
                  <h4 className="font-bold text-isec-dark-gray">Engenharia Química</h4>
                  <p className="text-xs text-secondary mt-1">Licenciatura</p>
                </div>
              </div>
              <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-isec-crimson">architecture</span>
                <div>
                  <h4 className="font-bold text-isec-dark-gray">Engenharia Civil</h4>
                  <p className="text-xs text-secondary mt-1">Licenciatura</p>
                </div>
              </div>
              <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-isec-crimson">oil_barrel</span>
                <div>
                  <h4 className="font-bold text-isec-dark-gray">Engenharia de Petróleos</h4>
                  <p className="text-xs text-secondary mt-1">Mestrado</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-isec-dark-gray mt-8 mb-4">Contactos da Direção</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-neutral-50 p-6 border border-isec-silver rounded-lg">
                <h4 className="font-bold text-isec-dark-gray mb-2">Coordenação</h4>
                <p className="text-sm">Direção do DET</p>
                <p className="text-sm">Gabinete: Edifício Principal, Campus de Talatona</p>
              </div>
              <div className="bg-neutral-50 p-6 border border-isec-silver rounded-lg">
                <h4 className="font-bold text-isec-dark-gray mb-2">Contactos</h4>
                <p className="text-sm">Telefone: (+244) 226 690 323</p>
                <p className="text-sm">Email: det@isptec.co.ao</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {subpage === 'ciencias-sociais' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Departamento de Ciências Sociais Aplicadas (DCSA)</h2>
          <div className="prose prose-neutral max-w-none text-secondary space-y-4">
            <p>
              O Departamento de Ciências Sociais Aplicadas (DCSA) é responsável por desenvolver atividades de ensino e investigação centradas nas áreas da Economia, Gestão, Contabilidade e Finanças, vitais para o tecido empresarial e desenvolvimento nacional.
            </p>
            <p>
              O DCSA distingue-se pelo seu corpo docente altamente qualificado e pela promoção de um ensino que alia o rigor académico à resolução de casos práticos do panorama empresarial angolano e internacional.
            </p>

            <h3 className="text-xl font-bold text-isec-dark-gray mt-8 mb-4">Áreas de Conhecimento e Cursos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-isec-crimson">bar_chart</span>
                <div>
                  <h4 className="font-bold text-isec-dark-gray">Gestão de Empresas</h4>
                  <p className="text-xs text-secondary mt-1">Licenciatura</p>
                </div>
              </div>
              <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-isec-crimson">account_balance</span>
                <div>
                  <h4 className="font-bold text-isec-dark-gray">Economia</h4>
                  <p className="text-xs text-secondary mt-1">Licenciatura</p>
                </div>
              </div>
              <div className="border border-isec-silver rounded p-4 bg-white flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl text-isec-crimson">business_center</span>
                <div>
                  <h4 className="font-bold text-isec-dark-gray">Gestão de Empresas (MBA)</h4>
                  <p className="text-xs text-secondary mt-1">Mestrado</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-isec-dark-gray mt-8 mb-4">Contactos da Direção</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-neutral-50 p-6 border border-isec-silver rounded-lg">
                <h4 className="font-bold text-isec-dark-gray mb-2">Coordenação</h4>
                <p className="text-sm">Direção do DCSA</p>
                <p className="text-sm">Gabinete: Edifício Principal, Campus de Talatona</p>
              </div>
              <div className="bg-neutral-50 p-6 border border-isec-silver rounded-lg">
                <h4 className="font-bold text-isec-dark-gray mb-2">Contactos</h4>
                <p className="text-sm">Telefone: (+244) 226 690 325</p>
                <p className="text-sm">Email: dcsa@isptec.co.ao</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fallback for other sections */}
      {!SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <Navigate to="/departments/engenharias-tecnologias" replace />
      )}
    </SidebarLayout>
  );
}
