import React from 'react';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerStyles>
      <FontAwesomeIcon
        className="spinner-icon"
        spin
        icon={faSpinner} 
      />
    </LoadingSpinnerStyles>
  );
}

const LoadingSpinnerStyles = styled.div`
  height:100%;
  width: 100%;
  background: ${colors.white};
  color: ${colors.gray};
  font-size: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default LoadingSpinner;
