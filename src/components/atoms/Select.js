import React, { useState } from 'react';
import styled from 'styled-components';

const DropDown = () => {
  const [inputVal, setInputVal] = useState('');
  const [inputList, setInputList] = useState([]);

  const onChange = (event) => {
    setInputVal(event.target.value.trim());
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!inputVal.trim()) {
      return;
    }
    setInputVal('');
    setInputList((currentArray) => [...currentArray, inputVal]);
  };

  const deleteBtn = (event) => {
    const listId = event.target.parentNode.id;
    inputList.splice(listId, 1);
    const list = [...inputList];
    setInputList(list);
  };

  const pushTag = inputList.map((item, index) => (
    <Menubox className="tag" id={index}>
      {item}
      <button type="button" className="delete_btn" onClick={deleteBtn}>
        X
      </button>
    </Menubox>
  ));

  return (
    <DropDownBox onSubmit={onSubmit} className="tagBox">
      <div>{pushTag}</div>
      <input
        onChange={onChange}
        value={inputVal}
        placeholder="enter를 누르면 옵션을 추가 할 수 있습니다."
        type="text"
        className="inputBox"
      />
    </DropDownBox>
  );
};

export default DropDown;

const DropDownBox = styled.form`
  border-bottom: 1px solid #cccccc;

  div {
    width: 90%;
    margin: 0 auto;
  }
  input {
    margin: 10px 5px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
  }
`;

const Menubox = styled.span`
  margin: 5px;
  padding: 0 5px 5px 5px;
  display: inline-block;
  justify-content: flex-start;
  background-color: #cccccc;
  border-radius: 10%;

  button {
    background-color: #cccccc;
    color: #ffffff;
  }
`;
