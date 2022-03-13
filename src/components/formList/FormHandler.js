import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteForm } from '../../store/surveyDataSlice';

function FormHandler({ id, title, render, setRender }) {
  const dispatch = useDispatch();

  const handleClick = (formId) => {
    dispatch(deleteForm(formId));
    setRender(!render);
    toast.success(`${title} Form이 삭제되었습니다`, {
      autoClose: 1000,
      position: toast.POSITION.TOP_right,
    });
  };

  return (
    <StyledFormHandler>
      <Link to={`/user/${id}`}>
        <button type="button">사용자 목록</button>
      </Link>
      <button type="button" onClick={() => handleClick(id)}>
        삭제
      </button>
    </StyledFormHandler>
  );
}

FormHandler.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  render: PropTypes.bool.isRequired,
  setRender: PropTypes.func.isRequired,
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
    color: #000;
    &:hover {
      color: #fff;
      background-color: #34495e;
    }
  }
  & > button {
    margin-left: 20px;
  }
`;
