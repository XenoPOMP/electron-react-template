import { createSlice } from '@reduxjs/toolkit';
import { ReduxAction } from '@redux/types/redux-types';

export type AppSettings = {
  version: string;
  prefixes: {
    cookie: string;
  };
};

const initialState: AppSettings = {
  version: '0.1',
  prefixes: {
    cookie: 'testing-local-storage',
  },
};

const appSettings = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    simpleAction(state, action: ReduxAction<any>) {},
  },
});

export default appSettings.reducer;
export const { simpleAction } = appSettings.actions;
