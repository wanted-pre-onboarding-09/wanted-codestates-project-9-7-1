import { configureStore, combineReducers } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';

const reducers = combineReducers({
  data: dataSlice,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
