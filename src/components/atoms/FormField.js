import React, { useState } from 'react';
import styled from 'styled-components';
import Select from './Select';

const FormField = () => {
  const [title, setTitle] = useState('');
  const [holder, setHolder] = useState('');
  const [memo, setMemo] = useState('');
  const [select, setSelect] = useState('text');
  const [checked, setChecked] = useState(true);

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const holderChange = (event) => {
    setHolder(event.target.value);
  };

  const momoChange = (event) => {
    setMemo(event.target.value);
  };

  const selectChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <FieldBox>
      <Title>
        <div>
          <select onChange={selectChange}>
            <option value="text">텍스트</option>
            <option value="phone">전화번호</option>
            <option value="adress">주소</option>
            <option value="select">드롭다운</option>
            <option value="file">첨부파일</option>
            <option value="agreement">이용약관</option>
          </select>
        </div>
        <input placeholder="field title" value={title} onChange={titleChange} />
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />{' '}
          필수
        </div>
        <div>drag</div>
        <div>x</div>
      </Title>
      {select === 'text' || select === 'phone' ? (
        <PlaceholderBox>
          <input
            placeholder="placeholder 예) '예) 11/10(토) 15:00'"
            value={holder}
            onChange={holderChange}
          />
        </PlaceholderBox>
      ) : select === 'select' ? (
        <Select className="inputbox" />
      ) : null}

      <TextContainer id="text">
        <div>위지윅</div>
        <TextBox placeholder="memo" value={memo} onChange={momoChange} />
      </TextContainer>
    </FieldBox>
  );
};

export default FormField;

const FieldBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid black;
  border-radius: 10px;
  overflow: auto;

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
