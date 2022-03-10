/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
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
  const [formList, setFormList] = useState([
    {
      key: nanoid(),
      id: 'name',
      type: 'text',
      required: true,
      label: '이름',
      placeholder: '주민등록상 이름 입력',
    },
  ]);

  const [grabItem, setGrabItem] = useState();
  const [interSectItem, setInterSectItem] = useState();

  const addField = () => {
    setFormList([
      ...formList,
      {
        key: nanoid(),
        id: 'name',
        type: 'text',
        required: true,
        label: '이름',
        placeholder: '주민등록상 이름 입력',
      },
    ]);
  };
  const removeField = (e, idx) => {
    setFormList(
      formList.filter((form) => {
        return form.key !== idx;
      }),
    );
  };

  const dragStart = (e, id) => {
    e.dataTransfer.effectAllowed = 'move';
    setGrabItem(id);
  };

  const dragEnter = (e, id) => {
    console.log(`grabItem=${grabItem}`);
    setInterSectItem(id);
  };

  return (
    <CreateFormWrap>
      <TitleHeadLine />
      <InputWrap />
      <FieldListHeadLine />
      {formList.map((form, idx) => {
        return (
          <FormField
            key={form.key}
            idx={form.key}
            removeField={(e) => removeField(e, form.key)}
            onDragStart={(e) => dragStart(e, idx)}
            onDragEnter={(e) => dragEnter(e, idx)}
          />
        );
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
