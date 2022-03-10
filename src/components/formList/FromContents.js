import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GrDocumentText } from 'react-icons/gr';

function FormContents({ title }) {
  return (
    <StyledFormTitle>
      <GrDocumentText />
      <h3>{title}</h3>
    </StyledFormTitle>
  );
}

FormContents.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FormContents;

const StyledFormTitle = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 5px;
  background-color: #a0a0a0;
  align-items: center;
  svg {
    font-size: 40px;
  }
  h3 {
    margin-left: 20px;
  }
`;
