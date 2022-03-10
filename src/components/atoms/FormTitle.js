import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormTitle = ({ title }) => <Title>{title}</Title>;

FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FormTitle;

const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin: 18px 0;
`;
