import type { FC } from 'react';
import type { IStagesCardProps } from '../interface/interface';

import '../styles/style.css';


const StagesCard: FC<IStagesCardProps> = ({ card }) => {
  
  
  return (
    <li className={`stages__card stages__card_type_${card.color}`}>
      <span className='stages__card-date'>{card.date}</span>
      <h4 className='stages__card-title'>{card.title}</h4>
      {
        card.text?.map((paragraph, i) => (
          <p className='stages__card-text' key={i}>{paragraph}</p>
        ))
      }
    </li>
  );
};

export default StagesCard;
