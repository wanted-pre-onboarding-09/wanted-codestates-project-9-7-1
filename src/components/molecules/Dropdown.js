import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';
import WarningText from '../atoms/WarningText';

const Dropdown = ({ form, option, onAddOption, onCheckValue }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isNull, setIsNull] = useState(false);

  const handleOptionList = () => {
    setIsDropdown(!isDropdown);
    if (option.length === 0 && isDropdown && form.required) {
      setIsNull(true);
      onCheckValue('isOption', false);
    } else {
      setIsNull(false);
      onCheckValue('isOption', true);
    }
  };

  const handleSelectOption = (option) => {
    setIsDropdown(false);
    onAddOption('input_0', option);
  };

  return (
    <DropdownContainer warning={isNull}>
      <DropdownBox
        onClick={handleOptionList}
        active={isDropdown}
        warning={isNull}
      >
        {option}
        <Arrow rotation={isDropdown}>
          <IoIosArrowUp />
        </Arrow>
      </DropdownBox>
      {isNull && form.required && (
        <WarningText bottom="-22px" label={form.label} />
      )}
      {isDropdown && (
        <OptionList active={isDropdown}>
          {Object.keys(form.options).map((key) => (
            <OptionItem
              key={key}
              onClick={() => handleSelectOption(form.options[key])}
            >
              {form.options[key]}
            </OptionItem>
          ))}
        </OptionList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

const DropdownContainer = styled.div`
  position: relative;
  margin-bottom: 26px;
`;

const DropdownBox = styled.div`
  position: relative;
  z-index: 10;
  height: 50px;
  padding: 16px;
  margin: 10px 0 0 0;
  background-color: #f8fafb;
  border-radius: ${(props) => (props.active ? '8px 8px 0px 0px' : '8px')};
  border: ${(props) => (props.active ? '1px solid #000' : 'none')};
  border: ${(props) => (props.warning ? '1px solid #ff2e00' : 'none')};
  border: ${(props) => {
    if (props.active) {
      return '1px solid #000';
    }
    if (props.warning) {
      return '1px solid #ff2e00';
    }
    return 'none';
  }};

  border-width: ${(props) => (props.active ? '1px 1px 0px 1px' : 'none')};
`;

const OptionList = styled.ul`
  position: absolute;
  z-index: 10;
  width: 400px;
  background-color: #f8fafb;
  border-radius: 0px 0px 8px 8px;
  border: ${(props) => (props.active ? '1px solid #000' : 'none')};
`;

const OptionItem = styled.li`
  padding: 12px;
  &:last-child {
    border-radius: 0px 0px 8px 8px;
  }
  &:hover {
    background-color: #e1e5e9;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 12px;
  right: 18px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(props) => props.rotation && 'rotate(180deg)'};
`;
