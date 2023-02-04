import GlobalProvider from '@providers/GlobalProvider/GlobalProvider';
import { FC } from 'react';
import { LayoutProps } from '@components/Layout/Layout.props';
import styles from './Layout.module.scss';
import cn from 'classnames';
import AppFrame from '@components/AppFrame/AppFrame';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { AppSettings } from '@redux/reducers/appSettingsSlice';
import { useSelector } from 'react-redux';
import { StoreType } from '@redux/types/redux-types';

const Layout: FC<LayoutProps> = ({ children }) => {
  const { prefixes }: AppSettings = useSelector(
    (state: StoreType) => state.appSettings,
  );
  const [item, setItem] = useLocalStorage<number>(`${prefixes.cookie}`, 0);

  return (
    <GlobalProvider>
      <div className={cn(styles.layout)}>
        <AppFrame />
        {item} <button onClick={() => setItem(item + 1)}>Increment item</button>
      </div>
    </GlobalProvider>
  );
};

export default Layout;
