import React, { Component } from 'react';
// Components
import NavBar from './components/NavBar';
import Results from './components/Results';
// Materialize
import M from 'materialize-css';
// API
import API from "./utils/API";

class App extends Component {
  state = {

  }

  componentDidMount() {

  };

  render() {
    return (
      <>
        <NavBar />
        <Results />
      </>
    );
  }

}

export default App;
