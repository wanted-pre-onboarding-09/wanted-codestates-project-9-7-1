import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import WarningText from '../atoms/WarningText';
import WrongText from '../atoms/WrongText';

const InputPhone = ({ form, phone, onAddPhone, onCheckValue }) => {
  const [isCheck, setIsCheck] = useState(true);
  const [isNull, setIsNull] = useState(false);

  const handleCheck = (e) => {
    const value = e.target.value
      .replace(/[^0-9]/, '')
      .replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`);
    onAddPhone('phone', value);

    const regExp = /^\d{3}-\d{4}-\d{4}$/;
    if (regExp.test(value)) {
      setIsCheck(true);
      onCheckValue('isPhone', true);
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
      {isNull && form.required && <WarningText label={form.label} />}
      {!isCheck && <WrongText label={form.label} />}
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
    outline: none;
  }
`;
