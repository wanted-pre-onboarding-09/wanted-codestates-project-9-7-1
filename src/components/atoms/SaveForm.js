import React from 'react';
import styled from 'styled-components';

const ButtonWrap = styled.button`
  min-width: 30px;
  min-height: 30px;
  font-size: 1rem;
  line-height: 30px;
  border-radius: 10px;
  border: 2px solid blue;
  background: blue;
  text-align: center;
  margin-left: 5px;
  /* ::before {
    background: blue;
  } */
  ::after {
    content: '저장하기';
    color: white;
    background: blue;
    font-weight: 700;
  }

  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`;

function SaveFormButton() {
  const saveForm = () => {
    console.log('saveForm');
  };
  return (
    <div>
      <ButtonWrap onClick={saveForm} />
    </div>
  );
}

export default SaveFormButton;
