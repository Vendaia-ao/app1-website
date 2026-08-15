export type MenuLink = {
  label: string;
  path: string;
};

export type MenuSection = {
  title?: string;
  links: MenuLink[];
};

export type MenuColumn = MenuSection[];

export type MenuItem = {
  id: string;
  label: string;
  path: string;
  columns?: MenuColumn[];
};

export const mainNavigation: MenuItem[] = [
  {
    id: 'isptec',
    label: 'ISPTEC',
    path: '/institution',
    columns: [
      [
        {
          title: 'Institucional',
          links: [
            { label: 'Apresentação', path: '/institution/apresentacao' },
            { label: 'Estatutos', path: '/documents' },
            { label: 'Factos e Números', path: '/institution/factos' },
            { label: 'História', path: '/institution/historia' },
            { label: 'Informação Oficial', path: '/institution/oficial' },
            { label: 'Organização', path: '/institution/organizacao' },
            { label: 'I&D', path: '/institution/id' },
            { label: 'Localização', path: '/contacts' },
            { label: 'Bolsa de recrutamento de docentes', path: '/institution/recrutamento' },
          ],
        },
      ],
      [
        {
          title: 'Departamentos',
          links: [
            { label: 'Departamento de Engenharias e Tecnologias', path: '/departments' },
            { label: 'Departamento de Ciências Sociais Aplicadas', path: '/departments' },
          ],
        },
      ],
      [
        {
          title: 'Serviços',
          links: [
            { label: 'Biblioteca', path: '/academic-services' },
            { label: 'Gabinete de Inserção Profissional e Alumni', path: '/academic-services' },
            { label: 'Relações Internacionais', path: '/academic-services' },
            { label: 'Gabinete de Comunicação e Relações Institucionais', path: '/academic-services' },
            { label: 'Serviços Académicos', path: '/academic-services' },
            { label: 'Tesouraria Académica', path: '/academic-services' },
            { label: 'Serviços de Manutenção', path: '/academic-services' },
            { label: 'Direção de Tecnologias de Informação', path: '/academic-services' },
            { label: 'Gabinete de Apoio ao Estudante', path: '/academic-services' },
            { label: 'Gabinete de Qualidade e Planeamento', path: '/academic-services' },
          ],
        },
      ],
      [
        {
          title: 'Links',
          links: [
            { label: 'Moodle', path: '#' },
            { label: 'Webmail', path: '#' },
            { label: 'MyISPTEC', path: '#' },
            { label: 'Portal do Estudante', path: '#' },
            { label: 'Portal do Docente', path: '#' },
            { label: 'QUALIDADE - SIGQ ISPTEC', path: '#' },
          ],
        },
      ],
    ],
  },
  {
    id: 'noticias',
    label: 'NOTÍCIAS',
    path: '/news',
  },
  {
    id: 'estudar',
    label: 'ESTUDAR',
    path: '/education',
    columns: [
      [
        {
          title: 'Oferta Formativa',
          links: [
            { label: 'Mestrados', path: '/education' },
            { label: 'Pós-Graduações', path: '/education' },
            { label: 'Licenciaturas', path: '/education' },
            { label: 'Cursos de Curta Duração', path: '/education' },
            { label: 'Formação Contínua', path: '/education' },
          ],
        },
        {
          title: 'Formas de ingresso',
          links: [
            { label: 'Mestrados', path: '/education' },
            { label: 'Licenciaturas', path: '/education' },
            { label: 'Cursos de Curta Duração', path: '/education' },
          ],
        }
      ],
      [
        {
          title: 'Links',
          links: [
            { label: 'Moodle', path: '#' },
            { label: 'Webmail', path: '#' },
            { label: 'MyISPTEC', path: '#' },
            { label: 'Portal do Estudante', path: '#' },
            { label: 'Portal do Docente', path: '#' },
            { label: 'QUALIDADE - SIGQ ISPTEC', path: '#' },
          ],
        },
      ],
      [
        {
          title: 'Academia',
          links: [
            { label: 'Cursos da Academia ISPTEC', path: '#' },
          ],
        },
      ],
    ],
  },
  {
    id: 'alunos',
    label: 'ALUNOS',
    path: '/student-area',
    columns: [
      [
        {
          title: 'Alunos do ISPTEC',
          links: [
            { label: 'Documentos importantes / Legislação', path: '/student-area' },
            { label: 'Prazos importantes', path: '/student-area' },
            { label: 'Formulários', path: '/student-area' },
            { label: 'Matrículas e Inscrições', path: '/student-area' },
            { label: 'Renovação de inscrições', path: '/student-area' },
            { label: 'Propinas e Emolumentos', path: '/student-area' },
            { label: 'Calendário Académico', path: '/student-area' },
            { label: 'Horários', path: '/student-area' },
            { label: 'Mapa de exames', path: '/student-area' },
            { label: 'Acesso aos recursos (Portal, Moodle, Email, etc.)', path: '/student-area' },
          ],
        },
      ],
      [
        {
          links: [
            { label: 'Bolsas de Mérito (Sonangol)', path: '/student-area' },
          ],
        },
        {
          links: [
            { label: 'Defesas Públicas', path: '/student-area' },
          ],
        },
        {
          links: [
            { label: 'Estágios Curriculares', path: '/student-area' },
          ],
        },
      ],
    ],
  },
  {
    id: 'viver',
    label: 'VIVER',
    path: '/viver',
  },
  {
    id: 'contactos',
    label: 'CONTACTOS',
    path: '/contacts',
  },
];
