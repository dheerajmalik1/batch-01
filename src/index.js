import React, { Component } from 'react';
import { render } from 'react-dom';
import profileData from "./profile.json"
import Profile from "./profile.js"

class App extends Component {
  render() {
    return (
      <div>
        <Profile profile={profileData} />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));