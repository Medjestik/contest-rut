import type { FC } from 'react';

import Section from '../../../../../shared/components/Section/ui/Section';
import Button from '../../../../../shared/components/Button/ui/Button';
import { ENAV } from '../../../../../shared/components/Navigation/interface/interface';

import '../styles/style.css';

const Document: FC = () => {
  return (
    <div className='document' id={ENAV.DOCUMENT}>
      <Section>
        <div className='document__section'>
          <h2 className='section__title'>документы</h2>
          <div className='document__buttons'>
            <Button color={'white'} text={'положение'} width='full' />
            <Button color={'white'} text={'регламент'} width='full' />
            <Button color={'primary'} text={'зарегистрироваться'} width='full' />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Document;
