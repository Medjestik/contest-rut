import type { FC } from 'react';
import type { ICase } from '../../../shared/components/App/interface';

import * as api from '../../../shared/utils/api';

import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import ExpertForms from '../components/ExpertForms/ui/ExpertForms';

import Preloader from '../../../shared/components/Preloader/ui/Preloader';
import Button from '../../../shared/components/Button/ui/Button';

import '../styles/style.css';

const btnStyle = {
  width: '100%',
  margin: 'auto 0 0 0',
  fontSize: '16px',
  height: '40px',
  borderRadius: '12px',
  lineHeight: '16px',
  padding: '6px 14px',
};

const Expert: FC = () => {
  const navigate = useNavigate();

  const [nominations, setNominations] = useState<ICase[]>([]);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);

  const getData = () => {
    setIsLoadingData(true);
    const token = localStorage.getItem('token');
    if (token) {
      api.getRegisteredCases()
        .then((res) => setNominations(res))
        .catch((err) => console.error(err))
        .finally(() => setIsLoadingData(false));
    }
  };

  const handleOpenNomination = (nomination: ICase) => {
    navigate(`/main/nomination/${nomination.id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoadingData) return <Preloader />;

  return (
    <div className="expert">
      <Routes>
        {/* Главная страница номинаций */}
        <Route
          path="/"
          element={
            <>
              <h2 className="expert__title">Выберите номинацию для оценки решений:</h2>
              <ul className="expert-nominations__list">
                {nominations.map((elem) => (
                  <li className="expert-nominations__item" key={elem.id}>
                    <img
                      className={`expert-nomination__item-icon expert-nomination__item-icon_type_${elem.id}`}
                      src={elem.icon}
                      alt=""
                    />
                    <h4 className="expert-nomination__item-text">{elem.title}</h4>
                    <p className="expert-nomination__item-caption">{elem.problem}</p>
                    <Button
                      text="Выбрать"
                      onClick={() => handleOpenNomination(elem)}
                      style={btnStyle}
                    />
                  </li>
                ))}
              </ul>
            </>
          }
        />

        {/* Страница конкретной номинации */}
        <Route path="/nomination/:nominationId" element={<ExpertForms />} />
      </Routes>
    </div>
  );
};

export default Expert;
