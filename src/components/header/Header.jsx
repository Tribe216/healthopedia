import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { colors } from 'utilities/styled_helper.js';
import { AppAction } from 'components/common/AppAction';

const Header = ({clearResults, showClearResults}) => {
  return (
    <HeaderStyles>
      <header>
        <h3>Healthopedia</h3>
        { 
          showClearResults && (
            <AppAction 
              color={colors.white}
              hoverColor={colors.lightMint}
              onClick={clearResults}
            >
              New <FontAwesomeIcon icon={faSearch}/>
            </AppAction>
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

Header.propTypes = {
  showClearResults: PropTypes.bool,
  clearResults: PropTypes.func
};

export default Header;
