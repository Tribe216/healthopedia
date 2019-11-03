import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js'

const Main = props => {
  const {
    data,
    loading
  } = props

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <MainStyles>
      <main>
        <h3>Main App</h3>
        <p>
          {JSON.stringify(data)}
        </p>
      </main>
    </MainStyles>
  );
}

const MainStyles = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  background: ${colors.white}

  main {
    max-width: 1400px;
    margin: 0 auto;
  }
`

Main.defaultProps = {
  data: null
}

Main.propTypes = {
  data: PropTypes.object,
  updateResults: PropTypes.func,
  clearResults: PropTypes.func
};

export default Main;
