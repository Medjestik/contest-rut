import type { PropsWithChildren, } from 'react';

export interface IPopupProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  popupWidth?: 'small' | 'medium' | 'large' | 'full' | 'default' | 'mobile';
  closeOutside?: boolean;
}

export interface IConfirmRemovePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onRemove: () => void;
}
