import { type FC, useState, useRef, useEffect } from 'react';

import './MethodologyAccordion.css';

interface IMethodologyAccordionProps {
  count: number;
  title: string;
  video: string; 
  content: string[];
}

const MethodologyAccordion: FC<IMethodologyAccordionProps> = ({ count, title, video, content }) => {

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
    <li className={`methodology-accordion__item ${isOpenAccordion ? 'methodology-accordion__item_state_open' : ''}`}>
      <div ref={mainRef} className='accordion__main' onClick={handleToggleAccordion}>
        <span className='methodology-accordion__count'>{count}</span>
        <h4 className='methodology-accordion__title'>{title}</h4>
        <div className='methodology-accordion__icon'></div>
      </div>
      <div style={{ maxHeight: `${height}` }} ref={childrenRef} className='methodology-accordion__children'>
      <div className='methodology-accordion-video'>
        <video
          src={video}
          loop
          controls
          playsInline
          className='methodology-accordion-video__element'
        />
      </div>
        {
          content.map((text, i) => (
            <p className='methodology-accordion__text' key={i}>{text}</p>
          ))
        }
        
      </div>
    </li>
  );
};

export default MethodologyAccordion;
