import { FC } from 'react';

type Props = {
  images: { full: string; thumb: string; alt: string }[];
};

const Gallery: FC<Props> = ({ images }) => {
  return (
    <div className="gallery-grid">
      {images.map((img, idx) => (
        <a
          key={idx}
          href={img.full}
          target="_blank"
          rel="noopener noreferrer"
          className="gallery-grid-item-wrapper"
        >
          <img src={img.thumb} alt={img.alt} loading="lazy" className="gallery-grid-item-image" />
        </a>
      ))}
    </div>
  );
};

export default Gallery;
