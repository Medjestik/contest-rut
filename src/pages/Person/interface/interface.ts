import type { PropsWithChildren, } from 'react';

export interface IStageNavItem {
  name: string;
  description?: string;
  id: number; 
  is_active: boolean;
  position: number;
  start_date?: string;
  end_date?: string;
  type: string;
  view: string;
  url_template: string;
  url_video: string;
  team_file_count: number;
}

export interface IStage {
  name: string;
  id: number; 
  is_active: boolean;
  position: number;
  start_date?: string;
  end_date?: string;
  url_template: string;
  url_video: string;
  team_file_count: number;
}

export interface IPersonProps {
  windowWidth: number;
  onLogout:() => void;
  onChangeStage:(stageId: number) => void;
}

export interface IPersonNavigationProps {
  stages: IStageNavItem[];
  openStageId: number; 
  onChange: (stage: IStageNavItem) => void;
}

export interface IPersonContainerProps extends PropsWithChildren {
  windowWidth?: number;
}

export interface IPersonStageProps {
  stage: IStageNavItem;
  onOpen?: () => void;
  onLink?: () => void;
  onChangeStage?: () => void;
}
