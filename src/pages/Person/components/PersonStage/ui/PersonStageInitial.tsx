import type { FC } from 'react';
import type { IPersonStageProps } from '../../../interface/interface';

import '../styles/style.css';

const PersonStageInitial: FC<IPersonStageProps> = ({ stage }) => {

  return (
    <div className='person-stage'>
      <h2 className='person-stage__title'>{stage.name || ''}</h2>
      <p className='person-stage__subtitle'>Поздравляем с участием в первых проектных соревнованиях студентов транспорта! Вам предстоит заполнить все поля и что-нибудь сделать. Ниже - кейс. Ля-ля-ля.</p>
    </div>
  );
};

export default PersonStageInitial;
