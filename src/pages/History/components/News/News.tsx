import type { FC } from 'react';
import { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Prize from '../Prize/Prize';

import news1 from '../../../../shared/images/history/news1.png';
import news2 from '../../../../shared/images/history/news2.png';
import news3 from '../../../../shared/images/history/news3.png';
import news4 from '../../../../shared/images/history/news4.png';
import news5 from '../../../../shared/images/history/news5.png';
import news6 from '../../../../shared/images/history/news6.png';

import './News.css';

interface INewsProps {
  windowWidth: number;
}

const News: FC<INewsProps> = ({ windowWidth }) => {
  const carouselRef = useRef<InstanceType<typeof Carousel>>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    carouselRef.current?.decrement();
  };

  const handleNext = () => {
    carouselRef.current?.increment();
  };

  return (
    <div className='h-news'>
      <div className='h-news__container'>
        <Prize />
        <div className='h-news__info'>
          <h2 className='h-news__title' id='news'>СМИ о нас</h2>
          <div className='h-news__controls'>
            <div onClick={handlePrev} className='h-news__arrow h-news__arrow--left'>&#x276E;</div>
            <div onClick={handleNext} className='h-news__arrow h-news__arrow--right'>&#x276F;</div>
          </div>
        </div>
        {
          windowWidth > 1000
          ?
          <Carousel
            ref={carouselRef}
            selectedItem={currentSlide}
            onChange={(index) => setCurrentSlide(index)}
            swipeable
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            infiniteLoop
            centerMode
            centerSlidePercentage={30}
          >
            <div className='h-news__item'>
              <img className='h-news__item-img' src={news1} alt='картинка'></img>
              <h4 className='h-news__item-title'>Кейсы проверят уровень подготовки</h4>
              <p className='h-news__item-text'>Межвузовские транспортные проектные соревнования стартовали 16 сентября. Студенты будут выполнять отраслевые задания, которые для них сделали компании-партнёры.</p>
              <a className='h-news__item-button' target='_blank' rel='norefferer' href='https://gudok.ru/newspaper/?ID=1679917'>Читать статью</a>
            </div>
            <div className='h-news__item'>
              <img className='h-news__item-img' src={news2} alt='картинка'></img>
              <h4 className='h-news__item-title'>Проектная деятельность студентов</h4>
              <p className='h-news__item-text'>В чём суть нового формата? Как он вписывается в образовательный процесс и помогает готовить новое поколение инженеров и других востребованных специалистов страны, способных ответить на любые вызовы и вести отрасль к новым высотам?</p>
              <a className='h-news__item-button' target='_blank' rel='norefferer' href='https://rzdtv.ru/2024/10/22/proektnaja-dejatelnost-studentov/'>Читать статью</a>
            </div>
            <div className='h-news__item'>
              <img className='h-news__item-img' src={news3} alt='картинка'></img>
              <h4 className='h-news__item-title'>Первые среди первых</h4>
              <p className='h-news__item-text'>Инициатива РУТ по проведению межвузовских транспортных проектных соревнований является ярким примером того, как образовательные учреждения могут способствовать подготовке специалистов для динамично развивающейся транспортной отрасли до 2035 года и далее.</p>
              <a className='h-news__item-button' target='_blank' rel='norefferer' href='https://xn--m1acd.xn--p1ai/pervye-sredi-pervyh/'>Читать статью</a>
            </div>
            <div className='h-news__item'>
              <img className='h-news__item-img' src={news4} alt='картинка'></img>
              <h4 className='h-news__item-title'>В РУТ впервые прошли межвузовские проектные соревнования</h4>
              <p className='h-news__item-text'>Команды транспортных вузов страны впервые встретились на площадке Российского университета транспорта для участия в межвузовских проектных соревнованиях.</p>
              <a className='h-news__item-button' target='_blank' rel='norefferer' href='https://gudok.ru/news/?ID=1685319'>Читать статью</a>
            </div>
            <div className='h-news__item'>
              <img className='h-news__item-img' src={news5} alt='картинка'></img>
              <h4 className='h-news__item-title'>Студенты транспортных вузов решили кейсы от крупных бизнес-заказчиков</h4>
              <p className='h-news__item-text'>Межвузовские транспортные проектные соревнования – масштабный конкурс для студентов отраслевых вузов страны, организатором которого выступил РУТ (МИИТ). Цель мероприятия – подготовка молодых специалистов к решению актуальных задач в области перевозок.</p>
              <a className='h-news__item-button' target='_blank' rel='norefferer' href='https://gudok.ru/content/luchshie_praktiki/obrazovanie/1685360/?sphrase=0'>Читать статью</a>
            </div>
            <div className='h-news__item'>
              <img className='h-news__item-img' src={news6} alt='картинка'></img>
              <h4 className='h-news__item-title'>Финал межвузовских проектных соревнований</h4>
              <p className='h-news__item-text'>Три дня подготовки и решения реальных задач по заказу от государственных компаний и представителей бизнеса. Атмосфера, организация, впечатления.</p>
              <a className='h-news__item-button' target='_blank' rel='norefferer' href='https://rzdtv.ru/2024/11/12/final-mezhvuzovskih-proektnyh-sorevnovanij/'>Читать статью</a>
            </div>
          </Carousel>
          :
          <Carousel
            ref={carouselRef}
            selectedItem={currentSlide}
            onChange={(index) => setCurrentSlide(index)}
            swipeable
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            infiniteLoop
          >
            <div className='h-news__item'>
              <img className='h-news__item-img' src={news1} alt='картинка'></img>
              <h4 className='h-news__item-title'>Кейсы проверят уровень подготовки</h4>
              <p className='h-news__item-text'>Межвузовские транспортные проектные соревнования стартовали 16 сентября. Студенты будут выполнять отраслевые задания, которые для них сделали компании-партнёры.</p>
              <a className='h-news__item-button' target='_blank' rel='norefferer' href='https://gudok.ru/newspaper/?ID=1679917'>Читать статью</a>
            </div>
            <div className='h-news__item'>
              <img className='h-news__item-img' src={news2} alt='картинка'></img>
              <h4 className='h-news__item-title'>Проектная деятельность студентов</h4>
              <p className='h-news__item-text'>В чём суть нового формата? Как он вписывается в образовательный процесс и помогает готовить новое поколение инженеров и других востребованных специалистов страны, способных ответить на любые вызовы и вести отрасль к новым высотам?</p>
              <a className='h-news__item-button' target='_blank' rel='norefferer' href='https://rzdtv.ru/2024/10/22/proektnaja-dejatelnost-studentov/'>Читать статью</a>
            </div>
            <div className='h-news__item'>
              <img className='h-news__item-img' src={news3} alt='картинка'></img>
              <h4 className='h-news__item-title'>Первые среди первых</h4>
              <p className='h-news__item-text'>Инициатива РУТ по проведению межвузовских транспортных проектных соревнований является ярким примером того, как образовательные учреждения могут способствовать подготовке специалистов для динамично развивающейся транспортной отрасли до 2035 года и далее.</p>
              <a className='h-news__item-button' target='_blank' rel='norefferer' href='https://xn--m1acd.xn--p1ai/pervye-sredi-pervyh/'>Читать статью</a>
            </div>
            <div className='h-news__item'>
              <img className='h-news__item-img' src={news4} alt='картинка'></img>
              <h4 className='h-news__item-title'>В РУТ впервые прошли межвузовские проектные соревнования</h4>
              <p className='h-news__item-text'>Команды транспортных вузов страны впервые встретились на площадке Российского университета транспорта для участия в межвузовских проектных соревнованиях.</p>
              <a className='h-news__item-button' target='_blank' rel='norefferer' href='https://gudok.ru/news/?ID=1685319'>Читать статью</a>
            </div>
            <div className='h-news__item'>
              <img className='h-news__item-img' src={news5} alt='картинка'></img>
              <h4 className='h-news__item-title'>Студенты транспортных вузов решили кейсы от крупных бизнес-заказчиков</h4>
              <p className='h-news__item-text'>Межвузовские транспортные проектные соревнования – масштабный конкурс для студентов отраслевых вузов страны, организатором которого выступил РУТ (МИИТ). Цель мероприятия – подготовка молодых специалистов к решению актуальных задач в области перевозок.</p>
              <a className='h-news__item-button' target='_blank' rel='norefferer' href='https://gudok.ru/content/luchshie_praktiki/obrazovanie/1685360/?sphrase=0'>Читать статью</a>
            </div>
            <div className='h-news__item'>
              <img className='h-news__item-img' src={news6} alt='картинка'></img>
              <h4 className='h-news__item-title'>Финал межвузовских проектных соревнований</h4>
              <p className='h-news__item-text'>Три дня подготовки и решения реальных задач по заказу от государственных компаний и представителей бизнеса. Атмосфера, организация, впечатления.</p>
              <a className='h-news__item-button' target='_blank' rel='norefferer' href='https://rzdtv.ru/2024/11/12/final-mezhvuzovskih-proektnyh-sorevnovanij/'>Читать статью</a>
            </div>
          </Carousel>
        }
      </div> 
    </div>
  );
};

export default News;
