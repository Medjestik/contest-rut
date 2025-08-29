import { ResponsiveBar } from '@nivo/bar';
import { ResponsiveLine } from '@nivo/line';
import type { IRegistrationStat } from '../../interface/interface';
import { useMemo } from 'react';

import { formatShortDate } from '../../../../shared/utils/convertDate';

interface IRegistrationChartProps {
  stats: IRegistrationStat[];
}

const theme = {
  axis: {
    fontSize: 12,
    tickColor: '#333',
    ticks: {
      line: { stroke: '#555', strokeWidth: 1 },
      text: { fontFamily: 'Roboto, sans-serif', fill: '#333' },
    },
    legend: {
      text: { fontFamily: 'Roboto, sans-serif', fontSize: 16, fill: '#111', fontWeight: 'normal' },
    },
  },
  tooltip: {
    container: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '12px',
    },
  },
};

export const RegistrationChart: React.FC<IRegistrationChartProps> = ({ stats }) => {
  const chartData = useMemo(
    () =>
      stats.map(item => ({
        date: formatShortDate(item.date),
        daily: item.dailyCount,
        cumulative: item.cumulativeCount,
      })),
    [stats]
  );

  const lineData = useMemo(
    () => [
      {
        id: 'Накопительный итог',
        data: chartData.map(d => ({
          x: d.date,
          y: d.cumulative,
        })),
      },
    ],
    [chartData]
  );

  const totalRegistrations = stats.reduce((acc, item) => acc + item.dailyCount, 0);

  const rawMaxYBar = Math.max(...chartData.map(d => d.daily));
  const maxYBar = Math.ceil(rawMaxYBar * 1.1);

  const rawMaxYLine = Math.max(...chartData.map(d => d.cumulative));
  const maxYLine = Math.ceil(rawMaxYLine * 1.1);

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ height: 240 }}>
        <h2 className='control__title'>Регистраций по дате</h2>
        <ResponsiveBar
          data={chartData}
          keys={['daily']}
          indexBy="date"
          theme={theme}
          margin={{ top: 24, right: 40, bottom: 50, left: 80 }}
          padding={0.3}
          colors={['#1B096F']}
          axisLeft={{
            legend: 'Кол-во регистраций',
            legendPosition: 'middle',
            legendOffset: -60,
          }}
          enableLabel={true}
          label={(d) => {
            if (d.value === 0) return '';
            const percent = ((d.value as number) / totalRegistrations * 100).toFixed(1);
            return `${percent}%`;
          }}
          labelTextColor="#ffffff"
          valueScale={{ type: 'linear', min: 0, max: maxYBar }}
          tooltip={({ id, value }) => (
            <div key={id} style={{ padding: '6px 10px', background: '#fff', border: '1px solid #ccc' }}>
              <div>Количество:&nbsp;<strong>{value}</strong></div>
              <div>Процент:&nbsp;<strong>{((value as number)/totalRegistrations*100).toFixed(1)}%</strong></div>
            </div>
          )}
        />
      </div>

      <div style={{ height: 240, marginTop: 20 }}>
        <h2 className='control__title'>Динамика регистраций</h2>
        <ResponsiveLine
          data={lineData}
          margin={{ top: 24, right: 40, bottom: 50, left: 80 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 0, max: maxYLine, stacked: false }}
          theme={theme} 
          axisBottom={{
            tickValues: chartData.map(d => d.date),
          }}
          axisLeft={{
            legend: 'Кол-во регистраций',
            legendPosition: 'middle',
            legendOffset: -60,
          }}
          enablePoints={true}
          colors={['#8229F3']}
          useMesh={true}
          tooltip={({ point }) => (
            <div style={{ padding: '6px 10px', background: '#fff', border: '1px solid #ccc' }}>
              <div>Количество:&nbsp;<strong>{point.data.yFormatted}</strong></div>
            </div>
          )}
        />
      </div>
    </div>
  );
};
