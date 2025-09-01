import type { IControlTeam, IRegistrationStat } from '../interface/interface';

export const getRegistrationStats = (teams: IControlTeam[]): IRegistrationStat[] => {
  if (teams.length === 0) return [];

  const totalTeams = teams.length;

  const dayMap: Record<string, number> = {};
  teams.forEach(team => {
    const day = team.date_joined.split('T')[0];
    dayMap[day] = (dayMap[day] || 0) + 1;
  });

  const start = new Date('2025-08-31');
  const end = new Date('2025-09-15');

  const days: string[] = [];
  const d = new Date(start);
  while (d <= end) {
    const isoDate = d.toISOString().split('T')[0];
    days.push(isoDate);
    d.setDate(d.getDate() + 1);
  }

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
