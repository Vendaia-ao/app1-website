import { useParams, Navigate } from 'react-router-dom';
import SidebarLayout from '../components/SidebarLayout';
import heroImg from '../assets/images/angolan_students_community_1786829400627.jpg';
import { useLanguage } from '../contexts/LanguageContext';
import ExamsSchedule from '../components/ExamsSchedule';

const SIDEBAR_ITEMS = [
  { label: 'Informação Geral', path: 'informacao' },
  { label: 'Calendário Escolar', path: 'calendario' },
  { label: 'Horários', path: 'horarios' },
  { label: 'Mapa de Exames', path: 'exames' },
  { label: 'Bolsas de Mérito', path: 'bolsas' },
  { label: 'Estágios de Verão', path: 'estagios' },
  { label: 'Legislação e Regulamentos', path: 'legislacao' },
  { label: 'Apoio ao Estudante', path: 'apoio' },
];

export default function StudentArea() {
  const { subpage } = useParams();
  const { language } = useLanguage();

  if (!subpage) {
    return <Navigate to="/student-area/calendario" replace />;
  }

  return (
    <SidebarLayout 
      title={language === 'en' ? 'Student Area' : 'Área do Aluno'}
      basePath="/student-area"
      items={SIDEBAR_ITEMS}
      heroImageUrl={heroImg}
    >
      {subpage === 'informacao' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">
            {language === 'en' ? 'General Information' : 'Informação Geral'}
          </h2>
          <p className="text-secondary mb-8">
            {language === 'en' 
              ? 'Welcome to the Student Area. Here you will find the main resources, services, and useful information for your academic journey at ISPTEC.' 
              : 'Bem-vindo à Área do Aluno. Aqui encontra os principais recursos, serviços e informações úteis para o seu percurso académico no ISPTEC.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="#" className="flex flex-col p-6 bg-white border border-isec-silver hover:border-isec-crimson hover:shadow-md transition-all rounded group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mb-4">school</span>
              <h3 className="font-bold text-lg text-isec-dark-gray group-hover:text-isec-crimson transition-colors mb-2">
                {language === 'en' ? 'Virtual Secretariat' : 'Secretaria Virtual'}
              </h3>
              <p className="text-sm text-secondary">
                {language === 'en' ? 'Access the academic portal for enrollment, grades, and certificate requests.' : 'Acesso ao portal académico para inscrições, consulta de notas e pedidos de certidões.'}
              </p>
            </a>
            
            <a href="#" className="flex flex-col p-6 bg-white border border-isec-silver hover:border-isec-crimson hover:shadow-md transition-all rounded group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mb-4">mail</span>
              <h3 className="font-bold text-lg text-isec-dark-gray group-hover:text-isec-crimson transition-colors mb-2">
                {language === 'en' ? 'Institutional Webmail' : 'Webmail Institucional'}
              </h3>
              <p className="text-sm text-secondary">
                {language === 'en' ? 'Access your student email and Office 365 tools.' : 'Aceda ao seu email de estudante e ferramentas do Office 365.'}
              </p>
            </a>

            <a href="#" className="flex flex-col p-6 bg-white border border-isec-silver hover:border-isec-crimson hover:shadow-md transition-all rounded group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mb-4">menu_book</span>
              <h3 className="font-bold text-lg text-isec-dark-gray group-hover:text-isec-crimson transition-colors mb-2">
                {language === 'en' ? 'Library' : 'Biblioteca'}
              </h3>
              <p className="text-sm text-secondary">
                {language === 'en' ? 'Consult the online catalog, reservations, and access to scientific databases.' : 'Consulta do catálogo online, reservas e acesso a bases de dados científicas.'}
              </p>
            </a>

            <a href="#" className="flex flex-col p-6 bg-white border border-isec-silver hover:border-isec-crimson hover:shadow-md transition-all rounded group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mb-4">support_agent</span>
              <h3 className="font-bold text-lg text-isec-dark-gray group-hover:text-isec-crimson transition-colors mb-2">Helpdesk IT</h3>
              <p className="text-sm text-secondary">
                {language === 'en' ? 'Technical support, password reset, and campus Wi-Fi access.' : 'Suporte técnico, redefinição de palavras-passe e acesso ao Wi-Fi do campus.'}
              </p>
            </a>
          </div>
        </div>
      )}

      {subpage === 'calendario' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">
            {language === 'en' ? 'School Calendar' : 'Calendário Escolar'}
          </h2>
          <p className="text-secondary mb-10">
            {language === 'en' 
              ? 'Consult the calendars of teaching activities, evaluation periods, and academic breaks for the current academic year.' 
              : 'Consulte os calendários das atividades letivas, períodos de avaliação e pausas letivas para o presente ano letivo.'}
          </p>

          <div className="bg-white border border-isec-silver rounded overflow-hidden">
            <div className="bg-neutral-50 px-6 py-4 border-b border-isec-silver flex items-center justify-between">
              <h3 className="font-bold text-isec-dark-gray">
                {language === 'en' ? 'Academic Year 2026/2027' : 'Ano Letivo 2026/2027'}
              </h3>
              <a href="#" className="flex items-center gap-2 text-sm text-isec-crimson font-bold hover:underline">
                <span className="material-symbols-outlined text-[20px]">download</span>
                {language === 'en' ? 'Download PDF' : 'Descarregar PDF'}
              </a>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4">
                  {language === 'en' ? '1st Semester' : '1º Semestre'}
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-4">
                    <span className="text-isec-crimson font-bold min-w-[100px]">
                      {language === 'en' ? 'September 14' : '14 Setembro'}
                    </span>
                    <span className="text-sm text-secondary">
                      {language === 'en' ? 'Start of 1st Semester (Welcome)' : 'Início do 1º Semestre (Acolhimento)'}
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-isec-crimson font-bold min-w-[100px]">
                      {language === 'en' ? 'December 17' : '17 Dezembro'}
                    </span>
                    <span className="text-sm text-secondary">
                      {language === 'en' ? 'End of 1st Semester classes' : 'Fim do período letivo do 1º Semestre'}
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-isec-crimson font-bold min-w-[100px]">
                      {language === 'en' ? 'January 04' : '04 Janeiro'}
                    </span>
                    <span className="text-sm text-secondary">
                      {language === 'en' ? 'Start of Normal Exam Period' : 'Início da Época Normal de Exames'}
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4">
                  {language === 'en' ? '2nd Semester' : '2º Semestre'}
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-4">
                    <span className="text-isec-crimson font-bold min-w-[100px]">
                      {language === 'en' ? 'February 22' : '22 Fevereiro'}
                    </span>
                    <span className="text-sm text-secondary">
                      {language === 'en' ? 'Start of 2nd Semester' : 'Início do 2º Semestre'}
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-isec-crimson font-bold min-w-[100px]">
                      {language === 'en' ? 'June 04' : '04 Junho'}
                    </span>
                    <span className="text-sm text-secondary">
                      {language === 'en' ? 'End of 2nd Semester classes' : 'Fim do período letivo do 2º Semestre'}
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-isec-crimson font-bold min-w-[100px]">
                      {language === 'en' ? 'June 15' : '15 Junho'}
                    </span>
                    <span className="text-sm text-secondary">
                      {language === 'en' ? 'Start of Appeal Exam Period' : 'Início da Época de Recurso'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {subpage === 'horarios' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">
            {language === 'en' ? 'Schedules' : 'Horários'}
          </h2>
          <p className="text-secondary mb-8">
            {language === 'en' 
              ? 'Class schedules for the current semester are available for consultation. Select your course to download the respective schedule.' 
              : 'Os horários das turmas para o semestre atual encontram-se disponíveis para consulta. Selecione o seu curso para descarregar o respetivo horário.'}
          </p>
          
          <div className="bg-white border border-isec-silver rounded overflow-hidden">
            <div className="bg-neutral-50 px-6 py-4 border-b border-isec-silver flex items-center justify-between">
              <h3 className="font-bold text-isec-dark-gray">
                {language === 'en' ? '1st Semester - 2026/2027' : '1º Semestre - 2026/2027'}
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <a href="#" className="flex justify-between items-center p-3 border border-isec-silver rounded hover:border-isec-crimson hover:text-isec-crimson transition-colors group">
                  <span className="font-medium text-sm text-isec-dark-gray group-hover:text-isec-crimson">Engenharia Informática</span>
                  <span className="material-symbols-outlined">download</span>
                </a>
                <a href="#" className="flex justify-between items-center p-3 border border-isec-silver rounded hover:border-isec-crimson hover:text-isec-crimson transition-colors group">
                  <span className="font-medium text-sm text-isec-dark-gray group-hover:text-isec-crimson">Engenharia Eletrotécnica</span>
                  <span className="material-symbols-outlined">download</span>
                </a>
                <a href="#" className="flex justify-between items-center p-3 border border-isec-silver rounded hover:border-isec-crimson hover:text-isec-crimson transition-colors group">
                  <span className="font-medium text-sm text-isec-dark-gray group-hover:text-isec-crimson">Gestão de Empresas</span>
                  <span className="material-symbols-outlined">download</span>
                </a>
                <a href="#" className="flex justify-between items-center p-3 border border-isec-silver rounded hover:border-isec-crimson hover:text-isec-crimson transition-colors group">
                  <span className="font-medium text-sm text-isec-dark-gray group-hover:text-isec-crimson">Economia</span>
                  <span className="material-symbols-outlined">download</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {subpage === 'exames' && (
        <ExamsSchedule />
      )}

      {subpage === 'bolsas' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">
            {language === 'en' ? 'Merit Scholarships' : 'Bolsas de Mérito'}
          </h2>
          <p className="text-secondary mb-8">
            {language === 'en' 
              ? 'ISPTEC, in partnership with Sonangol and other entities, offers merit scholarships to students with exceptional academic performance.' 
              : 'O ISPTEC, em parceria com a Sonangol e outras entidades, disponibiliza bolsas de estudo por mérito aos estudantes com um percurso académico de excelência.'}
          </p>

          <div className="bg-neutral-50 border-l-4 border-isec-crimson p-6 rounded shadow-sm mb-8">
            <h3 className="text-xl font-bold text-isec-dark-gray mb-2">
              {language === 'en' ? 'Sonangol Scholarship Program 2026' : 'Programa de Bolsas Sonangol 2026'}
            </h3>
            <p className="text-sm text-secondary mb-4">
              {language === 'en' 
                ? 'Applications are open for the merit scholarship program intended for students of the 2nd year onwards in Engineering courses.' 
                : 'Encontram-se abertas as candidaturas para o programa de bolsas de mérito destinado a estudantes do 2º ano em diante dos cursos de Engenharia.'}
            </p>
            <div className="flex items-center gap-2 text-sm text-isec-dark-gray font-medium">
              <span className="material-symbols-outlined text-isec-crimson text-[18px]">event</span>
              {language === 'en' ? 'Deadline: October 15, 2026' : 'Prazo de Candidatura: 15 de Outubro de 2026'}
            </div>
            <a href="#" className="inline-block mt-4 text-sm font-bold text-isec-crimson hover:underline">
              {language === 'en' ? 'Consult Regulation and Apply' : 'Consultar Regulamento e Candidatar'}
            </a>
          </div>
        </div>
      )}

      {subpage === 'estagios' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">
            {language === 'en' ? 'Summer Internships & Employability' : 'Estágios de Verão e Empregabilidade'}
          </h2>
          
          <p className="text-secondary mb-8">
            {language === 'en' 
              ? 'ISPTEC maintains strong protocols with the Angolan business sector. Our internship programs aim to provide an immersive experience in the job market before graduation.' 
              : 'O ISPTEC mantém fortes protocolos com o tecido empresarial de Angola. Os nossos programas de estágio visam proporcionar uma experiência imersiva no mercado de trabalho antes da conclusão do curso.'}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-neutral-50 border border-isec-silver p-6 rounded hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-isec-crimson text-3xl">lightbulb</span>
                <h4 className="font-bold text-isec-dark-gray text-lg">
                  {language === 'en' ? 'Summer Internships' : 'Estágios de Verão'}
                </h4>
              </div>
              <p className="text-sm text-secondary mb-4">
                {language === 'en' 
                  ? 'Opportunities for 2 to 3 months (July to September) in major national companies. An excellent way to start your professional network.' 
                  : 'Oportunidades de 2 a 3 meses (Julho a Setembro) nas principais empresas nacionais. Uma excelente forma de iniciar a rede de contactos profissionais.'}
              </p>
              <a href="#" className="text-isec-crimson font-bold text-sm hover:underline flex items-center gap-1">
                {language === 'en' ? 'View available offers' : 'Ver ofertas disponíveis'} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
            
            <div className="bg-neutral-50 border border-isec-silver p-6 rounded hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-isec-crimson text-3xl">work</span>
                <h4 className="font-bold text-isec-dark-gray text-lg">
                  {language === 'en' ? 'Career Office' : 'Gabinete de Saídas Profissionais'}
                </h4>
              </div>
              <p className="text-sm text-secondary mb-4">
                {language === 'en' 
                  ? 'Support in CV preparation, interview coaching, and follow-up for the professional integration of recent graduates.' 
                  : 'Apoio na elaboração de CVs, preparação para entrevistas e acompanhamento para inserção na vida ativa dos recém-licenciados.'}
              </p>
              <a href="#" className="text-isec-crimson font-bold text-sm hover:underline flex items-center gap-1">
                {language === 'en' ? 'Schedule appointment' : 'Marcar atendimento'} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {subpage === 'legislacao' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">
            {language === 'en' ? 'Legislation and Regulations' : 'Legislação e Regulamentos'}
          </h2>
          <p className="text-secondary mb-8">
            {language === 'en' 
              ? 'Consult the regulations that guide academic and disciplinary life at ISPTEC.' 
              : 'Consulte os regulamentos que orientam a vida académica e disciplinar no ISPTEC.'}
          </p>

          <div className="space-y-4">
            <a href="#" className="flex items-center p-4 bg-white border border-isec-silver rounded hover:border-isec-crimson transition-colors group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mr-4">gavel</span>
              <div className="flex-grow">
                <h3 className="font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors">
                  {language === 'en' ? 'Knowledge Assessment Regulation' : 'Regulamento de Avaliação de Conhecimentos'}
                </h3>
                <p className="text-sm text-secondary">
                  {language === 'en' ? 'Rules regarding exams, continuous assessments, and academic progression.' : 'Normas sobre exames, avaliações contínuas e passagem de ano.'}
                </p>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson transition-colors">download</span>
            </a>

            <a href="#" className="flex items-center p-4 bg-white border border-isec-silver rounded hover:border-isec-crimson transition-colors group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mr-4">policy</span>
              <div className="flex-grow">
                <h3 className="font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors">
                  {language === 'en' ? 'Student Disciplinary Regulation' : 'Regulamento Disciplinar do Estudante'}
                </h3>
                <p className="text-sm text-secondary">
                  {language === 'en' ? 'Rights, duties, and ethical conduct on campus.' : 'Direitos, deveres e conduta ética no campus.'}
                </p>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson transition-colors">download</span>
            </a>

            <a href="#" className="flex items-center p-4 bg-white border border-isec-silver rounded hover:border-isec-crimson transition-colors group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mr-4">local_library</span>
              <div className="flex-grow">
                <h3 className="font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors">
                  {language === 'en' ? 'Library Regulation' : 'Regulamento da Biblioteca'}
                </h3>
                <p className="text-sm text-secondary">
                  {language === 'en' ? 'Rules for borrowing and using study spaces.' : 'Normas de requisição e utilização dos espaços de estudo.'}
                </p>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson transition-colors">download</span>
            </a>
          </div>
        </div>
      )}

      {subpage === 'apoio' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">
            {language === 'en' ? 'Student Support' : 'Apoio ao Estudante'}
          </h2>
          <p className="text-secondary mb-8">
            {language === 'en' 
              ? 'The well-being and academic success of our students are a priority. ISPTEC offers various support services to help overcome difficulties during the academic journey.' 
              : 'O bem-estar e o sucesso académico dos nossos estudantes são uma prioridade. O ISPTEC disponibiliza diversos serviços de apoio para ajudar a ultrapassar dificuldades durante o percurso académico.'}
          </p>

          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row bg-white border border-isec-silver rounded p-6 shadow-sm">
              <div className="w-16 h-16 bg-red-50 text-isec-crimson rounded-full flex items-center justify-center shrink-0 mb-4 md:mb-0 md:mr-6">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-isec-dark-gray mb-2">
                  {language === 'en' ? 'Psychological and Psychopedagogical Support' : 'Apoio Psicológico e Psicopedagógico'}
                </h3>
                <p className="text-secondary text-sm mb-3">
                  {language === 'en' 
                    ? 'Confidential counseling to help manage stress, anxiety, study methods, and personal challenges that may affect academic performance.' 
                    : 'Aconselhamento confidencial para ajudar na gestão de stress, ansiedade, métodos de estudo e desafios pessoais que possam afetar o rendimento escolar.'}
                </p>
                <a href="#" className="text-sm font-bold text-isec-crimson hover:underline">
                  {language === 'en' ? 'Schedule Consultation' : 'Agendar Consulta'}
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row bg-white border border-isec-silver rounded p-6 shadow-sm">
              <div className="w-16 h-16 bg-neutral-100 text-isec-dark-gray rounded-full flex items-center justify-center shrink-0 mb-4 md:mb-0 md:mr-6">
                <span className="material-symbols-outlined text-3xl">accessibility</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-isec-dark-gray mb-2">
                  {language === 'en' ? 'Support for Students with Special Needs' : 'Apoio a Estudantes com Necessidades Especiais'}
                </h3>
                <p className="text-secondary text-sm mb-3">
                  {language === 'en' 
                    ? 'Monitoring and adaptation of materials and assessment methods for students with special educational needs, ensuring equal opportunities.' 
                    : 'Acompanhamento e adaptação de materiais e métodos de avaliação para estudantes com necessidades educativas especiais, garantindo a igualdade de oportunidades.'}
                </p>
                <a href="#" className="text-sm font-bold text-isec-crimson hover:underline">
                  {language === 'en' ? 'Contact Office' : 'Contactar Gabinete'}
                </a>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row bg-white border border-isec-silver rounded p-6 shadow-sm">
              <div className="w-16 h-16 bg-neutral-100 text-isec-dark-gray rounded-full flex items-center justify-center shrink-0 mb-4 md:mb-0 md:mr-6">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-isec-dark-gray mb-2">
                  {language === 'en' ? 'Student Association' : 'Associação de Estudantes'}
                </h3>
                <p className="text-secondary text-sm mb-3">
                  {language === 'en' 
                    ? 'The representative body of ISPTEC students, organizing cultural, sports, and academic activities that enrich university life.' 
                    : 'O órgão representativo dos alunos do ISPTEC, dinamizador de atividades culturais, desportivas e académicas que enriquecem a vivência universitária.'}
                </p>
                <a href="#" className="text-sm font-bold text-isec-crimson hover:underline">
                  {language === 'en' ? 'Association Page' : 'Página da Associação'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {!SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <Navigate to="/student-area/calendario" replace />
      )}
    </SidebarLayout>
  );
}