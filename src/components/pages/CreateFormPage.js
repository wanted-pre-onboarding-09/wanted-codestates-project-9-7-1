/* eslint-disable prefer-destructuring */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import TitleHeadLine from '../atoms/TitleHeadLine';
import InputTitleHeadLine from '../atoms/InputTitleHeadLine';
import ShowListButton from '../atoms/ShowListButton';
import FieldListHeadLine from '../atoms/FieldListHeadLIine';
import AddFieldButton from '../atoms/AddFieldButton';
import OpenFormButton from '../atoms/OpenFormButton';
import SaveFormButton from '../atoms/SaveFormButton';
import TextField from '../atoms/Field/TextField';
import PhoneField from '../atoms/Field/PhoneField';
import AddressField from '../atoms/Field/AddressField';
import SelectField from '../atoms/Field/SelectField';
import FileField from '../atoms/Field/FileField';
import AgreementField from '../atoms/Field/AgreementField';
import { makeForm } from '../../store/surveyDataSlice';
import {
  initializeData,
  updateFormList,
  addFormList,
  removeFormList,
} from '../../store/makeFormSlice';
import NoticeModal from '../molecules/NoticeModal';

const CreateFormWrap = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;

  > .title-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  > .open-save-Wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

function CreateFormPage() {
  const formList = useSelector((state) => state.makeForm.data);
  const title = useSelector((state) => state.makeForm.title);
  const prevFormID = useSelector((state) => state.surveyData.maxID);
  const [grabItem, setGrabItem] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragStart = (e, index) => {
    setGrabItem(index);
  };

  const dragEnd = () => {};

  const drop = (e, index) => {
    const newList = [...formList];
    newList[grabItem] = newList.splice(index, 1, newList[grabItem])[0];
    dispatch(updateFormList(newList));
  };

  const addField = () => {
    dispatch(addFormList());
  };

  const removeField = (e, idx) => {
    dispatch(removeFormList(idx));
  };

  const NoticeModalOpenHandler = () => {
    if (isOpenModal) {
      dispatch(initializeData());
    }
    setIsOpenModal(!isOpenModal);
  };

  const saveForm = () => {
    dispatch(
      makeForm({
        maxID: prevFormID + 1,
        newForm: {
          title,
          formId: prevFormID + 1,
          formData: [...formList],
        },
      }),
    );
    NoticeModalOpenHandler();
  };

  return (
    <CreateFormWrap>
      {isOpenModal ? (
        <NoticeModal NoticeModalOpenHandler={NoticeModalOpenHandler} />
      ) : (
        ''
      )}
      <div className="title-list">
        <TitleHeadLine />
        <ShowListButton />
      </div>
      <InputTitleHeadLine />
      <FieldListHeadLine />
      {formList.map((form, index) => {
        if (form.id === 'name') {
          return (
            <TextField
              key={index}
              index={index}
              id={form.id}
              type={form.type}
              required={form.required}
              label={form.label}
              placeholder={form.placeholder}
              dragOver={dragOver}
              dragStart={(e) => dragStart(e, index)}
              dragEnd={dragEnd}
              drop={(e) => drop(e, index)}
              removeField={(e) => removeField(e, index)}
            />
          );
        }
        if (form.id === 'phone') {
          return (
            <PhoneField
              key={index}
              index={index}
              id={form.id}
              type={form.type}
              required={form.required}
              label={form.label}
              dragOver={dragOver}
              dragStart={(e) => dragStart(e, index)}
              dragEnd={dragEnd}
              drop={drop}
              removeField={(e) => removeField(e, index)}
            />
          );
        }
        if (form.id === 'address') {
          return (
            <AddressField
              key={index}
              index={index}
              id={form.id}
              type={form.type}
              required={form.required}
              label={form.label}
              dragOver={dragOver}
              dragStart={(e) => dragStart(e, index)}
              dragEnd={dragEnd}
              drop={drop}
              removeField={(e) => removeField(e, index)}
            />
          );
        }
        if (form.id === 'input_0') {
          return (
            <SelectField
              key={index}
              index={index}
              id={form.id}
              type={form.type}
              label={form.label}
              options={form.options}
              required={form.required}
              dragOver={dragOver}
              dragStart={(e) => dragStart(e, index)}
              dragEnd={dragEnd}
              drop={drop}
              removeField={(e) => removeField(e, index)}
            />
          );
        }

        if (form.id === 'input_1') {
          return (
            <FileField
              key={index}
              index={index}
              id={form.id}
              type={form.type}
              label={form.label}
              required={form.required}
              description={form.description}
              dragOver={dragOver}
              dragStart={(e) => dragStart(e, index)}
              dragEnd={dragEnd}
              drop={drop}
              removeField={(e) => removeField(e, index)}
            />
          );
        }

        if (form.id === 'agreement_0') {
          return (
            <AgreementField
              key={index}
              index={index}
              id={form.id}
              type={form.type}
              label={form.label}
              required={form.required}
              contents={form.contents}
              dragOver={dragOver}
              dragStart={(e) => dragStart(e, index)}
              dragEnd={dragEnd}
              drop={drop}
              removeField={(e) => removeField(e, index)}
            />
          );
        }
      })}
      <AddFieldButton addField={addField} />
      <div className="open-save-Wrap">
        <OpenFormButton />
        {formList.filter((form) => {
          return form.label === '';
        }).length === 0 && title ? (
          <SaveFormButton active saveForm={saveForm} />
        ) : (
          <SaveFormButton active={false} />
        )}
      </div>
    </CreateFormWrap>
  );
}

export default CreateFormPage;
