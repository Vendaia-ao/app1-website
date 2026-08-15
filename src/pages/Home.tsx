import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import NewsCarousel from '../components/NewsCarousel';
import UpcomingEvents from '../components/UpcomingEvents';
import slide1Img from '../assets/images/angolan_students_campus_1786829352418.jpg';
import slide3Img from '../assets/images/angolan_engineers_1786829365741.jpg';

const HERO_SLIDES = [
  {
    id: 1,
    image: slide1Img,
    title: "Exames de Acesso 2026/2027",
    subtitle: "Garante o teu futuro no ISPTEC",
    cta: "Saber mais",
    link: "/education"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80",
    title: "Inovação e Tecnologia",
    subtitle: "A melhor infraestrutura de laboratórios em Angola",
    cta: "Conhecer o Campus",
    link: "/institution"
  },
  {
    id: 3,
    image: slide3Img,
    title: "Formação de Excelência",
    subtitle: "Formamos os líderes de amanhã em Engenharias e Ciências",
    cta: "Explorar",
    link: "/institution"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      <section className="bg-isec-black min-h-[calc(100vh-124px)] relative shrink-0 flex items-center overflow-hidden py-20 md:py-0">
        {/* Carousel Background Images */}
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              {/* Darker Gradient Overlay for centered text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-isec-black/30 via-isec-black/50 to-isec-black/80"></div>
            </div>
          ))}
        </div>

        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none z-10" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}
        ></div>
        
        {/* Dynamic Carousel Text Content */}
        <div className="max-w-[1280px] w-full mx-auto px-10 flex flex-col justify-center items-center z-20 relative h-full">
          <div className="text-white max-w-4xl text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 drop-shadow-lg transition-all duration-500">
              {HERO_SLIDES[currentSlide].title}
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-200 mb-10 drop-shadow transition-all duration-500">
              {HERO_SLIDES[currentSlide].subtitle}
            </p>
            <Link 
              to={HERO_SLIDES[currentSlide].link} 
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold px-10 py-4 rounded hover:bg-white/20 transition-colors inline-block shadow-xl uppercase text-sm tracking-wider"
            >
              {HERO_SLIDES[currentSlide].cta}
            </Link>
          </div>
        </div>

        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-2"
          aria-label="Anterior"
        >
          <span className="material-symbols-outlined text-4xl md:text-6xl font-light">chevron_left</span>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-2"
          aria-label="Próximo"
        >
          <span className="material-symbols-outlined text-4xl md:text-6xl font-light">chevron_right</span>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 transition-all duration-300 ${
                index === currentSlide ? 'w-10 bg-white' : 'w-6 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Ir para banner ${index + 1}`}
            />
          ))}
        </div>

        {/* Quick Access Floating Buttons (Maintained as requested) */}
        <div className="hidden md:flex flex-col gap-4 absolute right-0 bottom-12 lg:bottom-20 z-40">
          <Link 
            to="/academic-services/avisos" 
            className="bg-white border-l-[6px] border-isec-crimson py-4 px-6 lg:px-10 text-isec-crimson font-bold shadow-2xl hover:bg-neutral-50 transition-colors uppercase tracking-wider text-xs lg:text-sm flex items-center min-w-[240px] lg:min-w-[280px]"
          >
            Informações | Avisos
          </Link>
          <Link 
            to="/student-area/calendario" 
            className="bg-white border-l-[6px] border-isec-crimson py-4 px-6 lg:px-10 text-isec-crimson font-bold shadow-2xl hover:bg-neutral-50 transition-colors uppercase tracking-wider text-xs lg:text-sm flex items-center min-w-[240px] lg:min-w-[280px]"
          >
            Calendários | Horários
          </Link>
          <Link 
            to="/academic-services/emolumentos" 
            className="bg-white border-l-[6px] border-isec-crimson py-4 px-6 lg:px-10 text-isec-crimson font-bold shadow-2xl hover:bg-neutral-50 transition-colors uppercase tracking-wider text-xs lg:text-sm flex items-center min-w-[240px] lg:min-w-[280px]"
          >
            Propinas | Emolumentos
          </Link>
        </div>
      </section>

      <section className="bg-white border-b border-isec-silver h-auto md:h-[60px] flex items-center shrink-0">
        <div className="max-w-[1280px] w-full mx-auto px-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-isec-silver py-4 md:py-0">
          <div className="px-4 text-center py-2 md:py-0 flex items-center justify-center md:justify-start">
            <span className="text-isec-crimson font-bold text-lg">85%</span>
            <p className="text-[10px] uppercase font-bold text-secondary ml-2 text-left leading-tight">
              TAXA DE EMPREGABILIDADE<br/>NO SETOR CORPORATIVO
            </p>
          </div>
          <div className="px-4 text-center py-2 md:py-0 flex items-center justify-center md:justify-start">
            <span className="text-isec-crimson font-bold text-lg">95%</span>
            <p className="text-[10px] uppercase font-bold text-secondary ml-2 text-left leading-tight">
              DOS DIPLOMADOS INSERIDOS<br/>NO MERCADO DE TRABALHO
            </p>
          </div>
          <div className="px-4 text-center py-2 md:py-0 flex items-center justify-center md:justify-start">
            <span className="text-isec-crimson font-bold text-lg">90%</span>
            <p className="text-[10px] uppercase font-bold text-secondary ml-2 text-left leading-tight">
              DE ALUNOS EMPREGADOS<br/>NA SUA ÁREA DE FORMAÇÃO
            </p>
          </div>
        </div>
      </section>

      <NewsCarousel />

      <UpcomingEvents />

      <section className="px-10 gap-gutter pb-12 pt-4 max-w-[1280px] w-full mx-auto">
        <h2 className="text-xl font-bold uppercase tracking-tight text-isec-dark-gray border-b border-isec-silver pb-2 mb-6">Oferta Formativa</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/education" className="bg-white border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded overflow-hidden flex flex-col group cursor-pointer">
            <div className="w-full h-40 overflow-hidden relative bg-neutral-100 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-4xl text-neutral-300">image</span>
            </div>
            <div className="p-6 flex flex-col items-center justify-center text-center flex-grow">
              <span className="material-symbols-outlined text-isec-crimson mb-3 text-3xl">school</span>
              <h3 className="text-sm font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors uppercase">Licenciaturas</h3>
            </div>
          </Link>

          <Link to="/education" className="bg-white border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded overflow-hidden flex flex-col group cursor-pointer">
            <div className="w-full h-40 overflow-hidden relative bg-neutral-100 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-4xl text-neutral-300">image</span>
            </div>
            <div className="p-6 flex flex-col items-center justify-center text-center flex-grow">
              <span className="material-symbols-outlined text-isec-crimson mb-3 text-3xl">account_balance</span>
              <h3 className="text-sm font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors uppercase">Pós-Graduações</h3>
            </div>
          </Link>

          <Link to="/education" className="bg-white border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded overflow-hidden flex flex-col group cursor-pointer">
            <div className="w-full h-40 overflow-hidden relative bg-neutral-100 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-4xl text-neutral-300">image</span>
            </div>
            <div className="p-6 flex flex-col items-center justify-center text-center flex-grow">
              <span className="material-symbols-outlined text-isec-crimson mb-3 text-3xl">business_center</span>
              <h3 className="text-sm font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors uppercase">Mestrados</h3>
            </div>
          </Link>

          <Link to="/education" className="bg-white border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded overflow-hidden flex flex-col group cursor-pointer">
            <div className="w-full h-40 overflow-hidden relative bg-neutral-100 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-4xl text-neutral-300">image</span>
            </div>
            <div className="p-6 flex flex-col items-center justify-center text-center flex-grow">
              <span className="material-symbols-outlined text-isec-crimson mb-3 text-3xl">thumb_up</span>
              <h3 className="text-sm font-bold text-isec-dark-gray group-hover:text-isec-crimson transition-colors uppercase">CTeSP</h3>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
