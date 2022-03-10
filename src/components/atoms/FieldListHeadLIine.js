import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  min-width: 448px;
  min-height: 40px;
  font-size: 1rem;
  /* background: #e6e6e6; */
  line-height: 40px;
  /* border: 1px solid black; */
  ::after {
    color: gray;
    font-size: 18px;
    font-weight: 700;
    content: '필드목록 *';
  }
`;
function HeadLine() {
  return (
    <div>
      <Title />
    </div>
  );
}

export default HeadLine;
