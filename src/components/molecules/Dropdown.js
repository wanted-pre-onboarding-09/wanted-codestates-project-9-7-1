import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Arrow from '../../assests/arrow.png';

const Dropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState();
  const [isDropdown, setIsDropdown] = useState(false);

  const handleOptionList = () => {
    setIsDropdown(!isDropdown);
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsDropdown(false);
  };

  return (
    <DropdownContainer>
      <DropdownBox onClick={handleOptionList} active={isDropdown}>
        {selectedOption}
        <ArrowImg src={Arrow} rotation={isDropdown} />
      </DropdownBox>
      {isDropdown && (
        <OptionList active={isDropdown}>
          {Object.keys(options).map((key) => (
            <OptionItem
              key={key}
              onClick={() => handleSelectOption(options[key])}
            >
              {options[key]}
            </OptionItem>
          ))}
        </OptionList>
      )}
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Dropdown;

const DropdownContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
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

const ArrowImg = styled.img`
  position: absolute;
  top: 14px;
  right: 18px;
  width: 24px;
  height: 24px;
  transform: ${(props) => props.rotation && 'rotate(180deg)'};
`;
