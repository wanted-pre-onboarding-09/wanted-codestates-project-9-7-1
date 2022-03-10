import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CheckBox = ({ isCheck }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox isCheck={isCheck} type="checkbox" />
      <StyledCheckbox isCheck={isCheck}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

CheckBox.propTypes = {
  isCheck: PropTypes.bool.isRequired,
};

export default CheckBox;

const CheckboxContainer = styled.div`
  display: inline-flex;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 28px;
  height: 28px;
  padding: 4px;
  background: ${(props) => (props.isCheck ? '#F73256' : '#fff')};
  border: ${(props) => (props.isCheck ? 'none' : '1px solid #c7d2de')};
  border-radius: 50%;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
  ${Icon} {
    visibility: ${(props) => (props.isCheck ? 'visible' : 'hidden')};
  }
`;
