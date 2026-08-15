import { useParams, Navigate } from 'react-router-dom';
import SidebarLayout from '../components/SidebarLayout';
import heroImg from '../assets/images/angolan_students_campus_1786829352418.jpg';

const SIDEBAR_ITEMS = [
  { label: 'Mestrados', path: 'mestrados' },
  { label: 'Pós-Graduações', path: 'pos-graduacoes' },
  { label: 'Licenciaturas', path: 'licenciaturas' },
  { label: 'Cursos de Curta Duração', path: 'curta-duracao' },
  { label: 'Formação Contínua', path: 'formacao-continua' },
  { label: 'Formas de Ingresso', path: 'ingresso' },
];

const LICENCIATURAS = [
  { name: 'Engenharia Informática', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno / Pós-Laboral', icon: 'computer' },
  { name: 'Engenharia Eletrotécnica', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno / Pós-Laboral', icon: 'bolt' },
  { name: 'Engenharia Mecânica', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno', icon: 'precision_manufacturing' },
  { name: 'Engenharia Química', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno', icon: 'science' },
  { name: 'Engenharia Civil', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno', icon: 'architecture' },
  { name: 'Gestão de Empresas', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno / Pós-Laboral', icon: 'bar_chart' },
  { name: 'Economia', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno', icon: 'account_balance' },
];

const MESTRADOS = [
  { name: 'Mestrado em Engenharia de Petróleos', type: 'Mestrado', duration: '4 Semestres', ects: 120, regime: 'Pós-Laboral', icon: 'oil_barrel' },
  { name: 'Mestrado em Ciência de Dados', type: 'Mestrado', duration: '4 Semestres', ects: 120, regime: 'Pós-Laboral', icon: 'analytics' },
  { name: 'Mestrado em Gestão de Empresas (MBA)', type: 'Mestrado', duration: '4 Semestres', ects: 120, regime: 'Pós-Laboral', icon: 'business_center' },
];

const POS_GRADUACOES = [
  { name: 'Pós-Graduação em Gestão de Projetos', type: 'Pós-Graduação', duration: '2 Semestres', ects: 60, regime: 'Pós-Laboral', icon: 'task' },
  { name: 'Pós-Graduação em Energias Renováveis', type: 'Pós-Graduação', duration: '2 Semestres', ects: 60, regime: 'Pós-Laboral', icon: 'solar_power' },
  { name: 'Pós-Graduação em Cibersegurança', type: 'Pós-Graduação', duration: '2 Semestres', ects: 60, regime: 'Pós-Laboral', icon: 'security' },
];

const CURTA_DURACAO = [
  { name: 'Python para Análise de Dados', type: 'Curta Duração', duration: '40 Horas', regime: 'Pós-Laboral / Online', icon: 'terminal' },
  { name: 'Automação Industrial e PLC', type: 'Curta Duração', duration: '60 Horas', regime: 'Presencial', icon: 'engineering' },
  { name: 'Gestão Financeira para Não Financeiros', type: 'Curta Duração', duration: '30 Horas', regime: 'Pós-Laboral', icon: 'wallet' },
];

// Helper to render course cards
const CourseGrid = ({ courses }: { courses: any[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {courses.map((course, idx) => (
      <div key={idx} className="bg-white border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-md rounded overflow-hidden flex flex-col group cursor-pointer">
        <div className="bg-neutral-50 px-6 py-5 border-b border-isec-silver flex-grow relative overflow-hidden">
          <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[80px] text-isec-silver/20 group-hover:text-isec-crimson/10 transition-colors">
            {course.icon || 'school'}
          </span>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-isec-crimson mb-3 text-2xl">{course.icon || 'school'}</span>
            <h3 className="font-bold text-isec-dark-gray text-lg mb-2 group-hover:text-isec-crimson transition-colors">{course.name}</h3>
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">{course.type}</p>
          </div>
        </div>
        <div className="bg-white px-6 py-4 flex flex-col gap-2 text-sm text-secondary">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-isec-silver">schedule</span>
            {course.duration}
          </div>
          {course.ects && (
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-isec-silver">workspace_premium</span>
              {course.ects} ECTS
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-isec-silver">wb_sunny</span>
            {course.regime}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default function Education() {
  const { subpage } = useParams();

  if (!subpage) {
    return <Navigate to="/education/licenciaturas" replace />;
  }

  return (
    <SidebarLayout 
      title="Estudar no ISPTEC"
      basePath="/education"
      items={SIDEBAR_ITEMS}
      heroImageUrl={heroImg}
    >
      {subpage === 'licenciaturas' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Licenciaturas</h2>
          <p className="text-secondary mb-10">
            Os cursos de licenciatura do ISPTEC são concebidos para formar profissionais de excelência, com uma forte componente prática e alinhamento com as necessidades do mercado de trabalho angolano. A duração típica é de 8 semestres (240 ECTS).
          </p>
          <CourseGrid courses={LICENCIATURAS} />
        </div>
      )}

      {subpage === 'mestrados' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Mestrados</h2>
          <p className="text-secondary mb-10">
            Os programas de Mestrado do ISPTEC focam-se na especialização avançada e investigação aplicada, preparando líderes para os setores mais críticos da economia, como energia, tecnologia e gestão estratégica corporativa.
          </p>
          <CourseGrid courses={MESTRADOS} />
        </div>
      )}

      {subpage === 'pos-graduacoes' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Pós-Graduações</h2>
          <p className="text-secondary mb-10">
            Cursos altamente especializados, de duração anual, desenhados para a atualização de competências profissionais em áreas emergentes e de elevada procura no mercado de trabalho.
          </p>
          <CourseGrid courses={POS_GRADUACOES} />
        </div>
      )}

      {subpage === 'curta-duracao' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Cursos de Curta Duração</h2>
          <p className="text-secondary mb-10">
            Formações intensivas, focadas na aquisição rápida de competências técnicas específicas (upskilling). Ideais para estudantes e profissionais que pretendem um diferencial rápido no currículo.
          </p>
          <CourseGrid courses={CURTA_DURACAO} />
        </div>
      )}

      {subpage === 'formacao-continua' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Formação Contínua e Corporativa</h2>
          <div className="bg-white border-l-4 border-isec-crimson rounded p-6 shadow-sm mb-8">
            <h3 className="text-xl font-bold text-isec-dark-gray mb-3">Soluções à Medida para Empresas</h3>
            <p className="text-secondary mb-4">
              O ISPTEC desenvolve programas de formação <i>in-company</i> desenhados especificamente para responder aos desafios de capacitação das empresas parceiras. Elaboramos currículos customizados nas áreas de Engenharia, Tecnologia de Informação e Gestão.
            </p>
            <ul className="space-y-2 text-secondary mb-6">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-isec-crimson text-[20px]">check_circle</span>
                Diagnóstico de necessidades formativas.
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-isec-crimson text-[20px]">check_circle</span>
                Formato flexível: Instalações do ISPTEC, In-Company ou Online.
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-isec-crimson text-[20px]">check_circle</span>
                Corpo docente de elite com experiência de mercado.
              </li>
            </ul>
            <a href="/contacts" className="inline-block px-6 py-2 bg-isec-dark-gray text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-isec-crimson transition-colors">
              Contactar Equipa Corporativa
            </a>
          </div>
        </div>
      )}

      {subpage === 'ingresso' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Formas de Ingresso</h2>
          <p className="text-secondary mb-8">
            Conheça as vias de acesso disponíveis para se tornar um estudante do ISPTEC. Selecione o regime que melhor se adapta à sua situação atual.
          </p>

          <div className="grid gap-6">
            <div className="border border-isec-silver rounded-lg overflow-hidden">
              <div className="bg-neutral-50 px-6 py-4 border-b border-isec-silver flex items-center gap-3">
                <span className="material-symbols-outlined text-isec-crimson text-2xl">assignment</span>
                <h3 className="text-xl font-bold text-isec-dark-gray m-0">Exame de Acesso Geral</h3>
              </div>
              <div className="p-6 bg-white">
                <p className="text-secondary mb-4">
                  A via principal de ingresso para candidatos que concluíram o ensino médio. Requer a realização e aprovação nos Exames de Acesso organizados pelo ISPTEC nas disciplinas nucleares (Matemática, Física ou outras, dependendo do curso).
                </p>
                <a href="#" className="text-isec-crimson font-semibold hover:underline flex items-center gap-1">
                  Consultar Calendário de Exames <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            <div className="border border-isec-silver rounded-lg overflow-hidden">
              <div className="bg-neutral-50 px-6 py-4 border-b border-isec-silver flex items-center gap-3">
                <span className="material-symbols-outlined text-isec-crimson text-2xl">transfer_within_a_station</span>
                <h3 className="text-xl font-bold text-isec-dark-gray m-0">Transferências e Mudança de Curso</h3>
              </div>
              <div className="p-6 bg-white">
                <p className="text-secondary mb-4">
                  Destinado a estudantes que já se encontram matriculados num estabelecimento de ensino superior (nacional ou estrangeiro) e pretendem continuar os seus estudos no ISPTEC, ou estudantes do ISPTEC que pretendam mudar de licenciatura.
                </p>
                <a href="#" className="text-isec-crimson font-semibold hover:underline flex items-center gap-1">
                  Ver Regulamento de Equivalências <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            <div className="border border-isec-silver rounded-lg overflow-hidden">
              <div className="bg-neutral-50 px-6 py-4 border-b border-isec-silver flex items-center gap-3">
                <span className="material-symbols-outlined text-isec-crimson text-2xl">public</span>
                <h3 className="text-xl font-bold text-isec-dark-gray m-0">Estudante Internacional</h3>
              </div>
              <div className="p-6 bg-white">
                <p className="text-secondary">
                  Estatuto especial aplicável a estudantes que não possuam a nacionalidade angolana. O processo envolve a validação documental e homologação dos certificados de habilitações obtidos no exterior.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fallback for invalid paths */}
      {!SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <Navigate to="/education/licenciaturas" replace />
      )}
    </SidebarLayout>
  );
}
