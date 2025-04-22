import { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './Final.css';

const Final = () => {
  const carouselRef = useRef<InstanceType<typeof Carousel>>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    carouselRef.current?.decrement();
  };

  const handleNext = () => {
    carouselRef.current?.increment();
  };

  return (
    <div className='h-final' id='final'>
      <div className='h-final__container'>
        <h2 className='h-final__title'>Финал в РУТ (МИИТ)</h2>
        <p className='h-final__subtitle'>Финал проходил в&nbsp;Российском университете транспорта и&nbsp;включал в&nbsp;себя три дня&nbsp;активной работы.</p>
        <div className='h-final__controls'>
          <div onClick={handlePrev} className='h-final__arrow h-final__arrow--left'>&#x276E;</div>
          <span className='h-final__counter'>День {currentSlide + 1}</span>
          <div onClick={handleNext} className='h-final__arrow h-final__arrow--right'>&#x276F;</div>
        </div>

        <Carousel
          ref={carouselRef}
          selectedItem={currentSlide}
          onChange={(index) => setCurrentSlide(index)}
          emulateTouch
          swipeable
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
        >
          <div className='h-final__item'>
            <div className='h-final__item-img h-final__item-img_type_1' />
            <div className='h-final__item-content'>
              <ul className='h-final__item-tags'>
                <li className='h-final__item-tag'>Анализ проблемы</li>
                <li className='h-final__item-tag'>Проблемное интервью</li>
                <li className='h-final__item-tag'>Карта вовлечённых сторон</li>
                <li className='h-final__item-tag'>Гипотезы решения</li>
              </ul>
              <div className='h-final__item-media'>
                <div className='h-final__item-content-img h-final__item-img_type_2' />
                <div className='h-final__item-content-img h-final__item-img_type_3' />
              </div>
            </div>
          </div>
          <div className='h-final__item'>
            <div className='h-final__item-img h-final__item-img_type_4' />
            <div className='h-final__item-content'>
              <ul className='h-final__item-tags'>
                <li className='h-final__item-tag'>Разработка решения</li>
                <li className='h-final__item-tag'>Проектирование прототипа</li>
                <li className='h-final__item-tag'>Электроника</li>
                <li className='h-final__item-tag'>Моделирование</li>
                <li className='h-final__item-tag'>3D-печать</li>
              </ul>
              <div className='h-final__item-media'>
                <div className='h-final__item-content-img h-final__item-img_type_5' />
                <div className='h-final__item-content-img h-final__item-img_type_6' />
              </div>
            </div>
          </div>
          <div className='h-final__item'>
            <div className='h-final__item-img h-final__item-img_type_7' />
            <div className='h-final__item-content'>
              <ul className='h-final__item-tags'>
                <li className='h-final__item-tag'>Представление прототипов экспертам</li>
                <li className='h-final__item-tag'>Защита проектов</li>
                <li className='h-final__item-tag'>Награждение победителей</li>
              </ul>
              <div className='h-final__item-media'>
                <div className='h-final__item-content-img h-final__item-img_type_8' />
                <div className='h-final__item-content-img h-final__item-img_type_9' />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Final;
