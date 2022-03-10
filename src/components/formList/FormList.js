import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FormContents from './FromContents';
import FormHandler from './FormHandler';

const mock = [
  {
    title: '테스트1',
    id: 1,
    contents: [
      {
        id: 'name',
        type: 'text',
        required: true,
        label: '이름',
        placeholder: '주민등록상 이름 입력',
      },
      {
        id: 'phone',
        type: 'phone',
        required: true,
        label: '휴대폰 번호',
      },
      {
        id: 'address',
        type: 'address',
        required: true,
        label: '배송지',
      },
      {
        id: 'input_0',
        type: 'select',
        label: '옵션1',
        options: ['S', 'L', 'XL', 'XXL'],
        required: true,
      },
      {
        id: 'input_1',
        type: 'file',
        label: '첨부파일',
        required: false,
        description: '<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>',
      },
      {
        id: 'agreement_0',
        type: 'agreement',
        label: '개인정보 수집 약관 동의',
        required: true,
        contents: '<p>(개인정보 수집 및 약관 내용)</p>',
      },
    ],
  },
  {
    title: '테스트2',
    id: 2,
    contents: [
      {
        id: 'name',
        type: 'text',
        required: true,
        label: '이름',
        placeholder: '주민등록상 이름 입력',
      },
      {
        id: 'phone',
        type: 'phone',
        required: true,
        label: '휴대폰 번호',
      },
      {
        id: 'address',
        type: 'address',
        required: true,
        label: '배송지',
      },
      {
        id: 'input_0',
        type: 'select',
        label: '옵션1',
        options: ['S', 'L', 'XL', 'XXL'],
        required: true,
      },
      {
        id: 'input_1',
        type: 'file',
        label: '첨부파일',
        required: false,
        description: '<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>',
      },
      {
        id: 'agreement_0',
        type: 'agreement',
        label: '개인정보 수집 약관 동의',
        required: true,
        contents: '<p>(개인정보 수집 및 약관 내용)</p>',
      },
    ],
  },
  {
    title: '테스트3',
    id: 3,
    contents: [
      {
        id: 'name',
        type: 'text',
        required: true,
        label: '이름',
        placeholder: '주민등록상 이름 입력',
      },
      {
        id: 'phone',
        type: 'phone',
        required: true,
        label: '휴대폰 번호',
      },
      {
        id: 'address',
        type: 'address',
        required: true,
        label: '배송지',
      },
      {
        id: 'input_0',
        type: 'select',
        label: '옵션1',
        options: ['S', 'L', 'XL', 'XXL'],
        required: true,
      },
      {
        id: 'input_1',
        type: 'file',
        label: '첨부파일',
        required: false,
        description: '<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>',
      },
      {
        id: 'agreement_0',
        type: 'agreement',
        label: '개인정보 수집 약관 동의',
        required: true,
        contents: '<p>(개인정보 수집 및 약관 내용)</p>',
      },
    ],
  },
  {
    title: '테스트4',
    id: 4,
    contents: [
      {
        id: 'name',
        type: 'text',
        required: true,
        label: '이름',
        placeholder: '주민등록상 이름 입력',
      },
      {
        id: 'phone',
        type: 'phone',
        required: true,
        label: '휴대폰 번호',
      },
      {
        id: 'address',
        type: 'address',
        required: true,
        label: '배송지',
      },
      {
        id: 'input_0',
        type: 'select',
        label: '옵션1',
        options: ['S', 'L', 'XL', 'XXL'],
        required: true,
      },
      {
        id: 'input_1',
        type: 'file',
        label: '첨부파일',
        required: false,
        description: '<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>',
      },
      {
        id: 'agreement_0',
        type: 'agreement',
        label: '개인정보 수집 약관 동의',
        required: true,
        contents: '<p>(개인정보 수집 및 약관 내용)</p>',
      },
    ],
  },
  {
    title: '테스트5',
    id: 5,
    contents: [
      {
        id: 'name',
        type: 'text',
        required: true,
        label: '이름',
        placeholder: '주민등록상 이름 입력',
      },
      {
        id: 'phone',
        type: 'phone',
        required: true,
        label: '휴대폰 번호',
      },
      {
        id: 'address',
        type: 'address',
        required: true,
        label: '배송지',
      },
      {
        id: 'input_0',
        type: 'select',
        label: '옵션1',
        options: ['S', 'L', 'XL', 'XXL'],
        required: true,
      },
      {
        id: 'input_1',
        type: 'file',
        label: '첨부파일',
        required: false,
        description: '<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>',
      },
      {
        id: 'agreement_0',
        type: 'agreement',
        label: '개인정보 수집 약관 동의',
        required: true,
        contents: '<p>(개인정보 수집 및 약관 내용)</p>',
      },
    ],
  },
  {
    title: '테스트6',
    id: 6,
    contents: [
      {
        id: 'name',
        type: 'text',
        required: true,
        label: '이름',
        placeholder: '주민등록상 이름 입력',
      },
      {
        id: 'phone',
        type: 'phone',
        required: true,
        label: '휴대폰 번호',
      },
      {
        id: 'address',
        type: 'address',
        required: true,
        label: '배송지',
      },
      {
        id: 'input_0',
        type: 'select',
        label: '옵션1',
        options: ['S', 'L', 'XL', 'XXL'],
        required: true,
      },
      {
        id: 'input_1',
        type: 'file',
        label: '첨부파일',
        required: false,
        description: '<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>',
      },
      {
        id: 'agreement_0',
        type: 'agreement',
        label: '개인정보 수집 약관 동의',
        required: true,
        contents: '<p>(개인정보 수집 및 약관 내용)</p>',
      },
    ],
  },
  {
    title: '테스트7',
    id: 7,
    contents: [
      {
        id: 'name',
        type: 'text',
        required: true,
        label: '이름',
        placeholder: '주민등록상 이름 입력',
      },
      {
        id: 'phone',
        type: 'phone',
        required: true,
        label: '휴대폰 번호',
      },
      {
        id: 'address',
        type: 'address',
        required: true,
        label: '배송지',
      },
      {
        id: 'input_0',
        type: 'select',
        label: '옵션1',
        options: ['S', 'L', 'XL', 'XXL'],
        required: true,
      },
      {
        id: 'input_1',
        type: 'file',
        label: '첨부파일',
        required: false,
        description: '<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>',
      },
      {
        id: 'agreement_0',
        type: 'agreement',
        label: '개인정보 수집 약관 동의',
        required: true,
        contents: '<p>(개인정보 수집 및 약관 내용)</p>',
      },
    ],
  },
];
function FormList() {
  return (
    <StyledFormList>
      {mock.map((el) => (
        <li key={el.id}>
          <Link to={`/user/${el.id}`}>
            <FormContents title={el.title} />
          </Link>
          <FormHandler id={el.id} />
        </li>
      ))}
    </StyledFormList>
  );
}

export default FormList;

const StyledFormList = styled.ul`
  margin-top: 20px;
  li {
    margin-top: 20px;
  }
`;
