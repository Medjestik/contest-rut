import type { FC } from 'react';

import { Link } from 'react-scroll';

import Section from '../../../../../shared/components/Section/ui/Section';
import Button from '../../../../../shared/components/Button/ui/Button';
import { ENAV } from '../../../../../shared/components/Navigation/interface/interface';

import '../styles/style.css';

interface IDescriptionProps {
  windowWidth: number;
}

const Description: FC<IDescriptionProps> = ({ windowWidth }) => {

  const btnStyle = {
    margin: '50px 0 0',
  };

  const mobileBtnStyle = {
    margin: '20px 0 0',
  };

  return (
    <div className='description' id={ENAV.DESCRIPTION}>
      <div className='description__img-container'>
        <div className='description__img'></div>
      </div>
      <Section>
        <div className='description__section'>
          <h2 className='section__title'>Что такое проектные соревнования?</h2>
          <p className='section__subtitle'>Это новый формат соревнований для студентов инженерных вузов. Вы получите реальную проблему от транспортной компании и пройдёте путь от анализа ситуации до разработки полноценного решения. Это как стартап, только в формате интенсивного командного погружения.</p>
          <p className='section__subtitle'>Вам предстоит работать в команде, проводить интервью, исследовать причины, генерировать идеи, создавать прототип, консультироваться с экспертами и защищать свой проект. Это настоящая проектная деятельность — без учебников и зазубренных формул, только реальные вызовы, ум, смекалка и совместная работа.</p>
          <Link to='stages' smooth={true} offset={0} duration={750} spy={true}><Button text='подробнее' width='default' style={windowWidth > 1000 ? btnStyle : mobileBtnStyle} /></Link>
        </div>
      </Section>
    </div>

  );
};

export default Description;
