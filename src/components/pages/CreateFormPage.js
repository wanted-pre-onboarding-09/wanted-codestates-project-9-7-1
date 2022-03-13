/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import TitleHeadLine from '../atoms/TitleHeadLine';
import InputWrap from '../atoms/InputTitleHeadLine';
import FieldListHeadLine from '../atoms/FieldListHeadLIine';
import AddFieldButton from '../atoms/AddFieldButton';
import OpenFormButton from '../atoms/OpenFormButton';
import SaveFormButton from '../atoms/SaveFormButton';
import FormField from '../atoms/FormField';
import { addFormList, removeFormList } from '../../store/surveyDataSlice';

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
  const formList = useSelector((state) => state.surveyData.data);
  const dispatch = useDispatch();
  const [grabItem, setGrabItem] = useState();
  const [interSectItem, setInterSectItem] = useState();

  const addField = () => {
    dispatch(addFormList());
  };
  const removeField = (idx) => {
    dispatch(removeFormList(idx));
  };

  const dragStart = (e, id) => {
    e.dataTransfer.effectAllowed = 'move';
    setGrabItem(id);
  };

  const dragEnter = (e, id) => {
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
            removeField={() => removeField(form.key)}
            dragStart={(e) => dragStart(e, idx)}
            dragEnter={(e) => dragEnter(e, idx)}
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
