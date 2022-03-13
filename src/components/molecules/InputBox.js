import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBox = ({ placeholder, inputTitle }) => {
  const [name, setName] = useState('');
  const [isNull, setIsNull] = useState(false);

  const handleBlur = () => {
    if (name.length === 0) {
      setIsNull(true);
    }
  };

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setIsNull(false);
    } else {
      setIsNull(true);
    }
    setName(e.target.value);
  };

  return (
    <InputWrapper>
      <Input
        warning={isNull}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {isNull && <WarningText>{inputTitle} 항목은 필수 정보입니다</WarningText>}
    </InputWrapper>
  );
};

InputBox.propTypes = {
  placeholder: PropTypes.string,
  inputTitle: PropTypes.string,
};

InputBox.defaultProps = {
  placeholder: '',
  inputTitle: '',
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
    outline: ${(props) => (props.warning ? 'none' : '1px solid #000')};
  }
`;

const WarningText = styled.p`
  width: 100%;
  margin: 8px 0 24px 0;
  font-size: 12px;
  color: #ff2e00;
`;
