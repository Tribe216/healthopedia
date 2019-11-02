import React from 'react';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js'

function App() {
  return (
    <MainStyles>
      <main>
        <h3>Main App</h3>
      </main>
    </MainStyles>
  );
}

const MainStyles = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  background: ${colors.gray}

  main {
    max-width: 1400px;
  }
`

export default App;
