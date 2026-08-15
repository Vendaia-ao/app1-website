import { useParams, Navigate } from 'react-router-dom';
import SidebarLayout from '../components/SidebarLayout';
import DocumentTable from '../components/DocumentTable';
import heroImg from '../assets/images/angolan_academic_services_1786829412025.jpg';

const SIDEBAR_ITEMS = [
  { label: 'Apresentação', path: 'apresentacao' },
  { label: 'Avisos', path: 'avisos' },
  { label: 'Diplomas', path: 'diplomas' },
  { label: 'Emolumentos', path: 'emolumentos' },
  { label: 'Formulários', path: 'formularios' },
  { label: 'Regulamentos', path: 'regulamentos' },
  { label: 'Planos de Estudo', path: 'planos' },
  { label: 'Prazos', path: 'prazos' },
  { label: 'Contactos', path: 'contactos' },
];

const MOCK_DOCUMENTS = [
  {
    name: 'Regulamento_Academico_ISPTEC.pdf',
    updatedAt: '14/01/2026',
    size: '1.817.255 bytes',
    url: '#'
  },
  {
    name: 'Regulamento_de_Estudos_Pos_Graduacao_ISPTEC.pdf',
    updatedAt: '05/03/2026',
    size: '2.021.452 bytes',
    url: '#'
  }
];

const MOCK_CONCURSOS = [
  {
    name: 'Acesso_Regulamento_ISPTEC.pdf',
    updatedAt: '03/05/2024',
    size: '1.033.568 bytes',
    url: '#'
  },
  {
    name: 'Orientacao_Cursos_Curta_Duracao.pdf',
    updatedAt: '31/08/2025',
    size: '364.086 bytes',
    url: '#'
  }
];

export default function AcademicServices() {
  const { subpage } = useParams();

  if (!subpage) {
    return <Navigate to="/academic-services/apresentacao" replace />;
  }

  return (
    <SidebarLayout 
      title="Serviços Académicos"
      basePath="/academic-services"
      items={SIDEBAR_ITEMS}
      heroImageUrl={heroImg}
    >
      {subpage === 'regulamentos' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-10">Legislação e Regulamentação</h2>
          
          <DocumentTable 
            title="Regulamento de Frequência, Avaliação de Conhecimentos e Transição de Ano"
            documents={MOCK_DOCUMENTS} 
          />

          <h3 className="text-xl font-light italic text-isec-dark-gray mb-4 mt-12">Estatuto Disciplinar do Estudante do ISPTEC</h3>
          <div className="w-full h-px bg-isec-silver mb-10"></div>

          <h3 className="text-xl font-light italic text-isec-dark-gray mb-4 mt-12">Creditações</h3>
          <div className="w-full h-px bg-isec-silver mb-10"></div>

          <h3 className="text-xl font-light italic text-isec-dark-gray mb-4 mt-12">Alteração de Matricula/Inscrição</h3>
          <div className="w-full h-px bg-isec-silver mb-10"></div>

          <h3 className="text-xl font-light italic text-isec-dark-gray mb-4 mt-12">Bases do Financiamento do Ensino Superior</h3>
          <div className="w-full h-px bg-isec-silver mb-10"></div>

          <DocumentTable 
            title="Concursos Especiais de Acesso ao Ensino Superior"
            documents={MOCK_CONCURSOS} 
          />
        </div>
      )}

      {subpage === 'apresentacao' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Serviços Académicos</h2>
          <p className="text-secondary mb-4">
            Os Serviços Académicos são a estrutura de apoio administrativo vocacionada para o acompanhamento do percurso escolar dos estudantes, desde o seu ingresso até à conclusão dos cursos.
          </p>
        </div>
      )}

      {/* Fallback for other sections */}
      {!['apresentacao', 'regulamentos'].includes(subpage) && SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6 capitalize">{subpage.replace(/-/g, ' ')}</h2>
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-3xl text-isec-silver">construction</span>
          </div>
          <p className="text-secondary">Página em construção.</p>
        </div>
      )}

      {!SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <Navigate to="/academic-services/apresentacao" replace />
      )}
    </SidebarLayout>
  );
}
