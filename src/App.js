import React, { Component } from 'react';
// Components
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SortMenu from './components/SortMenu';
import Results from './components/Results';
import infocard from './components/InfoCard';
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
        <SearchBar />
        <Results />
      </>
    );
  }

}

export default App;
