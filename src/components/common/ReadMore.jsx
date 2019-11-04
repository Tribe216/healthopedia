import React from 'react';
import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

class ReadMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
    this.expandText = this.expandText.bind(this);
  }

  expandText() {
    this.setState({expanded: true})
  }

  render() {
    return this.state.expanded ? (
      this.props.children
    ) : (
      <ReadMoreStyles>
        <span onClick={this.expandText}>
          Read More <FontAwesomeIcon icon={faCaretDown}/>
        </span>
      </ReadMoreStyles>
    )
  }
}

const ReadMoreStyles = styled.div`
  color: ${colors.teal}
  font-weight: bold;

  &:hover {
    color: ${colors.darkTeal};
    cursor: pointer;
  }
`

export default ReadMore;