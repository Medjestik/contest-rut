import type { FC } from 'react';

import Section from '../../../../../shared/components/Section/ui/Section';
import Button from '../../../../../shared/components/Button/ui/Button';
import { ENAV } from '../../../../../shared/components/Navigation/interface/interface';

import '../styles/style.css';

const Description: FC = () => {

  const btnStyle = {
    margin: '50px 0 0',
  };

  return (
    <div className='description' id={ENAV.DESCRIPTION}>
      <div className='description__img-container'>
        <div className='description__img'></div>
      </div>
      <Section>
        <div className='description__section'>
          <h2 className='section__title'>Что такое проектные соревнования?</h2>
          <p className='section__subtitle'>Это новый формат, где участникам нужно не просто выполнить какую-то задачу, а сперва изучить проблему.</p>
          <p className='section__subtitle'>Каждой команде после регистрации будет выдан подробный кейс, в котором будет описана настоящая проблема - сбой в каком-то процессе. Командам предстоит изучить кейс, понять в чём конкретно сбой, и предложить любое решение, которое может решить проблему.</p>
          <Button text='подробнее' width='default' style={btnStyle} />
        </div>
      </Section>
    </div>
  );
};

export default Description;
