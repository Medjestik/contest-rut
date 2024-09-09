import type { FC } from 'react';
import type { IFormSubmit } from '../../../interface/interface';

import '../styles/style.css';

const FormSubmit: FC<IFormSubmit> = ({ text, isBlock }) => {

  return (
    <>
    {
      isBlock
      ?
      <div className='form__submit form__submit_type_block'>
        {text}
      </div>
      :
      <button className='form__submit' type='submit'>
        {text}
      </button>
    }
    </>
  );
};

export default FormSubmit;
