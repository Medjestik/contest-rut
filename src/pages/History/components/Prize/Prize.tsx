import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import prize1 from '../../../../shared/images/history/prize1.jpg';
import prize2 from '../../../../shared/images/history/prize2.jpg';
import prize3 from '../../../../shared/images/history/prize3.jpg';

import wbIcon from '../../../../shared/images/history/company/wb.svg';
import moekIcon from '../../../../shared/images/history/company/moek.svg';
import sinaraIcon from '../../../../shared/images/history/company/sinara.svg';
import cargoIcon from '../../../../shared/images/history/company/cargo.svg';
import vniijtIcon from '../../../../shared/images/history/company/vniijt.svg';
import rzdIcon from '../../../../shared/images/history/company/rzd.svg';

import './Prize.css';

const Prize = () => {
  return (
    <div className='h-prize' id='prize'>
      <h2 className='h-prize__title'>Призы</h2>
      <Carousel
        swipeable
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        autoPlay={true}
        infiniteLoop
      >
        <div className='h-prize__item'>
          <img className='h-prize__item-img' src={prize1} alt='картинка'></img>
          <div className='h-prize__item-overlay'>
            <h4 className='h-prize__item-title'>Поддержка лучших команд</h4>
            <p className='h-prize__item-text'>Победители получили денежные призы и возможность развивать свои проекты совместно с компаниями-партнёрами.</p>
          </div>
          <div></div>
        </div>
        <div className='h-prize__item'>
          <img className='h-prize__item-img' src={prize2} alt='картинка'></img>
          <div className='h-prize__item-overlay'>
            <h4 className='h-prize__item-title'>Денежные призы победителям</h4>
            <p className='h-prize__item-text'>Главный приз в 1 000 000 рублей получила команда «Эйдалоны» из Российского университета транспорта. Победители в отдельных кейсах получили по 200 000 рублей.</p>
          </div>
        </div>
        <div className='h-prize__item'>
          <img className='h-prize__item-img' src={prize3} alt='картинка'></img>
          <div className='h-prize__item-overlay'>
            <h4 className='h-prize__item-title'>Оценка проектов по всем этапам</h4>
            <p className='h-prize__item-text'>Жюри оценивало не только финальные презентации, но и весь ход работы: качество анализа, проработку идеи и реализацию прототипа.</p>
          </div>
        </div>
      </Carousel>
      <div className='h-prize__grid-container'>
        <div className='h-prize__grid-item'>
          <div className='h-prize__grid-item-prize'></div>
          <img className='h-prize__grid-item-icon' src={sinaraIcon} alt='иконка'></img>
          <h4 className='h-prize__grid-item-title'>Эйдалоны</h4>
          <p className='h-prize__grid-item-text'>Российский университет транспорта</p>
          <span className='h-prize__grid-item-count'>1 000 000 руб.</span>
          <a className='h-prize__grid-item-button' target='_blank' rel='norefferer' href='https://cloud.mail.ru/public/eKPm/mQxYZy51d'>Работа победителей</a>
        </div>
        <div className='h-prize__grid-item'>
          <img className='h-prize__grid-item-icon' src={moekIcon} alt='иконка'></img>
          <h4 className='h-prize__grid-item-title'>bruteforce_database</h4>
          <p className='h-prize__grid-item-text'>Государственный университет морского и речного флота им. адмирала С.О. Макарова</p>
          <span className='h-prize__grid-item-count'>200 000 руб.</span>
          <a className='h-prize__grid-item-button' target='_blank' rel='norefferer' href='https://cloud.mail.ru/public/5VJU/gZQDA7mZ9'>Работа победителей</a>
        </div>
        <div className='h-prize__grid-item'>
          <img className='h-prize__grid-item-icon' src={wbIcon} alt='иконка'></img>
          <h4 className='h-prize__grid-item-title'>ВВП</h4>
          <p className='h-prize__grid-item-text'>Российский университет транспорта</p>
          <span className='h-prize__grid-item-count'>200 000 руб.</span>
          <a className='h-prize__grid-item-button' target='_blank' rel='norefferer' href='https://cloud.mail.ru/public/ZCBP/8bcVxtThM'>Работа победителей</a>
        </div>
        <div className='h-prize__grid-item'>
          <img className='h-prize__grid-item-icon' src={cargoIcon} alt='иконка'></img>
          <h4 className='h-prize__grid-item-title'>Лисята</h4>
          <p className='h-prize__grid-item-text'>Сибирский государственный университет путей сообщения</p>
          <span className='h-prize__grid-item-count'>200 000 руб.</span>
          <a className='h-prize__grid-item-button' target='_blank' rel='norefferer' href='https://cloud.mail.ru/public/crMy/47rQ1YJCC'>Работа победителей</a>
        </div>
        <div className='h-prize__grid-item'>
          <img className='h-prize__grid-item-icon' src={vniijtIcon} alt='иконка'></img>
          <h4 className='h-prize__grid-item-title'>Экипаж</h4>
          <p className='h-prize__grid-item-text'>Ульяновский институт гражданской авиации им. Главного маршала авиации Б.П. Бугаева</p>
          <span className='h-prize__grid-item-count'>200 000 руб.</span>
          <a className='h-prize__grid-item-button' target='_blank' rel='norefferer' href='https://cloud.mail.ru/public/dSAU/4jjgLBTqz'>Работа победителей</a>
        </div>
        <div className='h-prize__grid-item'>
          <img className='h-prize__grid-item-icon' src={rzdIcon} alt='иконка'></img>
          <h4 className='h-prize__grid-item-title'>ДвижБуд</h4>
          <p className='h-prize__grid-item-text'>Дальневосточный государственный университет путей сообщения</p>
          <span className='h-prize__grid-item-count'>200 000 руб.</span>
          <a className='h-prize__grid-item-button' target='_blank' rel='norefferer' href='https://cloud.mail.ru/public/vA39/wFiD5bhS4'>Работа победителей</a>
        </div>
      </div>
    </div>
  );
};

export default Prize;
