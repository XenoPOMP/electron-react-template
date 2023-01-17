import cn from 'classnames';
import styles from './AppFrame.module.scss';
import ControlButton from '@components/ControlButton/ControlButton';

const AppFrame = () => {
  return (
    <header className={cn(styles.frame)}>
      <div></div>

      <div className={cn(styles.controls)}>
        <ControlButton type={'minimize'} />
        {/*<ControlButton type={'exitFullscreen'} />*/}
        <ControlButton type={'close'} />
      </div>
    </header>
  );
};

export default AppFrame;
