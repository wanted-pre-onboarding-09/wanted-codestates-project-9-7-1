import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import FormContents from './FromContents';
import FormHandler from './FormHandler';
import Pagination from '../common/Pagination';

function FormList() {
  const data = useSelector((state) => state.surveyData.data);
  const [page, setPage] = useState(1);
  const limit = 5;
  const offset = (page - 1) * limit;
  return (
    <StyledFormList>
      {data.slice(offset, offset + limit).map((el) => (
        <li key={el.formId}>
          <FormContents title={el.title} />
          <FormHandler id={el.formId} />
        </li>
      ))}
      <Pagination total={data.length} page={page} setPage={setPage} />
    </StyledFormList>
  );
}

export default FormList;

const StyledFormList = styled.ul`
  margin-top: 20px;
  li {
    margin-top: 20px;
  }
`;
