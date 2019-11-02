import React from 'react';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js'

function App() {
  return (
    <HeaderStyles>
      <h3>Header</h3>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.div`
  flex-shrink: 0;
  height: 100px;
  width: 100%;
  background: ${colors.black}
  color: ${colors.white};
`

export default App;
