import { createSlice } from '@reduxjs/toolkit';
// import mock from '../data/mock';
import { nanoid } from 'nanoid';

const initialState = {
  error: true,
  data: [
    {
      key: nanoid(),
      id: 'name',
      type: 'text',
      required: true,
      label: '이름',
      placeholder: '주민등록상 이름 입력',
    },
  ],
};

const surveyDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    addFormList(state) {
      const newSet = {
        key: nanoid(),
        id: 'name',
        type: 'text',
        required: true,
        label: '이름',
        placeholder: '주민등록상 이름 입력',
      };
      state.data = [...state.data, newSet];
    },
    removeFormList(state, action) {
      const dataset = state.data.filter((form) => form.key !== action.payload);
      state.data = dataset;
    },
    deleteForm(state, action) {
      state.data = state.data.filter((el) => el.formId !== +action.payload);
    },
  },
});

export const { addFormList, removeFormList, deleteForm } =
  surveyDataSlice.actions;

export default surveyDataSlice.reducer;
