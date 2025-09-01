import type { FC } from 'react';

import Section from '../../../../../shared/components/Section/ui/Section';
import { ENAV } from '../../../../../shared/components/Navigation/interface/interface';

import '../styles/style.css';

const Recruitment: FC = () => {
  return (
    <div className='recruitment' id={ENAV.RECRUITMENT}>
      <Section>
        <div className='recruitment__section'>
          <h2 className='section__title'>Кого ждем?</h2>
          <p className='section__subtitle'>Мы приглашаем студентов транспортных вузов и других технических университетов, которым интересно решать реальные проблемы отрасли.</p>
          <p className='section__subtitle'>Если вам хочется проверить себя в условиях, приближённых к работе в индустрии, применить инженерные навыки и научиться новому — вам точно сюда. Неважно, какой опыт уже есть — важно желание разбираться в сложных ситуациях, предлагать нестандартные решения и делать это обоснованно.</p>
           <p className='section__subtitle'><strong>Собери команду и подай заявку — стань частью транспортной отрасли!</strong></p>
        </div>
      </Section>
      <div className='recruitment__img'></div>
    </div>
  );
};

export default Recruitment;
