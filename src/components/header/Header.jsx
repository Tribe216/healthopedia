import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { colors } from 'utilities/styled_helper.js';

const Header = ({clearResults, showClearResults}) => {
  return (
    <HeaderStyles>
      <header>
        <h3>HealthBuddy</h3>
        { 
          showClearResults && (
            <FontAwesomeIcon 
              icon={faSearch} 
              onClick={clearResults}
            />
          )
        }
      </header> 
    </HeaderStyles>
  );
}

const HeaderStyles = styled.div`
  background: ${colors.darkTeal}
  color: ${colors.white};
  
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    max-width: 1400px;
    padding: 0 2rem
    svg:hover {
      cursor: pointer
    }
  }
`

export default Header;
