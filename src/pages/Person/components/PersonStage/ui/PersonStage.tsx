import type { FC } from 'react';
import type { IPersonStageProps, IStagePath } from '../../../interface/interface';

import { useContext, useState } from 'react';

import { CurrentTeamContext } from '../../../../../shared/context/team';

import PersonVideo from '../../PersonVideo/ui/PersonVideo';
import Button from '../../../../../shared/components/Button/ui/Button';

import '../styles/style.css';

const PersonStage: FC<IPersonStageProps> = ({ stage, onOpen, onLink, onUploadVideo, onChangeStage }) => {

  const initialPath: IStagePath | null = stage.id === 5
  ? null
  : (stage.stage_paths && stage.stage_paths.length > 0 ? stage.stage_paths[0] : null);

  const [currentPath, setCurrentPath] = useState<IStagePath | null>(initialPath);

  const videoUrl =
  stage.id === 5
    ? stage.url_video
    : currentPath?.url_video ?? '';

  const btnStyle = {
    margin: '0',
    fontSize: '18px',
    lineHeight: '18px',
    padding: '8px 32px',
  };

  const currentTeam = useContext(CurrentTeamContext);

  const handleChangePath = (path: IStagePath) => {
    setCurrentPath(path);
  };

  const renderPathName = (path: IStagePath) => {
    switch (path.path.position) {
      case 2:
        return 'Классический';
      case 3:
        return 'Дизайн-мышления';
      case 4:
        return 'Со схемами и моделями';
      default:
        return 'Базовый';
    }
  };

  return (
    <div className='person-stage'>
      <h2 className='person-stage__title'>{stage.name || ''}</h2>
      {
       stage.stage_paths && stage.id !== 5 &&
        <>
        <ul className='person-stage__paths'>
          {
            stage.stage_paths.map((elem, i) => (
              <li
                key={elem.id ?? i}
                onClick={() => handleChangePath(elem)}
                className={currentPath?.id === elem.id ? 'person-stage__path active' : 'person-stage__path'}
              >
                {`Путь ${i + 1}`}
              </li>
            ))
          }
        </ul>
        {
          currentPath &&
          <h2 className='person-stage__path-title'>Путь «{renderPathName(currentPath)}»</h2>
        }
        </>
      }
      <>
        {stage.description
          ? stage.description.split('\r\n').map((paragraph, index) => (
              <p className='person-stage__subtitle' key={index}>{paragraph}</p>
            ))
          : ''}
      </>
      <div className='person-stage__container'>
        <div className='person-stage__video'>
          <h4 className='person-stage__row-title'>1. Инструкция</h4>
          <PersonVideo key={videoUrl} url={videoUrl} />
        </div>
        <div className='person-stage__info'>
          <div className='person-stage__row'>
            <h4 className='person-stage__row-title'>2. Шаблон</h4>
            <p className='person-stage__row-subtitle'>Скачайте и изучите шаблон.</p>
            <Button style={btnStyle} text='Скачать' type='link' link={stage.url_template} />
          </div>
          <div className='person-stage__row'>
            <h4 className='person-stage__row-title'>3. Задание</h4>
            {
              stage.team_file_count > 0 && stage.id !== 5
              ?
              <>
                <p className='person-stage__row-subtitle'>Шаблон загружен, вы можете перейти к следующему этапу.</p>
                {
                  currentTeam.current_stage === stage.id &&
                  <Button style={btnStyle} text='Перейти' onClick={onChangeStage} />
                }
              </>
              :
              stage.team_file_count > 0 && stage.id === 5
              ?
                <>
                <p className='person-stage__row-subtitle'>Шаблон успешно загружен.</p>
              </>
              :
              <>
                <p className='person-stage__row-subtitle'>Прикрепите заполненный шаблон. Для файлов более 10MB прикрепите ссылку.</p>
                <div className='person-stage__btn-container'>
                  <Button style={btnStyle} text='Добавить файл' onClick={onOpen} />
                  <Button style={btnStyle} text='Прикрепить ссылку' onClick={onLink} />
                </div>
                
              </>
            }
          </div>
          {
            stage.id === 5 &&
            <div className='person-stage__row'>
              <h4 className='person-stage__row-title'>4. Видеоролик</h4>
              {
                stage.team_videos.length > 0 
                ?
                <p className='person-stage__row-subtitle'>Видео успешно загружено.</p>
                :
                <>
                <p className='person-stage__row-subtitle'>Загрузите ссылку на видеоролик.</p>
                <Button style={btnStyle} text='Прикрепить ссылку' onClick={onUploadVideo} />
                </>
              }
            </div>
          }
        </div>
      </div>
      {
        stage.id === 5 && stage.team_file_count > 0 && stage.team_videos.length > 0 &&
        <div className='person-stage__container'>
          <div className='person-stage__row'>
            <h4 className='person-stage__row-title'>5. Результаты</h4>
            <p className='person-stage__row-subtitle'>Ваша команда отлично справилась со всеми этапами соревнований. Вы проделали большую работу: проанализировали проблему, предложили идеи и создали прототип. Теперь остаётся только немного подождать. В ближайшее время будут объявлены итоги, и вы узнаете, как эксперты оценили ваши решения. Спасибо за ваш труд. Результаты уже совсем скоро!</p>
            <p className='person-stage__row-subtitle'>Подпишитесь на канал проектных соревнований и следите за новостями: сроки, ответы на вопросы и результаты.</p>
            <Button style={btnStyle} text='Подписаться' type='link' link='https://t.me/contestmiit' />
          </div>
        </div>
      }
    </div>
  );
};

export default PersonStage;
