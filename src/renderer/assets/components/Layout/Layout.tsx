import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';
import { FC } from 'react';
import { LayoutProps } from '@components/Layout/Layout.props';
import styles from './Layout.module.scss';
import cn from 'classnames';
import AppFrame from '@components/AppFrame/AppFrame';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <GlobalProvider>
      <div className={cn(styles.layout)}>
        <AppFrame />
      </div>
    </GlobalProvider>
  );
};

export default Layout;
