import React from 'react';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js';
import SearchBar from './SearchBar';

const Header = ({processKeyword}) => {
  return (
    <HeaderStyles>
      <header>
        <h3>Header</h3>
        <SearchBar processKeyword={processKeyword} />
      </header> 
    </HeaderStyles>
  );
}

const HeaderStyles = styled.div`
  flex-shrink: 0;
  height: 100px;
  width: 100%;
  background: ${colors.black}
  color: ${colors.white};
  padding: 2rem;

  header {
    max-width: 1400px;
  }
`

export default Header;
