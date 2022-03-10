import React from 'react';
import styled from 'styled-components';
import Dropdown from '../molecules/Dropdown';
import InputBox from '../molecules/InputBox';
import InputImg from '../molecules/InputImg';
import InputTitle from '../atoms/InputTitle';
import Agreement from '../molecules/Agreement';
import InputPhone from '../molecules/InputPhone';

const FormContainer = () => (
  <FormWrapper>
    <InputContainer>
      <InputTitle title="이름" />
      <InputBox placeholder="주민등록상 이름 입력" inputTitle="이름" />
    </InputContainer>
    <InputContainer>
      <InputTitle title="휴대폰 번호" />
      <InputPhone inputTitle="휴대폰 번호" />
    </InputContainer>
    <InputContainer>
      <InputTitle title="배송지" />
      <InputBox />
    </InputContainer>
    <InputContainer>
      <InputTitle title="옵션" />
      <Dropdown options={['스몰', '미디움', '라지']} />
    </InputContainer>
    <InputContainer>
      <InputTitle title="첨부파일" />
      <InputImg />
    </InputContainer>
    <Agreement />
  </FormWrapper>
);

export default FormContainer;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 448px;
  margin: auto;
  margin-bottom: 76px;
  padding: 0 24px 40px 24px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
