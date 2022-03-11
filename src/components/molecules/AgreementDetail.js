import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import PropTypes from 'prop-types';

const AgreementDetail = ({ label, contents, handleMoveDetail }) => (
  <AgreementDetailContainer>
    <DetailBox>
      <DetailHeader>
        <BackButton onClick={handleMoveDetail}>
          <IoIosArrowBack size="24" />
        </BackButton>
        <DetailHeaderText> {label}</DetailHeaderText>
      </DetailHeader>
      <DetailContent>{contents}</DetailContent>
    </DetailBox>
  </AgreementDetailContainer>
);

AgreementDetail.propTypes = {
  handleMoveDetail: PropTypes.func.isRequired,
};

export default AgreementDetail;

const AgreementDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: #fff;
`;

const DetailBox = styled.div`
  width: 448px;
  margin: 0 auto;
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  left: 14px;
`;

const DetailHeaderText = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin: 0 56px;
`;

const DetailContent = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  font-size: 14px;
`;
