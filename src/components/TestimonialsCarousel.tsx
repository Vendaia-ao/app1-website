import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const MOCK_TESTIMONIALS_PT = [
  {
    id: 1,
    name: 'Ana Bela Costa',
    role: 'Engenheira Informática (Alumni 2024)',
    content: 'O ISPTEC proporcionou-me uma visão prática fantástica e o acesso a laboratórios modernos que catapultaram a minha aprendizagem. A exigência dos professores preparou-me verdadeiramente para os desafios da indústria.',
    avatarInitials: 'AC',
  },
  {
    id: 2,
    name: 'Carlos Miguel',
    role: 'Estudante de Engenharia de Petróleos',
    content: 'A forte ligação do ISPTEC à Sonangol e outras parceiras facilita imenso a nossa integração em estágios de verão. Sinto que estou a ser formado pelos melhores profissionais do setor.',
    avatarInitials: 'CM',
  },
  {
    id: 3,
    name: 'Sofia Mateus',
    role: 'Gestora Financeira (Alumni 2021)',
    content: 'Estudar Gestão de Empresas no ISPTEC abriu-me portas num mercado extremamente competitivo. O rigor académico e os casos práticos deram-me a confiança necessária para liderar.',
    avatarInitials: 'SM',
  },
  {
    id: 4,
    name: 'João Pedro',
    role: 'Estudante de Engenharia Mecânica',
    content: 'A qualidade das infraestruturas e a disponibilidade dos professores para nos apoiarem nos projetos de investigação fazem do ISPTEC a melhor instituição de ensino superior tecnológico do país.',
    avatarInitials: 'JP',
  },
  {
    id: 5,
    name: 'Mariana Silva',
    role: 'Economista (Alumni 2022)',
    content: 'O nível de excelência que o ISPTEC exige transformou a minha forma de trabalhar. As amizades e a rede de networking que construí aqui são para a vida.',
    avatarInitials: 'MS',
  }
];

const MOCK_TESTIMONIALS_EN = [
  {
    id: 1,
    name: 'Ana Bela Costa',
    role: 'Computer Engineer (Alumni 2024)',
    content: 'ISPTEC provided me with a fantastic practical vision and access to modern laboratories that skyrocketed my learning. The teachers\' demands truly prepared me for industry challenges.',
    avatarInitials: 'AC',
  },
  {
    id: 2,
    name: 'Carlos Miguel',
    role: 'Petroleum Engineering Student',
    content: 'ISPTEC\'s strong connection to Sonangol and other partners greatly facilitates our integration into summer internships. I feel like I am being trained by the best professionals in the sector.',
    avatarInitials: 'CM',
  },
  {
    id: 3,
    name: 'Sofia Mateus',
    role: 'Financial Manager (Alumni 2021)',
    content: 'Studying Business Management at ISPTEC opened doors for me in an extremely competitive market. The academic rigor and practical cases gave me the confidence needed to lead.',
    avatarInitials: 'SM',
  },
  {
    id: 4,
    name: 'João Pedro',
    role: 'Mechanical Engineering Student',
    content: 'The quality of the infrastructure and the availability of teachers to support us in research projects make ISPTEC the best technological higher education institution in the country.',
    avatarInitials: 'JP',
  },
  {
    id: 5,
    name: 'Mariana Silva',
    role: 'Economist (Alumni 2022)',
    content: 'The level of excellence that ISPTEC demands has transformed the way I work. The friendships and networking I built here are for life.',
    avatarInitials: 'MS',
  }
];

export default function TestimonialsCarousel() {
  const { language } = useLanguage();
  const MOCK_TESTIMONIALS = language === 'en' ? MOCK_TESTIMONIALS_EN : MOCK_TESTIMONIALS_PT;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 384; // Card width + gap (360 + 24)
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-neutral-50 py-16 border-t border-b border-isec-silver overflow-hidden">
      <div className="px-10 max-w-[1280px] w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-isec-silver pb-4 mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-isec-dark-gray">
              {language === 'en' ? 'Voices of Our Community' : 'Vozes da Nossa Comunidade'}
            </h2>
            <p className="text-secondary mt-1 max-w-xl">
              {language === 'en' 
                ? 'Discover the experience of studying at ISPTEC through the words of our students and graduates.' 
                : 'Descubra a experiência de estudar no ISPTEC através das palavras dos nossos alunos e diplomados.'}
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-isec-silver bg-white flex items-center justify-center text-isec-dark-gray hover:bg-isec-crimson hover:text-white hover:border-isec-crimson transition-colors shadow-sm"
              aria-label={language === 'en' ? 'Previous Testimonials' : 'Testemunhos Anteriores'}
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">chevron_left</span>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-isec-silver bg-white flex items-center justify-center text-isec-dark-gray hover:bg-isec-crimson hover:text-white hover:border-isec-crimson transition-colors shadow-sm"
              aria-label={language === 'en' ? 'Next Testimonials' : 'Próximos Testemunhos'}
            >
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">chevron_right</span>
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden pb-8 pt-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          aria-live="polite"
          aria-label={language === 'en' ? 'Testimonials Carousel' : 'Carrossel de Testemunhos'}
        >
          {MOCK_TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="min-w-[300px] md:min-w-[360px] max-w-[360px] shrink-0 bg-white border border-isec-silver p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow snap-start flex flex-col relative"
            >
              <span className="material-symbols-outlined absolute top-4 right-4 text-6xl text-neutral-100 -z-0 select-none">format_quote</span>
              <p className="text-secondary mb-8 relative z-10 italic flex-grow text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto relative z-10">
                <div className="w-12 h-12 bg-isec-crimson/10 text-isec-crimson font-bold rounded-full flex items-center justify-center text-lg shrink-0">
                  {testimonial.avatarInitials}
                </div>
                <div>
                  <h4 className="font-bold text-isec-dark-gray text-sm">{testimonial.name}</h4>
                  <p className="text-[11px] text-secondary font-medium uppercase mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
