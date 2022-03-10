import React from 'react';
import styled from 'styled-components';
import TitleHeadLine from '../atoms/TitleHeadLine';
import InputWrap from '../atoms/InputTitleHeadLine';
import FieldListHeadLine from '../atoms/FieldListHeadLIine';
import AddFieldButton from '../atoms/AddFieldButton';

const CreateFormWrap = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`;

function CreateFormPage() {
  return (
    <CreateFormWrap>
      <TitleHeadLine />
      <InputWrap />
      <FieldListHeadLine />
      <AddFieldButton />
    </CreateFormWrap>
  );
}

export default CreateFormPage;
