import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Main from 'components/main/Main';

import { 
  searchByKeyword,
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
    this.processKeyword = this.processKeyword.bind(this);
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

  processKeyword(keyword) {
    this.enableLoadingSpinner();
    searchByKeyword(keyword).then(
      data => {
        this.updateResults(data);
        this.disableLoadingSpinner();
      }
    )
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
      <AppStyles>
        <Header processKeyword={this.processKeyword}/>
        <Main 
          processDemographic={this.processDemographic}
          data={this.state.results}
          loading={this.state.loading}
        />
        <Footer />
      </AppStyles>
    );
  }
}

const AppStyles = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export default App;
