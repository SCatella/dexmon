import { useState, useEffect } from 'react';

import AppTitle from './components/app-title/app-title.component';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchField);
    });

    setFilteredUsers(newFilteredUsers);
  }, [users, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
    }

 

  return(
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

export default App;
