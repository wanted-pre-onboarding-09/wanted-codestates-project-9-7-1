import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addResultData } from '../../store/surveyDataSlice';
import FormHeader from '../molecules/FormHeader';
import FormFooter from '../molecules/FormFooter';
import FormContainer from '../organisms/FormContainer';

const Form = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const datas = useSelector((state) => state.surveyData.data);
  const selectedData = datas.find((data) => data.formId === +id);

  const [inputs, setInputs] = useState({
    useId: Date.now(),
    name: '',
    phone: '',
    address: '',
    input_0: '',
    input_1: '',
    agreement_0: false,
  });

  const { name, phone, input_0, input_1, agreement_0 } = inputs;

  const nameValue = selectedData.formData.find((el) => el.id === 'name');
  const phoneValue = selectedData.formData.find((el) => el.id === 'phone');
  const addressValue = selectedData.formData.find((el) => el.id === 'address');
  const optionValue = selectedData.formData.find((el) => el.id === 'input_0');
  const imgValue = selectedData.formData.find((el) => el.id === 'input_1');
  const agreementValue = selectedData.formData.find(
    (el) => el.id === 'agreement_0',
  );

  const [isAllChecked, setIsAllChecked] = useState({
    isName: nameValue ? !nameValue.required : true,
    isPhone: phoneValue ? !phoneValue.required : true,
    isAddress: addressValue ? !addressValue.required : true,
    isOption: optionValue ? !optionValue.required : true,
    isImg: imgValue ? !imgValue.required : true,
    isAgreement: agreementValue ? !agreementValue.required : true,
  });

  const { isName, isPhone, isAddress, isOption, isImg, isAgreement } =
    isAllChecked;

  const onAdd = (name, data) => {
    setInputs({ ...inputs, [name]: data });
  };

  const onCheckValue = (name, isChecked) => {
    setIsAllChecked({ ...isAllChecked, [name]: isChecked });
  };

  const onSubmit = () => {
    dispatch(addResultData({ inputs, formId: selectedData.formId }));
    toast.success(`제출 완료되었습니다.`, {
      autoClose: 1000,
      position: toast.POSITION.TOP_right,
    });
    setTimeout(() => navigate('/'), 2000);
  };

  const handlePrev = () => {
    navigate('/');
  };

  return (
    <>
      <FormHeader title={selectedData.title} handlePrev={handlePrev} />
      <FormContainer
        selectedData={selectedData}
        name={name}
        phone={phone}
        option={input_0}
        img={input_1}
        agreement={agreement_0}
        onAdd={onAdd}
        onCheckValue={onCheckValue}
      />
      <FormFooter
        active={
          isName && isPhone && isAddress && isOption && isImg && isAgreement
        }
        onSubmit={onSubmit}
      />
    </>
  );
};

export default Form;
