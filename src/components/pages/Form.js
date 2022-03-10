import React from 'react';
import FormTitle from '../atoms/FormTitle';
import FormFooter from '../molecules/FormFooter';
import FormContainer from '../organisms/FormContainer';

const Form = () => (
  <>
    <FormTitle title="여기는 폼 제목" />
    <FormContainer />
    <FormFooter />
  </>
);

export default Form;
