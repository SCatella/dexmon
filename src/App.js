import { Component } from 'react';

import AppTitle from './components/app-title/app-title.component';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { users };
      }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    const { users, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchField);
    });
    

    return (
      <div className="App">
        <AppTitle />
        <SearchBox
          onChangeHandler={ onSearchChange }
          className='search-box'
          placeholder='search monsters'
        />
        <CardList users={ filteredUsers }/>
      </div>
    );
  }
}

export default App;
