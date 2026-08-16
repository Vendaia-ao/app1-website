import { useRef } from 'react';
import { Link } from 'react-router-dom';
import news1Img from '../assets/images/news_tech_fair_1786829846776.jpg';
import news2Img from '../assets/images/news_research_engineers_1786829859024.jpg';
import news3Img from '../assets/images/news_business_banking_1786829870480.jpg';
import news4Img from '../assets/images/news_ai_lab_1786829882706.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const MOCK_NEWS_PT = [
  {
    id: 1,
    category: 'Institucional',
    title: 'ISPTEC ACOLHE FEIRA DE TECNOLOGIA E INOVAÇÃO DE LUANDA',
    excerpt: 'O campus de Talatona foi o palco principal para mais de 50 empresas tecnológicas apresentarem as suas mais recentes soluções...',
    date: '01-08-2026',
    path: '/news',
    image: news1Img,
  },
  {
    id: 2,
    category: 'Investigação',
    title: 'ESTUDANTES DE ENGENHARIA DESENVOLVEM NOVA SOLUÇÃO PARA O SETOR PETROLÍFERO',
    excerpt: 'Um programa de investigação focado na otimização da extração sustentável, desenvolvido em parceria com a Sonangol...',
    date: '05-08-2026',
    path: '/news',
    image: news2Img,
  },
  {
    id: 3,
    category: 'Empregabilidade',
    title: 'DIPLOMADOS DO ISPTEC COM 100% DE EMPREGABILIDADE NA BANCA E TELECOMUNICAÇÕES',
    excerpt: 'Os cursos de Engenharia Informática e Gestão continuam a revelar uma taxa de integração profissional recorde em Angola...',
    date: '05-08-2026',
    path: '/news',
    image: news3Img,
  },
  {
    id: 4,
    category: 'Inovação',
    title: 'ISPTEC INAUGURA NOVO LABORATÓRIO DE INTELIGÊNCIA ARTIFICIAL APLICADA',
    excerpt: 'O novo espaço de investigação vai permitir aos estudantes desenvolverem projetos em parceria com empresas tecnológicas de Luanda...',
    date: '08-08-2026',
    path: '/news',
    image: news4Img,
  },
  {
    id: 5,
    category: 'Eventos',
    title: 'CONFERÊNCIA INTERNACIONAL DE CIÊNCIAS SOCIAIS E ENGENHARIA REÚNE ESPECIALISTAS',
    excerpt: 'O evento anual traz ao ISPTEC investigadores para debater as novas tendências de desenvolvimento económico e industrial do país...',
    date: '10-08-2026',
    path: '/news',
    image: news3Img,
  },
  {
    id: 6,
    category: 'Internacionalização',
    title: 'NOVAS PARCERIAS COM UNIVERSIDADES INTERNACIONAIS ALARGAM PROGRAMAS DE MOBILIDADE',
    excerpt: 'Estudantes do ISPTEC passam a ter acesso a intercâmbios em prestigiadas universidades do Brasil, Portugal e África do Sul...',
    date: '11-08-2026',
    path: '/news',
    image: news1Img,
  }
];

const MOCK_NEWS_EN = [
  {
    id: 1,
    category: 'Institutional',
    title: 'ISPTEC HOSTS LUANDA TECHNOLOGY AND INNOVATION FAIR',
    excerpt: 'The Talatona campus was the main stage for over 50 technology companies to present their latest solutions...',
    date: '08-01-2026',
    path: '/news',
    image: news1Img,
  },
  {
    id: 2,
    category: 'Research',
    title: 'ENGINEERING STUDENTS DEVELOP NEW SOLUTION FOR THE OIL SECTOR',
    excerpt: 'A research program focused on optimizing sustainable extraction, developed in partnership with Sonangol...',
    date: '08-05-2026',
    path: '/news',
    image: news2Img,
  },
  {
    id: 3,
    category: 'Employability',
    title: 'ISPTEC GRADUATES WITH 100% EMPLOYABILITY IN BANKING AND TELECOMMUNICATIONS',
    excerpt: 'Computer Engineering and Management courses continue to reveal a record professional integration rate in Angola...',
    date: '08-05-2026',
    path: '/news',
    image: news3Img,
  },
  {
    id: 4,
    category: 'Innovation',
    title: 'ISPTEC INAUGURATES NEW APPLIED ARTIFICIAL INTELLIGENCE LABORATORY',
    excerpt: 'The new research space will allow students to develop projects in partnership with technology companies in Luanda...',
    date: '08-08-2026',
    path: '/news',
    image: news4Img,
  },
  {
    id: 5,
    category: 'Events',
    title: 'INTERNATIONAL CONFERENCE ON SOCIAL SCIENCES AND ENGINEERING BRINGS EXPERTS TOGETHER',
    excerpt: 'The annual event brings researchers to ISPTEC to discuss new trends in the country\'s economic and industrial development...',
    date: '08-10-2026',
    path: '/news',
    image: news3Img,
  },
  {
    id: 6,
    category: 'Internationalization',
    title: 'NEW PARTNERSHIPS WITH INTERNATIONAL UNIVERSITIES EXPAND MOBILITY PROGRAMS',
    excerpt: 'ISPTEC students now have access to exchanges at prestigious universities in Brazil, Portugal and South Africa...',
    date: '08-11-2026',
    path: '/news',
    image: news1Img,
  }
];

export default function NewsCarousel() {
  const { language } = useLanguage();
  const MOCK_NEWS = language === 'en' ? MOCK_NEWS_EN : MOCK_NEWS_PT;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 344; // Card width + gap (320 + 24)
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="px-10 gap-gutter py-8 max-w-[1280px] w-full mx-auto">
      <div className="flex justify-between items-end border-b border-isec-silver pb-2 mb-6">
        <h2 className="text-xl font-bold uppercase tracking-tight text-isec-dark-gray">
          {language === 'en' ? 'LATEST NEWS' : 'ÚLTIMAS NOTÍCIAS'}
        </h2>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full border border-isec-silver flex items-center justify-center text-isec-dark-gray hover:bg-isec-crimson hover:text-white hover:border-isec-crimson transition-colors"
            aria-label={language === 'en' ? 'Previous News' : 'Notícias Anteriores'}
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">chevron_left</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full border border-isec-silver flex items-center justify-center text-isec-dark-gray hover:bg-isec-crimson hover:text-white hover:border-isec-crimson transition-colors"
            aria-label={language === 'en' ? 'Next News' : 'Próximas Notícias'}
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">chevron_right</span>
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        aria-live="polite"
        aria-label={language === 'en' ? 'News Carousel' : 'Carrossel de Notícias'}
      >
        {MOCK_NEWS.map((news) => (
          <Link 
            key={news.id}
            to={news.path} 
            className="min-w-[280px] md:min-w-[340px] max-w-[340px] shrink-0 bg-white border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded overflow-hidden flex flex-col group cursor-pointer snap-start"
          >
            <div className="w-full h-48 overflow-hidden relative bg-neutral-100 flex items-center justify-center shrink-0">
              <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex gap-2 mb-3 text-[10px] md:text-xs">
                <span className="font-bold text-isec-crimson uppercase">{news.category}</span>
                <span className="text-neutral-500">• {news.date}</span>
              </div>
              <h3 className="font-bold text-sm md:text-base leading-tight mb-3 text-isec-dark-gray group-hover:text-isec-crimson transition-colors line-clamp-2" title={news.title}>
                {news.title}
              </h3>
              <p className="text-xs md:text-sm text-secondary mb-6 flex-grow line-clamp-3" title={news.excerpt}>
                {news.excerpt}
              </p>
              <div className="text-xs md:text-sm font-bold text-isec-crimson flex items-center gap-1 mt-auto">
                {language === 'en' ? 'Read article' : 'Ler artigo'} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
