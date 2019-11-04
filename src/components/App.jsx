import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Main from 'components/main/Main';
import { colors } from 'utilities/styled_helper.js';

import { 
  searchByDemographic
} from 'utilities/api.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      loading: false
    }

    this.updateResults = this.updateResults.bind(this);
    this.clearResults = this.clearResults.bind(this);
    this.processDemographic = this.processDemographic.bind(this);
  }

  updateResults(results) {
    this.setState({results})
  }

  clearResults() {
    this.updateResults(null);
  }

  setLoadingSpinner(onOff) {
    this.setState({loading: onOff})
  }

  enableLoadingSpinner() {
    this.setLoadingSpinner(true);
  }

  disableLoadingSpinner() {
    this.setLoadingSpinner(false);
  }

  processDemographic(age, sex) {
    this.enableLoadingSpinner();
    searchByDemographic(age,sex).then(
      data => {
        this.updateResults(data);
        this.disableLoadingSpinner();
      }
    )
  }

  render() {
    return (
      <AppStyles mint={this.state.results === null}>
        <Header
          showClearResults={!!this.state.results}
          clearResults={this.clearResults}
        />
        <Main 
          processDemographic={this.processDemographic}
          data={this.state.results}
          loading={this.state.loading}
        />
      </AppStyles>
    );
  }
}

const AppStyles = styled.div`
  min-height: 100%;
  background: ${props => props.mint ? colors.lightMint : colors.white};
  display: flex;
  flex-direction: column;

  font-family: 'Open Sans', sans-serif;

  h1 {
    color: ${colors.teal}
  }
`

export default App;
