import { Link } from 'react-router-dom';
import headerImg from '../assets/images/angolan_campus_facade_1786829389896.jpg';

export default function Contacts() {
  return (
    <>
      <section className="relative py-24 px-margin-mobile md:px-margin-desktop bg-isec-dark-gray overflow-hidden print:bg-transparent print:py-8">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 print:hidden"
          style={{ backgroundImage: `url('${headerImg}')` }}
        />
        <div className="max-w-container-max mx-auto text-center md:text-left relative z-10">
          <h1 className="text-headline-display font-headline-display font-bold text-white mb-4 drop-shadow-md print:text-black print:drop-shadow-none">Contactos</h1>
          <p className="text-body-lg font-body-lg text-neutral-200 max-w-2xl drop-shadow print:text-neutral-800 print:drop-shadow-none">
            Estamos à sua disposição para qualquer esclarecimento. Encontre os contactos dos diversos serviços ou visite as nossas instalações.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop print:py-8">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 print:grid-cols-1 gap-12 lg:gap-24">
            
            <div className="space-y-12">
              <div>
                <h2 className="text-headline-md font-headline-md text-isec-dark-gray mb-6 border-b border-isec-silver pb-2">Informações Gerais</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-isec-crimson mt-1">location_on</span>
                    <div>
                      <h3 className="text-label-md font-label-md font-bold text-isec-dark-gray mb-1">Morada</h3>
                      <p className="text-body-md font-body-md text-secondary">
                        Av. Luanda Sul, Rua Lateral Via S10<br/>
                        Talatona<br/>
                        Luanda, Angola
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-isec-crimson mt-1">call</span>
                    <div>
                      <h3 className="text-label-md font-label-md font-bold text-isec-dark-gray mb-1">Telefone</h3>
                      <p className="text-body-md font-body-md text-secondary">
                        Tel: (+244) 226 690 323<br/>
                        Tlm: (+244) 923 123 456
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-isec-crimson mt-1">mail</span>
                    <div>
                      <h3 className="text-label-md font-label-md font-bold text-isec-dark-gray mb-1">Email Geral</h3>
                      <p className="text-body-md font-body-md text-secondary">
                        <a href="mailto:geral@isptec.co.ao" className="hover:text-isec-crimson transition-colors">geral@isptec.co.ao</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-headline-md font-headline-md text-isec-dark-gray mb-6 border-b border-isec-silver pb-2">Serviços Académicos</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-isec-crimson mt-1">school</span>
                    <div>
                      <h3 className="text-label-md font-label-md font-bold text-isec-dark-gray mb-1">Assuntos de Alunos</h3>
                      <p className="text-body-md font-body-md text-secondary">
                        Email: <a href="mailto:academica@isptec.co.ao" className="hover:text-isec-crimson transition-colors">academica@isptec.co.ao</a><br/>
                        Atendimento: 2ª a 6ª (08h00-16h30)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="print:hidden">
              <div className="bg-surface-container-lowest border border-isec-silver rounded-lg shadow-sm p-6 md:p-8">
                <h2 className="text-headline-md font-headline-md text-isec-dark-gray mb-6">Formulário de Contacto</h2>
                <form className="space-y-6" aria-label="Formulário de Contacto" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-label-sm font-label-sm font-bold text-isec-dark-gray mb-2">Nome Completo *</label>
                      <input type="text" id="name" required aria-required="true" className="w-full h-12 px-4 border border-isec-silver rounded focus:outline-none focus:border-isec-crimson focus:ring-1 focus:ring-isec-crimson transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-label-sm font-label-sm font-bold text-isec-dark-gray mb-2">Email *</label>
                      <input type="email" id="email" required aria-required="true" className="w-full h-12 px-4 border border-isec-silver rounded focus:outline-none focus:border-isec-crimson focus:ring-1 focus:ring-isec-crimson transition-colors" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-label-sm font-label-sm font-bold text-isec-dark-gray mb-2">Assunto *</label>
                    <select id="subject" required aria-required="true" className="w-full h-12 px-4 border border-isec-silver rounded focus:outline-none focus:border-isec-crimson focus:ring-1 focus:ring-isec-crimson transition-colors bg-white">
                      <option value="">Selecione um assunto</option>
                      <option value="candidaturas">Candidaturas / Acesso</option>
                      <option value="academicos">Serviços Académicos</option>
                      <option value="tecnico">Suporte Técnico / Informática</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-label-sm font-label-sm font-bold text-isec-dark-gray mb-2">Mensagem *</label>
                    <textarea id="message" required aria-required="true" rows={5} className="w-full p-4 border border-isec-silver rounded focus:outline-none focus:border-isec-crimson focus:ring-1 focus:ring-isec-crimson transition-colors resize-none"></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button type="submit" className="w-full md:w-auto bg-isec-crimson text-white px-8 py-3 rounded text-label-md font-label-md hover:bg-primary transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">send</span>
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <section className="h-[400px] w-full bg-surface-container print:hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.670560943956!2d13.1818!3d-8.9197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sISPTEC!5e0!3m2!1spt-PT!2sao!4v1655000000000!5m2!1spt-PT!2sao" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa da localização do ISPTEC"
        ></iframe>
      </section>
    </>
  );
}
