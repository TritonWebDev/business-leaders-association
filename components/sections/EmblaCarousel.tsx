"use client"

import { useState, useEffect, useCallback, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './gallery-section.css'
import Autoplay from 'embla-carousel-autoplay'

type GallerySlide = {
  src: string
  alt: string
}

type EmblaCarouselProps = {
  slides?: GallerySlide[]
}

const DEFAULT_SLIDES: GallerySlide[] = [
  { src: '/images/business1.jpg', alt: 'business meeting' },
  { src: '/images/business2.jpg', alt: 'business meeting' },
  { src: '/images/business3.jpg', alt: 'business meeting' },
  { src: '/images/business4.jpg', alt: 'business meeting' },
  { src: '/images/business5.jpg', alt: 'business meeting' },
  { src: '/images/business6.jpg', alt: 'business meeting' },
]

const AUTOPLAY_DELAY_MS = 2500

export function EmblaCarousel({ slides = DEFAULT_SLIDES }: EmblaCarouselProps) {
  const autoplayPlugin = useMemo(
    () => Autoplay({ stopOnInteraction: false, delay: AUTOPLAY_DELAY_MS }),
    [],
  )
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 }, [autoplayPlugin])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const resetAutoplay = useCallback(() => {
    emblaApi?.plugins()?.autoplay?.reset()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
    resetAutoplay()
  }, [emblaApi, resetAutoplay])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
    resetAutoplay()
  }, [emblaApi, resetAutoplay])

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
      resetAutoplay()
    },
    [emblaApi, resetAutoplay],
  )

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (!emblaApi) return

    const root = emblaApi.rootNode()
    root.setAttribute('tabindex', '0')

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    }

    root.addEventListener('keydown', onKeyDown)
    return () => {
      root.removeEventListener('keydown', onKeyDown)
    }
  }, [emblaApi, scrollPrev, scrollNext])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, i) => (
            <div className="embla__slide" key={i}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__buttons">
        <button type="button" className="embla__prev" aria-label="Previous slide" onClick={scrollPrev}>
          &#9664;
        </button>
        <div className="embla__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              className={`embla__dot${i === selectedIndex ? ' embla__dot--active' : ''}`}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
        <button type="button" className="embla__next" aria-label="Next slide" onClick={scrollNext}>
          &#9654;
        </button>
      </div>
    </div>
  )
}
