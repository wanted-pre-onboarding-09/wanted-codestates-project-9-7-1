import { configureStore, combineReducers } from '@reduxjs/toolkit';

const reducers = combineReducers({});

const store = configureStore({
  reducer: reducers,
});

export default store;
