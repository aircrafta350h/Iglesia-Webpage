interface PullQuoteProps {
  quote: string;
  citation: string;
}

export default function PullQuote({ quote, citation }: PullQuoteProps) {
  return (
    <div className="my-16 py-12 border-y border-surface-container-highest">
      <blockquote className="text-3xl md:text-4xl font-headline font-extralight text-primary italic leading-snug">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <cite className="block mt-6 text-sm font-bold tracking-widest uppercase text-on-surface-variant not-italic">
        {citation}
      </cite>
    </div>
  );
}
