import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSettings from '@redux/reducers/appSettings';

const rootReducer = combineReducers({
  appSettings: appSettings,
});

export const store = configureStore({
  reducer: rootReducer,
});
