import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ButtonWrap = styled.button`
  min-width: 30px;
  min-height: 30px;
  font-size: 1rem;
  line-height: 30px;
  border-radius: 10px;
  border: ${(props) => (props.active ? '2px solid blue' : '2px solid gray')};
  background: ${(props) => (props.active ? 'blue' : 'white')};
  text-align: center;

  ::after {
    content: '폼목록 보러가기';
    color: 'white';
    background: 'blue';
    font-weight: 700;
  }

  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

function SaveFormButton() {
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate('/');
  };
  return (
    <div>
      <ButtonWrap onClick={moveToHome} />
    </div>
  );
}

export default SaveFormButton;
