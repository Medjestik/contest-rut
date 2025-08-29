import type { FC } from 'react';
import type { IStagesCardProps } from '../interface/interface';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../../shared/components/Button/ui/Button';
import { EROUTES } from '../../../../../shared/utils/ERoutes';

import '../styles/style.css';

const btnStyle = {
  margin: '50px 0 0',
};

const isHideReg = true;

const StagesCard: FC<IStagesCardProps> = ({ card }) => {
  
  const navigate = useNavigate();

  const navigateToReg = () => {
    navigate(EROUTES.REGISTRATION);
  };
  
  return (
    <li className={`stages__card stages__card_type_${card.color}`}>
      <span className='stages__card-date'>{card.date}</span>
      <h4 className='stages__card-title'>{card.title}</h4>
      {
        card.text?.map((paragraph, i) => (
          <p className='stages__card-text' key={i}>{paragraph}</p>
        ))
      }
      {
        card.type === 'registration' && !isHideReg &&
        <Button text='Зарегистрироваться' width='default' color='secondary' style={btnStyle} onClick={navigateToReg} />
      }
    </li>
  );
};

export default StagesCard;
