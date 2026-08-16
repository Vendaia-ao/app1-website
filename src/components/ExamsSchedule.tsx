import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const MOCK_EXAMS = [
  { id: 1, courseId: 'eng_inf', subjectPt: 'Algoritmos e Estruturas de Dados', subjectEn: 'Algorithms and Data Structures', yearPt: '1º Ano', yearEn: '1st Year', date: '15/06/2026', time: '09:00', room: 'Auditório 1', periodId: 'normal' },
  { id: 2, courseId: 'eng_inf', subjectPt: 'Bases de Dados', subjectEn: 'Databases', yearPt: '2º Ano', yearEn: '2nd Year', date: '18/06/2026', time: '14:00', room: 'Lab 3', periodId: 'normal' },
  { id: 3, courseId: 'eng_inf', subjectPt: 'Engenharia de Software', subjectEn: 'Software Engineering', yearPt: '3º Ano', yearEn: '3rd Year', date: '22/06/2026', time: '09:00', room: 'Sala 204', periodId: 'normal' },
  { id: 4, courseId: 'eng_eletro', subjectPt: 'Circuitos Elétricos', subjectEn: 'Electrical Circuits', yearPt: '1º Ano', yearEn: '1st Year', date: '16/06/2026', time: '14:00', room: 'Sala 102', periodId: 'normal' },
  { id: 5, courseId: 'gestao', subjectPt: 'Contabilidade Financeira', subjectEn: 'Financial Accounting', yearPt: '2º Ano', yearEn: '2nd Year', date: '17/06/2026', time: '09:00', room: 'Auditório 2', periodId: 'normal' },
  { id: 6, courseId: 'eng_inf', subjectPt: 'Inteligência Artificial', subjectEn: 'Artificial Intelligence', yearPt: '3º Ano', yearEn: '3rd Year', date: '25/06/2026', time: '09:00', room: 'Sala 301', periodId: 'normal' },
  { id: 7, courseId: 'gestao', subjectPt: 'Gestão de Recursos Humanos', subjectEn: 'Human Resources Management', yearPt: '3º Ano', yearEn: '3rd Year', date: '26/06/2026', time: '14:00', room: 'Auditório 3', periodId: 'normal' },
  { id: 8, courseId: 'economia', subjectPt: 'Macroeconomia', subjectEn: 'Macroeconomics', yearPt: '1º Ano', yearEn: '1st Year', date: '19/06/2026', time: '09:00', room: 'Sala 105', periodId: 'normal' },
  
  { id: 9, courseId: 'eng_inf', subjectPt: 'Algoritmos e Estruturas de Dados', subjectEn: 'Algorithms and Data Structures', yearPt: '1º Ano', yearEn: '1st Year', date: '05/07/2026', time: '09:00', room: 'Sala 201', periodId: 'recurso' },
  { id: 10, courseId: 'gestao', subjectPt: 'Contabilidade Financeira', subjectEn: 'Financial Accounting', yearPt: '2º Ano', yearEn: '2nd Year', date: '06/07/2026', time: '14:00', room: 'Sala 205', periodId: 'recurso' },
  
  { id: 11, courseId: 'eng_inf', subjectPt: 'Engenharia de Software', subjectEn: 'Software Engineering', yearPt: '3º Ano', yearEn: '3rd Year', date: '20/07/2026', time: '09:00', room: 'Sala 401', periodId: 'especial' },
];

const COURSES = [
  { id: 'all', pt: 'Todos os Cursos', en: 'All Courses' },
  { id: 'eng_inf', pt: 'Engenharia Informática', en: 'Computer Engineering' },
  { id: 'eng_eletro', pt: 'Engenharia Eletrotécnica', en: 'Electrical Engineering' },
  { id: 'gestao', pt: 'Gestão de Empresas', en: 'Business Management' },
  { id: 'economia', pt: 'Economia', en: 'Economics' },
];

const PERIODS = [
  { id: 'normal', pt: 'Época Normal', en: 'Regular Period' },
  { id: 'recurso', pt: 'Época de Recurso', en: 'Appeal Period' },
  { id: 'especial', pt: 'Época Especial', en: 'Special Period' }
];

export default function ExamsSchedule() {
  const { language } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('normal');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExams = MOCK_EXAMS.filter(exam => {
    const matchCourse = selectedCourse === 'all' || exam.courseId === selectedCourse;
    const matchPeriod = exam.periodId === selectedPeriod;
    const subject = language === 'en' ? exam.subjectEn : exam.subjectPt;
    const matchSearch = subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCourse && matchPeriod && matchSearch;
  });

  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-3xl font-light text-isec-dark-gray mb-6">
        {language === 'en' ? 'Exam Schedule' : 'Mapa de Exames'}
      </h2>
      <p className="text-secondary mb-8">
        {language === 'en' 
          ? 'The exam schedules are available below. Select your course and evaluation period to view specific dates, times, and rooms.' 
          : 'Os mapas de exames encontram-se disponíveis abaixo. Selecione o seu curso e a época de avaliação para consultar as datas, horas e salas específicas.'}
      </p>

      {/* Controls: Periods Tabs */}
      <div className="flex overflow-x-auto mb-6 bg-surface-container-low rounded p-1 border border-isec-silver">
        {PERIODS.map(period => (
          <button
            key={period.id}
            onClick={() => setSelectedPeriod(period.id)}
            className={`flex-1 min-w-[120px] whitespace-nowrap text-sm font-bold py-2 px-4 rounded transition-colors ${
              selectedPeriod === period.id 
                ? 'bg-isec-crimson text-white shadow-sm' 
                : 'text-secondary hover:text-isec-dark-gray hover:bg-white'
            }`}
          >
            {language === 'en' ? period.en : period.pt}
          </button>
        ))}
      </div>

      {/* Controls: Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label htmlFor="course-select" className="block text-xs font-bold text-isec-dark-gray mb-2 uppercase tracking-wider">
            {language === 'en' ? 'Course' : 'Curso'}
          </label>
          <select 
            id="course-select"
            className="w-full h-10 px-3 bg-white border border-isec-silver rounded focus:outline-none focus:border-isec-crimson transition-colors"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            {COURSES.map(course => (
              <option key={course.id} value={course.id}>
                {language === 'en' ? course.en : course.pt}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex-1">
          <label htmlFor="exam-search" className="block text-xs font-bold text-isec-dark-gray mb-2 uppercase tracking-wider">
            {language === 'en' ? 'Search subject' : 'Pesquisar disciplina'}
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-isec-silver text-sm">search</span>
            <input 
              id="exam-search"
              type="text" 
              placeholder={language === 'en' ? 'E.g., Databases...' : 'Ex: Bases de Dados...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-3 bg-white border border-isec-silver rounded focus:outline-none focus:border-isec-crimson transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Exams Table */}
      <div className="bg-white border border-isec-silver rounded overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-surface-container-low border-b border-isec-silver">
                <th className="py-3 px-4 text-xs font-bold text-isec-dark-gray uppercase tracking-wider">
                  {language === 'en' ? 'Subject' : 'Disciplina'}
                </th>
                <th className="py-3 px-4 text-xs font-bold text-isec-dark-gray uppercase tracking-wider">
                  {language === 'en' ? 'Course' : 'Curso'}
                </th>
                <th className="py-3 px-4 text-xs font-bold text-isec-dark-gray uppercase tracking-wider">
                  {language === 'en' ? 'Year' : 'Ano'}
                </th>
                <th className="py-3 px-4 text-xs font-bold text-isec-dark-gray uppercase tracking-wider">
                  {language === 'en' ? 'Date' : 'Data'}
                </th>
                <th className="py-3 px-4 text-xs font-bold text-isec-dark-gray uppercase tracking-wider">
                  {language === 'en' ? 'Time' : 'Hora'}
                </th>
                <th className="py-3 px-4 text-xs font-bold text-isec-dark-gray uppercase tracking-wider">
                  {language === 'en' ? 'Room' : 'Sala'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-isec-silver">
              {filteredExams.length > 0 ? (
                filteredExams.map(exam => (
                  <tr key={exam.id} className="hover:bg-neutral-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-isec-crimson">
                      {language === 'en' ? exam.subjectEn : exam.subjectPt}
                    </td>
                    <td className="py-3 px-4 text-sm text-secondary">
                      {language === 'en' 
                        ? COURSES.find(c => c.id === exam.courseId)?.en 
                        : COURSES.find(c => c.id === exam.courseId)?.pt}
                    </td>
                    <td className="py-3 px-4 text-sm text-secondary">
                      {language === 'en' ? exam.yearEn : exam.yearPt}
                    </td>
                    <td className="py-3 px-4 text-sm font-bold text-isec-dark-gray">
                      {exam.date}
                    </td>
                    <td className="py-3 px-4 text-sm text-secondary">
                      {exam.time}
                    </td>
                    <td className="py-3 px-4 text-sm text-secondary">
                      {exam.room}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-12 px-4 text-center text-secondary">
                    <span className="material-symbols-outlined text-4xl text-isec-silver mb-2">event_busy</span>
                    <p>{language === 'en' ? 'No exams found for the selected criteria.' : 'Nenhum exame encontrado para os critérios selecionados.'}</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
