import { FC } from 'react';
import { ControlButtonProps } from '@components/ControlButton/ControlButton.props';
import styles from './ControlButton.module.scss';
import cn from 'classnames';

const ControlButton: FC<ControlButtonProps> = ({ type }) => {
  const variants = {
    minimize: {
      icon: (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="5" width="12" height="2" rx="1" />
        </svg>
      ),
      callback: () => {
        // @ts-ignore
        window.electron.ipcRenderer.sendMessage('minimize', {});
      },
      class: undefined,
    },

    exitFullscreen: {
      icon: (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 5C12 5.55228 11.5523 6 11 6L7 6C6.44772 6 6 5.55228 6 5C6 4.44772 6.44772 4 7 4L11 4C11.5523 4 12 4.44772 12 5Z" />
          <path d="M7 0C7.55228 0 8 0.447715 8 1V5C8 5.55228 7.55228 6 7 6C6.44772 6 6 5.55228 6 5L6 1C6 0.447715 6.44772 0 7 0Z" />
          <path d="M0 7C0 6.44772 0.447715 6 1 6H5C5.55228 6 6 6.44772 6 7C6 7.55228 5.55228 8 5 8H1C0.447715 8 0 7.55228 0 7Z" />
          <path d="M5 12C4.44772 12 4 11.5523 4 11V7C4 6.44772 4.44772 6 5 6C5.55228 6 6 6.44772 6 7V11C6 11.5523 5.55228 12 5 12Z" />
        </svg>
      ),
      callback: () => {},
      class: undefined,
    },

    close: {
      icon: (
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.131348"
            y="10.6066"
            width="15"
            height="2"
            rx="1"
            transform="rotate(-45 0.131348 10.6066)"
          />
          <rect
            x="1.41418"
            width="15"
            height="2"
            rx="1"
            transform="rotate(45 1.41418 0)"
          />
        </svg>
      ),
      callback: () => {
        // @ts-ignore
        window.electron.ipcRenderer.sendMessage('close', {});
      },
      class: styles.close,
    },
  };

  const variant = variants[type];

  return (
    <div onClick={variant.callback} className={cn(styles.icon, variant.class)}>
      {variant.icon}
    </div>
  );
};

export default ControlButton;
