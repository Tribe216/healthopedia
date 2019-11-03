import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {searchInput: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchInput: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.processKeyword(this.state.searchInput);
  }

  render() {
    return (
      <SearchBarStyles>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.searchInput}
            onChange={this.handleChange}
            placeholder="Keyword Search"
          />
          <FontAwesomeIcon icon={faSearch} onClick={this.handleSubmit}/>
        </form>
      </SearchBarStyles>
    );
  }
}

const SearchBarStyles = styled.div`
  flex-shrink: 0;
  height: 100px;
  width: 100%;
  background: ${colors.black}
  color: ${colors.white};

  header {
    max-width: 1400px;
  }

  .svg-inline--fa {
    cursor: pointer;
  }
`

SearchBar.propTypes = {
  processKeyword: PropTypes.func
};


export default SearchBar;
