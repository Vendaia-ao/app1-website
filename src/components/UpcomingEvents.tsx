import { Link } from 'react-router-dom';
import event1Img from '../assets/images/event_welcome_1786829896018.jpg';
import event2Img from '../assets/images/event_exams_1786829910143.jpg';

const EVENTS = [
  {
    day: '14',
    month: 'SET',
    title: 'Acolhimento de Novos Estudantes',
    description: 'Início do 1º Semestre e sessão de boas-vindas.',
    link: '/student-area/calendario',
    image: event1Img,
  },
  {
    day: '04',
    month: 'JAN',
    title: 'Época Normal de Exames',
    description: 'Início da época normal de avaliação do 1º Semestre.',
    link: '/student-area/calendario',
    image: event2Img,
  },
  {
    day: '22',
    month: 'FEV',
    title: 'Início do 2º Semestre',
    description: 'Arranque das atividades letivas do novo semestre.',
    link: '/student-area/calendario',
    image: event1Img,
  },
  {
    day: '15',
    month: 'JUN',
    title: 'Época de Recurso',
    description: 'Início da época de recurso e avaliações finais.',
    link: '/student-area/calendario',
    image: event2Img,
  }
];

export default function UpcomingEvents() {
  return (
    <section className="px-10 pb-12 pt-4 max-w-[1280px] w-full mx-auto">
      <div className="flex justify-between items-end border-b border-isec-silver pb-2 mb-6">
        <h2 className="text-xl font-bold uppercase tracking-tight text-isec-dark-gray">Próximos Prazos e Eventos</h2>
        <Link to="/student-area/calendario" className="text-xs font-bold uppercase tracking-wider text-isec-crimson hover:underline flex items-center gap-1">
          Ver Calendário Completo
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {EVENTS.map((evt, idx) => (
          <Link key={idx} to={evt.link} className="bg-white border border-isec-silver hover:border-isec-crimson transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded overflow-hidden flex flex-col group cursor-pointer">
            <div className="w-full h-40 overflow-hidden relative bg-neutral-100 flex items-center justify-center shrink-0">
              <img src={evt.image} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex flex-grow">
              {/* Date Block */}
              <div className="bg-neutral-50 border-r border-isec-silver px-4 py-4 flex flex-col justify-center items-center text-center min-w-[80px] group-hover:bg-isec-crimson group-hover:border-isec-crimson transition-colors">
                <span className="text-3xl font-bold text-isec-crimson leading-none group-hover:text-white transition-colors">{evt.day}</span>
                <span className="text-xs font-bold text-isec-dark-gray mt-1 uppercase tracking-widest group-hover:text-white transition-colors">{evt.month}</span>
              </div>
              {/* Event Details */}
              <div className="p-4 flex flex-col justify-center">
                <h3 className="font-bold text-sm text-isec-dark-gray mb-1 leading-tight group-hover:text-isec-crimson transition-colors">{evt.title}</h3>
                <p className="text-xs text-secondary line-clamp-2 leading-relaxed">{evt.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
