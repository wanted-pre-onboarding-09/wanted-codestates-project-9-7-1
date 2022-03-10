import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const InputImg = () => {
  const imgRef = useRef();
  const [img, setImg] = useState();
  const [preview, setPreview] = useState();
  const handleClick = (event) => {
    event.preventDefault();
    imgRef.current.click();
  };

  console.log(img);

  const handleFileChange = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      setImg(file);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
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
        <PlusText preview={preview}>+</PlusText>
        <ImgButtonText preview={preview}>눌러서 파일을 등록</ImgButtonText>
      </InputImageBoxWrapper>
      <SubText>첨부파일은 위와 같이 입력할 수 있습니다.</SubText>
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
`;

const PlusText = styled.span`
  position: absolute;
  top: 80px;
  right: 206px;
  color: ${(props) => (props.preview ? '#fff' : '#868e96')};
  font-size: 50px;
`;

const ImgButtonText = styled.p`
  position: absolute;
  bottom: 64px;
  right: 164px;
  font-weight: 500;
  border: none;
  color: ${(props) => (props.preview ? '#fff' : '#868e96')};
  opacity: 1;
  z-index: 10;
`;

const SubText = styled.p`
  font-size: 12px;
  margin-top: 12px;
`;
