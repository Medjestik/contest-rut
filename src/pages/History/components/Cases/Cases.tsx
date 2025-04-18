import Slider from '../../../../widgets/Slider/ui/Slider';

import wbIcon from '../../../../shared/images/history/company/wb-white.svg';
import moekIcon from '../../../../shared/images/history/company/moek-white.svg';
import sinaraIcon from '../../../../shared/images/history/company/sinara-white.svg';
import cargoIcon from '../../../../shared/images/history/company/cargo-white.svg';
import vniijtIcon from '../../../../shared/images/history/company/vniijt-white.svg';
import rzdIcon from '../../../../shared/images/history/company/rzd-white.svg';

import './Cases.css';

const Cases = () => {
  return (
    <div className='h-cases' id='cases'>
      <h2 className='h-cases__title'>Над чем работали участники</h2>
      <div className='h-cases__section'>
        <div className='h-cases__slider'>
          <Slider />
        </div>
        <div className='h-cases__info'>
          <span className='h-cases__tag'>Реальная транспортная проблема</span>
          <p className='h-cases__text'>Каждая команда работала с реальной транспортной проблемой бизнеса.</p>
          <p className='h-cases__text'>Участникам предстояло не просто придумать идею, но&nbsp;и&nbsp;обосновать её, проверить гипотезы, создать прототип и&nbsp;защитить его перед отраслевыми экспертами.</p>
        </div>
      </div>
      <ul className='h-cases__list'>
        <li className='h-cases__item'>
          <div className='h-cases__overlay'>
            <img className='h-cases__icon h-cases__icon_type_wb' src={wbIcon} alt='иконка'></img>
          </div>
          <div className='h-cases__item-content'>
            <h4 className='h-cases__item-title'>Очереди на складах: причина — сбои в графике и перегрузка парковок</h4>
            <p className='h-cases__item-text'>Из-за сбоев в графике прибытия и ограниченной вместимости парковок на складах образуются очереди. Это блокирует подъездные пути, мешает манёврам и увеличивает время погрузки и разгрузки.</p>
            <a className='h-cases__item-button' target='_blank' rel='norefferer' href='https://cloud.mail.ru/public/n7kX/r1VZKcWRi'>Подробнее</a>
          </div>
        </li>
        <li className='h-cases__item'>
          <div className='h-cases__overlay'>
            <img className='h-cases__icon' src={moekIcon} alt='иконка'></img>
          </div>
          <h4 className='h-cases__item-title'>Перегрев станций метро в часы пик</h4>
          <p className='h-cases__item-text'>Температура в московском метро превышает нормы, особенно в часы пик. Причина — рост пассажиропотока, установка кондиционеров в поездах и перегрев грунта. Это ухудшает условия для пассажиров и несёт репутационные риски.</p>
          <a className='h-cases__item-button' target='_blank' rel='norefferer' href='https://cloud.mail.ru/public/4tbd/cpzwoLTPe'>Подробнее</a>
        </li>
        <li className='h-cases__item'>
          <div className='h-cases__overlay'>
            <img className='h-cases__icon' src={sinaraIcon} alt='иконка'></img>
          </div>
          <h4 className='h-cases__item-title'>Передача данных DTScan затруднена в пути</h4>
          <p className='h-cases__item-text'>На междугородних маршрутах системы DTScan сталкиваются с ограниченным покрытием и высокими расходами на передачу данных. Это мешает оперативному обновлению информации и может привести к росту неисправностей и времени ремонта.</p>
          <a className='h-cases__item-button' target='_blank' rel='norefferer' href='https://cloud.mail.ru/public/Stc2/dmweRjGnp'>Подробнее</a>
        </li>
        <li className='h-cases__item'>
          <div className='h-cases__overlay'>
            <img className='h-cases__icon' src={cargoIcon} alt='иконка'></img>
          </div>
          <h4 className='h-cases__item-title'>Порожний пробег и переоборудование вагонов увеличивают издержки</h4>
          <p className='h-cases__item-text'>«ИнтерТрансКарго» сталкивается с затратами из-за неэффективного использования вагонов: порожнего пробега, необходимости переоборудования под колёсную технику и сложностей крепления грузов.</p>
          <a className='h-cases__item-button' target='_blank' rel='norefferer' href='https://cloud.mail.ru/public/pXpu/ctvVaosEe'>Подробнее</a>
        </li>
        <li className='h-cases__item'>
          <div className='h-cases__overlay'>
            <img className='h-cases__icon h-cases__icon_type_vniijt' src={vniijtIcon} alt='иконка'></img>
          </div>
          <h4 className='h-cases__item-title'>Диагностика путей не поспевает за скоростями до 400 км/ч</h4>
          <p className='h-cases__item-text'>Методы диагностики путей при скорости до 160 км/ч становятся неэффективными при движении поездов на 400 км/ч. Снижается точность измерений, увеличиваются остановки, растут риски для безопасности и соблюдения графика.</p>
          <a className='h-cases__item-button' target='_blank' rel='norefferer' href='https://cloud.mail.ru/public/ykM8/5w4A4iwaE'>Подробнее</a>
        </li>
        <li className='h-cases__item'>
          <div className='h-cases__overlay'>
            <img className='h-cases__icon' src={rzdIcon} alt='иконка'></img>
          </div>
          <h4 className='h-cases__item-title'>Дизтопливо уходит в холостую при задержках и морозах</h4>
          <p className='h-cases__item-text'>Локомотивы тратят много топлива во время остановок и пересменок, особенно в северных регионах. Это увеличивает расходы, усложняет инфраструктуру и снижает экологическую устойчивость.</p>
          <a className='h-cases__item-button' target='_blank' rel='norefferer' href='https://cloud.mail.ru/public/jhxk/swPvknS1U'>Подробнее</a>
        </li>
      </ul>
    </div>
  );
};

export default Cases;
