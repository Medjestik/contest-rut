import type { FC } from 'react';

import { useTranslation } from 'react-i18next';

import Button from '../../../../shared/components/Button/ui/Button';

import './Document.css';

const Document:FC = () => {

  const { t } = useTranslation();

  const guidelineBtnStyle = {
    background: '#ACF860',
    color: '#6B1DFF',
    textAlign: 'center' as const,
    border: 'none'
  };
  
  const rulesBtnStyle = {
    background: '#FF7A28',
    color: '#FFFFFF',
    textAlign: 'center' as const,
    border: 'none'
  };

  return (
    <div className='i-document' id='document'>
      <h2 className='i-document__title'>{t('document-title')}</h2> 
      <div className='i-document__buttons'>
        <Button style={guidelineBtnStyle} text={t('document-guideline')} width='full' type='link' link='https://cloud.mail.ru/public/7FNk/x4DxKax58' />
        <Button style={rulesBtnStyle} text={t('document-rules')} width='full' type='link' link='https://cloud.mail.ru/public/NqV9/sGGmDQ999' />
      </div>
    </div>
  );
};

export default Document; 
