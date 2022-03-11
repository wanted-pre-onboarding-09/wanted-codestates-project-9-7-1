import React, { useState } from 'react';
import FormTitle from '../atoms/FormTitle';
import FormFooter from '../molecules/FormFooter';
import FormContainer from '../organisms/FormContainer';

const Form = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleAllCheck = () => {
    setIsAllChecked(false);
  };

  return (
    <>
      <FormTitle title="여기는 폼 제목" />
      <FormContainer handleAllCheck={handleAllCheck} />
      <FormFooter disabled={!isAllChecked} />
    </>
  );
};

export default Form;
