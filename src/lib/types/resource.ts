// ─── Content blocks (article body) ───────────────────────────────────────────

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'pullquote'; quote: string; citation: string }
  | {
      type: 'contemplation-card';
      icon: string;
      title: string;
      description: string;
      cta: string;
    };

// ─── Related items (bento grid) ───────────────────────────────────────────────

export type RelatedItem =
  | {
      type: 'article';
      id: string;
      tag: string;
      title: string;
      description: string;
      href: string;
      colSpan?: 2;
    }
  | {
      type: 'audio';
      id: string;
      icon: string;
      title: string;
      description: string;
    }
  | {
      type: 'community';
      id: string;
      icon: string;
      title: string;
      description: string;
    }
  | {
      type: 'image-card';
      id: string;
      title: string;
      description: string;
      image: { src: string; alt: string };
      colSpan?: 2;
    };

// ─── Full resource ─────────────────────────────────────────────────────────────

export interface ResourceDetail {
  slug: string;
  /** Main title — first line */
  title: string;
  /** Accent part of the title — rendered italic in primary color */
  titleAccent: string;
  /** Category label shown above the title */
  category: string;
  /** Subtitle / deck */
  subtitle: string;
  /** Hero image */
  image: { src: string; alt: string };
  /**
   * First paragraph — rendered with a drop cap.
   * Kept separate from `content` so the drop-cap styling is always applied.
   */
  introParagraph: string;
  /** Ordered list of content blocks that follow the intro paragraph */
  content: ContentBlock[];
  /** Related resources shown in the bento grid */
  related: RelatedItem[];
}
