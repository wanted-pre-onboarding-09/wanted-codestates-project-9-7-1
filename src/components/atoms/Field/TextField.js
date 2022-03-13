/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Editor from '../Editor';
import {
  updateFieldType,
  updateTextField,
} from '../../../store/surveyDataSlice';
import moveGrab from '../../../assets/icons8-resize-vertical-24.png';
import closeBtn from '../../../assets/icons8-close-144.png';

const TextField = ({
  index,
  id,
  type,
  required,
  label,
  placeholder,
  dragOver,
  dragStart,
  dragEnd,
  drop,
  removeField,
}) => {
  const dispatch = useDispatch();
  const [draggable, setDraggalble] = useState(false);
  const [labelValue, setLabelValue] = useState(label);
  const [placeholderValue, setPlaceholderValue] = useState(placeholder);
  const [memo, setMemo] = useState('');

  const typeChange = (e) => {
    // Type 변경
    switch (e.target.value) {
      case 'text':
        dispatch(
          updateFieldType({
            index,
            newField: {
              id: 'name',
              type: 'text',
              required: true,
              label: '이름',
              placeholder: '주민등록상 이름 입력',
            },
          }),
        );
        break;
      case 'phone':
        dispatch(
          updateFieldType({
            index,
            newField: {
              id: 'phone',
              type: 'phone',
              required: true,
              label: '휴대폰 번호',
            },
          }),
        );
        break;
      case 'address':
        dispatch(
          updateFieldType({
            index,
            newField: {
              id: 'address',
              type: 'address',
              required: true,
              label: '배송지',
            },
          }),
        );
        break;
      case 'select':
        dispatch(
          updateFieldType({
            index,
            newField: {
              id: 'input_0',
              type: 'select',
              label: '옵션1',
              options: ['S', 'L', 'XL', 'XXL'],
              required: true,
            },
          }),
        );
        break;
      case 'file':
        dispatch(
          updateFieldType({
            index,
            newField: {
              id: 'input_1',
              type: 'file',
              label: '첨부파일',
              required: false,
              description: '<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>',
            },
          }),
        );
        break;
      case 'agreement':
        dispatch(
          updateFieldType({
            index,
            newField: {
              id: 'agreement_0',
              type: 'agreement',
              label: '개인정보 수집 약관 동의',
              required: true,
              contents: '<p>(개인정보 수집 및 약관 내용)</p>',
            },
          }),
        );
        break;
      default:
        dispatch(
          updateFieldType({
            index,
            newField: {
              id: 'name',
              type: 'text',
              required: true,
              label: '이름',
              placeholder: '주민등록상 이름 입력',
            },
          }),
        );
        break;
    }
  };

  const requiredChange = (e) => {
    // required 변경
    dispatch(
      updateTextField({
        index,
        id,
        type,
        required: !required,
        label,
        placeholder,
      }),
    );
  };

  const labelChange = (e) => {
    setLabelValue(e.target.value);
    // label 변경
    dispatch(
      updateTextField({
        index,
        id,
        type,
        required,
        label: e.target.value,
        placeholder,
      }),
    );
  };

  const placeholderChange = (e) => {
    setPlaceholderValue(e.target.value);
    // placeholder 변경
    dispatch(
      updateTextField({
        index,
        id,
        type,
        required,
        label,
        placeholder: e.target.placeholder,
      }),
    );
  };

  const memoChange = (value) => {
    // memo 변경
    setMemo(value);
  };

  const dragTrueHandler = () => {
    setDraggalble(true);
  };

  const dragFalseHandler = () => {
    setDraggalble(false);
  };

  const pauseEvent = (e) => {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  };

  return (
    <FieldBox
      draggable={draggable}
      onDragOver={dragOver}
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDrop={(e) => drop(e, index)}
    >
      <Title>
        <div className="upper-container">
          <div>
            <select defaultValue={type} onChange={typeChange}>
              <option value="text">텍스트</option>
              <option value="phone">전화번호</option>
              <option value="address">주소</option>
              <option value="select">드롭다운</option>
              <option value="file">첨부파일</option>
              <option value="agreement">이용약관</option>
            </select>
          </div>
          <div className="text-container">
            <input defaultValue={labelValue} onChange={labelChange} />
          </div>
        </div>

        <div className="lowerContainer">
          <div className="text-container">
            <input
              type="checkbox"
              defaultChecked={required}
              onChange={requiredChange}
            />{' '}
            필수
          </div>
          <div
            role="presentation"
            className="drag-container"
            onMouseDown={dragTrueHandler}
            onMouseUp={dragFalseHandler}
          >
            <img
              role="presentation"
              src={moveGrab}
              alt="없음"
              onClick={pauseEvent}
            />
          </div>
          <div className="btn-container">
            <img
              role="presentation"
              className="close"
              src={closeBtn}
              alt="없음"
              onClick={removeField}
            />
          </div>
        </div>
      </Title>
      <PlaceholderBox>
        <input value={placeholderValue} onChange={placeholderChange} />
      </PlaceholderBox>
      <TextContainer id="text">
        <Editor value={memo} onChange={memoChange} />
      </TextContainer>
    </FieldBox>
  );
};

export default TextField;

const FieldBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid #e6e6e6;
  border-radius: 10px;
  margin-bottom: 1.5rem;

  input {
    outline: unset;
  }
`;

const Title = styled.div`
  min-height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid #e6e6e6;
  padding: 0.5rem;

  .upper-container {
    width: 70%;
    display: flex;
    flex-direction: row;

    .text-container {
      padding-left: 2rem;
    }
  }

  .lowerContainer {
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;

    .text-container {
      flex: 1 0 0;
    }

    .drag-container {
      min-height: 100%;
      display: flex;
      justify-content: center;
      flex: 1 0 0;
      padding-left: 1rem;

      >.grabbing
      cursor: grab;

      img {
        width: 35%;
      }
    }

    .btn-container {
      display: flex;
      justify-content: center;
      flex: 1 0 0;
      padding-left: 1rem;

      img {
        width: 35%;
        cursor: pointer;
      }
    }
  }
`;

const PlaceholderBox = styled.div`
  > input {
    width: 90%;
    height: 35px;
    color: #a4a4a4;
    margin-left: 14px;
  }
`;

const TextContainer = styled.div`
  border-top: 2px solid #e6e6e6;
`;
