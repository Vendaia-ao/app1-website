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
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Departamento de Engenharias e Tecnologias</h2>
          <div className="prose prose-neutral max-w-none text-secondary space-y-4">
            <p>
              O Departamento de Engenharias e Tecnologias (DET) é a unidade orgânica do ISPTEC vocacionada para o ensino, investigação e prestação de serviços nas áreas das Engenharias e Tecnologias de Informação.
            </p>
            <p>
              A forte ligação ao tecido empresarial (como a Sonangol) e aos laboratórios de excelência confere aos cursos aqui lecionados uma componente de elevada aplicação prática, permitindo que as taxas de empregabilidade dos diplomados sejam excecionais no mercado de trabalho angolano.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
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

      {/* Fallback for other sections */}
      {subpage !== 'engenharias-tecnologias' && SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6 capitalize">{SIDEBAR_ITEMS.find(i => i.path === subpage)?.label}</h2>
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-3xl text-isec-silver">construction</span>
          </div>
          <p className="text-secondary">Página departamental em construção.</p>
        </div>
      )}

      {!SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <Navigate to="/departments/informatica" replace />
      )}
    </SidebarLayout>
  );
}
