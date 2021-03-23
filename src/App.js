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

  sortData = event => {
    event.preventDefault();
    let unsorted = this.state.directory;
    let sorted = unsorted.sort((a, b) => {
      let aFullName = (a.name.first + a.name.last).toLowerCase().trim();
      let bFullName = (b.name.first + b.name.last).toLowerCase().trim();
      if (aFullName < bFullName) return -1;
      if (aFullName > bFullName) return 1;
      return 0;
    });
    this.setState({ directory: sorted });
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
        <NavBar change={this.handleInputChange} sort={ this.sortData } />
        <Results employees={this.state.directory} />
      </>
    );
  }

}

export default App;
