import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import FaqAccordion from './FaqAccordion';

import './Faq.css';

const Faq: FC = () => {

  const { t } = useTranslation();

  const data = [
    {
      title: t('f1-accordion-title'),
      text: t('f1-accordion-text'),
    },
    {
      title: t('f2-accordion-title'),
      text: t('f2-accordion-text'),
    },
    {
      title: t('f3-accordion-title'),
      text: t('f3-accordion-text'),
    },
    {
      title: t('f4-accordion-title'),
      text: t('f4-accordion-text'),
    },
    {
      title: t('f5-accordion-title'),
      text: t('f5-accordion-text'),
    },
    {
      title: t('f6-accordion-title'),
      text: t('f6-accordion-text'),
    },
    {
      title: t('f7-accordion-title'),
      text: t('f7-accordion-text'),
      link: 'https://contest.miit.ru/'
    },
  ];

  return (  
    <div className='i-faq'>
      <h2 className='i-faq__title'>{t('faq-title')}</h2>
      <div className='i-faq__accordion'>
        {
          data.map((elem, i) => (
            <FaqAccordion title={elem.title} text={elem.text} link={elem.link} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default Faq;
