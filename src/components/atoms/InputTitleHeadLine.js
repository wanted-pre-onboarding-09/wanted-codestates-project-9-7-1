import React from 'react';
import styled from 'styled-components';

const InputWrap = styled.input`
  min-width: 500px;
  min-height: 48px;
  font-size: 1rem;
  background: #e6e6e6;
  line-height: 48px;
  border-radius: 10px;
  :focus {
    outline: none;
  }
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;
function HeadLine() {
  return (
    <div>
      <InputWrap />
    </div>
  );
}

export default HeadLine;
