import { type FC, useState, useRef, useEffect } from 'react';

import './FaqAccordion.css';

interface IFaqAccordionProps {
  title: string;
  text: string;
  link?: string;
}

const FaqAccordion: FC<IFaqAccordionProps> = ({ title, text, link }) => {

  const mainRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);

  const [isOpenAccordion, setIsOpenAccordion] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');

  const handleToggleAccordion = () => {
    setIsOpenAccordion((prevState) => !prevState);
    if (childrenRef.current) {
      setHeight(isOpenAccordion ? '0px' : `${childrenRef.current.scrollHeight}px`);
    }
  };

  useEffect(() => {
    if (childrenRef.current) {
      setHeight(isOpenAccordion ? `${childrenRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpenAccordion]);

  return (
    <li className={`faq-accordion__item ${isOpenAccordion ? 'faq-accordion__item_state_open' : ''}`}>
      <div ref={mainRef} className='faq-accordion__main' onClick={handleToggleAccordion}>
        <h4 className='faq-accordion__title'>{title}</h4>
        <div className='faq-accordion__icon'></div>
      </div>
      <div style={{ maxHeight: `${height}` }} ref={childrenRef} className='faq-accordion__children'>
        <p className='faq-accordion__text'>{text}</p>
        {
          link &&
          <a className='faq-accordion__link' href={link} target='_blank' rel='noreferrer'>{link}</a>
        }
      </div>
    </li>
  );
};

export default FaqAccordion;
