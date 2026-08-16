import { useParams, Navigate } from 'react-router-dom';
import SidebarLayout from '../components/SidebarLayout';
import heroImg from '../assets/images/angolan_campus_facade_1786829389896.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const SIDEBAR_ITEMS = [
  { label: 'Apresentação', path: 'apresentacao' },
  { label: 'Estatutos', path: 'estatutos' },
  { label: 'Factos e Números', path: 'factos' },
  { label: 'História', path: 'historia' },
  { label: 'Informação Oficial', path: 'oficial' },
  { label: 'Organização', path: 'organizacao' },
  { label: 'I&D', path: 'id' },
];

export default function Institution() {
  const { subpage } = useParams();
  const { t, tMenu } = useLanguage();

  // If no subpage is specified in the URL, redirect to the first item
  if (!subpage) {
    return <Navigate to="/institution/apresentacao" replace />;
  }

  const translatedItems = SIDEBAR_ITEMS.map(item => ({
    ...item,
    label: tMenu(item.label)
  }));

  return (
    <SidebarLayout 
      title="Instituto Superior Politécnico de Tecnologias e Ciências"
      basePath="/institution"
      items={translatedItems}
      heroImageUrl={heroImg}
    >
      {subpage === 'apresentacao' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">{t('institution.institute', 'O Instituto')}</h2>
          <div className="prose prose-neutral max-w-none text-secondary space-y-4">
            <p>
              O ISPTEC tem como missão a criação, transmissão e difusão de cultura, ciência e tecnologia, cabendo-lhe ministrar uma formação de nível superior para o exercício de atividades profissionais no domínio da engenharia e ciências aplicadas, e promover o desenvolvimento da região em que se insere, orientada para a prossecução dos seguintes objetivos:
            </p>
            <p className="pl-4 border-l-2 border-isec-crimson">
              a) A formação de alunos com elevado nível de exigência qualitativa, nos aspetos humanístico, cultural, científico, artístico, tecnológico e profissional;
            </p>
            <p className="pl-4 border-l-2 border-isec-crimson">
              b) A preparação dos seus estudantes para a inserção e integração no mundo do trabalho e para um desempenho profissional de sucesso;
            </p>
            <p className="pl-4 border-l-2 border-isec-crimson">
              c) A formação de profissionais com competências de resolução de problemas, de trabalho cooperativo e de liderança, desenvolvendo-lhes o sentido do dever, da responsabilidade e da ética;
            </p>
          </div>
        </div>
      )}

      {subpage === 'estatutos' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">{t('institution.statutes', 'Estatutos e Regulamentos')}</h2>
          <p className="text-secondary mb-8">
            Consulte os documentos fundamentais que regem a organização, o funcionamento e a missão do ISPTEC.
          </p>
          <div className="space-y-4">
            <a href="#" className="flex items-center p-4 bg-white border border-isec-silver rounded hover:border-isec-crimson transition-colors group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mr-4">picture_as_pdf</span>
              <div className="flex-grow">
                <h3 className="font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors">Estatutos do ISPTEC</h3>
                <p className="text-sm text-secondary">Documento base de governação (Atualização 2024)</p>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson transition-colors">download</span>
            </a>
            <a href="#" className="flex items-center p-4 bg-white border border-isec-silver rounded hover:border-isec-crimson transition-colors group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mr-4">picture_as_pdf</span>
              <div className="flex-grow">
                <h3 className="font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors">Regulamento Geral Interno</h3>
                <p className="text-sm text-secondary">Normas de funcionamento orgânico e administrativo</p>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson transition-colors">download</span>
            </a>
            <a href="#" className="flex items-center p-4 bg-white border border-isec-silver rounded hover:border-isec-crimson transition-colors group">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mr-4">picture_as_pdf</span>
              <div className="flex-grow">
                <h3 className="font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors">Regulamento Pedagógico</h3>
                <p className="text-sm text-secondary">Normas relativas à avaliação e percurso académico</p>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:text-isec-crimson transition-colors">download</span>
            </a>
          </div>
        </div>
      )}

      {subpage === 'factos' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">{t('institution.facts', 'Factos e Números')}</h2>
          <p className="text-secondary mb-8">
            O ISPTEC em números: um reflexo do nosso compromisso com a excelência académica, a inovação e o desenvolvimento de Angola.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white border-t-4 border-isec-crimson shadow-sm rounded-b p-6 text-center hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-neutral-400 text-4xl mb-3">school</span>
              <div className="text-4xl font-bold text-isec-dark-gray mb-1">4,200+</div>
              <div className="text-sm font-medium text-secondary uppercase tracking-wider">Estudantes</div>
            </div>
            <div className="bg-white border-t-4 border-isec-crimson shadow-sm rounded-b p-6 text-center hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-neutral-400 text-4xl mb-3">workspace_premium</span>
              <div className="text-4xl font-bold text-isec-dark-gray mb-1">3,500+</div>
              <div className="text-sm font-medium text-secondary uppercase tracking-wider">Diplomados</div>
            </div>
            <div className="bg-white border-t-4 border-isec-crimson shadow-sm rounded-b p-6 text-center hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-neutral-400 text-4xl mb-3">co_present</span>
              <div className="text-4xl font-bold text-isec-dark-gray mb-1">250+</div>
              <div className="text-sm font-medium text-secondary uppercase tracking-wider">Corpo Docente</div>
            </div>
            <div className="bg-white border-t-4 border-isec-crimson shadow-sm rounded-b p-6 text-center hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-neutral-400 text-4xl mb-3">science</span>
              <div className="text-4xl font-bold text-isec-dark-gray mb-1">30+</div>
              <div className="text-sm font-medium text-secondary uppercase tracking-wider">Laboratórios</div>
            </div>
            <div className="bg-white border-t-4 border-isec-crimson shadow-sm rounded-b p-6 text-center hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-neutral-400 text-4xl mb-3">work</span>
              <div className="text-4xl font-bold text-isec-dark-gray mb-1">92%</div>
              <div className="text-sm font-medium text-secondary uppercase tracking-wider">Empregabilidade</div>
            </div>
            <div className="bg-white border-t-4 border-isec-crimson shadow-sm rounded-b p-6 text-center hover:-translate-y-1 transition-transform">
              <span className="material-symbols-outlined text-neutral-400 text-4xl mb-3">domain</span>
              <div className="text-4xl font-bold text-isec-dark-gray mb-1">2</div>
              <div className="text-sm font-medium text-secondary uppercase tracking-wider">Departamentos</div>
            </div>
          </div>
        </div>
      )}

      {subpage === 'historia' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">{t('institution.history', 'A Nossa História')}</h2>
          <div className="prose prose-neutral max-w-none text-secondary mb-10">
            <p>
              O Instituto Superior Politécnico de Tecnologias e Ciências (ISPTEC) nasceu da visão estratégica de criar uma instituição de ensino superior de referência em Angola, capaz de formar quadros de excelência para impulsionar o desenvolvimento tecnológico e industrial do país. Promovido pela Sonangol E.P., o ISPTEC rapidamente se estabeleceu como um marco no panorama académico nacional.
            </p>
          </div>
          
          <div className="relative border-l-2 border-isec-silver ml-4 space-y-10 pb-4">
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-isec-crimson rounded-full -left-[9px] top-1.5 border-4 border-white shadow"></div>
              <div className="font-bold text-xl text-isec-dark-gray mb-1">2011</div>
              <h3 className="font-semibold text-isec-crimson mb-2">Criação e Formalização</h3>
              <p className="text-secondary text-sm">O projeto do ISPTEC ganha forma com a aprovação oficial, visando preencher a lacuna na formação de quadros altamente qualificados nas áreas de engenharia e ciências aplicadas em Angola.</p>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-isec-crimson rounded-full -left-[9px] top-1.5 border-4 border-white shadow"></div>
              <div className="font-bold text-xl text-isec-dark-gray mb-1">2012</div>
              <h3 className="font-semibold text-isec-crimson mb-2">Início das Atividades Letivas</h3>
              <p className="text-secondary text-sm">Abertura de portas aos primeiros estudantes no campus de Talatona, inaugurando infraestruturas laboratoriais e de ensino pioneiras na região.</p>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-isec-crimson rounded-full -left-[9px] top-1.5 border-4 border-white shadow"></div>
              <div className="font-bold text-xl text-isec-dark-gray mb-1">2016</div>
              <h3 className="font-semibold text-isec-crimson mb-2">Primeiros Diplomados</h3>
              <p className="text-secondary text-sm">A primeira geração de licenciados do ISPTEC ingressa no mercado de trabalho, com elevadas taxas de integração nas principais empresas do setor energético e tecnológico.</p>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-isec-crimson rounded-full -left-[9px] top-1.5 border-4 border-white shadow"></div>
              <div className="font-bold text-xl text-isec-dark-gray mb-1">Hoje</div>
              <h3 className="font-semibold text-isec-crimson mb-2">Referência Nacional e Expansão</h3>
              <p className="text-secondary text-sm">O ISPTEC consolida a sua posição com a expansão da oferta para programas de Pós-Graduação e o fortalecimento de parcerias internacionais de I&D.</p>
            </div>
          </div>
        </div>
      )}

      {subpage === 'oficial' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">{t('institution.official', 'Informação Oficial')}</h2>
          <p className="text-secondary mb-8">
            Aceda aos documentos institucionais, planos estratégicos e relatórios de atividades que atestam a transparência e o rumo do ISPTEC.
          </p>
          
          <div className="bg-white border border-isec-silver rounded overflow-hidden">
            <div className="border-b border-isec-silver p-4 bg-neutral-50 flex items-center gap-3">
              <span className="material-symbols-outlined text-isec-crimson">account_balance</span>
              <h3 className="font-bold text-isec-dark-gray m-0">Documentos Estratégicos</h3>
            </div>
            <div className="divide-y divide-isec-silver">
              <a href="#" className="flex justify-between items-center p-4 hover:bg-neutral-50 transition-colors group">
                <span className="text-isec-dark-gray font-medium group-hover:text-isec-crimson transition-colors">Plano Estratégico 2024-2030</span>
                <span className="material-symbols-outlined text-secondary">download</span>
              </a>
              <a href="#" className="flex justify-between items-center p-4 hover:bg-neutral-50 transition-colors group">
                <span className="text-isec-dark-gray font-medium group-hover:text-isec-crimson transition-colors">Plano de Desenvolvimento Institucional (PDI)</span>
                <span className="material-symbols-outlined text-secondary">download</span>
              </a>
              <a href="#" className="flex justify-between items-center p-4 hover:bg-neutral-50 transition-colors group">
                <span className="text-isec-dark-gray font-medium group-hover:text-isec-crimson transition-colors">Relatório de Atividades 2025</span>
                <span className="material-symbols-outlined text-secondary">download</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {subpage === 'organizacao' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">{t('institution.org', 'Organização e Governação')}</h2>
          <p className="text-secondary mb-8">
            A estrutura orgânica do ISPTEC foi desenhada para assegurar uma gestão rigorosa, focada na excelência académica e na ligação às necessidades do país.
          </p>
          
          <div className="grid gap-6">
            <div className="flex flex-col md:flex-row bg-white border border-isec-silver rounded p-6 shadow-sm">
              <div className="w-16 h-16 bg-red-50 text-isec-crimson rounded-full flex items-center justify-center shrink-0 mb-4 md:mb-0 md:mr-6">
                <span className="material-symbols-outlined text-3xl">corporate_fare</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-isec-dark-gray mb-2">Entidade Promotora</h3>
                <p className="text-secondary text-sm">O ISPTEC é promovido pela Sonangol E.P., refletindo o compromisso da principal empresa nacional com o desenvolvimento do capital humano e tecnológico de Angola.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row bg-white border border-isec-silver rounded p-6 shadow-sm">
              <div className="w-16 h-16 bg-neutral-100 text-isec-dark-gray rounded-full flex items-center justify-center shrink-0 mb-4 md:mb-0 md:mr-6">
                <span className="material-symbols-outlined text-3xl">gavel</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-isec-dark-gray mb-2">Direção Geral</h3>
                <p className="text-secondary text-sm">O órgão executivo máximo da instituição, responsável por assegurar a prossecução da missão do ISPTEC, a gestão administrativa, financeira e estratégica do campus.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row bg-white border border-isec-silver rounded p-6 shadow-sm">
              <div className="w-16 h-16 bg-neutral-100 text-isec-dark-gray rounded-full flex items-center justify-center shrink-0 mb-4 md:mb-0 md:mr-6">
                <span className="material-symbols-outlined text-3xl">biotech</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-isec-dark-gray mb-2">Conselho Científico</h3>
                <p className="text-secondary text-sm">Constituído pelos professores e investigadores de maior mérito, zela pela excelência e rigor das políticas de investigação, criação de novos cursos e supervisão dos laboratórios.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row bg-white border border-isec-silver rounded p-6 shadow-sm">
              <div className="w-16 h-16 bg-neutral-100 text-isec-dark-gray rounded-full flex items-center justify-center shrink-0 mb-4 md:mb-0 md:mr-6">
                <span className="material-symbols-outlined text-3xl">menu_book</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-isec-dark-gray mb-2">Conselho Pedagógico</h3>
                <p className="text-secondary text-sm">O órgão que monitoriza a qualidade do ensino e a relação professor-aluno. Tem um papel fundamental na atualização de metodologias e no sucesso académico dos estudantes.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {subpage === 'id' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">{t('institution.rnd', 'Investigação e Desenvolvimento (I&D)')}</h2>
          <div className="prose prose-neutral max-w-none text-secondary mb-8">
            <p>
              A Investigação, Desenvolvimento e Inovação (I&D+i) constituem pilares estratégicos do ISPTEC. A nossa missão vai além do ensino: criamos soluções científicas para problemas reais da indústria, da economia e da sociedade angolana.
            </p>
          </div>

          <h3 className="text-xl font-bold text-isec-dark-gray mb-4 border-b border-isec-silver pb-2">Linhas de Investigação Estratégicas</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-neutral-50 border border-isec-silver p-5 rounded hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-isec-crimson text-3xl">oil_barrel</span>
                <h4 className="font-bold text-isec-dark-gray">Energia e Sustentabilidade</h4>
              </div>
              <p className="text-sm text-secondary">Projetos focados na otimização de processos do setor petrolífero, transição energética e implementação de soluções de energias renováveis adaptadas ao contexto nacional.</p>
            </div>
            
            <div className="bg-neutral-50 border border-isec-silver p-5 rounded hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-isec-crimson text-3xl">memory</span>
                <h4 className="font-bold text-isec-dark-gray">Tecnologia e Inovação Digital</h4>
              </div>
              <p className="text-sm text-secondary">Desenvolvimento em Inteligência Artificial, Ciência de Dados, e sistemas de software para modernização da banca, telecomunicações e serviços públicos.</p>
            </div>
          </div>

          <div className="bg-isec-dark-gray text-white p-8 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <span className="material-symbols-outlined text-[120px]">science</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 relative z-10">Parcerias Laboratoriais</h3>
            <p className="text-neutral-300 max-w-2xl relative z-10 mb-6 text-sm md:text-base">
              Os nossos centros de investigação operam em estreita colaboração com a Sonangol e um vasto ecossistema de empresas parceiras. Isto permite aos nossos estudantes integrarem projetos reais e garantirem que as soluções tecnológicas saem da bancada para a indústria.
            </p>
            <a href="/contacts" className="inline-block px-6 py-2 bg-isec-crimson hover:bg-red-800 transition-colors text-white font-bold text-sm uppercase tracking-wider rounded relative z-10">
              Propor Parceria de I&D
            </a>
          </div>
        </div>
      )}

      {/* If the URL doesn't match any sidebar item */}
      {!SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <Navigate to="/institution/apresentacao" replace />
      )}
    </SidebarLayout>
  );
}
