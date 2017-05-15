import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from '../components/MainContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainContainer />, div);
});
