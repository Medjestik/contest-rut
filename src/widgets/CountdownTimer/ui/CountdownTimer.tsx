import { FC } from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';

import { ICountdownTimerProps } from '../interface/interface';

import '../styles/style.css';

const CountdownTimer: FC<ICountdownTimerProps> = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, seconds }: CountdownRenderProps) => {
    const pad = (num: number) => String(num).padStart(2, '0');
    return (
      <>
        {pad(days)}
        <span className="countdown-days">дн.</span> {pad(hours)}:{pad(minutes)}:
        {pad(seconds)}
      </>
    );
  };

  // Парсим переданную строку и считаем, что это "московское время"
  const parseMoscowDate = (dateStr: string): Date => {
    const [datePart, timePart] = dateStr.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, minute, second] = timePart.split(':').map(Number);

    // new Date(Date.UTC(...)) создаёт дату в UTC
    // Москва = UTC+3 → отнимаем 3 часа, чтобы сохранить точный момент времени
    return new Date(Date.UTC(year, month - 1, day, hour - 3, minute, second || 0));
  };

  const utcDate = parseMoscowDate(targetDate);

  return <Countdown date={utcDate} renderer={renderer} />;
};

export default CountdownTimer;
