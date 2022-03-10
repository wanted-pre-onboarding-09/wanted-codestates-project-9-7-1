import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: true,
  resultData: [
    {
      title: '테스트1',
      id: 1,
      contents: [
        {
          name: '홍길동',
          phone: '010-1234-0000',
          address: '서울시 강남구 서초동',
          input_0: '남성',
          input_1: '',
          agreement_0: true,
        },
        {
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
      id: 2,
      contents: [
        {
          name: '최호국',
          phone: '010-4343-0000',
          address: '서울시 용산구 청파',
          input_0: 'XL',
          agreement_0: true,
        },
        {
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

const formDataSlice = createSlice({
  name: 'resultData',
  initialState,
  reducers: {},
});

export default formDataSlice.reducer;
