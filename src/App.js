import React, { Component } from 'react';
// Components
import NavBar from './components/NavBar';
import Results from './components/Results';
import SearchBar from './components/SearchBar';
// Materialize
import M from 'materialize-css';
// API
// import API from "./utils/API";


class App extends Component {
  state = {

  }

  componentDidMount() {
    var search = document.querySelectorAll('.collapsible');
    M.Collapsible.init(search, {});
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
