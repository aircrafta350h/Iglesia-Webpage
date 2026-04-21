import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getResourceBySlug, getAllSlugs } from '@/lib/recursos';
import { COLLECTIONS } from '@/lib/coleccionData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BibliotecaDetalleHero from '@/components/sections/BibliotecaDetalleHero';
import BibliotecaFeatureImage from '@/components/sections/BibliotecaFeatureImage';
import BibliotecaContenido from '@/components/sections/BibliotecaContenido';
import RelatedContentGrid from '@/components/sections/RelatedContentGrid';

// Mapping of standalone slugs (recursos.ts) to their collection segment.
// Extend this record as more standalone resources are added.
const STANDALONE_COLLECTION: Record<string, string> = {
  'la-gracia': 'ensayos',
};

interface Props {
  params: Promise<{ collection: string; slug: string }>;
}

// ─── Pre-render all valid [collection]/[slug] pairs ──────────────────────────

export function generateStaticParams() {
  // 1. Resources that live inside a collection (coleccionData.ts)
  const fromCollections = COLLECTIONS.flatMap((col) =>
    col.resources.map((r) => ({ collection: col.slug, slug: r.id })),
  );

  // 2. Standalone rich-detail resources (recursos.ts)
  const fromStandalone = getAllSlugs().map((slug) => ({
    collection: STANDALONE_COLLECTION[slug] ?? 'ensayos',
    slug,
  }));

  return [...fromCollections, ...fromStandalone];
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return {
    title: `${resource.title} ${resource.titleAccent}`,
    description: resource.subtitle,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BibliotecaDetallePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  // Only standalone rich-detail resources are renderable for now.
  // Collection resource detail pages (talleres, sermones, ensayos items)
  // will be wired here once their full content is added to the data layer.
  if (!resource) notFound();

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container antialiased">
      <Navbar />
      <main className="pt-32 pb-24">
        <BibliotecaDetalleHero
          title={resource.title}
          titleAccent={resource.titleAccent}
          category={resource.category}
          subtitle={resource.subtitle}
        />
        <BibliotecaFeatureImage
          src={resource.image.src}
          alt={resource.image.alt}
        />
        <BibliotecaContenido
          introParagraph={resource.introParagraph}
          content={resource.content}
        />
        <RelatedContentGrid items={resource.related} />
      </main>
      <Footer />
    </div>
  );
}
