import React from 'react';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js'

function App() {
  return (
    <FooterStyles>
      <footer>
        <h3>Footer</h3>
      </footer>
    </FooterStyles>
  );
}

const FooterStyles = styled.div`
  flex-shrink: 0;
  height: 100px;
  width: 100%;
  background: ${colors.black};
  color: ${colors.white};

  footer: {
    max-width: 1400px;
  }
`

export default App;
