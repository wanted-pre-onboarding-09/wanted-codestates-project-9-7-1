import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import { VscClose } from 'react-icons/vsc';

const InputAddress = ({ form }) => {
  const detailRef = useRef('');
  const totalAddressRef = useRef('');
  const [isNull, setIsNull] = useState(false);
  const [isAddressModal, setIsAddressModal] = useState(false);
  const [isDetailModal, setIsDetailModal] = useState(false);
  const [address, setAddress] = useState('');

  const handleModal = () => {
    setIsAddressModal(!isAddressModal);
    if (totalAddressRef.current.value.length === 0 && form.required) {
      setIsNull(true);
    }
  };

  const handleSubmitAddress = () => {
    const detailAddress = detailRef.current.value;
    totalAddressRef.current.value = `${address} ${detailAddress}`;
    setIsAddressModal(false);
    setIsNull(false);
  };

  const handleComplete = (data) => {
    setAddress(data.address);
    setIsDetailModal(true);
  };

  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    top: '120px',
    zIndex: '100',
    width: '768px',
    minHeight: '492px',
  };

  return (
    <InputWrapper>
      <AddressInput
        ref={totalAddressRef}
        onClick={handleModal}
        warning={isNull}
      />
      {isAddressModal && (
        <Background>
          <ModalHeader>
            <CloseButton onClick={handleModal}>
              <VscClose size="24" />
            </CloseButton>
            <ModalTitle>배송 주소</ModalTitle>
          </ModalHeader>
          {isDetailModal && (
            <DetailBox>
              <AddressText>{address}</AddressText>
              <DetailAddressInput
                placeholder="상세 주소를 입력해 주세요"
                ref={detailRef}
              />
              <SubmitButton onClick={handleSubmitAddress}>
                입력완료
              </SubmitButton>
            </DetailBox>
          )}
          <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
        </Background>
      )}
      {isNull && form.required && (
        <WarningText>{form.label} 항목은 필수 정보입니다</WarningText>
      )}
    </InputWrapper>
  );
};

export default InputAddress;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

const AddressInput = styled.input`
  height: 50px;
  padding: 16px;
  margin-bottom: ${(props) => (props.warning ? '0px' : '24px')};
  background-color: #f8fafb;
  font-size: 16px;
  border: ${(props) => (props.warning ? '1px solid #ff2e00' : 'none')};
  border-radius: 8px;
  cursor: pointer;
  &:focus {
    border: none;
    outline: none;
  }
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
`;

const ModalHeader = styled.div`
  position: absolute;
  top: 72px;
  display: flex;
  justify-content: center;
  width: 768px;
  padding: 14px 7px;
  background-color: #fff;
`;

const CloseButton = styled.button`
  position: absolute;
  left: 16px;
  top: 12px;
  width: 24px;
  height: 24px;
`;

const ModalTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const DetailBox = styled.div`
  position: absolute;
  top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 768px;
  height: 232px;
  background-color: #fff;
`;

const AddressText = styled.p`
  width: 100%;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid #000;
`;

const DetailAddressInput = styled.textarea`
  width: 100%;
  padding: 16px 24px;
  height: 180px;
  font-size: 16px;
  &:focus {
    border: none;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 720px;
  height: 52px;
  margin: 16px 24px;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  background-color: #f73256;
  color: #fff;
`;

const WarningText = styled.p`
  width: 100%;
  margin: 8px 0 24px 0;
  font-size: 12px;
  color: #ff2e00;
`;
