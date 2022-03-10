import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/pages/Home';

function App() {
  return (
    <WholeContainer>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </WholeContainer>
  );
}

export default App;

const WholeContainer = styled.div`
  width: 500px;
  height: 100vh;
  margin: 0 auto;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    /* Chrome, Safari, Opera*/
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
`;
