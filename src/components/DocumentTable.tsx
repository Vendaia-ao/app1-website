import { useLanguage } from '../contexts/LanguageContext';

interface Document {
  name: string;
  updatedAt: string;
  size: string;
  url: string;
}

interface DocumentTableProps {
  title?: string;
  documents: Document[];
}

export default function DocumentTable({ title, documents }: DocumentTableProps) {
  const { language } = useLanguage();
  return (
    <div className="mb-10">
      {title && <h3 className="text-xl font-light italic text-isec-dark-gray mb-4">{title}</h3>}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-isec-silver text-sm text-isec-dark-gray">
              <th className="py-3 font-normal">{language === 'en' ? 'Document' : 'Documento'}</th>
              <th className="py-3 font-normal w-32">{language === 'en' ? 'Updated' : 'Actualizado'}</th>
              <th className="py-3 font-normal w-24">{language === 'en' ? 'Size' : 'Tamanho'}</th>
              <th className="py-3 font-normal w-16 text-center">{language === 'en' ? 'Type' : 'Tipo'}</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, idx) => (
              <tr key={idx} className="border-b border-isec-silver last:border-0 hover:bg-neutral-50 transition-colors">
                <td className="py-3 pr-4">
                  <a href={doc.url} className="text-isec-crimson hover:underline text-sm font-medium">
                    {doc.name}
                  </a>
                </td>
                <td className="py-3 text-sm text-secondary whitespace-nowrap">{doc.updatedAt}</td>
                <td className="py-3 text-sm text-secondary whitespace-nowrap">{doc.size}</td>
                <td className="py-3 text-center">
                  <span className="material-symbols-outlined text-red-600 text-[20px]">picture_as_pdf</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
