import { useParams, Navigate } from 'react-router-dom';
import SidebarLayout from '../components/SidebarLayout';
import DocumentTable from '../components/DocumentTable';
import heroImg from '../assets/images/angolan_academic_services_1786829412025.jpg';
import { useLanguage } from '../contexts/LanguageContext';

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
  const { language } = useLanguage();

  if (!subpage) {
    return <Navigate to="/academic-services/apresentacao" replace />;
  }

  return (
    <SidebarLayout 
      title={language === 'en' ? 'Academic Services' : 'Serviços Académicos'}
      basePath="/academic-services"
      items={SIDEBAR_ITEMS}
      heroImageUrl={heroImg}
    >
      {subpage === 'regulamentos' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-10">
            {language === 'en' ? 'Legislation and Regulation' : 'Legislação e Regulamentação'}
          </h2>
          
          <DocumentTable 
            title={language === 'en' ? 'Regulation of Attendance, Knowledge Evaluation and Year Transition' : 'Regulamento de Frequência, Avaliação de Conhecimentos e Transição de Ano'}
            documents={MOCK_DOCUMENTS} 
          />

          <h3 className="text-xl font-light italic text-isec-dark-gray mb-4 mt-12">
            {language === 'en' ? 'ISPTEC Student Disciplinary Statute' : 'Estatuto Disciplinar do Estudante do ISPTEC'}
          </h3>
          <div className="w-full h-px bg-isec-silver mb-10"></div>

          <h3 className="text-xl font-light italic text-isec-dark-gray mb-4 mt-12">
            {language === 'en' ? 'Accreditations' : 'Creditações'}
          </h3>
          <div className="w-full h-px bg-isec-silver mb-10"></div>

          <h3 className="text-xl font-light italic text-isec-dark-gray mb-4 mt-12">
            {language === 'en' ? 'Change of Registration/Enrollment' : 'Alteração de Matricula/Inscrição'}
          </h3>
          <div className="w-full h-px bg-isec-silver mb-10"></div>

          <h3 className="text-xl font-light italic text-isec-dark-gray mb-4 mt-12">
            {language === 'en' ? 'Basis of Higher Education Financing' : 'Bases do Financiamento do Ensino Superior'}
          </h3>
          <div className="w-full h-px bg-isec-silver mb-10"></div>

          <DocumentTable 
            title={language === 'en' ? 'Special Competitions for Access to Higher Education' : 'Concursos Especiais de Acesso ao Ensino Superior'}
            documents={MOCK_CONCURSOS} 
          />
        </div>
      )}

      {subpage === 'apresentacao' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">
            {language === 'en' ? 'Academic Services' : 'Serviços Académicos'}
          </h2>
          <p className="text-secondary mb-4">
            {language === 'en' 
              ? 'The Academic Services are the administrative support structure aimed at monitoring the students\' academic path, from their admission to the completion of the courses.' 
              : 'Os Serviços Académicos são a estrutura de apoio administrativo vocacionada para o acompanhamento do percurso escolar dos estudantes, desde o seu ingresso até à conclusão dos cursos.'}
          </p>
        </div>
      )}

      {/* Fallback for other sections */}
      {!['apresentacao', 'regulamentos'].includes(subpage) && SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6 capitalize">
            {language === 'en' && subpage === 'avisos' ? 'Notices' : 
             language === 'en' && subpage === 'emolumentos' ? 'Fees' : 
             language === 'en' && subpage === 'formularios' ? 'Forms' : 
             language === 'en' && subpage === 'regulamentos' ? 'Regulations' : 
             language === 'en' && subpage === 'planos' ? 'Study Plans' : 
             language === 'en' && subpage === 'prazos' ? 'Deadlines' : 
             language === 'en' && subpage === 'contactos' ? 'Contacts' : subpage.replace(/-/g, ' ')}
          </h2>
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-3xl text-isec-silver">construction</span>
          </div>
          <p className="text-secondary">{language === 'en' ? 'Page under construction.' : 'Página em construção.'}</p>
        </div>
      )}

      {!SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <Navigate to="/academic-services/apresentacao" replace />
      )}
    </SidebarLayout>
  );
}
