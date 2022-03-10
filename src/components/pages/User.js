import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function User() {
  const { id } = useParams();
  const data = useSelector((state) => state.surveyData.data);
  const list = data.find((el) => +el.formId === +id);
  console.log(list);
  return (
    <StyledWrap>
      <StyledTitle>{list.title}</StyledTitle>
      {list.resultData.map((el) => (
        <ul key={el.useId}>
          {list.formData.map((menu) => (
            <li key={menu.id}>
              <div className="item-title-wrap">
                <div className="item-title">{menu.label}</div>
                <div className="item-required">
                  {menu.required ? '필수요소' : null}
                </div>
              </div>
              {menu.type === 'file' ? (
                <img src={el[menu.id]} alt="이미지" />
              ) : null}
              {menu.type === 'agreement' ? (
                <div className="item-text">
                  {el[menu.id] ? '동의' : '동의하지 않음'}
                </div>
              ) : null}
              {menu.type !== 'file' && menu.type !== 'agreement' ? (
                <div className="item-text">{el[menu.id]}</div>
              ) : null}
            </li>
          ))}
        </ul>
      ))}
    </StyledWrap>
  );
}

export default User;

const StyledTitle = styled.p`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`;

const StyledWrap = styled.div`
  padding-top: 20px;
  ul {
    margin-top: 20px;
    padding: 20px;
    border: solid 1px black;
    border-radius: 5px;
  }
  li {
    margin-bottom: 20px;
  }
  .item-title-wrap {
    display: flex;
    align-items: center;
  }
  .item-title {
    font-size: 18px;
    font-weight: bold;
  }
  .item-text {
    margin-top: 15px;
  }
  .item-required {
    margin-left: 10px;
    font-size: 12px;
    color: red;
  }
  img {
    margin: 20px 0;
  }
`;
