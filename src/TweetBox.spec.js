import React from 'react';
import ReactDOM from 'react-dom';
import TweetBox from '../src/TweetBox';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<TweetBox />, div);
});
