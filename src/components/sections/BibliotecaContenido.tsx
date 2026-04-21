import type { ContentBlock } from '@/lib/types/resource';
import PullQuote from '@/components/sections/PullQuote';
import ContemplationCard from '@/components/sections/ContemplationCard';

interface BibliotecaContenidoProps {
  introParagraph: string;
  content: ContentBlock[];
}

export default function BibliotecaContenido({
  introParagraph,
  content,
}: BibliotecaContenidoProps) {
  return (
    <article className="max-w-3xl mx-auto px-6">
      <div className="prose-custom">

        {/* Intro paragraph — drop cap */}
        <p className="text-2xl font-light text-on-surface mb-12 leading-relaxed first-letter:text-7xl first-letter:font-extrabold first-letter:mr-3 first-letter:float-left first-letter:text-primary first-letter:leading-none">
          {introParagraph}
        </p>

        {/* Content blocks */}
        {content.map((block, index) => {
          switch (block.type) {
            case 'heading':
              if (block.level === 2) {
                return (
                  <h2
                    key={index}
                    className="text-3xl font-bold tracking-tight mb-6 mt-16 font-headline"
                  >
                    {block.text}
                  </h2>
                );
              }
              return (
                <h3
                  key={index}
                  className="text-2xl font-bold tracking-tight mb-4 mt-12 font-headline"
                >
                  {block.text}
                </h3>
              );

            case 'paragraph':
              return <p key={index}>{block.text}</p>;

            case 'pullquote':
              return (
                <PullQuote
                  key={index}
                  quote={block.quote}
                  citation={block.citation}
                />
              );

            case 'contemplation-card':
              return (
                <ContemplationCard
                  key={index}
                  icon={block.icon}
                  title={block.title}
                  description={block.description}
                  cta={block.cta}
                />
              );

            default:
              return null;
          }
        })}

      </div>
    </article>
  );
}
