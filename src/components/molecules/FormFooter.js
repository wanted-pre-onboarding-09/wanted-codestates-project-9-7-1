import React from 'react';
import styled from 'styled-components';

const FormFooter = () => (
  <FormFooterContainer>
    <SubmitButton>제출하기</SubmitButton>
  </FormFooterContainer>
);

export default FormFooter;

const FormFooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 76px;
`;

const SubmitButton = styled.button`
  max-width: 400px;
  width: 100%;
  height: 52px;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  background-color: #f73256;
  color: #fff;
`;
