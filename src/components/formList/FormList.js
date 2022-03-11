import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import FormContents from './FromContents';
import FormHandler from './FormHandler';
import Pagination from '../common/Pagination';

function FormList() {
  const data = useSelector((state) => state.surveyData.data);
  const [arr, setArr] = useState([]);
  const [value, setValue] = useState('');

  const [page, setPage] = useState(1);
  const limit = 5;
  const offset = (page - 1) * limit;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const resetClick = () => {
    setValue('');
    setArr(data.filter((el) => el.title.includes(value)));
    setPage(1);
  };

  const searchClick = () => {
    setArr(data.filter((el) => el.title.includes(value)));
    setValue('');
    setPage(1);
  };

  const enterKey = (e) => {
    if (e.key !== 'Enter') return;
    setArr(data.filter((el) => el.title.includes(value)));
    setValue('');
    setPage(1);
  };

  useEffect(() => {
    setArr([...data]);
  }, []);

  return (
    <StyledFormList>
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          onKeyUp={enterKey}
          onChange={handleChange}
          value={value}
          placeholder="검색어를 입력해 주세요"
        />
        <div className="btn-wrap">
          <button onClick={searchClick} type="button">
            검색
          </button>
          <button onClick={resetClick} type="button">
            초기화
          </button>
        </div>
      </StyledForm>
      {arr.slice(offset, offset + limit).map((el) => (
        <li key={el.formId}>
          <FormContents id={el.formId} title={el.title} />
          <FormHandler id={el.formId} title={el.title} />
        </li>
      ))}
      {arr.length !== 0 ? (
        <Pagination total={arr.length} page={page} setPage={setPage} />
      ) : (
        <p>검색 조건에 해당하는 form이 없습니다.</p>
      )}
    </StyledFormList>
  );
}

export default FormList;

const StyledFormList = styled.ul`
  margin-top: 20px;
  li {
    margin-top: 20px;
  }
  p {
    text-align: center;
    margin-top: 30px;
    font-size: 24px;
    font-weight: bold;
  }
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 50%;
    border: 1px solid #34495e;
    padding: 5px 10px;
  }
  button {
    font-size: 16px;
    padding: 3px;
    border: 2px solid #34495e;
    color: #000;
    &:hover {
      color: #fff;
      background-color: #34495e;
    }
  }
  button + button {
    margin-left: 20px;
  }
  .btn-wrap {
  }
`;
