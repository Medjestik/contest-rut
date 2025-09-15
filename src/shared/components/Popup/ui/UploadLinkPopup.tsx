import type { FC, FormEvent } from 'react';
import type { IUploadLinkPopupProps } from '../interface/interface';
import type { IFormFieldError } from '../../Form/interface/interface';

import { useState, useEffect } from 'react';

import Popup from './Popup';
import Form from '../../Form/ui/Form';
import Button from '../../Button/ui/Button';
import FormField from '../../Form/components/FormField/ui/FormField';
import FormInputString from '../../Form/components/FormInput/ui/FormInputString';
import FormSubmit from '../../Form/components/FormSubmit/ui/FormSubmit';
import FormError from '../../Form/components/FormError/ui/FormError';

const UploadLinkPopup: FC<IUploadLinkPopupProps> = ({ isOpen, onClose, onUpload, isLoading, isShowRequestError }) => {

  const btnStyle = {
    width: '100%',
    padding: '8px 14px',
    borderRadius: '12px',
    fontSize: '18px',
    lineHeight: '1',
  };

  const [title, setTitle] = useState<string>('');
  const [isShowErrorTitle, setIsShowErrorTitle] = useState<IFormFieldError>({ isShow: false, text: '' });

  const [link, setLink] = useState<string>('');
  const [isShowErrorLink, setIsShowErrorLink] = useState<IFormFieldError>({ isShow: false, text: '' });

  const [isConfirmLink, setIsConfirmLink] = useState<boolean>(false);

  const [isBlockSubmitButton, setIsBlockSubmitButton] = useState<boolean>(true);


  const handleChangeTitle = (value: string) => {
    setTitle(value);
    setIsShowErrorTitle(value.length > 0 ? { isShow: false, text: '' } : { isShow: true, text: 'Поле не может быть пустым' });
  };

  const handleChangeLink = (value: string) => {
    const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
    setLink(value);
    if (value.length === 0) {
      setIsShowErrorLink({ isShow: true, text: 'Поле не может быть пустым' });
    } else if (!urlPattern.test(value)) {
      setIsShowErrorLink({ isShow: true, text: 'Введите корректную ссылку' });
    } else {
      setIsShowErrorLink({ isShow: false, text: '' });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { name: title, link: link };
    onUpload(data);
  };

  useEffect(() => {
    if (
      title.length < 1 ||
      link.length < 1 ||
      isShowErrorLink.isShow ||
      !isConfirmLink
    ) {
      setIsBlockSubmitButton(true);
    } else {
      setIsBlockSubmitButton(false);
    }
  }, [title, link, isShowErrorLink, isConfirmLink]);

  useEffect(() => {
    setTitle('');
    setIsShowErrorTitle({ text: '', isShow: false });
    setLink('');
    setIsShowErrorLink({ text: '', isShow: false });
    setIsBlockSubmitButton(true);
  }, [isOpen]);

  return (
    <Popup isOpen={isOpen} onClose={onClose} popupWidth='large' closeOutside>
      <h2 className='popup__title'>Добавление ссылки</h2>
      <p className='popup__subtitle'>Введите наименование и прикрепите ссылку</p>

      <Form formName='upload-file' type='popup' onSubmit={handleSubmit}>
        <FormField title='Наименование'>
          <FormInputString 
            value={title} 
            placeholder='Введите наименование..' 
            onChange={handleChangeTitle} 
            error={isShowErrorTitle} 
          />
        </FormField>
        <FormField title='Ссылка'>
          <FormInputString 
            value={link} 
            placeholder='Введите ссылку..' 
            onChange={handleChangeLink} 
            error={isShowErrorLink} 
          />
        </FormField>
        <FormField>
          <div className='checkbox__item'>
            <label className='checkbox'>
              <input 
                name='upload-link-confirm'
                type='checkbox'
                id='upload-link-confirm'
                defaultChecked={isConfirmLink}
                onChange={() => setIsConfirmLink(!isConfirmLink)}
              >
              </input>
              <span></span>
            </label>
            <div className='checkbox__text'>Мы проверили, что файл доступен для любых пользователей без авторизации.</div>
          </div>
        </FormField>

        <div className='form__buttons'>
          <Button style={btnStyle} text='Отменить' color='cancel' onClick={onClose} />
          <FormSubmit text='Загрузить' isBlock={isBlockSubmitButton} isLoading={isLoading} loadingText='Загрузка..' />
        </div>
        <FormError isShow={isShowRequestError} text='К сожалению, произошла ошибка!' />
      </Form>
    </Popup>
  );
};

export default UploadLinkPopup;
