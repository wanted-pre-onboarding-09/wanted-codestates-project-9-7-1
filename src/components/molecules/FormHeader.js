import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';

const FormHeader = ({ title, handlePrev }) => (
  <Header>
    <Title>{title}</Title>
    <PrevButton onClick={handlePrev}>
      <IoIosArrowBack size="24" />
    </PrevButton>
  </Header>
);

export default FormHeader;

const Header = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin: 18px 0;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 12px;
  left: 100px;
  display: flex;
  font-size: 30px;
  font-weight: 500;
  border: none;
  background-color: transparent;
`;
