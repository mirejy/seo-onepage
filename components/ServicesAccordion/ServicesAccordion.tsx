"use client"

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceItem {
  title: string;
  description?: string;
  children?: ServiceItem[];
}

const services: ServiceItem[] = [
  {
    title: 'Servizi per categoria',
    children: [
      {
        title: 'Labbra perfette',
        children: [
          {
            title: 'Botox – aumento delle labbra',
            description: 'La procedura permette di aumentare le labbra, correggere la forma e ottenere un volume naturale. La botox garantisce una pelle liscia, e il risultato dura a lungo.',
          },
          {
            title: 'Modellamento delle labbra',
            description: 'Correzione e contouring delle labbra per conferire una forma armoniosa e una bellezza naturale. Si mantiene l’estetica e l’individualità del cliente.',
          },
          {
            title: 'Lip Fill (aumento delle labbra senza filler)',
            description: 'Alternativa moderna ai filler — solleva la parte superiore delle labbra, rendendole più espressive mantenendo la naturalezza.',
          },
        ],
      },
      {
        title: 'Ringovanimento e cura',
        children: [
          {
            title: 'Cura del viso',
            description: 'Cura completa della pelle del viso per idratare, nutrire e ringiovanire. Rende la pelle luminosa, fresca e ne migliora notevolmente l’aspetto.',
          },
          {
            title: 'Mesoterapia – viso, collo, occhi, décolleté, mani, ginocchia',
            description: 'Cocktail personalizzati per il ringiovanimento e la nutrizione della pelle del viso, del collo e di altre zone. Migliorano il tono, eliminano secchezza e segni di stanchezza.',
          },
          {
            title: 'Stimolatori tissutali',
            description: 'Stimolano la produzione di collagene, migliorano la struttura della pelle e contrastano i cambiamenti legati all’età — per una pelle soda e giovane.',
          },
          {
            title: 'Cocktail Monaco (6 preparati secondo unica tecnica)',
            description: 'Combinazione esclusiva di preparati che leviga, idrata e ringiovanisce la pelle, donando un aspetto sano e luminoso.',
          },
        ],
      },
      {
        title: 'Cosmetologia iniettiva',
        children: [
          {
            title: 'Sculpta fino a 5 ml',
            description: 'Sculpta assicura un recupero graduale di volume ed elasticità grazie alla stimolazione della produzione di collagene naturale. Effetto naturale e accurato.',
          },
          {
            title: 'Volumetria del viso (tutte le zone), 1 ml',
            description: 'Riempimento delle zone del volto che hanno perso volume. Aiuta a ripristinare i contorni giovanili con un effetto naturale.',
          },
          {
            title: 'Volumetria dell’intero viso, 1 ml',
            description: 'Procedura completa per tutto il viso, finalizzata a rafforzare la bellezza naturale, lifting e ringiovanimento senza chirurgia.',
          },
        ],
      },
      {
        title: 'Botulinoterapia',
        children: [
          {
            title: 'Effetto botox (fronte, glabella, occhi)',
            description: 'Rilassa i muscoli, elimina le rughe sulla fronte, tra le sopracciglia e intorno agli occhi. Dona freschezza al volto e uno sguardo aperto.',
          },
          {
            title: 'Mesobotox',
            description: 'Procedura di lieve ringiovanimento con microiniezioni di botulino. La pelle diventa fresca e uniforme senza effetto maschera.',
          },
          {
            title: 'Botox per tutto il viso',
            description: 'Ringiovanimento complessivo del volto, tono muscolare e levigatura della pelle, effetto visibile e duraturo.',
          },
        ],
      },
      {
        title: 'Correzione estetica',
        children: [
          {
            title: 'Naso Barbie',
            description: 'Procedure di modellamento della forma del naso senza chirurgia, risultato rapido e duraturo per un profilo armonioso.',
          },
          {
            title: 'Collo di Nefertiti',
            description: 'Tecnica per il ringiovanimento del collo, ripristino di elasticità e tonicità, tonifica visivamente il contorno e migliora l’aspetto.',
          },
        ],
      },
      {
        title: 'Plastica e lipolisi del contorno',
        children: [
          {
            title: 'Punti della fame (procedura per dimagrire senza dieta)',
            description: 'Metodo efficace di controllo dell’appetito per un peso naturale senza diete restrittive o sforzi eccessivi.',
          },
          {
            title: 'Lipolisi, 10 ml',
            description: 'Rimozione rapida e precisa di depositi di grasso localizzati per ottenere contorni e rilievi ideali del volto e del corpo.',
          },
        ],
      },
      {
        title: "Trattamento dell'iperidrosi",
        children: [
          {
            title: 'Iperidrosi – ascelle, piedi, ecc.',
            description: 'Le iniezioni aiutano a eliminare l’eccesso di sudorazione, garantendo comfort e sicurezza a lungo termine.',
          },
        ],
      },
    ],
  },
];

const indentClasses = ['pl-6', 'pl-10', 'pl-14', 'pl-18', 'pl-22'];

type AccordionItemProps = {
  item: ServiceItem;
  level: number;
};

export default function ServicesAccordion() {
  const root = services[0];
  return (
    <section id="services" className="bg-gray-100 py-25">
      <div className="max-w-4xl mx-auto">
        {/* Заголовок, выровненный по центру аккордеона */}
        <h2 className="text-3xl font-semibold text-[#0E4E34] mb-6 text-center md:text-left">
          Servizi
        </h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Разделы второго уровня (уровень 1) всегда показываются */}
          {root.children?.map((section, idx) => (
            <AccordionItem key={idx} item={section} level={1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ item, level }: AccordionItemProps) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children && item.children.length > 0;
  const indent = indentClasses[level] || 'pl-6';

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`${indent} pr-6 flex items-center justify-between py-4 text-base text-[#0E4E34] hover:bg-gray-50 transition ${
          'border-b border-gray-200'
        }`}
      >
        <span className="flex-1 text-left">{item.title}</span>
        {hasChildren && (open ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}
      </button>
      {open && (
        <div>
          {item.description && (
            <p className={`${indentClasses[level + 1] || 'pl-10'} pr-6 pb-4 text-gray-700`}>{item.description}</p>
          )}
          {hasChildren &&
            item.children!.map((child, idx) => (
              <AccordionItem key={idx} item={child} level={level + 1} />
            ))}
        </div>
      )}
    </div>
  )
}
