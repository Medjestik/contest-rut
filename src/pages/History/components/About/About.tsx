import './About.css';

const counts = [
  {
    text: 'из России и Беларуси',
    count: 'транспортных вузов',
    number: '18',
  },
  {
    text: 'приняли участие в дистанционном этапе',
    count: 'команд',
    number: '175',
  },
  {
    text: 'дошли до финала в Москве',
    count: 'команд',
    number: '17',
  },
  {
    text: 'предоставили реальные кейсы',
    count: 'крупных компаний',
    number: '6',
  },
  {
    text: 'призовой фонд соревнований',
    count: 'миллиона рублей',
    number: '2',
  },
  {
    text: 'работы над реальными задачами отрасли',
    count: 'дня',
    number: '3',
  },

];

const About = () => {
  return (
    <div className='h-about'>
      <div className='h-about__container'>
        <div className='h-about__description'>
          <div className='h-about__background'></div>
          {
            /*
            <span className='h-about__tag'>Транспорт –</span>
            <span className='h-about__tag'>в руках</span>
            <span className='h-about__tag'>студентов</span>
            */
          }
        </div>
        <div className='h-about__numbers'>
          <p className='h-about__text'>В 2024 году состоялись первые Международные транспортные проектные соревнования — событие, объединившее:</p>
          <ul className='h-about__list'>
            {
              counts.map((elem, i) => (
                <li className='h-about__item' key={i}>
                  <span className='h-about__count'><span className='h-about__number'>{elem.number}</span> {elem.count}</span>
                  <p className='h-about__caption'>{elem.text}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
