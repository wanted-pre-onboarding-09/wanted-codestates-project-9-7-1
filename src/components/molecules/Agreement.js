import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBox from '../atoms/CheckBox';
import NextArrow from '../../assests/next_arrow.png';

const Agreement = () => {
  const [isCheck, setIsCheck] = useState(false);

  const handleCheckBox = () => {
    setIsCheck(!isCheck);
  };

  return (
    <AgreementContainer>
      <AgreementBox onClick={handleCheckBox}>
        <CheckBox isCheck={isCheck} />
        <GuideText>개인정보 수집 약관 동의 (필수)</GuideText>
      </AgreementBox>
      <NextButton>
        <NextArrowImg src={NextArrow} />
      </NextButton>
    </AgreementContainer>
  );
};

export default Agreement;

const AgreementContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const AgreementBox = styled.div`
  display: flex;
  cursor: pointer;
`;

const GuideText = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  line-height: 28px;
`;

const NextButton = styled.button`
  display: flex;
  font-size: 30px;
  font-weight: 500;
  border: none;
  background-color: transparent;
`;

const NextArrowImg = styled.img`
  width: 24px;
  height: 24px;
`;
