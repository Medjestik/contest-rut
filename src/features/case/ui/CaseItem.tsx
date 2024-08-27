import type { FC } from 'react';
import type { ICaseItemProps } from '../interface/interface';

import Button from '../../../shared/components/Button/ui/Button';

import '../styles/style.css';

const CaseItem: FC<ICaseItemProps> = ({ item, selectItemId, onSelect, onDetail }) => {

  const btnStyle = {
    margin: '0 0 0 40px',
    padding: '8px 14px',
    borderRadius: '12px',
    fontSize: '18px',
    lineHeight: '1',
  };

  return (
    <li className='case-item'>
      <label className='radio'>
        <input 
          name='registration-case'
          type='radio'
          id='registration-case'
          defaultChecked={selectItemId === item.id}
          onChange={() => onSelect(item.id)} 
        >
        </input>
        <span></span>
      </label>
      
      <h4 className='case-item__title'>Кейс «{item.title}»</h4>
      <img className='case-item__icon' src={item.icon} alt='иконка'></img>
      <Button text='Подробнее' color='secondary' style={btnStyle} onClick={() => onDetail(item)}></Button>
    </li>
  );
};

export default CaseItem;
