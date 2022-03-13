import React from 'react';
import styled from 'styled-components';

const WrongText = ({ label, bottom }) => (
  <Text bottom={bottom}>{label}가 올바르지 않습니다.</Text>
);

export default WrongText;

const Text = styled.p`
  position: absolute;
  width: 100%;
  left: 2px;
  bottom: ${(props) => props.bottom || '4px'};
  font-size: 12px;
  color: #ff2e00;
`;
