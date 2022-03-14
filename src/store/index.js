import { configureStore, combineReducers } from '@reduxjs/toolkit';
import surveyDataSlice from './surveyDataSlice';

const reducers = combineReducers({
  surveyData: surveyDataSlice,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
