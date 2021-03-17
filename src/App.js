import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx'
import './App.css';
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters: users}));
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value})
    //this => App{props: {…}, context: {…}, refs: {…}, updater: {…}, handleChange: ƒ,…}
  }

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox placeholder='Search Monster' handleChange={this.onSearchChange}/>
          <CardList monsters={filteredMonsters}/>
        </div>
    )
  }
}

export default App;
