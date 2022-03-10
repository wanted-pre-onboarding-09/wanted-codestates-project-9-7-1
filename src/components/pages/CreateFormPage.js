import React from 'react';
import styled from 'styled-components';
import TitleHeadLine from '../atoms/TitleHeadLine';
import InputWrap from '../atoms/InputTitleHeadLine';
import FieldListHeadLine from '../atoms/FieldListHeadLIine';
import AddFieldButton from '../atoms/AddFieldButton';
import OpenFormButton from '../atoms/OpenFormButton';
import SaveFormButton from '../atoms/SaveForm';

const CreateFormWrap = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  > .open-save-Wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

function CreateFormPage() {
  return (
    <CreateFormWrap>
      <TitleHeadLine />
      <InputWrap />
      <FieldListHeadLine />
      <AddFieldButton />
      <div className="open-save-Wrap">
        <OpenFormButton />
        <SaveFormButton />
      </div>
    </CreateFormWrap>
  );
}

export default CreateFormPage;
