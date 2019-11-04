import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { AppAction } from 'components/common/AppAction';

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
      <AppAction tag="div">
        <span onClick={this.expandText}>
          Read More <FontAwesomeIcon icon={faCaretDown}/>
        </span>
      </AppAction>
    )
  }
}

export default ReadMore;