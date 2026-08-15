import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-isec-black mt-auto shrink-0 border-t-[6px] border-isec-crimson text-neutral-400">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand & Address */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-white font-bold text-3xl mb-1 tracking-tight">ISPTEC</p>
              <p className="text-sm font-medium">Instituto Superior Politécnico de Tecnologias e Ciências</p>
            </div>
            <div className="text-sm space-y-2 mt-2">
              <p>Av. Luanda Sul, Rua Lateral Via S10</p>
              <p>Talatona, Luanda, Angola</p>
              <p className="pt-2">T. (+244) 226 690 323</p>
              <p>E. geral@isptec.co.ao</p>
            </div>
          </div>

          {/* Institutional Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider text-sm border-b border-neutral-800 pb-2 inline-block">Institucional</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/institution/apresentacao" className="hover:text-white transition-colors">Apresentação</Link></li>
              <li><Link to="/institution/historia" className="hover:text-white transition-colors">História</Link></li>
              <li><Link to="/departments" className="hover:text-white transition-colors">Departamentos</Link></li>
              <li><Link to="/academic-services" className="hover:text-white transition-colors">Serviços Académicos</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider text-sm border-b border-neutral-800 pb-2 inline-block">Legal</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/politica-de-cookies" className="hover:text-white transition-colors">Política de Cookies</Link></li>
              <li><Link to="/acessibilidade" className="hover:text-white transition-colors">Acessibilidade</Link></li>
            </ul>
          </div>

          {/* Social & Community */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider text-sm border-b border-neutral-800 pb-2 inline-block">Comunidade</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center hover:bg-isec-crimson hover:text-white transition-all hover:scale-105" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center hover:bg-isec-crimson hover:text-white transition-all hover:scale-105" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center hover:bg-isec-crimson hover:text-white transition-all hover:scale-105" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center hover:bg-isec-crimson hover:text-white transition-all hover:scale-105" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center hover:bg-isec-crimson hover:text-white transition-all hover:scale-105" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
            <p className="text-xs mt-2 leading-relaxed opacity-80">
              Acompanhe as últimas novidades, notícias e eventos da nossa comunidade académica nas redes sociais.
            </p>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()} ISPTEC. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <span className="opacity-70">Powered by ISPTEC Angola</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
