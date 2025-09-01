import type { FC } from 'react';
import { useRef, useState, useMemo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../../../../../shared/icons/motivation/1.png';
import img2 from '../../../../../shared/icons/motivation/2.png';
import img3 from '../../../../../shared/icons/motivation/3.png';
import img4 from '../../../../../shared/icons/motivation/4.png';
import img5 from '../../../../../shared/icons/motivation/5.png';
import img6 from '../../../../../shared/icons/motivation/6.png';

import '../styles/style.css';

interface IMotivationProps {
  windowWidth: number;
}

const Motivation: FC<IMotivationProps> = ({ windowWidth }) => {
  const carouselRef = useRef<InstanceType<typeof Carousel>>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    carouselRef.current?.decrement();
  };

  const handleNext = () => {
    carouselRef.current?.increment();
  };

  const cards = [
    { img: img1, text: 'Решите реальную проблему настоящей компании' },
    { img: img2, text: 'Получите живой опыт командной работы' },
    { img: img3, text: 'Создайте портфолио, которое можно показать работодателю' },
    { img: img4, text: 'Прокачайте проектное и инженерное мышление' },
    { img: img5, text: 'Выиграйте до 1 000 000 ₽ на команду' },
    { img: img6, text: 'Попадите в международный финал проектных соревнований' },
  ];

  const slides = useMemo(() => {
    if (windowWidth > 1000) {
      return [
        cards.slice(0, 3),
        cards.slice(3, 6),
      ];
    }
    return cards.map(card => [card]);
  }, [windowWidth]);

  return (
    <div className="motivation" id="motivation">
      <div className="motivation__container">
        <div className="motivation__header">
          <h2 className="motivation__title">ЗАЧЕМ УЧАСТВОВАТЬ?</h2>
          <div className="motivation__controls">
            <div onClick={handlePrev} className="motivation__arrow motivation__arrow--left">
              &#x276E;
            </div>
            <div onClick={handleNext} className="motivation__arrow motivation__arrow--right">
              &#x276F;
            </div>
          </div>
        </div>

        <Carousel
          ref={carouselRef}
          selectedItem={currentSlide}
          onChange={setCurrentSlide}
          emulateTouch
          swipeable
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
        >
          {slides.map((group, index) => (
            <div className="motivation__item" key={index}>
              {group.map((card, idx) => (
                <div className="motivation__item-card" key={idx}>
                  <img className="motivation__item-card-img" src={card.img} alt="Иконка" />
                  <h4 className="motivation__item-card-text">{card.text}</h4>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Motivation;
