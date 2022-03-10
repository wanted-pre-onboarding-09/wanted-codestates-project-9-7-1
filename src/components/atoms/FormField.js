import React, { useState } from 'react';
import styled from 'styled-components';
import OptionSelect from './OptionSelect';

const FormField = ({ idx, removeField, dragStart, dragEnter, droping }) => {
  const [label, setLabel] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [memo, setMemo] = useState('');
  const [type, setType] = useState('text');
  const [required, setRequired] = useState(true);
  const [draggable, setDraggalble] = useState(false);

  const labelChange = (event) => {
    setLabel(event.target.value);
  };

  const placeholderChange = (event) => {
    setPlaceholder(event.target.value);
  };

  const memoChange = (event) => {
    setMemo(event.target.value);
  };

  const typeChange = (event) => {
    setType(event.target.value);
  };

  const dragTrueHandler = () => {
    setDraggalble(true);
  };

  const dragFalseHandler = () => {
    setDraggalble(false);
  };

  return (
    <FieldBox
      draggable={draggable}
      onDragStart={(e, id) => dragStart(e, id)}
      onDragEnter={(e, id) => dragEnter(e, id)}
      onDrop={(e, id) => droping(e, id)}
    >
      <Title>
        <div>
          <select onChange={typeChange}>
            <option value="text">텍스트</option>
            <option value="phone">전화번호</option>
            <option value="adress">주소</option>
            <option value="select">드롭다운</option>
            <option value="file">첨부파일</option>
            <option value="agreement">이용약관</option>
          </select>
        </div>
        <input placeholder="field label" value={label} onChange={labelChange} />
        <div>
          <input
            type="checkbox"
            checked={required}
            onChange={() => setRequired(!required)}
          />{' '}
          필수
        </div>
        <div>
          <button
            type="button"
            onMouseDown={dragTrueHandler}
            onMouseLeave={dragFalseHandler}
          >
            drag
          </button>
        </div>
        <div>
          <button type="button" id={idx} onClick={removeField}>
            &times;
          </button>
        </div>
      </Title>
      {type === 'text' || type === 'phone' ? (
        <PlaceholderBox>
          <input
            placeholder="placeholder 예) '예) 11/10(토) 15:00'"
            value={placeholder}
            onChange={placeholderChange}
          />
        </PlaceholderBox>
      ) : type === 'select' ? (
        <OptionSelect className="inputbox" />
      ) : null}

      <TextContainer id="text">
        <div>위지윅</div>
        <TextBox placeholder="memo" value={memo} onChange={memoChange} />
      </TextContainer>
    </FieldBox>
  );
};

export default FormField;

const FieldBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px solid #e6e6e6;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  padding: 0.5rem;

  input {
    outline: unset;
  }
  .inputbox {
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #cccccc;
  div {
    width: 100%;
    text-align: center;
  }
`;

const PlaceholderBox = styled.div`
  input {
    width: 100%;
  }
`;

const TextBox = styled.input`
  width: 100%;
`;

const TextContainer = styled.div`
  div {
    border-bottom: 1px solid #cccccc;
  }
`;
