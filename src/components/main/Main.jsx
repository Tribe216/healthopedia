import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LoadingSpinner from 'components/common/LoadingSpinner';
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
  } else {
    content = <p>Unknown API Error!</p>
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
    <MainStyles mint={data === null}>
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
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  main {
    max-width: 1400px;
    margin: 0 auto;
    height: 100%;
    padding: 2rem;
    flex: 1;
  }
`

Main.defaultProps = {
  data: null
}

Main.propTypes = {
  data: PropTypes.object,
  processDemographic: PropTypes.func,
  loading: PropTypes.bool
};

export default Main;
