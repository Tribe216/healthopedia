import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js'
import LoadingSpinner from './LoadingSpinner';
import TopicResults from './TopicResults';
import DemoResults from './DemoResults';
import DemoSearch from './DemoSearch';


const Content = ({data, processDemographic }) => {
  let content;
  let queryType = data && data.Result.Query.ApiType;

  if (data === null) {
    content = <DemoSearch processDemographic={processDemographic}/> 
  } else if (data.Result.Error === 'True') {
    content = <p>An Error has occurred</p>
  } else if (data.Result.Total === '0') {
    content = <p>No results found!</p>
  } else if (queryType === 'myhealthfinder'){
    content = <DemoResults data={data}/>
  } else if (queryType === 'topicsearch'){
    content = <DemoResults data={data}/>
  } else {
    content = <p>No results found!</p>
  }

  return content;
}

const Main = props => {
  let {
    data,
    loading,
    processDemographic
  } = props

  return (
    <MainStyles>
      <main>
        {
          loading ? (
            <LoadingSpinner />
          ) : (
            <Content 
              data={data}
              processDemographic={processDemographic}
            />
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
  padding: 2rem;

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
  processDemographic: PropTypes.func,
};

export default Main;
