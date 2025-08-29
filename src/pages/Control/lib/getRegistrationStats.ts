import type { IControlTeam, IRegistrationStat } from '../interface/interface';

export const getRegistrationStats = (teams: IControlTeam[]): IRegistrationStat[] => {
  if (teams.length === 0) return [];

  const totalTeams = teams.length;

  // Считаем сколько команд зарегистрировано в каждый день
  const dayMap: Record<string, number> = {};
  teams.forEach(team => {
    const day = team.date_joined.split('T')[0]; // yyyy-mm-dd
    dayMap[day] = (dayMap[day] || 0) + 1;
  });

  // Строгий интервал 25.08.2025 - 05.09.2025
  const start = new Date('2025-08-25');
  const end = new Date('2025-09-10');

  const days: string[] = [];
  const d = new Date(start);
  while (d <= end) {
    const isoDate = d.toISOString().split('T')[0];
    days.push(isoDate);
    d.setDate(d.getDate() + 1);
  }

  // Формируем массив статистики
  let cumulative = 0;
  return days.map(date => {
    const dailyCount = dayMap[date] || 0;
    cumulative += dailyCount;

    return {
      date: date,
      dailyCount,
      cumulativeCount: cumulative,
      percentOfTotal: totalTeams > 0 ? +(dailyCount / totalTeams * 100).toFixed(2) : 0,
    };
  });
};
