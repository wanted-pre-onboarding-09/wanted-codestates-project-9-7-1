import React, { useState } from 'react';
import styled from 'styled-components';
import TitleHeadLine from '../atoms/TitleHeadLine';
import InputWrap from '../atoms/InputTitleHeadLine';
import FieldListHeadLine from '../atoms/FieldListHeadLIine';
import AddFieldButton from '../atoms/AddFieldButton';
import OpenFormButton from '../atoms/OpenFormButton';
import SaveFormButton from '../atoms/SaveForm';
import FormField from '../atoms/FormField';

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
  const [fieldNumber, setFieldNumber] = useState(1);
  const addField = () => {
    console.log('클릭');
    setFieldNumber(fieldNumber + 1);
  };
  return (
    <CreateFormWrap>
      <TitleHeadLine />
      <InputWrap />
      <FieldListHeadLine />
      {[...Array(fieldNumber)].map(() => {
        return <FormField />;
      })}

      <AddFieldButton addField={addField} />
      <div className="open-save-Wrap">
        <OpenFormButton />
        <SaveFormButton />
      </div>
    </CreateFormWrap>
  );
}

export default CreateFormPage;
