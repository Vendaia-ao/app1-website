import { useParams, Navigate } from 'react-router-dom';
import SidebarLayout from '../components/SidebarLayout';
import heroImg from '../assets/images/angolan_students_campus_1786829352418.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const SIDEBAR_ITEMS = [
  { label: 'Mestrados', path: 'mestrados' },
  { label: 'Pós-Graduações', path: 'pos-graduacoes' },
  { label: 'Licenciaturas', path: 'licenciaturas' },
  { label: 'Cursos de Curta Duração', path: 'curta-duracao' },
  { label: 'Formação Contínua', path: 'formacao-continua' },
  { label: 'Formas de Ingresso', path: 'ingresso' },
];

const LICENCIATURAS_PT = [
  { name: 'Engenharia Informática', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno / Pós-Laboral', icon: 'computer' },
  { name: 'Engenharia Eletrotécnica', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno / Pós-Laboral', icon: 'bolt' },
  { name: 'Engenharia Mecânica', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno', icon: 'precision_manufacturing' },
  { name: 'Engenharia Química', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno', icon: 'science' },
  { name: 'Engenharia Civil', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno', icon: 'architecture' },
  { name: 'Gestão de Empresas', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno / Pós-Laboral', icon: 'bar_chart' },
  { name: 'Economia', type: 'Licenciatura', duration: '8 Semestres', ects: 240, regime: 'Diurno', icon: 'account_balance' },
];

const LICENCIATURAS_EN = [
  { name: 'Computer Engineering', type: 'Bachelor', duration: '8 Semesters', ects: 240, regime: 'Day / Evening', icon: 'computer' },
  { name: 'Electrical Engineering', type: 'Bachelor', duration: '8 Semesters', ects: 240, regime: 'Day / Evening', icon: 'bolt' },
  { name: 'Mechanical Engineering', type: 'Bachelor', duration: '8 Semesters', ects: 240, regime: 'Day', icon: 'precision_manufacturing' },
  { name: 'Chemical Engineering', type: 'Bachelor', duration: '8 Semesters', ects: 240, regime: 'Day', icon: 'science' },
  { name: 'Civil Engineering', type: 'Bachelor', duration: '8 Semesters', ects: 240, regime: 'Day', icon: 'architecture' },
  { name: 'Business Management', type: 'Bachelor', duration: '8 Semesters', ects: 240, regime: 'Day / Evening', icon: 'bar_chart' },
  { name: 'Economics', type: 'Bachelor', duration: '8 Semesters', ects: 240, regime: 'Day', icon: 'account_balance' },
];

const MESTRADOS_PT = [
  { name: 'Mestrado em Engenharia de Petróleos', type: 'Mestrado', duration: '4 Semestres', ects: 120, regime: 'Pós-Laboral', icon: 'oil_barrel' },
  { name: 'Mestrado em Ciência de Dados', type: 'Mestrado', duration: '4 Semestres', ects: 120, regime: 'Pós-Laboral', icon: 'analytics' },
  { name: 'Mestrado em Gestão de Empresas (MBA)', type: 'Mestrado', duration: '4 Semestres', ects: 120, regime: 'Pós-Laboral', icon: 'business_center' },
];

const MESTRADOS_EN = [
  { name: 'Master in Petroleum Engineering', type: 'Master', duration: '4 Semesters', ects: 120, regime: 'Evening', icon: 'oil_barrel' },
  { name: 'Master in Data Science', type: 'Master', duration: '4 Semesters', ects: 120, regime: 'Evening', icon: 'analytics' },
  { name: 'Master in Business Management (MBA)', type: 'Master', duration: '4 Semesters', ects: 120, regime: 'Evening', icon: 'business_center' },
];

const POS_GRADUACOES_PT = [
  { name: 'Pós-Graduação em Gestão de Projetos', type: 'Pós-Graduação', duration: '2 Semestres', ects: 60, regime: 'Pós-Laboral', icon: 'task' },
  { name: 'Pós-Graduação em Energias Renováveis', type: 'Pós-Graduação', duration: '2 Semestres', ects: 60, regime: 'Pós-Laboral', icon: 'solar_power' },
  { name: 'Pós-Graduação em Cibersegurança', type: 'Pós-Graduação', duration: '2 Semestres', ects: 60, regime: 'Pós-Laboral', icon: 'security' },
];

const POS_GRADUACOES_EN = [
  { name: 'Postgraduate in Project Management', type: 'Postgraduate', duration: '2 Semesters', ects: 60, regime: 'Evening', icon: 'task' },
  { name: 'Postgraduate in Renewable Energy', type: 'Postgraduate', duration: '2 Semesters', ects: 60, regime: 'Evening', icon: 'solar_power' },
  { name: 'Postgraduate in Cybersecurity', type: 'Postgraduate', duration: '2 Semesters', ects: 60, regime: 'Evening', icon: 'security' },
];

const CURTA_DURACAO_PT = [
  { name: 'Python para Análise de Dados', type: 'Curta Duração', duration: '40 Horas', regime: 'Pós-Laboral / Online', icon: 'terminal' },
  { name: 'Automação Industrial e PLC', type: 'Curta Duração', duration: '60 Horas', regime: 'Presencial', icon: 'engineering' },
  { name: 'Gestão Financeira para Não Financeiros', type: 'Curta Duração', duration: '30 Horas', regime: 'Pós-Laboral', icon: 'wallet' },
];

const CURTA_DURACAO_EN = [
  { name: 'Python for Data Analysis', type: 'Short Course', duration: '40 Hours', regime: 'Evening / Online', icon: 'terminal' },
  { name: 'Industrial Automation and PLC', type: 'Short Course', duration: '60 Hours', regime: 'In-person', icon: 'engineering' },
  { name: 'Financial Management for Non-Financials', type: 'Short Course', duration: '30 Hours', regime: 'Evening', icon: 'wallet' },
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
  const { language, tMenu, t } = useLanguage();
  
  const LICENCIATURAS = language === 'en' ? LICENCIATURAS_EN : LICENCIATURAS_PT;
  const MESTRADOS = language === 'en' ? MESTRADOS_EN : MESTRADOS_PT;
  const POS_GRADUACOES = language === 'en' ? POS_GRADUACOES_EN : POS_GRADUACOES_PT;
  const CURTA_DURACAO = language === 'en' ? CURTA_DURACAO_EN : CURTA_DURACAO_PT;

  if (!subpage) {
    return <Navigate to="/education/licenciaturas" replace />;
  }

  return (
    <SidebarLayout 
      title={language === 'en' ? 'Study at ISPTEC' : 'Estudar no ISPTEC'}
      basePath="/education"
      items={SIDEBAR_ITEMS}
      heroImageUrl={heroImg}
    >
      {subpage === 'licenciaturas' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">{t('education.bachelorTitle')}</h2>
          <p className="text-secondary mb-10">
            {t('education.bachelorDesc')}
          </p>
          <CourseGrid courses={LICENCIATURAS} />
        </div>
      )}

      {subpage === 'mestrados' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">{t('education.masterTitle')}</h2>
          <p className="text-secondary mb-10">
            {t('education.masterDesc')}
          </p>
          <CourseGrid courses={MESTRADOS} />
        </div>
      )}

      {subpage === 'pos-graduacoes' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">{t('education.postgradTitle')}</h2>
          <p className="text-secondary mb-10">
            {t('education.postgradDesc')}
          </p>
          <CourseGrid courses={POS_GRADUACOES} />
        </div>
      )}

      {subpage === 'curta-duracao' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">{t('education.shortTitle')}</h2>
          <p className="text-secondary mb-10">
            {t('education.shortDesc')}
          </p>
          <CourseGrid courses={CURTA_DURACAO} />
        </div>
      )}

      {subpage === 'formacao-continua' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">{t('education.contTitle')}</h2>
          <div className="bg-white border-l-4 border-isec-crimson rounded p-6 shadow-sm mb-8">
            <h3 className="text-xl font-bold text-isec-dark-gray mb-3">{t('education.contSubTitle')}</h3>
            <p className="text-secondary mb-4">
              {t('education.contDesc')}
            </p>
            <ul className="space-y-2 text-secondary mb-6">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-isec-crimson text-[20px]">check_circle</span>
                {t('education.contCheck1')}
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-isec-crimson text-[20px]">check_circle</span>
                {t('education.contCheck2')}
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-isec-crimson text-[20px]">check_circle</span>
                {t('education.contCheck3')}
              </li>
            </ul>
            <a href="/contacts" className="inline-block px-6 py-2 bg-isec-dark-gray text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-isec-crimson transition-colors">
              {t('education.contBtn')}
            </a>
          </div>
        </div>
      )}

      {subpage === 'ingresso' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">{t('education.admTitle')}</h2>
          <p className="text-secondary mb-8">
            {t('education.admDesc')}
          </p>

          <div className="grid gap-6">
            <div className="border border-isec-silver rounded-lg overflow-hidden">
              <div className="bg-neutral-50 px-6 py-4 border-b border-isec-silver flex items-center gap-3">
                <span className="material-symbols-outlined text-isec-crimson text-2xl">assignment</span>
                <h3 className="text-xl font-bold text-isec-dark-gray m-0">{t('education.admGenTitle')}</h3>
              </div>
              <div className="p-6 bg-white">
                <p className="text-secondary mb-4">
                  {t('education.admGenDesc')}
                </p>
                <a href="#" className="text-isec-crimson font-semibold hover:underline flex items-center gap-1">
                  {t('education.admGenBtn')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            <div className="border border-isec-silver rounded-lg overflow-hidden">
              <div className="bg-neutral-50 px-6 py-4 border-b border-isec-silver flex items-center gap-3">
                <span className="material-symbols-outlined text-isec-crimson text-2xl">transfer_within_a_station</span>
                <h3 className="text-xl font-bold text-isec-dark-gray m-0">{t('education.admTransTitle')}</h3>
              </div>
              <div className="p-6 bg-white">
                <p className="text-secondary mb-4">
                  {t('education.admTransDesc')}
                </p>
                <a href="#" className="text-isec-crimson font-semibold hover:underline flex items-center gap-1">
                  {t('education.admTransBtn')} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            <div className="border border-isec-silver rounded-lg overflow-hidden">
              <div className="bg-neutral-50 px-6 py-4 border-b border-isec-silver flex items-center gap-3">
                <span className="material-symbols-outlined text-isec-crimson text-2xl">public</span>
                <h3 className="text-xl font-bold text-isec-dark-gray m-0">{t('education.admIntTitle')}</h3>
              </div>
              <div className="p-6 bg-white">
                <p className="text-secondary">
                  {t('education.admIntDesc')}
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