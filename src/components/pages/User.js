import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Pagination from '../common/Pagination';
import NotUser from '../common/NotUser';

function User() {
  const [page, setPage] = useState(1);
  const limit = 1;
  const offset = (page - 1) * limit;

  const navigate = useNavigate();
  const { id } = useParams();

  const data = useSelector((state) => state.surveyData.data);
  const formItems = data.find((el) => +el.formId === +id);
  const formUserData = formItems.resultData;

  const handleClick = () => navigate('/');

  return (
    <StyledWrap>
      {!formUserData ? (
        <NotUser />
      ) : (
        <>
          <StyledTitle>
            <AiOutlineArrowLeft onClick={handleClick} cursor="pointer" />
            <p>{formItems.title}</p>
          </StyledTitle>
          {formUserData.slice(offset, offset + limit).map((el) => (
            <ul key={el.useId}>
              {formItems.formData.map((menu) => (
                <li key={menu.id}>
                  <div className="item-title-wrap">
                    <div className="item-title">{menu.label}</div>
                    <div className="item-required">
                      {menu.required ? '필수' : null}
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
          <Pagination total={data.length} page={page} setPage={setPage} />
        </>
      )}
    </StyledWrap>
  );
}

export default User;

const StyledTitle = styled.div`
  display: flex;
  font-size: 30px;
  align-items: center;
  text-align: center;
  font-weight: bold;
  p {
    margin: 0 auto;
  }
`;

const StyledWrap = styled.div`
  padding-top: 20px;
  ul {
    margin-top: 20px;
    padding: 20px;
    border: solid 2px #34495e;
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
