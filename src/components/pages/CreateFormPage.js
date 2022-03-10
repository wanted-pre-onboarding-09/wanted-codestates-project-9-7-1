import React, { useState } from 'react';
import styled from 'styled-components';
import TitleHeadLine from '../atoms/TitleHeadLine';
import InputWrap from '../atoms/InputTitleHeadLine';
import FieldListHeadLine from '../atoms/FieldListHeadLIine';
import AddFieldButton from '../atoms/AddFieldButton';
import OpenFormButton from '../atoms/OpenFormButton';
import SaveFormButton from '../atoms/SaveFormButton';
import FormField from '../atoms/FormField';

const CreateFormWrap = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
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
    setFieldNumber(fieldNumber + 1);
  };
  const removeField = () => {
    setFieldNumber(fieldNumber - 1);
  };

  return (
    <CreateFormWrap>
      <TitleHeadLine />
      <InputWrap />
      <FieldListHeadLine />
      {[...Array(fieldNumber)].map((n, idx) => {
        return <FormField key={idx} removeField={removeField} />;
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
