import { useParams, Navigate } from 'react-router-dom';
import SidebarLayout from '../components/SidebarLayout';
import heroImg from '../assets/images/angolan_students_community_1786829400627.jpg';

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

  if (!subpage) {
    return <Navigate to="/student-area/calendario" replace />;
  }

  return (
    <SidebarLayout 
      title="Área do Aluno"
      basePath="/student-area"
      items={SIDEBAR_ITEMS}
      heroImageUrl={heroImg}
    >
      {subpage === 'informacao' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Informação Geral</h2>
          <p className="text-secondary mb-8">
            Bem-vindo à Área do Aluno. Aqui encontra os principais recursos, serviços e informações úteis para o seu percurso académico no ISPTEC.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="#" className="flex flex-col p-6 bg-white border border-isec-silver hover:border-isec-crimson hover:shadow-md transition-all rounded group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mb-4">school</span>
              <h3 className="font-bold text-lg text-isec-dark-gray group-hover:text-isec-crimson transition-colors mb-2">Secretaria Virtual</h3>
              <p className="text-sm text-secondary">Acesso ao portal académico para inscrições, consulta de notas e pedidos de certidões.</p>
            </a>
            
            <a href="#" className="flex flex-col p-6 bg-white border border-isec-silver hover:border-isec-crimson hover:shadow-md transition-all rounded group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mb-4">mail</span>
              <h3 className="font-bold text-lg text-isec-dark-gray group-hover:text-isec-crimson transition-colors mb-2">Webmail Institucional</h3>
              <p className="text-sm text-secondary">Aceda ao seu email de estudante e ferramentas do Office 365.</p>
            </a>

            <a href="#" className="flex flex-col p-6 bg-white border border-isec-silver hover:border-isec-crimson hover:shadow-md transition-all rounded group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mb-4">menu_book</span>
              <h3 className="font-bold text-lg text-isec-dark-gray group-hover:text-isec-crimson transition-colors mb-2">Biblioteca</h3>
              <p className="text-sm text-secondary">Consulta do catálogo online, reservas e acesso a bases de dados científicas.</p>
            </a>

            <a href="#" className="flex flex-col p-6 bg-white border border-isec-silver hover:border-isec-crimson hover:shadow-md transition-all rounded group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mb-4">support_agent</span>
              <h3 className="font-bold text-lg text-isec-dark-gray group-hover:text-isec-crimson transition-colors mb-2">Helpdesk IT</h3>
              <p className="text-sm text-secondary">Suporte técnico, redefinição de palavras-passe e acesso ao Wi-Fi do campus.</p>
            </a>
          </div>
        </div>
      )}

      {subpage === 'calendario' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Calendário Escolar</h2>
          <p className="text-secondary mb-10">
            Consulte os calendários das atividades letivas, períodos de avaliação e pausas letivas para o presente ano letivo.
          </p>

          <div className="bg-white border border-isec-silver rounded overflow-hidden">
            <div className="bg-neutral-50 px-6 py-4 border-b border-isec-silver flex items-center justify-between">
              <h3 className="font-bold text-isec-dark-gray">Ano Letivo 2026/2027</h3>
              <a href="#" className="flex items-center gap-2 text-sm text-isec-crimson font-bold hover:underline">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Descarregar PDF
              </a>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4">1º Semestre</h4>
                <ul className="space-y-3">
                  <li className="flex gap-4">
                    <span className="text-isec-crimson font-bold min-w-[100px]">14 Setembro</span>
                    <span className="text-sm text-secondary">Início do 1º Semestre (Acolhimento)</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-isec-crimson font-bold min-w-[100px]">17 Dezembro</span>
                    <span className="text-sm text-secondary">Fim do período letivo do 1º Semestre</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-isec-crimson font-bold min-w-[100px]">04 Janeiro</span>
                    <span className="text-sm text-secondary">Início da Época Normal de Exames</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-4">2º Semestre</h4>
                <ul className="space-y-3">
                  <li className="flex gap-4">
                    <span className="text-isec-crimson font-bold min-w-[100px]">22 Fevereiro</span>
                    <span className="text-sm text-secondary">Início do 2º Semestre</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-isec-crimson font-bold min-w-[100px]">04 Junho</span>
                    <span className="text-sm text-secondary">Fim do período letivo do 2º Semestre</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-isec-crimson font-bold min-w-[100px]">15 Junho</span>
                    <span className="text-sm text-secondary">Início da Época de Recurso</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {subpage === 'horarios' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Horários</h2>
          <p className="text-secondary mb-8">
            Os horários das turmas para o semestre atual encontram-se disponíveis para consulta. Selecione o seu curso para descarregar o respetivo horário.
          </p>

          <div className="bg-white border border-isec-silver rounded overflow-hidden">
            <div className="bg-neutral-50 px-6 py-4 border-b border-isec-silver flex items-center justify-between">
              <h3 className="font-bold text-isec-dark-gray">1º Semestre - 2026/2027</h3>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">Atualizado</span>
            </div>
            <div className="divide-y divide-isec-silver">
              <a href="#" className="flex justify-between items-center p-5 hover:bg-neutral-50 transition-colors group">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-isec-crimson text-2xl">computer</span>
                  <span className="text-isec-dark-gray font-medium group-hover:text-isec-crimson transition-colors">Engenharia Informática</span>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson">download</span>
              </a>
              <a href="#" className="flex justify-between items-center p-5 hover:bg-neutral-50 transition-colors group">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-isec-crimson text-2xl">precision_manufacturing</span>
                  <span className="text-isec-dark-gray font-medium group-hover:text-isec-crimson transition-colors">Engenharia Mecânica</span>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson">download</span>
              </a>
              <a href="#" className="flex justify-between items-center p-5 hover:bg-neutral-50 transition-colors group">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-isec-crimson text-2xl">bolt</span>
                  <span className="text-isec-dark-gray font-medium group-hover:text-isec-crimson transition-colors">Engenharia Eletrotécnica</span>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson">download</span>
              </a>
              <a href="#" className="flex justify-between items-center p-5 hover:bg-neutral-50 transition-colors group">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-isec-crimson text-2xl">science</span>
                  <span className="text-isec-dark-gray font-medium group-hover:text-isec-crimson transition-colors">Engenharia Química</span>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson">download</span>
              </a>
              <a href="#" className="flex justify-between items-center p-5 hover:bg-neutral-50 transition-colors group">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-isec-crimson text-2xl">bar_chart</span>
                  <span className="text-isec-dark-gray font-medium group-hover:text-isec-crimson transition-colors">Gestão de Empresas</span>
                </div>
                <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson">download</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {subpage === 'exames' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Mapa de Exames</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-8 flex items-start gap-3">
            <span className="material-symbols-outlined text-blue-600 mt-0.5">info</span>
            <div>
              <h4 className="font-bold text-blue-900">Inscrição para Época de Recurso</h4>
              <p className="text-sm text-blue-800 mt-1">As inscrições para a época de recurso decorrem na Secretaria Virtual até 48 horas antes da data do exame.</p>
            </div>
          </div>

          <p className="text-secondary mb-6">
            O calendário detalhado de exames por curso (época normal e de recurso) encontra-se disponível para consulta em formato PDF.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="#" className="flex items-center p-4 bg-white border border-isec-silver rounded hover:border-isec-crimson transition-colors group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mr-4">event_note</span>
              <div className="flex-grow">
                <h3 className="font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors">Época Normal</h3>
                <p className="text-sm text-secondary">1º Semestre</p>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson transition-colors">download</span>
            </a>
            <a href="#" className="flex items-center p-4 bg-white border border-isec-silver rounded hover:border-isec-crimson transition-colors group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mr-4">event_repeat</span>
              <div className="flex-grow">
                <h3 className="font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors">Época de Recurso</h3>
                <p className="text-sm text-secondary">1º Semestre</p>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson transition-colors">download</span>
            </a>
          </div>
        </div>
      )}

      {subpage === 'bolsas' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Bolsas de Mérito</h2>
          
          <div className="bg-isec-dark-gray text-white p-8 rounded-lg relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-[120px]">military_tech</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 relative z-10">Reconhecer a Excelência</h3>
            <p className="text-neutral-300 max-w-2xl relative z-10 text-sm md:text-base">
              O ISPTEC, com o apoio da Sonangol e de empresas parceiras, premeia anualmente os estudantes com o melhor desempenho académico, incentivando o rigor, o mérito e a dedicação ao estudo.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white border border-isec-silver rounded p-6 shadow-sm">
              <h3 className="text-xl font-bold text-isec-crimson mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined">workspace_premium</span>
                Bolsa de Excelência Académica
              </h3>
              <p className="text-secondary mb-4 text-sm">
                Atribuída aos estudantes que obtenham uma média igual ou superior a 16 valores no ano letivo transato, sem qualquer disciplina em atraso. Cobre integralmente o valor da propina do ano letivo seguinte.
              </p>
              <div className="text-sm font-bold text-isec-dark-gray">Período de Candidatura: Setembro a Outubro</div>
            </div>

            <div className="bg-white border border-isec-silver rounded p-6 shadow-sm">
              <h3 className="text-xl font-bold text-isec-crimson mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined">handshake</span>
                Bolsas de Patrocínio Empresarial
              </h3>
              <p className="text-secondary mb-4 text-sm">
                Bolsas atribuídas por empresas parceiras (Banca, Petróleos, Telecomunicações) destinadas aos melhores alunos do 3º e 4º ano, frequentemente associadas a programas de estágio pré-profissional.
              </p>
              <div className="text-sm font-bold text-isec-dark-gray">Anunciadas ao longo do ano na Secretaria Virtual</div>
            </div>
          </div>
        </div>
      )}

      {subpage === 'estagios' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Estágios de Verão e Empregabilidade</h2>
          
          <p className="text-secondary mb-8">
            O ISPTEC mantém fortes protocolos com o tecido empresarial de Angola. Os nossos programas de estágio visam proporcionar uma experiência imersiva no mercado de trabalho antes da conclusão do curso.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-neutral-50 border border-isec-silver p-6 rounded hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-isec-crimson text-3xl">lightbulb</span>
                <h4 className="font-bold text-isec-dark-gray text-lg">Estágios de Verão</h4>
              </div>
              <p className="text-sm text-secondary mb-4">Oportunidades de 2 a 3 meses (Julho a Setembro) nas principais empresas nacionais. Uma excelente forma de iniciar a rede de contactos profissionais.</p>
              <a href="#" className="text-isec-crimson font-bold text-sm hover:underline flex items-center gap-1">Ver ofertas disponíveis <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
            
            <div className="bg-neutral-50 border border-isec-silver p-6 rounded hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-isec-crimson text-3xl">work</span>
                <h4 className="font-bold text-isec-dark-gray text-lg">Gabinete de Saídas Profissionais</h4>
              </div>
              <p className="text-sm text-secondary mb-4">Apoio na elaboração de CVs, preparação para entrevistas e acompanhamento para inserção na vida ativa dos recém-licenciados.</p>
              <a href="#" className="text-isec-crimson font-bold text-sm hover:underline flex items-center gap-1">Marcar atendimento <span className="material-symbols-outlined text-[16px]">arrow_forward</span></a>
            </div>
          </div>
        </div>
      )}

      {subpage === 'legislacao' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Legislação e Regulamentos</h2>
          <p className="text-secondary mb-8">
            Consulte os regulamentos que orientam a vida académica e disciplinar no ISPTEC.
          </p>
          <div className="space-y-4">
            <a href="#" className="flex items-center p-4 bg-white border border-isec-silver rounded hover:border-isec-crimson transition-colors group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mr-4">gavel</span>
              <div className="flex-grow">
                <h3 className="font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors">Regulamento de Avaliação de Conhecimentos</h3>
                <p className="text-sm text-secondary">Normas sobre exames, avaliações contínuas e passagem de ano.</p>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson transition-colors">download</span>
            </a>
            <a href="#" className="flex items-center p-4 bg-white border border-isec-silver rounded hover:border-isec-crimson transition-colors group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mr-4">policy</span>
              <div className="flex-grow">
                <h3 className="font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors">Regulamento Disciplinar do Estudante</h3>
                <p className="text-sm text-secondary">Direitos, deveres e conduta ética no campus.</p>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson transition-colors">download</span>
            </a>
            <a href="#" className="flex items-center p-4 bg-white border border-isec-silver rounded hover:border-isec-crimson transition-colors group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mr-4">local_library</span>
              <div className="flex-grow">
                <h3 className="font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors">Regulamento da Biblioteca</h3>
                <p className="text-sm text-secondary">Normas de requisição e utilização dos espaços de estudo.</p>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson transition-colors">download</span>
            </a>
          </div>
        </div>
      )}

      {subpage === 'apoio' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Apoio ao Estudante</h2>
          <p className="text-secondary mb-8">
            O bem-estar e o sucesso académico dos nossos estudantes são uma prioridade. O ISPTEC disponibiliza diversos serviços de apoio para ajudar a ultrapassar dificuldades durante o percurso académico.
          </p>

          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row bg-white border border-isec-silver rounded p-6 shadow-sm">
              <div className="w-16 h-16 bg-red-50 text-isec-crimson rounded-full flex items-center justify-center shrink-0 mb-4 md:mb-0 md:mr-6">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-isec-dark-gray mb-2">Apoio Psicológico e Psicopedagógico</h3>
                <p className="text-secondary text-sm mb-3">Aconselhamento confidencial para ajudar na gestão de stress, ansiedade, métodos de estudo e desafios pessoais que possam afetar o rendimento escolar.</p>
                <a href="#" className="text-sm font-bold text-isec-crimson hover:underline">Agendar Consulta</a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row bg-white border border-isec-silver rounded p-6 shadow-sm">
              <div className="w-16 h-16 bg-neutral-100 text-isec-dark-gray rounded-full flex items-center justify-center shrink-0 mb-4 md:mb-0 md:mr-6">
                <span className="material-symbols-outlined text-3xl">accessibility</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-isec-dark-gray mb-2">Apoio a Estudantes com Necessidades Especiais</h3>
                <p className="text-secondary text-sm mb-3">Acompanhamento e adaptação de materiais e métodos de avaliação para estudantes com necessidades educativas especiais, garantindo a igualdade de oportunidades.</p>
                <a href="#" className="text-sm font-bold text-isec-crimson hover:underline">Contactar Gabinete</a>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row bg-white border border-isec-silver rounded p-6 shadow-sm">
              <div className="w-16 h-16 bg-neutral-100 text-isec-dark-gray rounded-full flex items-center justify-center shrink-0 mb-4 md:mb-0 md:mr-6">
                <span className="material-symbols-outlined text-3xl">groups</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-isec-dark-gray mb-2">Associação de Estudantes</h3>
                <p className="text-secondary text-sm mb-3">O órgão representativo dos alunos do ISPTEC, dinamizador de atividades culturais, desportivas e académicas que enriquecem a vivência universitária.</p>
                <a href="#" className="text-sm font-bold text-isec-crimson hover:underline">Página da Associação</a>
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
