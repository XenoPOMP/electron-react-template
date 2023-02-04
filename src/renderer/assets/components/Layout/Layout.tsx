import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';
import { FC } from 'react';
import { LayoutProps } from '@components/Layout/Layout.props';
import styles from './Layout.module.scss';
import cn from 'classnames';
import AppFrame from '@components/AppFrame/AppFrame';
import { useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';
import { Sparkle } from 'that-sparks';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <GlobalProvider>
      <div className={cn(styles.layout)}>
        <AppFrame />
        App version:{' '}
        {useSelector((state: StoreType) => state.appSettings.version)}
      </div>
    </GlobalProvider>
  );
};

export default Layout;
