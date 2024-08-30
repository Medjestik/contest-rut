import type { PropsWithChildren, } from 'react';

export interface ILayoutProps extends PropsWithChildren {
  containerWidth?: 'small' | 'medium' | 'full' | 'default' | 'mobile';
  windowWidth: number;
}
