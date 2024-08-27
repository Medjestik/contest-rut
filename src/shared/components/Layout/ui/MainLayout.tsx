import type { FC } from 'react';

import type { ILayoutProps } from '../interface/interface';

import LayoutHeader from '../components/LayoutHeader/ui/LayoutHeader';
import LayoutFooter from '../components/LayoutFooter/ui/LayoutFooter';

import '../styles/style.css';

const MainLayout: FC<ILayoutProps> = ({ containerWidth = 'default', children }) => {
    return (
      <div className='layout'>
        <div className={`layout__container layout__container_width_${containerWidth}`}>
          <LayoutHeader />
            <main className='layout__main'>
              <div className='layout__main-container'>
                {children}
              </div>
            </main>
          <LayoutFooter />
        </div>
      </div>
    );
  };

export default MainLayout;
