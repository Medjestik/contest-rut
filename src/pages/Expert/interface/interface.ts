export interface IForm {
  team_id: number;
  team_name: string;
  university_name: string;
  total_evaluations: number;
  is_evaluated: boolean;
  average_score: string;
  stages: IFormStage[];
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
