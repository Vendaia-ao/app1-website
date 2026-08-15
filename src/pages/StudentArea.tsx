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

      {/* Fallback for other sections */}
      {subpage !== 'calendario' && SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <div className="animate-in fade-in duration-500">
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6 capitalize">{SIDEBAR_ITEMS.find(i => i.path === subpage)?.label}</h2>
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-3xl text-isec-silver">construction</span>
          </div>
          <p className="text-secondary">Página de alunos em construção.</p>
        </div>
      )}

      {!SIDEBAR_ITEMS.find(item => item.path === subpage) && (
        <Navigate to="/student-area/calendario" replace />
      )}
    </SidebarLayout>
  );
}
