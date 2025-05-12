const imageTotal = 371;

export const galleryImages = Array.from({ length: imageTotal }, (_, i) => {
  const n = i + 1;
  return {
    full: `/full_images/img${n}.jpg`,
    thumb: `/thumbs_images/img${n}.jpg`,
    alt: `Project ${n}`,
  };
});
