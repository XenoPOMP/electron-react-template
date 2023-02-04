import { AppSettings } from '@redux/reducers/appSettings';

export type StoreType = {
  appSettings: AppSettings;
};

export type ReduxAction<A> = {
  payload: A;
  type: string;
};
