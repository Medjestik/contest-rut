export interface IStagesCardItem {
  id: number;
  date: string;
  title: string;
  text: Array<string>;
  color: 'default' | 'gradient' | 'photo';
  type: 'default' | 'registration' | 'login';
}

export interface IStagesCardProps {
  card: IStagesCardItem;
  onLogin: () => void;
}
