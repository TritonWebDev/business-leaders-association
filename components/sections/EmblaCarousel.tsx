"use client"

import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './gallery-section.css'
import Autoplay from 'embla-carousel-autoplay'

const SLIDES = [
  { src: '/images/business1.jpg', alt: 'business meeting' },
  { src: '/images/business2.jpg', alt: 'business meeting' },
  { src: '/images/business3.jpg', alt: 'business meeting' },
  { src: '/images/business4.jpg', alt: 'business meeting' },
  { src: '/images/business5.jpg', alt: 'business meeting' },
  { src: '/images/business6.jpg', alt: 'business meeting' },
]

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 }, [Autoplay({ stopOnInteraction: false, delay: 2500 })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi, onSelect])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {SLIDES.map((slide, i) => (
            <div className="embla__slide" key={i}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__buttons">
        <button className="embla__prev" onClick={() => emblaApi?.scrollPrev()}>&#9664;</button>
        <div className="embla__dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`embla__dot${i === selectedIndex ? ' embla__dot--active' : ''}`}
              onClick={() => emblaApi?.scrollTo(i)}
            />
          ))}
        </div>
        <button className="embla__next" onClick={() => emblaApi?.scrollNext()}>&#9654;</button>
      </div>
    </div>
  )
}
