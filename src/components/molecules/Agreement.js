import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import CheckBox from '../atoms/CheckBox';
import AgreementDetail from './AgreementDetail';

const Agreement = ({ form, agreement, onAgreement, onCheckValue }) => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const handleCheckBox = () => {
    onAgreement('agreement_0', !agreement);
    onCheckValue('isAgreement', !agreement);
  };

  const handleMoveDetail = () => {
    setIsShowDetail(!isShowDetail);
  };

  return (
    <>
      <AgreementContainer>
        <AgreementBox onClick={handleCheckBox}>
          <CheckBox isCheck={agreement} />
          <GuideText>
            {form.label} {form.required && '(필수)'}
          </GuideText>
        </AgreementBox>
        <NextButton onClick={handleMoveDetail}>
          <IoIosArrowForward size="24" />
        </NextButton>
      </AgreementContainer>
      {isShowDetail && (
        <AgreementDetail
          label={form.label}
          contents={form.contents}
          handleMoveDetail={handleMoveDetail}
        />
      )}
    </>
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
