export type Language = 'pt' | 'en';

type TranslationDictionary = {
  [key: string]: string | TranslationDictionary;
};

export const translations: Record<Language, TranslationDictionary> = {
  pt: {
    nav: {
      institution: 'ISPTEC',
      news: 'NOTÍCIAS',
      study: 'ESTUDAR',
      students: 'ALUNOS',
      live: 'VIVER',
      contacts: 'CONTACTOS',
      portal: 'PORTAL',
      search: 'Pesquisar...',
    },
    footer: {
      subscribe: 'Subscreva a nossa Newsletter',
      subscribeText: 'Receba em primeira mão as últimas novidades, anúncios de bolsas, prazos de candidaturas e eventos da comunidade ISPTEC.',
      emailPlaceholder: 'O seu endereço de email',
      subscribeBtn: 'Subscrever',
      subscribedBtn: 'Subscrito',
      institutional: 'Institucional',
      presentation: 'Apresentação',
      history: 'História',
      departments: 'Departamentos',
      academicServices: 'Serviços Académicos',
      legal: 'Legal',
      terms: 'Termos de Uso',
      privacy: 'Política de Privacidade',
      cookies: 'Política de Cookies',
      accessibility: 'Acessibilidade',
      community: 'Comunidade',
      socialText: 'Acompanhe as últimas novidades, notícias e eventos da nossa comunidade académica nas redes sociais.',
      rights: 'Todos os direitos reservados.',
    },
    common: {
      home: 'Home',
    }
  },
  en: {
    nav: {
      institution: 'ISPTEC',
      news: 'NEWS',
      study: 'STUDY',
      students: 'STUDENTS',
      live: 'CAMPUS LIFE',
      contacts: 'CONTACTS',
      portal: 'PORTAL',
      search: 'Search...',
    },
    footer: {
      subscribe: 'Subscribe to our Newsletter',
      subscribeText: 'Get the latest news, scholarship announcements, application deadlines and events from the ISPTEC community firsthand.',
      emailPlaceholder: 'Your email address',
      subscribeBtn: 'Subscribe',
      subscribedBtn: 'Subscribed',
      institutional: 'Institutional',
      presentation: 'Presentation',
      history: 'History',
      departments: 'Departments',
      academicServices: 'Academic Services',
      legal: 'Legal',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
      cookies: 'Cookies Policy',
      accessibility: 'Accessibility',
      community: 'Community',
      socialText: 'Follow the latest news, updates and events of our academic community on social media.',
      rights: 'All rights reserved.',
    },
    common: {
      home: 'Home',
    }
  }
};
