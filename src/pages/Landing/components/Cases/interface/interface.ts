export interface ICasesCardItem {
  id: string;
  situation: string;
  problem: string;
  title: string;
  icon: string;
  tags: { id: number, name: string }[];
}

export interface ICasesCardProps {
  card: ICasesCardItem;
}
