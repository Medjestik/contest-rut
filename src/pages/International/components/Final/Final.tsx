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
              <div className='i-final__item-content-img i-final__item-content-img_type_1'>
                <div className='i-final__item-content-tag i-final__item-content-tag_type_1'>{t('final-tag-1')}</div>
              </div>
              <div className='i-final__item-content-img i-final__item-content-img_type_2'>
                <div className='i-final__item-content-tag i-final__item-content-tag_type_2'>{t('final-tag-2')}</div>
                <div className='i-final__item-content-tag i-final__item-content-tag_type_3'>{t('final-tag-3')}</div>
              </div>
              <div className='i-final__item-content-img i-final__item-content-img_type_3'>
                <div className='i-final__item-content-tag i-final__item-content-tag_type_4'>{t('final-tag-4')}</div>
              </div>
            </div>
          </div>
          <div className='i-final__item'>
            <div className='i-final__item-media'>
              <div className='i-final__item-content-img i-final__item-content-img_type_4'>
                <div className='i-final__item-content-tag i-final__item-content-tag_type_5'>{t('final-tag-5')}</div>
                <div className='i-final__item-content-tag i-final__item-content-tag_type_6'>{t('final-tag-6')}</div>
              </div>
              <div className='i-final__item-content-img i-final__item-content-img_type_5'>
                <div className='i-final__item-content-tag i-final__item-content-tag_type_7'>{t('final-tag-7')}</div>
                <div className='i-final__item-content-tag i-final__item-content-tag_type_8'>{t('final-tag-8')}</div>
              </div>
              <div className='i-final__item-content-img i-final__item-content-img_type_6'>
                <div className='i-final__item-content-tag i-final__item-content-tag_type_9'>{t('final-tag-9')}</div>
              </div>
            </div>
          </div>
          <div className='i-final__item'>
            <div className='i-final__item-media'>
              <div className='i-final__item-content-img i-final__item-content-img_type_7'>
                <div className='i-final__item-content-tag i-final__item-content-tag_type_10'>{t('final-tag-10')}</div>
              </div>
              <div className='i-final__item-content-img i-final__item-content-img_type_8'>
                <div className='i-final__item-content-tag i-final__item-content-tag_type_11'>{t('final-tag-11')}</div>
              </div>
              <div className='i-final__item-content-img i-final__item-content-img_type_9'>
                <div className='i-final__item-content-tag i-final__item-content-tag_type_12'>{t('final-tag-12')}</div>
              </div>
            </div>
          </div>
        </Carousel>
        <div className='i-final__item-content'>
          <p className='i-final__item-text'>{t('final-text-1')}</p>
          <p className='i-final__item-text'>{t('final-text-2')}</p>
          <p className='i-final__item-text'>{t('final-text-3')}</p>
          <p className='i-final__item-text'>{t('final-text-4')}</p>
        </div>
      </div>
    </div>
  );
};

export default Final;
