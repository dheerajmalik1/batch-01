import React, { Component } from 'react';
import { render } from 'react-dom';
import Person from './person';

const name = {
  firstname: "Dheeraj",
  lastname: "Malik",
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>JS Drome batch 1</h1>
        <Person name={name}/>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));