import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addResultData } from '../../store/surveyDataSlice';
import FormHeader from '../molecules/FormHeader';
import FormFooter from '../molecules/FormFooter';
import FormContainer from '../organisms/FormContainer';

const Form = () => {
  const { id } = useParams();

  const datas = useSelector((state) => state.surveyData.data);
  const selectedData = datas.find((data) => data.formId === +id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const [isAllChecked, setIsAllChecked] = useState({
    isName: true,
    isPhone: true,
    isAddress: true,
    isOption: true,
    isImg: true,
    isAgreement: true,
  });

  const onAdd = (name, data) => {
    setInputs({ ...inputs, [name]: data });
  };

  const onCheckValue = (name, isChecked) => {
    setIsAllChecked({ ...isAllChecked, [name]: isChecked });
  };

  const onSubmit = () => {
    dispatch(addResultData({ inputs, formId: selectedData.formId }));
    alert('제출 완료');
    navigate('/');
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
      <FormFooter disabled={false} onSubmit={onSubmit} />
    </>
  );
};

export default Form;

// useEffect(() => {
//   selectedData.formData.forEach((form) => {
//     if (form.id === 'name' && form.required) {
//       setIsAllChecked({ ...isAllChecked, isName: false });
//     }
//   });
// }, []);
// else if (form.id === 'phone' && form.required) {
//   setIsAllChecked({ ...isAllChecked, isPhone: false });
// } else if (form.id === 'address' && form.required) {
//   setIsAllChecked({ ...isAllChecked, isAddress: false });
// } else if (form.id === 'input_0' && form.required) {
//   setIsAllChecked({ ...isAllChecked, isOption: false });
// } else if (form.id === 'input_1' && form.required) {
//   setIsAllChecked({ ...isAllChecked, isImg: false });
// } else if (form.id === 'agreement_0' && form.required) {
//   setIsAllChecked({ ...isAllChecked, isAgreement: false });
// }

// const { isName, isPhone, isAddress, isOption, isImg, isAgreement } =
//   isAllChecked;
