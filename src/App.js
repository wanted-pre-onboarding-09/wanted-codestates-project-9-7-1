import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Home from './components/pages/Home';
import Form from './components/pages/Form';
import CreateFormPage from './components/pages/CreateFormPage';
import User from './components/pages/User';

function App() {
  return (
    <WholeContainer>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateFormPage />} />
        <Route path="/form/:id" element={<Form />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </WholeContainer>
  );
}

export default App;

const WholeContainer = styled.div`
  width: 600px;
  height: auto;
  margin: 0 auto;
  //   overflow-y: scroll;
  //   position: relative;
  //   ::-webkit-scrollbar {
  //     /* Chrome, Safari, Opera*/
  //     display: none;
  //   }
  //   -ms-overflow-style: none; /* IE and Edge */
  //   .Toastify__toast-container {
  //     position: absolute;
  //     right: 0;
  //   }
`;
