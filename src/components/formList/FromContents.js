import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GrDocumentText } from 'react-icons/gr';
import { Link } from 'react-router-dom';

function FormContents({ title, id }) {
  return (
    <Link to={`/form/${id}`}>
      <StyledFormTitle>
        <GrDocumentText fill="rgb(255,255,255)" />
        <h3>{title}</h3>
      </StyledFormTitle>
    </Link>
  );
}

FormContents.propTypes = {
  title: PropTypes.string.isRequired,
};

export default React.memo(FormContents);

const StyledFormTitle = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 5px;
  background-color: #e0e0e0;
  align-items: center;
  svg {
    font-size: 40px;
  }
  h3 {
    margin-left: 20px;
    color: #000;
  }
  &:hover {
    background-color: #a0a0a0;
    cursor: pointer;
  }
`;
