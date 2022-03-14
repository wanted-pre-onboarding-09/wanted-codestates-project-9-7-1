import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function Header() {
  return (
    <StyeldHeader>
      <h1>데이터블</h1>
      <div className="header-bar">
        <h2>최근 설문지</h2>
        <Link to="/create">
          <AiOutlinePlusCircle fill="#fa4646" />
        </Link>
      </div>
    </StyeldHeader>
  );
}

export default Header;

const StyeldHeader = styled.div`
  margin-top: 30px;
  h1 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  h2 {
    font-size: 20px;
    font-weight: bold;
  }
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  svg {
    font-size: 50px;
    cursor: pointer;
  }
`;
