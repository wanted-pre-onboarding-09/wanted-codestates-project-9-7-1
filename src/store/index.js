import { configureStore, combineReducers } from '@reduxjs/toolkit';
import formDataSlice from './formDataSlice';
import resultDataSlice from './resultDataSlice';

const reducers = combineReducers({
  formData: formDataSlice,
  resultData: resultDataSlice,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
