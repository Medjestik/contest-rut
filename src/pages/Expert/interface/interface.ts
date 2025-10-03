export interface IForm {
  team_id: number;
  team_name: string;
  university_name: string;
  total_evaluations: number;
  is_evaluated: boolean;
  expert_total_value: string;
  stages: IFormStage[];
}

export interface ICriteria {
  description: string;
  id: number;
  max_score: number;
  name: string;
  position: number;
}

export interface ICriteriaScore {
  team_id: number;
  criteria_id: number;
  value: number;
}

export interface IScore {
  criteria_id: number;
  criteria_max_score: number;
  criteria_name: string;
  date: string;
  expert_id: number;
  id: number;
  team_id: number;
  value: number;
}

export interface IFormStage {
  id: number;
  number: number;
  name: string;
  video: {
    id: number;
    url: string;
  } | null;
  url: {
    id: number;
    url: string;
  } | null;

  file: {
    id: number;
    file: string;
  } | null;
}
