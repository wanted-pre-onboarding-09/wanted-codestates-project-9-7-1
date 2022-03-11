import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FormTitle from '../atoms/FormTitle';
import FormFooter from '../molecules/FormFooter';
import FormContainer from '../organisms/FormContainer';

const Form = () => {
  const { id } = useParams();
  const datas = useSelector((state) => state.surveyData.data);

  const selectedData = datas.find((data) => data.formId === +id);

  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleAllCheck = () => {
    setIsAllChecked(false);
  };

  return (
    <>
      <FormTitle title="여기는 폼 제목" />
      <FormContainer
        selectedData={selectedData}
        handleAllCheck={handleAllCheck}
      />
      <FormFooter disabled={!isAllChecked} />
    </>
  );
};

export default Form;
