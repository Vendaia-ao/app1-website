import { useState } from 'react';

const FAQ_DATA = [
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

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(FAQ_DATA[0].category);
  const [openQuestion, setOpenQuestion] = useState<string | null>(FAQ_DATA[0].questions[0].id);

  const activeData = FAQ_DATA.find(cat => cat.category === activeCategory);

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="bg-surface-container-lowest py-20 border-t border-isec-silver">
      <div className="px-10 max-w-[1280px] w-full mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-isec-dark-gray mb-4">Perguntas Frequentes (FAQ)</h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Encontre respostas rápidas sobre candidaturas, cursos e o dia a dia da comunidade estudantil do ISPTEC.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Categories Sidebar */}
          <div 
            role="tablist" 
            aria-label="Categorias de Perguntas Frequentes"
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
