import type { FC } from 'react';
import type { IPersonStageProps } from '../../../interface/interface';

import { useContext } from 'react';

import { CurrentTeamContext } from '../../../../../shared/context/team';

import PersonVideo from '../../PersonVideo/ui/PersonVideo';
import Button from '../../../../../shared/components/Button/ui/Button';

import '../styles/style.css';

const PersonStage: FC<IPersonStageProps> = ({ stage, onOpen, onLink, onUploadVideo, onChangeStage }) => {

  const btnStyle = {
    margin: '0',
    fontSize: '18px',
    lineHeight: '18px',
    padding: '8px 32px',
  };

  const currentTeam = useContext(CurrentTeamContext);
  
  return (
    <div className='person-stage'>
      <h2 className='person-stage__title'>{stage.name || ''}</h2>
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
          <PersonVideo url={stage.url_video} />
          <p className='person-stage__row-subtitle person-stage__row-subtitle_m_t'>На первом этапе проектных соревнований вам предстоит использовать несколько полезных инструментов. Они помогут вам лучше понять текущую ситуацию, выявить ключевые факторы, которые на неё влияют, и определить, кого ещё стоит привлечь к проекту.</p>
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
              <h4 className='person-stage__row-title'>Шаг 4. Видеоролик</h4>
              {
                stage.team_videos.length > 0 
                ?
                <p className='person-stage__row-subtitle'>Видео успешно загружено. Ожидайте результатов.</p>
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
    </div>
  );
};

export default PersonStage;
