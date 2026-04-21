import Image from 'next/image';

interface BibliotecaFeatureImageProps {
  src: string;
  alt: string;
}

export default function BibliotecaFeatureImage({
  src,
  alt,
}: BibliotecaFeatureImageProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 mb-24">
      <div className="relative aspect-[21/9] rounded-xl overflow-hidden group">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/20 to-transparent" />
      </div>
    </div>
  );
}
