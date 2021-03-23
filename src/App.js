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
    dataBackup: [],
    directory: [],
    error: ""
  }

  componentDidMount() {
    M.AutoInit();

    API.getRandomEmployee()
      .then(res => this.setState({
        directory: res.data.results,
        dataBackup: res.data.results
      }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    let query = value.toLowerCase().trim();
    const dataBackup = this.state.dataBackup;
    let results = [];

    for (let i = 0; i < dataBackup.length; i++) {
      let person = dataBackup[i];
      let fullName = (person.name.first + " " + person.name.last).toLowerCase();
      if (query === fullName.substring(0, query.length)) {
        results.push(person);
      }
    }

    this.setState({
      search: value,
      directory: results
    });
  };

  render() {
    return (
      <>
        <NavBar change={this.handleInputChange} />
        <Results employees={this.state.directory} />
      </>
    );
  }

}

export default App;
