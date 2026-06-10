import type { GalleryContent } from "@/lib/types";
import { EmblaCarousel } from "./EmblaCarousel";


type GallerySectionProps = {
  content: GalleryContent;
};

export function GallerySection({ content }: GallerySectionProps) {
  return (
  <div className="gallery">
    <img src="/images/photo-film-solid-full.svg" className="gallery__icon-photo" alt="photo strip logo" />
    <img src="/images/camera-solid-full.svg" className="gallery__icon-camera" alt="camera logo" />
    <h2>{content.title}</h2>
    <h1>{content.eyebrow}</h1>
    <hr id="hr-top" />
    <EmblaCarousel slides={content.images} />
    <hr id="hr-bottom" />
  </div>)
  ;
}
