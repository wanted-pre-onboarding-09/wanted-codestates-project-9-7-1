import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

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
      <DropdownBox onClick={handleOptionList} active={isDropdown}>
        {option}
        <Arrow rotation={isDropdown}>
          <IoIosArrowUp />
        </Arrow>
      </DropdownBox>
      {isNull && form.required && (
        <WarningText>{form.label} 항목은 필수 정보입니다</WarningText>
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
  margin-bottom: ${(props) => (props.warning ? '0px' : '24px')};
`;

const DropdownBox = styled.div`
  position: relative;
  z-index: 10;
  height: 50.5px;
  padding: 16px;
  margin: 10px 0 0 0;
  background-color: #f8fafb;
  border-radius: ${(props) => (props.active ? '8px 8px 0px 0px' : '8px')};
  border: ${(props) => (props.active ? 'solid #000' : 'none')};
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

const WarningText = styled.p`
  width: 100%;
  margin: 8px 0 24px 0;
  font-size: 12px;
  color: #ff2e00;
`;
