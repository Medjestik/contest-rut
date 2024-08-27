export interface ICaseItem {
  id: string;
  situation: string;
  problem: string;
  title: string;
  icon: string;
}

export interface ICaseItemProps {
  item: ICaseItem;
  selectItemId: string;
  onSelect: (id: string) => void;
  onDetail: (card: ICaseItem) => void;
}

export interface ICaseListProps {
  items: ICaseItem[];
  selectItemId: string;
  onSelect: (id: string) => void;
  onDetail: (item: ICaseItem) => void;
}

export interface ICaseDetailProps {
  isOpen: boolean;
  onClose: () => void;
  currentCase: ICaseItem;
}
