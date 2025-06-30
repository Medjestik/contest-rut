import { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'react-i18next';

import './Final.css';

const Final = () => {
  const carouselRef = useRef<InstanceType<typeof Carousel>>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { t } = useTranslation();

  const handlePrev = () => {
    carouselRef.current?.decrement();
  };

  const handleNext = () => {
    carouselRef.current?.increment();
  };

  return (
    <div className='i-final' id='final'>
      <div className='i-final__block i-final__block_type_1'></div>
      <div className='i-final__block i-final__block_type_2'></div>
      <div className='i-final__block i-final__block_type_3'></div>
      <div className='i-final__container'>
        <div className='i-final__header'>
          <h2 className='i-final__title'>{t('final-title')}</h2>
          <div className='i-final__controls'>
            <div onClick={handlePrev} className='i-final__arrow i-final__arrow--left'>&#x276E;</div>
            <span className='i-final__counter'>{t('final-day')} {currentSlide + 1}</span>
            <div onClick={handleNext} className='i-final__arrow i-final__arrow--right'>&#x276F;</div>
          </div>
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
          <div className='i-final__item'>
            <div className='i-final__item-media'>
              <div className='i-final__item-content-img' />
              <div className='i-final__item-content-img' />
              <div className='i-final__item-content-img' />
            </div>
            <div className='i-final__item-content'>
              <p className='i-final__item-text'>{t('final-text-1')}</p>
              <p className='i-final__item-text'>{t('final-text-2')}</p>
              <p className='i-final__item-text'>{t('final-text-3')}</p>
              <p className='i-final__item-text'>{t('final-text-4')}</p>
            </div>
          </div>
          <div className='i-final__item'>
            <div className='i-final__item-media'>
              <div className='i-final__item-content-img' />
              <div className='i-final__item-content-img' />
              <div className='i-final__item-content-img' />
            </div>
            <div className='i-final__item-content'>
              <p className='i-final__item-text'>{t('final-text-1')}</p>
              <p className='i-final__item-text'>{t('final-text-2')}</p>
              <p className='i-final__item-text'>{t('final-text-3')}</p>
              <p className='i-final__item-text'>{t('final-text-4')}</p>
            </div>
          </div>
          <div className='i-final__item'>
            <div className='i-final__item-media'>
              <div className='i-final__item-content-img' />
              <div className='i-final__item-content-img' />
              <div className='i-final__item-content-img' />
            </div>
            <div className='i-final__item-content'>
              <p className='i-final__item-text'>{t('final-text-1')}</p>
              <p className='i-final__item-text'>{t('final-text-2')}</p>
              <p className='i-final__item-text'>{t('final-text-3')}</p>
              <p className='i-final__item-text'>{t('final-text-4')}</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Final;
