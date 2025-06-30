import { useTranslation } from 'react-i18next';

import { Link } from 'react-scroll';

import './Main.css';

const Main = () => {

  const { t } = useTranslation();



  return (
    <div className='i-main'>
      <div className='i-main__container'>
        <h1 className='i-main__title'>{t('title')}</h1>
        <Link className='i-main__button' to='description' smooth={true} offset={0} duration={750} spy={true}>{t('main-button')}</Link>
        <div className='i-main__img'></div>
        <ul className='i-main__tags'>
          <li className='i-main__tag i-main__tag_type_1'>{t('main-tag-1')}</li>
          <li className='i-main__tag i-main__tag_type_2'>{t('main-tag-2')}</li>
          <li className='i-main__tag i-main__tag_type_3'>{t('main-tag-3')}</li>
          <li className='i-main__tag i-main__tag_type_4'>{t('main-tag-4')}</li>
          <li className='i-main__tag-icon'></li>
          <li className='i-main__tag i-main__tag_type_5'>{t('main-tag-5')}</li>
          <li className='i-main__tag i-main__tag_type_6'>{t('main-tag-6')}</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
