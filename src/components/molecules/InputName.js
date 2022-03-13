import React, { useState } from 'react';
import styled from 'styled-components';
import WarningText from '../atoms/WarningText';

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
      {isNull && form.required && <WarningText label={form.label} />}
    </InputWrapper>
  );
};

export default InputName;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

const Input = styled.input`
  height: 50px;
  padding: 16px;
  margin-bottom: 26px;
  background-color: #f8fafb;
  font-size: 16px;
  border: ${(props) => (props.warning ? '1px solid #ff2e00' : 'none')};
  border-radius: 8px;
  &:focus {
    outline: ${(props) => (props.warning ? 'none' : '1px solid #000')};
  }
`;
