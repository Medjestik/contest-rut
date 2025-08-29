export interface IUniversity {
address: string;
id: number;
name: string;
name_full: string;
name_search: string;
name_short_csv: string;
short_name: string;
}

export interface ICourse {
  id: number;
  name: string;
}

interface IParticipantData {
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  phone: string;
  group_name: string;
  level: number;
  telegram_url?: string;
}

export interface IRegisterData {
  name: string;
  login: string;
  password: string;
  university: number;
  case: string;
  participants: IParticipantData[];
}
