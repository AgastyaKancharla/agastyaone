import Image from 'next/image';

type PlaceholderImageProps = {
  width: number;
  height: number;
  alt: string;
  label?: string;
  className?: string;
};

export function PlaceholderImage({ width, height, alt, label = 'AgastyaOne', className = '' }: PlaceholderImageProps) {
  const svg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="#e8e4df"/>
      <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="12" fill="#f8f6f3" stroke="#d6d0c8" stroke-width="2"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#777" font-family="Inter, Arial" font-size="24">${label}</text>
    </svg>
  `);

  return (
    <Image
      src={`data:image/svg+xml;charset=utf-8,${svg}`}
      width={width}
      height={height}
      alt={alt}
      className={`h-auto w-full rounded-brand object-cover shadow-card ${className}`}
    />
  );
}
