import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FormContents from './FromContents';
import FormHandler from './FormHandler';

function FormList() {
  const data = useSelector((state) => state.surveyData.data);
  console.log(data);
  return (
    <StyledFormList>
      {data.map((el) => (
        <li key={el.formId}>
          <FormContents title={el.title} />
          <Link to={`/user/${el.formId}`}>
            <FormHandler id={el.formId} />
          </Link>
        </li>
      ))}
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
