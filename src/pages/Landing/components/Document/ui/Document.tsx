import type { FC } from 'react';

import Section from '../../../../../shared/components/Section/ui/Section';
import Button from '../../../../../shared/components/Button/ui/Button';
import { ENAV } from '../../../../../shared/components/Navigation/interface/interface';

import '../styles/style.css';

interface IDocumentProps {
  onLogin: () => void;
}

const Document: FC<IDocumentProps> = () => {

  return (
    <div className='document' id={ENAV.DOCUMENT}>
      <Section>
        <div className='document__section'>
          <h2 className='section__title'>документы</h2>
          <div className='document__buttons'>
            <a href='https://cloud.mail.ru/public/7FNk/x4DxKax58' target='_blank' rel='noreferrer'><Button color={'white'} text={'положение'} width='full' /></a>
            <a href='https://cloud.mail.ru/public/rMTM/Ah1cwwKU6' target='_blank' rel='noreferrer'><Button color={'white'} text={'регламент'} width='full' /></a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Document;
