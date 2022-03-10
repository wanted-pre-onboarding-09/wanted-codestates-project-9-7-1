import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { AiTwotoneHome } from 'react-icons/ai';

function NotUser() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');
  return (
    <StyledNotPound>
      <AiTwotoneHome onClick={handleClick} cursor="pointer" />
      <p>Form을 작성한 사용자가 없습니다.</p>
    </StyledNotPound>
  );
}

export default NotUser;
const StyledNotPound = styled.div`
  display: flex;
  align-items: center;
  height: 60vh;

  font-weight: bold;
  p {
    margin: 0 auto;
    font-size: 24px;
  }
  svg {
    font-size: 40px;
  }
`;
