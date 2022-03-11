import React from 'react';
import styled from 'styled-components';
import Dropdown from '../molecules/Dropdown';
import InputName from '../molecules/InputName';
import InputImg from '../molecules/InputImg';
import InputTitle from '../atoms/InputTitle';
import Agreement from '../molecules/Agreement';
import InputPhone from '../molecules/InputPhone';
import InputAddress from '../molecules/InputAddress';

const FormContainer = ({
  selectedData,
  name,
  phone,
  option,
  img,
  agreement,
  onAdd,
  onCheckValue,
}) => {
  return (
    <FormWrapper>
      {selectedData.formData.map((form) => (
        <li key={form.id}>
          {form.id === 'name' && (
            <InputContainer>
              <InputTitle title={form.label} />
              <InputName
                form={form}
                name={name}
                onAddName={onAdd}
                onCheckValue={onCheckValue}
              />
            </InputContainer>
          )}
          {form.id === 'phone' && (
            <InputContainer>
              <InputTitle title={form.label} />
              <InputPhone
                form={form}
                phone={phone}
                onAddPhone={onAdd}
                onCheckValue={onCheckValue}
              />
            </InputContainer>
          )}
          {form.id === 'address' && (
            <InputContainer>
              <InputTitle title={form.label} />
              <InputAddress
                form={form}
                onAddAddress={onAdd}
                onCheckValue={onCheckValue}
              />
            </InputContainer>
          )}
          {form.id === 'input_0' && (
            <InputContainer>
              <InputTitle title={form.label} />
              <Dropdown
                form={form}
                option={option}
                onAddOption={onAdd}
                onCheckValue={onCheckValue}
              />
            </InputContainer>
          )}
          {form.id === 'input_1' && (
            <InputContainer>
              <InputTitle title={form.label} />
              <InputImg
                form={form}
                img={img}
                onAddImg={onAdd}
                onCheckValue={onCheckValue}
              />
            </InputContainer>
          )}
          {form.id === 'agreement_0' && (
            <Agreement
              form={form}
              agreement={agreement}
              onAgreement={onAdd}
              onCheckValue={onCheckValue}
            />
          )}
        </li>
      ))}
    </FormWrapper>
  );
};

export default FormContainer;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 448px;
  margin: auto;
  margin-bottom: 76px;
  padding: 0 24px 40px 24px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
