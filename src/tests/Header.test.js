import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/header/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);https://jestjs.io/docs/en/using-matchers
  ReactDOM.unmountComponentAtNode(div);
});
