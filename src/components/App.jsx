import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Main from 'components/main/Main';

function App() {
  return (
    <AppStyles>
      <Header />
      <Main />
      <Footer />
    </AppStyles>
  );
}

const AppStyles = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;

`

export default App;
