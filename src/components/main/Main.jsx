import React from 'react';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js'

function App() {
  return (
    <MainStyles>
      <h3>Main App</h3>
    </MainStyles>
  );
}

const MainStyles = styled.div`
  flex-grow: 1;
  height: 500px;
  width: 100%;
  background: ${colors.gray}
`

export default App;
