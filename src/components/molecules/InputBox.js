import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBox = ({ placeholder, inputTitle, warning, handleClick }) => (
  <InputWrapper>
    <Input warning={warning} placeholder={placeholder} onClick={handleClick} />
    {warning && <WarningText>{inputTitle} 항목은 필수 정보입니다</WarningText>}
  </InputWrapper>
);

InputBox.propTypes = {
  placeholder: PropTypes.string,
  inputTitle: PropTypes.string,
  warning: PropTypes.bool,
  handleClick: PropTypes.func,
};

InputBox.defaultProps = {
  placeholder: '',
  inputTitle: '',
  warning: false,
  handleClick: () => {},
};

export default InputBox;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 16px;
  margin-bottom: ${(props) => (props.warning ? '0px' : '24px')};
  background-color: #f8fafb;
  font-size: 16px;
  border: ${(props) => (props.warning ? '1px solid #ff2e00' : 'none')};
  border-radius: 8px;
  &:focus {
    outline: ${(props) => (props.warning ? '1px solid red' : '1px solid #000')};
  }
`;

const WarningText = styled.p`
  width: 100%;
  margin-top: 8px;
  font-size: 12px;
  color: #ff2e00;
`;
