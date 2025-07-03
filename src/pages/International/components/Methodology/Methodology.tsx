import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import MethodologyAccordion from './MethodologyAccordion';

import './Methodology.css';

const Methodology:FC = () => {

  const { t } = useTranslation();

  const data = [
    {
      title: t('m1-accordion-title'), 
      video: t('m1-accordion-video'), 
      content: [t('m1-accordion-text-1'), t('m1-accordion-text-2'), t('m1-accordion-text-3')],
    },
    {
      title: t('m2-accordion-title'), 
      video: t('m2-accordion-video'), 
      content: [t('m2-accordion-text-1'), t('m2-accordion-text-2'), t('m2-accordion-text-3')],
    },
    {
      title: t('m3-accordion-title'), 
      video: t('m3-accordion-video'), 
      content: [t('m3-accordion-text-1'), t('m3-accordion-text-2'), t('m3-accordion-text-3'), t('m3-accordion-text-4')],
    },
    {
      title: t('m4-accordion-title'), 
      video: t('m4-accordion-video'), 
      content: [t('m4-accordion-text-1'), t('m4-accordion-text-2'), t('m4-accordion-text-3'), t('m4-accordion-text-4'), t('m4-accordion-text-5')],
    },
    {
      title: t('m5-accordion-title'), 
      video: t('m5-accordion-video'), 
      content: [t('m5-accordion-text-1'), t('m5-accordion-text-2'), t('m5-accordion-text-3'), t('m5-accordion-text-4')],
    },
  ];

  return (
    <div className='i-methodology' id='methodology'>
      <h2 className='i-methodology__title'>{t('methodology-title')}</h2>
      <div className='i-methodology__block i-methodology__block_type_1'></div>
      <div className='i-methodology__block i-methodology__block_type_2'></div>
      <div className='i-methodology__img'></div>
      <div className='i-methodology__quote'>{t('methodology-quote')}</div>
      <div className='i-methodology__container'>
        <div className='i-methodology__text-container'>
          <p className='i-methodology__text'>{t('methodology-text-1')}</p>
          <p className='i-methodology__text'>{t('methodology-text-2')}</p>
          <p className='i-methodology__text'>{t('methodology-text-3')}</p>
        </div>
        <div className='i-methodology__img-mobile'>
          <div className='i-methodology__quote-mobile'>{t('methodology-quote')}</div>
        </div>
      </div>
      <ul className='i-methodology__accordion'>
        {
          data.map((item, i) => (
            <MethodologyAccordion key={i} count={i + 1} title={item.title} video={item.video} content={item.content} />
          ))
        }
      </ul>
    </div>
  );
};

export default Methodology;
