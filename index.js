import React, { Component } from 'react';
import { render } from 'react-dom';
import HookComponent from './HookComponent';
import RefactoredComponent from './refactoredComponent';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <RefactoredComponent/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
