import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateTitle } from '../../store/makeFormSlice';

const InputWrap = styled.input`
  min-width: 600px;
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

function InputTitleHeadLine() {
  const initTitle = useSelector((state) => state.makeForm.title);
  const [title, setTitle] = useState(initTitle);
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(initTitle);
  }, [initTitle]);

  const titleHandler = (e) => {
    setTitle(e.target.value);
    dispatch(updateTitle(e.target.value));
  };

  return (
    <div>
      <InputWrap type="text" value={title} onChange={titleHandler} />
    </div>
  );
}

export default InputTitleHeadLine;
