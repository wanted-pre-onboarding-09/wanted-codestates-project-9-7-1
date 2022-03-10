import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function FormHandler({ id }) {
  return (
    <StyledFormHandler>
      <button type="button">사용자 목록</button>
      <button type="button">{id}삭제</button>
    </StyledFormHandler>
  );
}

FormHandler.propTypes = {
  id: PropTypes.number.isRequired,
};

export default FormHandler;

const StyledFormHandler = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  button {
    font-size: 16px;
    padding: 3px;
    border: 2px solid #34495e;
    &:hover {
      color: #fff;
      background-color: #34495e;
    }
  }
  button + button {
    margin-left: 20px;
  }
`;
