import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  width: 448px;
  height: 1000px;
  color: gray;
  font-size: 0.75rem;
  background: #e6e6e6;
  border: 1px solid black;
`;
function HeadLine() {
  return (
    <div>
      <Title />
    </div>
  );
}

export default HeadLine;
