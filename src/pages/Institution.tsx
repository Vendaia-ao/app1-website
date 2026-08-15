import { useParams, Navigate } from 'react-router-dom';
import SidebarLayout from '../components/SidebarLayout';
import heroImg from '../assets/images/angolan_campus_facade_1786829389896.jpg';

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

  // If no subpage is specified in the URL, redirect to the first item
  if (!subpage) {
    return <Navigate to="/institution/apresentacao" replace />;
  }

  return (
    <SidebarLayout 
      title="Instituto Superior Politécnico de Tecnologias e Ciências"
      basePath="/institution"
      items={SIDEBAR_ITEMS}
      heroImageUrl={heroImg}
    >
      {subpage === 'apresentacao' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">O Instituto</h2>
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
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Estatutos</h2>
          <p className="text-secondary">Página de estatutos em construção...</p>
        </div>
      )}

      {subpage === 'factos' && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Factos e Números</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-50 border border-isec-silver rounded p-6 text-center">
              <span className="material-symbols-outlined text-isec-crimson text-4xl mb-2">school</span>
              <div className="text-3xl font-bold text-isec-dark-gray">5,000+</div>
              <div className="text-sm text-secondary">Estudantes</div>
            </div>
            <div className="bg-neutral-50 border border-isec-silver rounded p-6 text-center">
              <span className="material-symbols-outlined text-isec-crimson text-4xl mb-2">co_present</span>
              <div className="text-3xl font-bold text-isec-dark-gray">450+</div>
              <div className="text-sm text-secondary">Corpo Docente</div>
            </div>
          </div>
        </div>
      )}

      {/* Fallback for other sidebar items not explicitly implemented above */}
      {!['apresentacao', 'estatutos', 'factos'].includes(subpage) && SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6 capitalize">{subpage.replace(/-/g, ' ')}</h2>
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-3xl text-isec-silver">construction</span>
          </div>
          <p className="text-secondary max-w-lg">
            Esta secção encontra-se atualmente em desenvolvimento no âmbito da reestruturação do portal do ISPTEC.
          </p>
        </div>
      )}

      {/* If the URL doesn't match any sidebar item */}
      {!SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <Navigate to="/institution/apresentacao" replace />
      )}
    </SidebarLayout>
  );
}
