import type { ICriteria, IScore } from '../../../interface/interface';
import { useEffect, useState, type FC, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Preloader from '../../../../../shared/components/Preloader/ui/Preloader';
import Button from '../../../../../shared/components/Button/ui/Button';
import Form from '../../../../../shared/components/Form/ui/Form';
import FormField from '../../../../../shared/components/Form/components/FormField/ui/FormField';
import FormSubmit from '../../../../../shared/components/Form/components/FormSubmit/ui/FormSubmit';

import * as api from '../../../../../shared/utils/api';

import '../styles/style.css';

const btnStyle = {
  width: '100%',
  margin: '0',
  padding: '8px 14px',
  fontSize: '18px',
  lineHeight: '18px',
  borderRadius: '12px',
};

const ExpertFormPage: FC = () => {
  const { nominationId, formId } = useParams();
  const navigate = useNavigate();

  const [criterias, setCriterias] = useState<ICriteria[]>([]);
  const [scores, setScores] = useState<Record<number, number>>({});
  const [isLoadingData, setIsLoadingData] = useState(true);

  const backToForms = () => navigate(`/main/nomination/${nominationId}`);

  const getData = async () => {
    setIsLoadingData(true);
    const token = localStorage.getItem('token');
    if (!token || !formId) return;

    try {
      // Получаем критерии и оценки параллельно
      const [criteriasRes, scoresRes] = await Promise.all([
        api.getСriterias(token),
        api.getScores(token, Number(formId)),
      ]);

      setCriterias(criteriasRes);

      // Если оценки есть, проставляем их
      const scoresMap: Record<number, number> = {};
      scoresRes.forEach((score: IScore) => {
        scoresMap[score.criteria_id] = score.value;
      });
      setScores(scoresMap);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSelectScore = (criteriaId: number, value: number) => {
    setScores((prev) => ({ ...prev, [criteriaId]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token || !formId) return;

    const payload = Object.entries(scores).map(([criteriaId, value]) => ({
      team_id: Number(formId),
      criteria_id: Number(criteriaId),
      value,
    }));

    api.submitScores(token, payload)
      .then(() => backToForms())
      .catch((err) => console.error('Ошибка при отправке', err));
  };

  const isFormValid = () => criterias.every((c) => scores[c.id] !== undefined);

  const totalScore = Object.values(scores).reduce((sum, val) => sum + val, 0);

  if (isLoadingData) return <Preloader />;

  return (
    <>
      <h2 className="popup__title">Оценка работы</h2>
      <p className="popup__subtitle">Выберите оценку для каждого индикатора:</p>
      <Form formName="set-score" type="popup" onSubmit={handleSubmit}>
        {criterias.map((criteria, cIdx) => {
          const descriptionLines = criteria.description?.split('\n') || [];

          return (
            <FormField key={criteria.id} title={`${cIdx + 1}. ${criteria.name}`}>
              <div className="criteria__description">
                {descriptionLines.map((line, i) => (
                  <p className="criteria__text" key={i}>{line}</p>
                ))}
              </div>

              <div className="criteria__scores">
                {Array.from({ length: criteria.max_score + 1 }, (_, i) => {
                  const score = i; // от 0 до max_score
                  const isActive = scores[criteria.id] === score;
                  return (
                    <div
                      key={score}
                      className={`criteria__score-btn ${isActive ? 'criteria__score-btn_active' : ''}`}
                      onClick={() => handleSelectScore(criteria.id, score)}
                    >
                      {score}
                    </div>
                  );
                })}
              </div>
            </FormField>
          );
        })}

        <span className="criteria__total">Итоговая оценка: {totalScore}</span>

        <div className="criteria__buttons">
          <Button style={btnStyle} text="Отменить" color="cancel" onClick={backToForms} />
          <FormSubmit text="Сохранить" isBlock={!isFormValid()} />
        </div>
      </Form>
    </>
  );
};

export default ExpertFormPage;
