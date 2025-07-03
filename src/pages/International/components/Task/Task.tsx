import { useTranslation } from 'react-i18next';

import './Task.css';

const Task = () => {

  const { t } = useTranslation();

  return (
    <div className='i-task' id='task'>
      <h2 className='i-task__title'>{t('task-title')}</h2>
      <div className='i-task__text-container'>
        <h2 className='i-task__mobile-title'>{t('task-title')}</h2>
        <p className='i-task__text'>{t('task-text-1')}</p>
        <p className='i-task__text'>{t('task-text-2')}</p>
        <div className='i-task__text-icon'></div>
      </div>
      <div className='i-task__img'></div>
    </div>
  );
};

export default Task;
