import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ_DATA_PT = [
  {
    category: 'Admissões',
    questions: [
      {
        id: 'a1',
        q: 'Quais são as formas de ingresso no ISPTEC?',
        a: 'Os candidatos podem ingressar através do Exame de Acesso Geral, por Transferência/Mudança de Curso, ou ao abrigo do estatuto de Estudante Internacional. O exame geral incide sobre as disciplinas nucleares do curso pretendido (ex: Matemática, Física, etc.).'
      },
      {
        id: 'a2',
        q: 'Quando começam as inscrições para os exames de acesso?',
        a: 'Geralmente, as inscrições para o novo ano académico ocorrem nos meses de Julho e Agosto. Recomendamos que acompanhe sempre o portal de notícias e o calendário académico atualizado na nossa secção de Serviços Académicos.'
      },
      {
        id: 'a3',
        q: 'O ISPTEC disponibiliza bolsas de estudo?',
        a: 'Sim. O ISPTEC, muitas vezes em parceria com entidades de excelência como a Sonangol, disponibiliza programas de bolsas de mérito académico para premiar e apoiar os candidatos com os melhores desempenhos no exame de acesso e ao longo do curso.'
      },
      {
        id: 'a4',
        q: 'Como funcionam as provas de acesso para os cursos de Engenharia?',
        a: 'Para os cursos de Engenharia, as provas de acesso incidem predominantemente sobre as áreas de Matemática e Física. É fornecida uma matriz de conteúdos com antecedência para permitir a preparação atempada dos candidatos.'
      }
    ]
  },
  {
    category: 'Cursos',
    questions: [
      {
        id: 'c1',
        q: 'Os cursos do ISPTEC são reconhecidos pelo Ministério (MESCTI)?',
        a: 'Absolutamente. Todos os nossos cursos superiores (Licenciaturas, Mestrados e Pós-Graduações) encontram-se devidamente legalizados e acreditados pelo Ministério do Ensino Superior, Ciência, Tecnologia e Inovação.'
      },
      {
        id: 'c2',
        q: 'Qual é a duração normal de uma Licenciatura?',
        a: 'Os cursos de Licenciatura no ISPTEC têm a duração padrão de 4 a 5 anos letivos (8 a 10 semestres), dependendo da exigência do plano curricular de cada departamento (Engenharias ou Ciências Sociais Aplicadas).'
      },
      {
        id: 'c3',
        q: 'As aulas são teóricas ou possuem forte vertente prática?',
        a: 'O ISPTEC distingue-se exatamente pela sua vertente prática. Adotamos um modelo de ensino misto apoiado por laboratórios de investigação de ponta, para garantir que os alunos colocam a "mão na massa" e resolvem desafios reais da indústria.'
      },
      {
        id: 'c4',
        q: 'Posso continuar os estudos com um Mestrado no ISPTEC?',
        a: 'Sim, dispomos de programas de pós-graduação e mestrados (como Gestão de Empresas MBA, Engenharia de Petróleos, entre outros) desenhados para aprofundar competências após a conclusão da licenciatura.'
      }
    ]
  },
  {
    category: 'Vida Estudantil',
    questions: [
      {
        id: 'v1',
        q: 'Onde está localizado o Campus Principal?',
        a: 'O nosso Campus de excelência localiza-se em Talatona, Luanda. É uma área projetada de raiz para oferecer as melhores infraestruturas académicas, tecnológicas, desportivas e de lazer de Angola.'
      },
      {
        id: 'v2',
        q: 'Existe Associação de Estudantes (AE)?',
        a: 'Sim! A Associação de Estudantes do ISPTEC (AEISPTEC) é uma organização altamente dinâmica que organiza eventos culturais, desportivos, palestras tecnológicas e semanas de integração, representando os interesses de todos os alunos.'
      },
      {
        id: 'v3',
        q: 'Quais são os principais serviços de apoio disponíveis no Campus?',
        a: 'Os nossos estudantes têm acesso a uma imponente biblioteca central, laboratórios de especialidade com tecnologia recente, refeitórios, cantinas, complexo desportivo, internet Wi-Fi de alta velocidade e parque de estacionamento seguro.'
      },
      {
        id: 'v4',
        q: 'Como é que a Universidade apoia a empregabilidade?',
        a: 'Possuímos um gabinete dedicado à carreira que estabelece protocolos com gigantes do setor corporativo angolano. Promovemos feiras de emprego regulares no campus, programas de estágio de verão e seminários de preparação para o mercado de trabalho.'
      }
    ]
  }
];

const FAQ_DATA_EN = [
  {
    category: 'Admissions',
    questions: [
      {
        id: 'a1',
        q: 'What are the admission methods at ISPTEC?',
        a: 'Candidates can enter through the General Entrance Exam, by Transfer/Change of Course, or under the International Student status. The general exam focuses on the core subjects of the intended course (e.g., Mathematics, Physics, etc.).'
      },
      {
        id: 'a2',
        q: 'When do registrations for the entrance exams start?',
        a: 'Generally, registrations for the new academic year take place in July and August. We recommend that you always follow the news portal and the updated academic calendar in our Academic Services section.'
      },
      {
        id: 'a3',
        q: 'Does ISPTEC offer scholarships?',
        a: 'Yes. ISPTEC, often in partnership with entities of excellence such as Sonangol, offers academic merit scholarship programs to reward and support candidates with the best performances in the entrance exam and throughout the course.'
      },
      {
        id: 'a4',
        q: 'How do entrance exams for Engineering courses work?',
        a: 'For Engineering courses, entrance exams predominantly focus on Mathematics and Physics. A syllabus is provided in advance to allow for timely preparation of candidates.'
      }
    ]
  },
  {
    category: 'Courses',
    questions: [
      {
        id: 'c1',
        q: 'Are ISPTEC courses recognized by the Ministry (MESCTI)?',
        a: 'Absolutely. All our higher education courses (Bachelor\'s, Master\'s, and Postgraduate) are duly legalized and accredited by the Ministry of Higher Education, Science, Technology and Innovation.'
      },
      {
        id: 'c2',
        q: 'What is the normal duration of a Bachelor\'s degree?',
        a: 'Bachelor\'s degree courses at ISPTEC have a standard duration of 4 to 5 academic years (8 to 10 semesters), depending on the requirements of the curriculum of each department (Engineering or Applied Social Sciences).'
      },
      {
        id: 'c3',
        q: 'Are classes theoretical or do they have a strong practical component?',
        a: 'ISPTEC stands out precisely for its practical component. We adopt a mixed teaching model supported by cutting-edge research laboratories, to ensure that students get "hands-on" and solve real industry challenges.'
      },
      {
        id: 'c4',
        q: 'Can I continue my studies with a Master\'s degree at ISPTEC?',
        a: 'Yes, we have postgraduate and master\'s programs (such as Business Management MBA, Petroleum Engineering, among others) designed to deepen skills after completing the bachelor\'s degree.'
      }
    ]
  },
  {
    category: 'Student Life',
    questions: [
      {
        id: 'v1',
        q: 'Where is the Main Campus located?',
        a: 'Our campus of excellence is located in Talatona, Luanda. It is an area designed from scratch to offer the best academic, technological, sports and leisure infrastructure in Angola.'
      },
      {
        id: 'v2',
        q: 'Is there a Student Association (AE)?',
        a: 'Yes! The ISPTEC Student Association (AEISPTEC) is a highly dynamic organization that organizes cultural and sporting events, technological lectures and integration weeks, representing the interests of all students.'
      },
      {
        id: 'v3',
        q: 'What are the main support services available on Campus?',
        a: 'Our students have access to an impressive central library, specialty laboratories with recent technology, cafeterias, canteens, a sports complex, high-speed Wi-Fi internet, and secure parking.'
      },
      {
        id: 'v4',
        q: 'How does the University support employability?',
        a: 'We have a dedicated career office that establishes protocols with giants in the Angolan corporate sector. We promote regular job fairs on campus, summer internship programs, and seminars to prepare for the job market.'
      }
    ]
  }
];

export default function FAQSection() {
  const { language } = useLanguage();
  const FAQ_DATA = language === 'en' ? FAQ_DATA_EN : FAQ_DATA_PT;
  
  const [activeCategory, setActiveCategory] = useState(FAQ_DATA[0].category);
  const [openQuestion, setOpenQuestion] = useState<string | null>(FAQ_DATA[0].questions[0].id);

  const activeData = FAQ_DATA.find(cat => cat.category === activeCategory) || FAQ_DATA[0];

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="bg-surface-container-lowest py-20 border-t border-isec-silver">
      <div className="px-10 max-w-[1280px] w-full mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-isec-dark-gray mb-4">
            {language === 'en' ? 'Frequently Asked Questions (FAQ)' : 'Perguntas Frequentes (FAQ)'}
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            {language === 'en' 
              ? 'Find quick answers about applications, courses and the day-to-day life of the ISPTEC student community.'
              : 'Encontre respostas rápidas sobre candidaturas, cursos e o dia a dia da comunidade estudantil do ISPTEC.'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Categories Sidebar */}
          <div 
            role="tablist" 
            aria-label={language === 'en' ? "FAQ Categories" : "Categorias de Perguntas Frequentes"}
            className="w-full lg:w-1/4 shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden snap-x"
          >
            {FAQ_DATA.map((cat) => (
              <button
                key={cat.category}
                role="tab"
                aria-selected={activeCategory === cat.category}
                aria-controls={`faq-panel`}
                id={`tab-${cat.category.replace(/\s+/g, '-')}`}
                onClick={() => {
                  setActiveCategory(cat.category);
                  // Optionally open the first question of the new category automatically
                  const catData = FAQ_DATA.find(d => d.category === cat.category);
                  if (catData && catData.questions.length > 0) {
                    setOpenQuestion(catData.questions[0].id);
                  }
                }}
                className={`text-left px-6 py-4 rounded font-bold transition-all duration-300 min-w-[160px] snap-start ${
                  activeCategory === cat.category 
                    ? 'bg-isec-crimson text-white shadow-md lg:translate-x-2' 
                    : 'bg-white border border-isec-silver text-isec-dark-gray hover:border-isec-crimson hover:text-isec-crimson'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div 
            id="faq-panel"
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory.replace(/\s+/g, '-')}`}
            className="w-full lg:w-3/4 flex flex-col gap-4"
          >
            {activeData?.questions.map((item) => {
              const isOpen = openQuestion === item.id;
              
              return (
                <div 
                  key={item.id} 
                  className={`bg-white border rounded overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-isec-crimson shadow-md' : 'border-isec-silver hover:border-neutral-300'
                  }`}
                >
                  <button
                    onClick={() => toggleQuestion(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
                  >
                    <span className={`font-bold pr-8 transition-colors ${isOpen ? 'text-isec-crimson' : 'text-isec-dark-gray'}`}>
                      {item.q}
                    </span>
                    <span 
                      className="material-symbols-outlined shrink-0 transition-transform duration-300" 
                      aria-hidden="true"
                      style={{ 
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: isOpen ? '#A81118' : '#757575' 
                      }}
                    >
                      expand_more
                    </span>
                  </button>
                  <div 
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[500px] py-5 border-t border-neutral-100 opacity-100' : 'max-h-0 py-0 opacity-0'
                    }`}
                  >
                    <p className="text-secondary leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
