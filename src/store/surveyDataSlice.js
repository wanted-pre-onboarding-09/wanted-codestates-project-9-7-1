import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: true,
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
    {
      title: '테스트2',
      formId: 2,
      contents: [
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
          options: ['S', 'L', 'XL', 'XXL'],
          required: true,
        },
        {
          id: 'agreement_0',
          type: 'agreement',
          label: '개인정보 수집 약관 동의',
          required: true,
          contents: '<p>(개인정보 수집 및 약관 내용)</p>',
        },
      ],
      result: [
        {
          userId: 1,
          name: '최호국',
          phone: '010-4343-0000',
          address: '서울시 용산구 청파',
          input_0: 'XL',
          agreement_0: true,
        },
        {
          userId: 2,
          name: '김솔비',
          phone: '010-5334-0000',
          address: '서울시 양천구 목2동',
          input_0: 'S',
          agreement_0: true,
        },
      ],
    },
  ],
};

const surveyDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {},
});

export default surveyDataSlice.reducer;
