import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputPhone = ({ form }) => {
  const [phone, setPhone] = useState('');
  const [isCheck, setIsCheck] = useState(true);
  const [isNull, setIsNull] = useState(false);

  const handleCheck = (e) => {
    const value = e.target.value
      .replace(/[^0-9]/, '')
      .replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`);
    setPhone(value);

    const regExp = /^\d{3}-\d{4}-\d{4}$/;
    if (regExp.test(value)) {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }

    if (e.target.value.length === 0 && form.required) {
      setIsNull(true);
      setIsCheck(true);
    } else if (e.target.value.length === 0) {
      setIsCheck(true);
    } else {
      setIsNull(false);
    }
  };

  return (
    <InputWrapper>
      <Input
        type={form.type}
        onChange={handleCheck}
        value={phone}
        warning={isNull || !isCheck}
        placeholder={form.placeholder}
      />
      {isNull && form.required && (
        <WarningText>{form.label} 항목은 필수 정보입니다</WarningText>
      )}
      {!isCheck && <WarningText>{form.label}가 올바르지 않습니다.</WarningText>}
    </InputWrapper>
  );
};

InputPhone.propTypes = {
  form: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default InputPhone;

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
    outline: none;
  }
`;

const WarningText = styled.p`
  width: 100%;
  margin: 8px 0 24px 0;
  font-size: 12px;
  color: #ff2e00;
`;
