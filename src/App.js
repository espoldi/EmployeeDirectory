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
    search: "",
    directory: [],
    error: ""
  }

  componentDidMount() {
    M.AutoInit();

    API.getRandomEmployee()
      .then(res => this.setState({ directory: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({ search: value });
  };

  render() {
    return (
      <>
        <NavBar change={ this.handleInputChange } />
        <Results employees={ this.state.directory } />
      </>
    );
  }

}

export default App;
