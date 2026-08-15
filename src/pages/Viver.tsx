import { useParams, Navigate } from 'react-router-dom';
import SidebarLayout from '../components/SidebarLayout';
import heroImg from '../assets/images/angolan_students_campus_1786829352418.jpg';
import imgCampus from '../assets/images/angolan_campus_facade_1786829389896.jpg';
import imgStudents from '../assets/images/angolan_students_community_1786829400627.jpg';

const SIDEBAR_ITEMS = [
  { label: 'Campus Talatona', path: 'campus' },
  { label: 'Associação de Estudantes', path: 'associacao' },
  { label: 'Desporto e Cultura', path: 'desporto' },
  { label: 'Alojamento e Transportes', path: 'alojamento' },
  { label: 'Luanda Tech Hub', path: 'luanda' },
];

export default function Viver() {
  const { subpage } = useParams();

  // If we're at /viver exactly, we don't have a subpage via standard router yet if we didn't set it up like Institution.
  // Actually, App.tsx has: <Route path="viver" element={<Viver />} />
  // We need to handle internal state if useParams fails or change App.tsx. For now, since App.tsx doesn't have :subpage for viver, we'll render a single page layout or fake it.
  
  // Wait, let's just make it a single page with sections or use standard layout.
  // Given the current App.tsx route is just <Route path="viver" element={<Viver />} />, subpage will be undefined.
  // So let's build a beautiful single page instead of a sidebar layout to fit the route, or use internal state.
  
  // Let's use internal state to mimic the SidebarLayout if we want, OR just build a rich scrollable page.
  // Since the user asked to "faça o mesmo com cada item do menu", and I just did Alunos with Sidebar, maybe I should do a rich single page for Viver.

  return (
    <div className="w-full animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Estudantes no Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Viver no ISPTEC</h1>
          <p className="text-xl text-neutral-200 font-light">
            Muito mais do que uma instituição de ensino. Uma comunidade vibrante no coração tecnológico de Luanda.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <h2 className="text-3xl font-light text-isec-dark-gray mb-6">O Campus de Talatona</h2>
            <p className="text-secondary mb-4 leading-relaxed">
              Localizado na zona sul de Luanda, Talatona é o principal centro financeiro e tecnológico de Angola. O nosso campus beneficia desta localização estratégica, oferecendo um ambiente seguro, moderno e inspirador.
            </p>
            <p className="text-secondary mb-6 leading-relaxed">
              Desenhado para potenciar a criatividade e o estudo colaborativo, o espaço conta com zonas verdes, praças de convívio, cafetarias e acesso Wi-Fi de alta velocidade em todo o perímetro.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-isec-dark-gray font-medium">
                <span className="material-symbols-outlined text-isec-crimson">local_cafe</span>
                Praça de Alimentação e Cafetarias
              </li>
              <li className="flex items-center gap-3 text-isec-dark-gray font-medium">
                <span className="material-symbols-outlined text-isec-crimson">park</span>
                Zonas Verdes e Espaços de Estudo ao Ar Livre
              </li>
              <li className="flex items-center gap-3 text-isec-dark-gray font-medium">
                <span className="material-symbols-outlined text-isec-crimson">security</span>
                Segurança 24/7 e Controlo de Acessos
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-100 rounded-lg h-48 sm:h-64 overflow-hidden shadow-md">
              <img src={imgCampus} alt="Campus do ISPTEC" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="bg-neutral-100 rounded-lg h-48 sm:h-64 overflow-hidden shadow-md mt-8">
              <img src={imgStudents} alt="Estudantes no Campus" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-xl overflow-hidden p-8 group">
            <div className="w-16 h-16 bg-red-50 text-isec-crimson rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="text-xl font-bold text-isec-dark-gray mb-3">Associação de Estudantes</h3>
            <p className="text-secondary text-sm">
              A AEISPTEC é o coração da vida estudantil. Organiza festas académicas, fóruns de debate, voluntariado e garante que a voz dos estudantes é ouvida nos órgãos de gestão.
            </p>
          </div>
          
          <div className="bg-white border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-xl overflow-hidden p-8 group">
            <div className="w-16 h-16 bg-red-50 text-isec-crimson rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">sports_basketball</span>
            </div>
            <h3 className="text-xl font-bold text-isec-dark-gray mb-3">Desporto e Cultura</h3>
            <p className="text-secondary text-sm">
              Temos equipas universitárias em diversas modalidades (Futsal, Basquetebol, Xadrez). Promovemos também grupos de teatro, música e feiras de cultura africana no campus.
            </p>
          </div>

          <div className="bg-white border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-xl overflow-hidden p-8 group">
            <div className="w-16 h-16 bg-red-50 text-isec-crimson rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">directions_bus</span>
            </div>
            <h3 className="text-xl font-bold text-isec-dark-gray mb-3">Mobilidade</h3>
            <p className="text-secondary text-sm">
              Talatona possui excelentes acessos. Para facilitar a vida aos alunos, existem parcerias para transporte universitário e parques de estacionamento dedicados e seguros.
            </p>
          </div>
        </div>

        <div className="bg-neutral-50 rounded-2xl p-10 lg:p-16 border border-isec-silver text-center">
          <span className="material-symbols-outlined text-5xl text-isec-crimson mb-4">forum</span>
          <h2 className="text-3xl font-light text-isec-dark-gray mb-6">Integração de Novos Alunos</h2>
          <p className="text-secondary max-w-2xl mx-auto mb-8">
            Sabemos que o início do ensino superior é um desafio. O nosso programa de acolhimento ("Praxe Solidária") foca-se na integração saudável, mentoria por alunos finalistas e campanhas de responsabilidade social, repudiando qualquer forma de humilhação.
          </p>
          <a href="/contacts" className="inline-block bg-isec-crimson text-white px-8 py-3 rounded font-bold uppercase tracking-wider text-sm hover:bg-red-800 transition-colors">
            Falar com a Associação
          </a>
        </div>
      </section>
    </div>
  );
}
