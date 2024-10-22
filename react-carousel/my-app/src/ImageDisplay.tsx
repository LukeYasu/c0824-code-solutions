type Props = {
  src: string;
  alt: string;
  className: string;
};

export function ImageDisplay({ src, alt, className }: Props) {
  return (
    <>
      <img src={src} alt={alt} className={className} />
    </>
  );
}
