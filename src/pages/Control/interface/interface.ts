export interface IControlTeam {
  id: number;
  date_joined: string;
  name: string;
  case: IControlCase;
  participants: IControlParticipant[];
  university: IControlUniversity;
}

export interface IControlCase {
  id: string;
  title: string;
}

export interface IControlUniversity {
  id: number;
  name: string;
  short_name: string;
}

export interface IControlParticipant {
  id: number;
  full_name: string;
  subdivision: string;
}

export interface IInstituteStat {
  university: string;
  totalTeams: number;
  percentOfTotal: number;
  [caseTitle: string]: string | number;
}

export interface IRegistrationStat {
  date: string;
  dailyCount: number;
  cumulativeCount: number;
  percentOfTotal: number;
}
