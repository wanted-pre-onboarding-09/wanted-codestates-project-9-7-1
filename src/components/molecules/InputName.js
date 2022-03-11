import React, { useState } from 'react';
import styled from 'styled-components';

const InputName = ({ form, name, onAddName, onCheckValue }) => {
  const [isNull, setIsNull] = useState(false);

  const handleBlur = () => {
    if (name.length === 0 && form.required) {
      setIsNull(true);
      onCheckValue('isName', false);
    } else {
      setIsNull(false);
      onCheckValue('isName', true);
    }
  };

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      setIsNull(false);
      onCheckValue('isName', true);
    } else if (e.target.value.length === 0 && form.required) {
      setIsNull(true);
      onCheckValue('isName', false);
    }
    onAddName('name', e.target.value);
  };

  return (
    <InputWrapper>
      <Input
        type={form.type}
        warning={isNull}
        placeholder={form.placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {isNull && form.required && (
        <WarningText>{form.label} 항목은 필수 정보입니다</WarningText>
      )}
    </InputWrapper>
  );
};

export default InputName;

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
