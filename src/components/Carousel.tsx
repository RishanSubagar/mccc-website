import React from 'react'
import './carousel.css'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className='embla__slide__img'
                style={{
                  width: '100%',
                  height: '600px',
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Carousel