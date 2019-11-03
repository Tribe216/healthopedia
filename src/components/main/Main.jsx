import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js'
import LoadingSpinner from './LoadingSpinner';

const Main = props => {
  let {
    data,
    loading
  } = props

  loading = true;

  return (
    <MainStyles>
      <main>
        {
          loading ? (
            <LoadingSpinner />
          ) : (
          <p>
            {JSON.stringify(data)}
          </p>
          )
        }
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
    height: 100%;
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
