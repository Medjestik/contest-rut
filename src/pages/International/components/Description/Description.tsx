import { useTranslation } from 'react-i18next';

import './Description.css';

const Description = () => {

  const { t } = useTranslation();

  return (
    <div className='i-description' id='description'>
      <div className='i-description__block i-description__block_type_1'></div>
      <div className='i-description__block i-description__block_type_2'></div>
      <div className='i-description__block i-description__block_type_3'></div>
      <div className='i-description__block i-description__block_type_4'></div>
      <div className='i-description__container'>
        <div className='i-description__img'>
          <div className='i-description__quote'>{t('description-text-3')}</div>
          <ul className='i-description__tags'>
            <li className='i-description__tag i-description__tag_type_1'>{t('description-tag-1')}</li>
            <li className='i-description__tag i-description__tag_type_2'>{t('description-tag-2')}</li>
            <li className='i-description__tag i-description__tag_type_3'>{t('description-tag-3')}</li>
            <li className='i-description__tag i-description__tag_type_4'>{t('description-tag-4')}</li>
          </ul>
        </div>
        <div className='i-description__info'>
          <h2 className='i-description__title'>{t('description-title')}</h2>
          <div className='i-description__text-container'>
            <p className='i-description__text'>{t('description-text-1')}</p>
            <p className='i-description__text'>{t('description-text-2')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
