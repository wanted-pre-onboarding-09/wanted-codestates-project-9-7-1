import { createSlice } from '@reduxjs/toolkit';
import mock from '../data/mock';

const initialState = {
  error: true,
  data: mock,
};

const surveyDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    deleteForm(state, action) {
      state.data = state.data.filter((el) => el.formId !== +action.payload);
    },
  },
});

export const { deleteForm } = surveyDataSlice.actions;

export default surveyDataSlice.reducer;
