import icon1 from '../../../../shared/images/history/icon-1.svg';
import icon2 from '../../../../shared/images/history/icon-2.svg';
import icon3 from '../../../../shared/images/history/icon-3.svg';

import './Stages.css';

const Stages = () => {
  return (
    <div className='h-stages' id='stages'>
      <div className='h-stages__container'>
        <h2 className='h-stages__title'>Как проходили соревнования </h2>
        <div className='h-stages__line'>
          <ul className='h-stages__cards'>
            <li className='h-stages__card h-stages__card_type_first'>
              <span className='h-stages__card-date'>30 августа - 15 сентября</span>
              <h4 className='h-stages__card-title'>Регистрация</h4>
              <p className='h-stages__card-text'>Участники заполнили анкету и подготовились к работе над кейсами.</p>
              <span className='h-stages__card-count'>1</span>
              <img className='h-stages__card-icon' src={icon1} alt='иконка'></img>
            </li>
            <li className='h-stages__card h-stages__card_type_second'>
              <span className='h-stages__card-date'>15 сентября - 30 сентября</span>
              <h4 className='h-stages__card-title'>Дистанционный этап</h4>
              <p className='h-stages__card-text'>Команды работали онлайн с кейсами от партнёров: анализировали задачи, выдвигали гипотезы и записывали видеопрезентации. Они консультировались с экспертами и уточняли детали кейсов.</p>
              <p className='h-stages__card-text'><span className='h-stages__card-text_weight_bold'>175 команд</span> боролись за выход в финал.</p>
              <span className='h-stages__card-count'>2</span>
              <img className='h-stages__card-icon' src={icon2} alt='иконка'></img>
            </li>
            <li className='h-stages__card h-stages__card_type_third'>
              <span className='h-stages__card-date'>29 октября - 31 октября</span>
              <h4 className='h-stages__card-title'>Очный финал в&nbsp;Москве</h4>
              <p className='h-stages__card-text'>Три дня проектного интенсива в РУТ (МИИТ).</p>
              <p className='h-stages__card-text'><span className='h-stages__card-text_weight_bold'>17 команд из 8 вузов</span> прошли путь от анализа проблемы до создания прототипа и представили свои решения экспертам.</p>
              <span className='h-stages__card-count'>3</span>
              <img className='h-stages__card-icon' src={icon3} alt='иконка'></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stages;
