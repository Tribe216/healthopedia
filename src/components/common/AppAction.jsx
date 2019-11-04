import styled from 'styled-components';
import { colors } from 'utilities/styled_helper.js';
import PropTypes from 'prop-types';

export const AppAction = styled.span`
  color: ${props => props.color}
  font-weight: bold;

  &:hover {
    color: ${props => props.hoverColor};
    cursor: pointer;
  }
`

AppAction.defaultProps = {
  color: colors.teal,
  hoverColor: colors.darkTeal
}

AppAction.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string
};