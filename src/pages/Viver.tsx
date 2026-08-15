export default function Viver() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-isec-dark-gray text-white py-20 px-10">
        <div className="max-w-[1280px] mx-auto w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Viver no ISPTEC</h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl">
            Descubra como é fazer parte de uma comunidade académica vibrante e inovadora em Talatona, no coração tecnológico e empresarial de Luanda.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-10 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded overflow-hidden flex flex-col group cursor-pointer">
            <div className="w-full h-48 overflow-hidden relative bg-neutral-100 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-4xl text-neutral-300">image</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mb-4 group-hover:scale-110 transition-transform">location_city</span>
              <h3 className="text-xl font-bold text-isec-dark-gray mb-3 group-hover:text-isec-crimson transition-colors">A Cidade de Luanda</h3>
              <p className="text-secondary text-sm">
                Vibrante e em constante crescimento, Luanda oferece um ambiente dinâmico. O nosso campus em Talatona garante segurança, proximidade a grandes empresas e um polo de desenvolvimento tecnológico e de negócios.
              </p>
            </div>
          </div>

          <div className="bg-white border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded overflow-hidden flex flex-col group cursor-pointer">
            <div className="w-full h-48 overflow-hidden relative bg-neutral-100 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-4xl text-neutral-300">image</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mb-4 group-hover:scale-110 transition-transform">groups</span>
              <h3 className="text-xl font-bold text-isec-dark-gray mb-3 group-hover:text-isec-crimson transition-colors">Associação de Estudantes</h3>
              <p className="text-secondary text-sm">
                A AEISPTEC promove a integração estudantil através de atividades desportivas, torneios universitários, fóruns académicos e eventos culturais que enriquecem a experiência e o networking no ISPTEC.
              </p>
            </div>
          </div>

          <div className="bg-white border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded overflow-hidden flex flex-col group cursor-pointer">
            <div className="w-full h-48 overflow-hidden relative bg-neutral-100 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-4xl text-neutral-300">image</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <span className="material-symbols-outlined text-4xl text-isec-crimson mb-4 group-hover:scale-110 transition-transform">apartment</span>
              <h3 className="text-xl font-bold text-isec-dark-gray mb-3 group-hover:text-isec-crimson transition-colors">Campus e Infraestruturas</h3>
              <p className="text-secondary text-sm">
                Acesso a laboratórios de última geração, biblioteca moderna, áreas de lazer, refeitórios e espaços de convivência projetados para garantir o seu conforto e a excelência no estudo prático e teórico.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
