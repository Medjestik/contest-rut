import type { FC } from 'react';
import type { IFormSubmit } from '../../../interface/interface';

import '../styles/style.css';

const FormSubmit: FC<IFormSubmit> = ({ text, isBlock }) => {

  return (
    <>
    <button 
      className={`form__submit ${isBlock ? 'form__submit_type_block' : ''}`} 
      type='submit'
      disabled={isBlock}
    >
      {text}
    </button>
    </>
  );
};

export default FormSubmit;
