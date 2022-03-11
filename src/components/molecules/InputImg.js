import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineCamera, AiOutlinePlus } from 'react-icons/ai';

const InputImg = ({ form }) => {
  const imgRef = useRef();
  // const [img, setImg] = useState();
  const [preview, setPreview] = useState('');
  const [isNull, setIsNull] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    imgRef.current.click();
    if (preview.length === 0 && form.required) {
      setIsNull(true);
    }
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      // setImg(file);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
    setIsNull(false);
  };

  return (
    <>
      <Input
        ref={imgRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <InputImageBoxWrapper onClick={handleClick} preview={preview}>
        <InputImgBox preview={preview} />
        <PlusText preview={preview}>
          {preview ? <AiOutlineCamera /> : <AiOutlinePlus />}
        </PlusText>
        <ImgButtonText preview={preview}>눌러서 파일을 등록</ImgButtonText>
      </InputImageBoxWrapper>
      <SubText>{form.description}</SubText>
      {isNull && form.required && (
        <WarningText>{form.label} 항목은 필수 정보입니다</WarningText>
      )}
    </>
  );
};

export default InputImg;

const Input = styled.input`
  display: none;
`;

const InputImageBoxWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const InputImgBox = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 216px;
  margin-top: 10px;
  border: none;
  border-radius: 18px;
  background-color: ${(props) => (props.preview ? '#000' : '#f8fafb')};
  background-image: ${(props) =>
      props.preview &&
      'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'},
    url(${(props) => props.preview && props.preview});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const PlusText = styled.div`
  position: absolute;
  top: 80px;
  right: 182px;
  color: ${(props) => (props.preview ? '#fff' : '#868e96')};
  font-size: 50px;
`;

const ImgButtonText = styled.p`
  position: absolute;
  bottom: 64px;
  right: 144px;
  font-weight: 500;
  border: none;
  color: ${(props) => (props.preview ? '#fff' : '#868e96')};
  opacity: 1;
  z-index: 10;
`;

const SubText = styled.div`
  font-size: 12px;
  margin-top: 12px;
`;

const WarningText = styled.p`
  width: 100%;
  margin: 8px 0 24px 0;
  font-size: 12px;
  color: #ff2e00;
`;
