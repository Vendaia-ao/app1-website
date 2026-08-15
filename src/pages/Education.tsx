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

const MOCK_COURSES = [
  {
    name: 'Engenharia Informática',
    type: 'Licenciatura',
    duration: '8 Semestres',
    ects: 240,
    regime: 'Diurno / Pós-Laboral'
  },
  {
    name: 'Engenharia Eletrotécnica',
    type: 'Licenciatura',
    duration: '8 Semestres',
    ects: 240,
    regime: 'Diurno / Pós-Laboral'
  },
  {
    name: 'Engenharia Mecânica',
    type: 'Licenciatura',
    duration: '8 Semestres',
    ects: 240,
    regime: 'Diurno'
  }
];

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_COURSES.map((course, idx) => (
              <div key={idx} className="bg-white border border-isec-silver hover:border-isec-crimson transition-colors rounded overflow-hidden flex flex-col group cursor-pointer">
                <div className="bg-neutral-50 px-6 py-4 border-b border-isec-silver flex-grow">
                  <h3 className="font-bold text-isec-dark-gray text-lg mb-2 group-hover:text-isec-crimson transition-colors">{course.name}</h3>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">{course.type}</p>
                </div>
                <div className="bg-white px-6 py-4 flex flex-col gap-2 text-sm text-secondary">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-isec-silver">schedule</span>
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-isec-silver">school</span>
                    {course.ects} ECTS
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-isec-silver">wb_sunny</span>
                    {course.regime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fallback for other sections */}
      {subpage !== 'licenciaturas' && SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6 capitalize">{SIDEBAR_ITEMS.find(i => i.path === subpage)?.label}</h2>
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-3xl text-isec-silver">construction</span>
          </div>
          <p className="text-secondary">Informação sobre a oferta formativa em atualização.</p>
        </div>
      )}

      {!SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <Navigate to="/education/licenciaturas" replace />
      )}
    </SidebarLayout>
  );
}
