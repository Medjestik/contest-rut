import type { FC, FormEvent } from 'react';
import type { ISelectOption } from '../../../shared/components/Select/interface/interface';
import type { IFormFieldError } from '../../../shared/components/Form/interface/interface';
import type { ICaseItem } from '../../../features/case/interface/interface';
import type { IParticipant } from '../../../features/participant/interface/interface';
import type { IUniversity, ICourse } from '../interface/interface';

import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import * as api from '../../../shared/utils/api';

import MainLayout from '../../../shared/components/Layout/ui/MainLayout';
import Form from '../../../shared/components/Form/ui/Form';
import FormField from '../../../shared/components/Form/components/FormField/ui/FormField';
import FormInputString from '../../../shared/components/Form/components/FormInput/ui/FormInputString';
import FormSubmit from '../../../shared/components/Form/components/FormSubmit/ui/FormSubmit';
import Link from '../../../shared/components/Link/ui/Link';
import SelectWithSearch from '../../../shared/components/Select/ui/SelectWithSearch';
import CaseList from '../../../features/case/ui/CaseList';
import ParticipantList from '../../../features/participant/ui/ParticipantList';
import Preloader from '../../../shared/components/Preloader/ui/Preloader';

import CaseDetailPopup from '../../../features/case/ui/CaseDetailPopup';
import AddParticipantPopup from '../../../features/participant/ui/AddParticipantPopup';
import ConfirmRemovePopup from '../../../shared/components/Popup/ui/ConfirmRemovePopup';
import RegistrationSuccessPopup from './RegistrationSuccessPopup';
import RegistrationErrorPopup from './RegistrationErrorPopup';

import '../styles/style.css';

interface IRegistrationProps {
  windowWidth: number;
}

const Registration: FC<IRegistrationProps> = ({ windowWidth }) => {

  const initialCase = useMemo(() => ({
    id: '',
    situation: '',
    problem: '',
    title: '',
    icon: '',
    company: '',
  }), []);
  
  const initialUniversity = useMemo(() => ({
    id: 0, 
    name: 'Введите название..',
  }), []);
  
  const initialParticipant = useMemo(() => ({
    firstName: '',
    secondName: '',
    middleName: '',
    course: { id: 0, name: 'Выберите курс..' },
    group: '',
    mail: '',
    phone: '',
    telegram: '',
    uniqId: '',
    subdivision: { id: 0, name: 'Выберите институт..' },
  }), []);

  const navigate = useNavigate();

  const [cases, setCases] = useState<ICaseItem[]>([]);
  const [currentCase, setCurrentCase] = useState<ICaseItem>(initialCase);
  const [selectCaseId, setSelectCaseId] = useState<string>('');

  const [university, setUniversity] = useState<IUniversity[]>([]);
  const [currentUniversity, setCurrentUniversity] = useState<ISelectOption>(initialUniversity);

  const [courses, setCourses] = useState<ICourse[]>([]);

  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [currentParticipant, setCurrentParticipant] = useState<IParticipant>(initialParticipant);

  const [name, setName] = useState<string>('');
  const [isShowErrorName, setIsShowErrorName] = useState<IFormFieldError>({ isShow: false, text: '' });
  const [login, setLogin] = useState<string>('');
  const [isShowErrorLogin, setIsShowErrorLogin] = useState<IFormFieldError>({ isShow: false, text: '' });
  const [password, setPassword] = useState<string>('');
  const [isShowErrorPassword, setIsShowErrorPassword] = useState<IFormFieldError>({ isShow: false, text: '' });

  const [errorText, setErrorText] = useState<string>('');

  const [isCheckFirst, setIsCheckFirst] = useState<boolean>(false);
  const [isCheckSecond, setIsCheckSecond] = useState<boolean>(false);
  const [isCheckThird, setIsCheckThird] = useState<boolean>(false);

  const [isOpenCaseDetailPopup, setIsOpenCaseDetailPopup] = useState<boolean>(false);
  const [isOpenAddParticipantPopup, setIsOpenAddParticipantPopup] = useState<boolean>(false);
  const [isOpenEditParticipantPopup, setIsOpenEditParticipantPopup] = useState<boolean>(false);
  const [isOpenRemoveParticipantPopup, setIsOpenRemoveParticipantPopup] = useState<boolean>(false);
  const [isOpenRegistrationSuccessPopup, setIsOpenRegistrationSuccessPopup] = useState<boolean>(false);
  const [isOpenRegistrationErrorPopup, setIsOpenRegistrationErrorPopup] = useState<boolean>(false);

  const [isBlockSubmitButton, setIsBlockSubmitButton] = useState<boolean>(true);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);

  const handleChangeName = (value: string) => {
    setName(value);
    setIsShowErrorName(value.length > 0 ? { isShow: false, text: '' } : { isShow: true, text: 'Поле не может быть пустым' });
  };

  const handleChangeLogin = (value: string) => {
    setLogin(value);
    setIsShowErrorLogin(value.length > 5 ? { isShow: false, text: '' } : { isShow: true, text: 'Логин должен содержать более 5 символов' });
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
    setIsShowErrorPassword(value.length > 5 ? { isShow: false, text: '' } : { isShow: true, text: 'Пароль должен содержать более 5 символов' });
  };

  const handleSelectCase = (caseId: string) => {
    setSelectCaseId(caseId);
  };

  const handleChangeUniversity = (option: ISelectOption) => {
    setCurrentUniversity(option);
  };

  const handleAddParticipant = (participant: IParticipant) => {
    setParticipants((prevState => [...prevState, { ...participant, uniqId: uuidv4()}]));
    closePopup();
  };

  const handleEditParticipant = (participant: IParticipant) => {
    setParticipants(prevState =>
      prevState.map(item =>
        participant.uniqId === item.uniqId ? participant : item
      )
    );
    closePopup();
  };

  const handleRemoveParticipant = () => {
    setParticipants(prevState =>
      prevState.filter(item => item.uniqId !== currentParticipant.uniqId)
    );
    closePopup();
  };

  const openCaseDetailPopup = (data: ICaseItem) => {
    setCurrentCase(data);
    setIsOpenCaseDetailPopup(true);
  };

  const openAddParticipantPopup = () => {
    setCurrentParticipant(initialParticipant);
    setIsOpenAddParticipantPopup(true);
  };

  const openEditParticipantPopup = (participant: IParticipant) => {
    setCurrentParticipant(participant);
    setIsOpenEditParticipantPopup(true);
  };

  const openRemoveParticipantPopup = (participant: IParticipant) => {
    setCurrentParticipant(participant);
    setIsOpenRemoveParticipantPopup(true);
  };

  const closeRegistration = () => {
    navigate('/');
  };

  const closePopup = () => {
    setIsOpenCaseDetailPopup(false);
    setIsOpenAddParticipantPopup(false);
    setIsOpenEditParticipantPopup(false);
    setIsOpenRemoveParticipantPopup(false);
    setIsOpenRegistrationErrorPopup(false);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    setIsBlockSubmitButton(true);
    e.preventDefault();
    const data = {
      name,
      login,
      password,
      university: currentUniversity.id,
      case: selectCaseId,
      participants: participants.map((item: IParticipant) => ({
        first_name: item.firstName,
        last_name: item.secondName,
        middle_name: item.middleName,
        email: item.mail,
        phone: item.phone,
        group_name: item.group,
        level: item.course.id,
        telegram_url: item.telegram,
        subdivision: item.subdivision.id === 0 ? '' : item.subdivision.name
      })),
    };
    api.registration(data)
    .then(() => {
      setIsOpenRegistrationSuccessPopup(true);
    })
      .catch(async (err) => {
          let errorText = 'Произошла ошибка';
          try {
            const res = await err.json();
            if (res.login && res.login.length > 0) {
              errorText = res.login[0];
            } else {
              setErrorText('Попробуйте позже или обратитесь в техническую поддержку.'); 
            }
          } catch (e) {
            console.log('Ошибка при разборе JSON:', e);
          }
          setErrorText(errorText);
          setIsOpenRegistrationErrorPopup(true);
        })
    .finally(() => setIsBlockSubmitButton(false));
  };

  useEffect(() => {
    if (name.length > 0 && login.length > 5 && password.length > 5 && selectCaseId.length > 0 && currentUniversity.id !== 0 && participants.length === 4 && isCheckFirst && isCheckSecond && isCheckThird) {
      setIsBlockSubmitButton(false);
    } else {
      setIsBlockSubmitButton(true);
    }
  }, [name, login, password, selectCaseId, currentUniversity, participants, isCheckFirst, isCheckSecond , isCheckThird]);

  const getData = () => {
    setIsLoadingData(true);
    Promise.all([
      api.getRegisteredCases(),
      api.getUniversity(),
      api.getCourses(),
    ])
    .then(([cases, university, courses]) => {
      setCases(cases);
      setUniversity(university.map((elem: IUniversity) => { return { ...elem, name: elem.name_search };}));
      setCourses(courses);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setIsLoadingData(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {
    isLoadingData
    ?
    <Preloader />
    :
    <MainLayout windowWidth={windowWidth} isLoggedIn={false} >
      <h1 className='layout__title'>Регистрация</h1>

      <Form formName={'registration-form'} onSubmit={onSubmit}>

        <FormField title='Название команды' subtitle='Придумайте название для вашей команды'>
          <FormInputString 
            value={name} 
            placeholder='Введите название..' 
            onChange={handleChangeName} 
            error={isShowErrorName} 
          />
        </FormField>

        <FormField title='Логин команды' subtitle='Придумайте логин для вашей команды'>
          <FormInputString 
            value={login} 
            placeholder='Введите логин..' 
            onChange={handleChangeLogin} 
            error={isShowErrorLogin} 
          />
        </FormField>

        <FormField title='Пароль команды' subtitle='Придумайте пароль для вашей команды'>
          <FormInputString 
            value={password} 
            placeholder='Введите логин..' 
            onChange={handleChangePassword} 
            error={isShowErrorPassword} 
          />
        </FormField>

        <FormField title='Проблемы соревнований' subtitle='Выберите проблему для вашей команды'>
          <CaseList items={cases} selectItemId={selectCaseId} onSelect={handleSelectCase} onDetail={openCaseDetailPopup} windowWidth={windowWidth} />
        </FormField>

        <FormField title='Информация о ВУЗе' subtitle='Введите название образовательной организации, которую представляет ваша команда'>
          <SelectWithSearch 
            options={university}
            currentOption={currentUniversity} 
            onChooseOption={handleChangeUniversity}
          />
        </FormField>

        <FormField title='Информация о команде' subtitle='Добавьте участников вашей команды (обязательно 4 участника)'>
          <ParticipantList 
            items={participants} 
            onAdd={openAddParticipantPopup} 
            onEdit={openEditParticipantPopup} 
            onRemove={openRemoveParticipantPopup} 
            windowWidth={windowWidth}
          />
          
        </FormField>

        <FormField title='Персональные данные'>
          <div className='checkbox__item'>
            <label className='checkbox'>
              <input 
                name='registration-check-first'
                type='checkbox'
                id='registration-check-first'
                defaultChecked={isCheckFirst}
                onChange={() => setIsCheckFirst(!isCheckFirst)}
              >
              </input>
              <span></span>
            </label>
            <div className='checkbox__text'>Подтверждаю своё согласие и получение мною согласия третьих лиц на передачу своих и их персональных данных на обработку.</div>
          </div>
          <div className='checkbox__item checkbox__item_margin_top'>
            <label className='checkbox'>
              <input 
                name='registration-check-second'
                type='checkbox'
                id='registration-check-second'
                defaultChecked={isCheckSecond}
                onChange={() => setIsCheckSecond(!isCheckSecond)}
              >
              </input>
              <span></span>
            </label>
            <div className='checkbox__text'>
              {'Подтверждаю, что субъекты персональных данных лично ознакомились с '}
              <Link text='Положением об обработке персональных данных' path='https://rut-miit.ru/org/privacy' />
              {' РУТ (МИИТ) и принимают условия этого Положения.'}
            </div>
          </div>
          <div className='checkbox__item checkbox__item_margin_top'>
            <label className='checkbox'>
              <input 
                name='registration-check-third'
                type='checkbox'
                id='registration-check-third'
                defaultChecked={isCheckThird}
                onChange={() => setIsCheckThird(!isCheckThird)}
              >
              </input>
              <span></span>
            </label>
            <div className='checkbox__text'>
            {'Подтверждаю, что участники команды ознакомлены и согласны с условиями и правилами участия в соревнованиях, изложенными в '}
              <Link text='Положении' path='https://cloud.mail.ru/public/7FNk/x4DxKax58' />
              {' и '}
              <Link text='Регламенте' path='https://cloud.mail.ru/public/NqV9/sGGmDQ999' />
              {'.'}
            </div>
          </div>
        </FormField>

        <FormSubmit text='Отправить анкету' isBlock={isBlockSubmitButton} /> 

      </Form>

      {
        isOpenCaseDetailPopup &&
        <CaseDetailPopup 
          isOpen={isOpenCaseDetailPopup} 
          onClose={closePopup} 
          currentCase={currentCase} 
        />
      }

      {
        isOpenAddParticipantPopup &&
        <AddParticipantPopup
          isOpen={isOpenAddParticipantPopup} 
          courses={courses}
          currentParticipant={currentParticipant}
          onClose={closePopup} 
          onSubmit={handleAddParticipant}
          isRut={currentUniversity.id === 763 ? true : false}
        />
      }

      {
        isOpenEditParticipantPopup &&
        <AddParticipantPopup
          isOpen={isOpenEditParticipantPopup} 
          courses={courses}
          currentParticipant={currentParticipant}
          onClose={closePopup} 
          onSubmit={handleEditParticipant}
          isRut={currentUniversity.id === 763 ? true : false}
        />
      }

      {
        isOpenRemoveParticipantPopup &&
        <ConfirmRemovePopup
          isOpen={isOpenRemoveParticipantPopup} 
          onClose={closePopup} 
          onRemove={handleRemoveParticipant}
        />
      }

      {
        isOpenRegistrationSuccessPopup &&
        <RegistrationSuccessPopup
          isOpen={isOpenRegistrationSuccessPopup} 
          onClose={closeRegistration}
        />
      }

      {
        isOpenRegistrationErrorPopup &&
        <RegistrationErrorPopup
          isOpen={isOpenRegistrationErrorPopup} 
          onClose={closePopup} 
          errorText={errorText}
        />
      }

    </MainLayout>
    }
    </>
  );
};

export default Registration; 
