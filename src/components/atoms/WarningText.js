import React from 'react';
import styled from 'styled-components';

const WarningText = ({ label, bottom }) => (
  <Text bottom={bottom}>{label} 항목은 필수 정보입니다.</Text>
);

export default WarningText;

const Text = styled.p`
  position: absolute;
  width: 100%;
  left: 2px;
  bottom: ${(props) => props.bottom || '4px'};
  font-size: 12px;
  color: #ff2e00;
`;
