import type { FC } from 'react';
import type { IAccordionItemProps } from '../interface/interface';

import { useState, useEffect, useRef } from 'react';

const AccordionItem: FC<IAccordionItemProps> = ({ item }) => {

  const mainRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);

  const [isOpenAccordion, setIsOpenAccordion] = useState(false);
  const [height, setHeight] = useState(0);

  const handleToggleAccordion = () => {
    setIsOpenAccordion((prevState) => !prevState);
  };

  useEffect(() => {
    if (mainRef.current && childrenRef.current) {
      const mainHeight = mainRef.current.clientHeight;
      const childrenHeight = childrenRef.current.clientHeight;
      setHeight(isOpenAccordion ? mainHeight + childrenHeight : mainHeight);
    }
  }, [isOpenAccordion]);

  return (
    <li style={{ height }} className={`accordion__item ${isOpenAccordion ? 'accordion__item_state_open' : ''}`}>
      <div ref={mainRef} className='accordion__main' onClick={handleToggleAccordion}>
        <h4 className='accordion__title'>{item.title}</h4>
        <div className='accordion__icon'></div>
      </div>
      <div ref={childrenRef} className='accordion__children'>
        <p className='accordion-text'>{item.content}</p>
      </div>
    </li>
  );
};

export default AccordionItem;
