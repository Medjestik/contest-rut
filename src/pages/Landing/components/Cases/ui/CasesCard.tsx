import type { FC } from 'react';
import type { ICasesCardProps } from '../interface/interface';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../../shared/components/Button/ui/Button';
import { EROUTES } from '../../../../../shared/utils/ERoutes';

import '../styles/style.css';

const btnStyle = {
  margin: '0',
  fontSize: '20px',
  padding: '12px 20px',
};

const CasesCard: FC<ICasesCardProps> = ({ card }) => {
  const navigate = useNavigate();

  const navigateToInt = () => {
    navigate(EROUTES.INTERNATIONAL);
    window.scrollTo(0, 0);
  };

  return (
    <li className='cases__card'>
      <h4 className='cases__card-title'>Ситуация</h4>
      <p className='cases__card-text'>{card.situation}</p>
      <h4 className='cases__card-title cases__card-title_type_problem'>Сбой</h4>
      <p className='cases__card-text'>{card.problem}</p>
      {
        card.id === 'acc5485f-2ccf-4f68-9f56-68326e191d65' &&
        <>
          <p className='cases__card-text cases__card-text-warning '>Международный трек — регистрация недоступна.</p>
          <Button text='Подробнее' style={btnStyle} onClick={navigateToInt} />
        </>
      }
      <div className='cases__card-footer'>
        <img className='cases__card-icon' src={card.icon} alt='иконка'></img>
      </div>
    </li>
  );
};

export default CasesCard;
