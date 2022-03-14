/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit';
// import mock from '../data/mock';

const initialState = {
  maxID: 1,
  data: [
    {
      title: '테스트1',
      formId: 1,
      formData: [
        {
          id: 'name',
          type: 'text',
          required: true,
          label: '이름',
          placeholder: '주민등록상 이름 입력',
        },
        {
          id: 'phone',
          type: 'phone',
          required: true,
          label: '휴대폰 번호',
        },
        {
          id: 'address',
          type: 'address',
          required: true,
          label: '배송지',
        },
        {
          id: 'input_0',
          type: 'select',
          label: '옵션1',
          options: ['남성', '여성'],
          required: true,
        },
        {
          id: 'input_1',
          type: 'file',
          label: '첨부파일',
          required: false,
          description: '<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>',
        },
        {
          id: 'agreement_0',
          type: 'agreement',
          label: '개인정보 수집 약관 동의',
          required: true,
          contents: '<p>(개인정보 수집 및 약관 내용)</p>',
        },
      ],
      resultData: [
        {
          useId: 1,
          name: '홍길동',
          phone: '010-1234-0000',
          address: '서울시 강남구 서초동',
          input_0: '남성',
          input_1: '',
          agreement_0: true,
        },
        {
          useId: 2,
          name: '박동길',
          phone: '010-2423-0000',
          address: '서울시 성북구 길음동',
          input_0: '남성',
          input_1: '',
          agreement_0: true,
        },
      ],
    },
  ],
};

const surveyDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    deleteForm(state, action) {
      console.log(state);
      state.data = [state.data.filter((el) => el.formId !== +action.payload)];
    },
    updateTitle: (state, action) => {
      state.title = action.payload;
    },

    updateFormList: (state, action) => {
      console.log(action.payload);
      state.data = [...action.payload];
    },

    updateFieldType: (state, action) => {
      const initState = [...state.data];
      const newFormList = [];
      initState.map((form, idx) => {
        if (idx === action.payload.index) {
          newFormList.push(action.payload.newField);
        } else {
          newFormList.push(form);
        }
      });
      state.data = [...newFormList];
    },

    updateTextField: (state, action) => {
      const initState = [...state.data];
      const newFormList = [];
      initState.map((form, idx) => {
        if (idx === action.payload.index) {
          const newForm = {
            id: action.payload.id,
            type: action.payload.type,
            required: action.payload.required,
            label: action.payload.label,
            placeholder: action.payload.placeholder,
          };
          newFormList.push(newForm);
        } else {
          newFormList.push(form);
        }
      });
      state.data = [...newFormList];
    },

    updatePhoneField: (state, action) => {
      const initState = [...state.data];
      const newFormList = [];
      initState.map((form, idx) => {
        if (idx === action.payload.index) {
          const newForm = {
            id: action.payload.id,
            type: action.payload.type,
            required: action.payload.required,
            label: action.payload.label,
            placeholder: action.payload.placeholder,
          };
          newFormList.push(newForm);
        } else {
          newFormList.push(form);
        }
      });
      state.data = [...newFormList];
    },

    updateAddressField: (state, action) => {
      const initState = [...state.data];
      const newFormList = [];
      initState.map((form, idx) => {
        if (idx === action.payload.index) {
          const newForm = {
            id: action.payload.id,
            type: action.payload.type,
            required: action.payload.required,
            label: action.payload.label,
          };
          newFormList.push(newForm);
        } else {
          newFormList.push(form);
        }
      });
      state.data = [...newFormList];
    },

    updateSelectField: (state, action) => {
      const initState = [...state.data];
      const newFormList = [];
      initState.map((form, idx) => {
        if (idx === action.payload.index) {
          const newForm = {
            id: action.payload.id,
            type: action.payload.type,
            label: action.payload.label,
            options: action.payload.options,
            required: action.payload.required,
          };
          newFormList.push(newForm);
        } else {
          newFormList.push(form);
        }
      });
      state.data = [...newFormList];
    },

    updateFileField: (state, action) => {
      const initState = [...state.data];
      const newFormList = [];
      initState.map((form, idx) => {
        if (idx === action.payload.index) {
          const newForm = {
            id: action.payload.id,
            type: action.payload.type,
            label: action.payload.label,
            required: action.payload.required,
            description: action.payload.description,
          };
          newFormList.push(newForm);
        } else {
          newFormList.push(form);
        }
      });
      state.data = [...newFormList];
    },

    updateAgreementField: (state, action) => {
      const initState = [...state.data];
      const newFormList = [];
      initState.map((form, idx) => {
        if (idx === action.payload.index) {
          const newForm = {
            id: action.payload.id,
            type: action.payload.type,
            label: action.payload.label,
            required: action.payload.required,
            cotents: action.payload.cotents,
          };
          newFormList.push(newForm);
        } else {
          newFormList.push(form);
        }
      });
      state.data = [...newFormList];
    },

    addFormList(state) {
      const newForm = {
        id: 'name',
        type: 'text',
        required: true,
        label: '이름',
        placeholder: '주민등록상 이름 입력',
      };
      state.data = [...state.data, newForm];
    },

    removeFormList(state, action) {
      const dataset = state.data.filter((form, idx) => idx !== action.payload);
      state.data = dataset;
    },
    addResultData(state, action) {
      const selectedData = state.data.find(
        (el) => el.formId === action.payload.formId,
      );
      selectedData.resultData.push(action.payload.inputs);
    },
  },
});

export const {
  updateTitle,
  updateFormList,
  updateFieldType,
  updateTextField,
  updatePhoneField,
  updateAddressField,
  updateSelectField,
  updateFileField,
  updateAgreementField,
  addFormList,
  removeFormList,
  deleteForm,
  addResultData,
} = surveyDataSlice.actions;

export default surveyDataSlice.reducer;
