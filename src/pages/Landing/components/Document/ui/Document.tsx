import type { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import Section from '../../../../../shared/components/Section/ui/Section';
import Button from '../../../../../shared/components/Button/ui/Button';
import { ENAV } from '../../../../../shared/components/Navigation/interface/interface';
import { EROUTES } from '../../../../../shared/utils/ERoutes';

import '../styles/style.css';

const Document: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='document' id={ENAV.DOCUMENT}>
      <Section>
        <div className='document__section'>
          <h2 className='section__title'>документы</h2>
          <div className='document__buttons'>
            <a href='https://cloud.mail.ru/public/Rfcu/ZCm3ZmDBR' target='_blank'><Button color={'white'} text={'положение'} width='full' /></a>
            <a href='https://cloud.mail.ru/public/YhUL/vuXbSSsgF' target='_blank'><Button color={'white'} text={'регламент'} width='full' /></a>
            <Button color={'primary'} text={'зарегистрироваться'} width='full' onClick={() => navigate(EROUTES.REGISTRATION)}/>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Document;
