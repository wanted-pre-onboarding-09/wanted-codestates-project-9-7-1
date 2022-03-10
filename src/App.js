import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/pages/Home';

function App() {
  return (
    <StyledWrap>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </StyledWrap>
  );
}

export default App;

const StyledWrap = styled.main`
  width: 500px;
  margin: 0 auto;
`;
