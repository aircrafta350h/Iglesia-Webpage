import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { COLLECTIONS, getCollectionBySlug } from '@/lib/coleccionData';
import CollectionView from '@/components/layout/CollectionView';

// ─── Pre-render known collection slugs ───────────────────────────────────────

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ collection: c.slug }));
}

// ─── Dynamic metadata ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ collection: string }>;
}): Promise<Metadata> {
  const { collection: slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: 'No encontrado' };

  return {
    title: `${collection.name} — Biblioteca Sanctuary`,
    description: collection.description,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

interface Props {
  params: Promise<{ collection: string }>;
}

export default async function ColeccionPage({ params }: Props) {
  const { collection: slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) notFound();

  return (
    <div className="text-[#1c1c1c] font-body min-h-screen flex flex-col antialiased bg-white">
      {/*
       * CollectionView is a Client Component — receives the fully resolved
       * Collection object from the server. When a DB is integrated, replace
       * getCollectionBySlug() with an async fetch/query here.
       */}
      <CollectionView collection={collection} />
    </div>
  );
}
