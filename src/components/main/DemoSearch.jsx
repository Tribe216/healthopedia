import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class DemoSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {age: '', sex: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.processDemographic(this.state.age, this.state.sex);
  }

  render() {
    return (
      <DemoSearchStyles>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="age"
            name="age"
          />
          <input 
            type="text"
            value={this.state.sex}
            onChange={this.handleChange}
            placeholder="sex"
            name="sex"
          />
          <FontAwesomeIcon icon={faSearch} onClick={this.handleSubmit}/>
        </form>
      </DemoSearchStyles>
    );
  }
}

const DemoSearchStyles = styled.div`
`

DemoSearch.propTypes = {
  searchByDemographic: PropTypes.func,
  updateResults: PropTypes.func
};


export default DemoSearch;
