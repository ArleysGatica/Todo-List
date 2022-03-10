import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './Reducer';

export const Store = configureStore({
  reducer: reducer
});
