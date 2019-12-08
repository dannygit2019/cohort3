import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Gui} from './components/AccountReact/ReactAccount';
import TicTacToe from './TicTacToe.js'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('renders TicTactoe without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TicTacToe />, div);
});

it('renders Gui without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gui />, div);
});