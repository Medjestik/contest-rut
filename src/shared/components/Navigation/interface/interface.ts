export interface INavigationLink {
  id: string;
  name: string;
  offset: number;
  duration: number;
}

export interface INavigationProps {
  links: INavigationLink[];
  color: 'default' | 'white';
  onClick?: () => void; 
}

export enum ENAV {
  DESCRIPTION = 'description',
  PRIZE = 'prize',
  STAGES = 'stages',
  CASES = 'cases',
  RECRUITMENT = 'recruitment',
  FAQ = 'faq',
  DOCUMENT = 'document',
  LEADERBOARD = 'leaderboard',
}

export const NavHeaderLinks: INavigationLink[] = [
  { id: ENAV.DESCRIPTION, name: 'о соревнованиях', offset: 0, duration: 250 },
  { id: ENAV.PRIZE, name: 'призы', offset: 0, duration: 500 },
  { id: ENAV.STAGES, name: 'этапы', offset: 0, duration: 750 },
  { id: ENAV.CASES, name: 'проблемы', offset: 0, duration: 1000 },
  { id: ENAV.RECRUITMENT, name: 'кого ждем', offset: 0, duration: 1250 },
  { id: ENAV.FAQ, name: 'ответы на вопросы', offset: 0, duration: 1500 },
  { id: ENAV.DOCUMENT, name: 'документы', offset: 0, duration: 2000 },
];

export const NavFooterLinks: INavigationLink[] = [
  { id: ENAV.DESCRIPTION, name: 'о соревнованиях', offset: 0, duration: 2000 },
  { id: ENAV.PRIZE, name: 'призы', offset: 0, duration: 1500 },
  { id: ENAV.STAGES, name: 'этапы', offset: 0, duration: 1250 },
  { id: ENAV.CASES, name: 'проблемы', offset: 0, duration: 1000 },
  { id: ENAV.RECRUITMENT, name: 'кого ждем', offset: 0, duration: 750 },
  { id: ENAV.FAQ, name: 'ответы на вопросы', offset: 0, duration: 500 },
  { id: ENAV.DOCUMENT, name: 'документы', offset: 0, duration: 250 },
];
