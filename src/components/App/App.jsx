import { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactList } from '../ContactList/ContactList';
import './App.css';

function App() {
  const dataUsers = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [users, setUsers] = useState(() => {
    const savedUsers = JSON.parse(window.localStorage.getItem('number-list'));
    if (savedUsers !== null) {
      return savedUsers;
    }
    return dataUsers;
  });
  const [inputFilter, setInputFilter] = useState('');

  const addUser = user => {
    setUsers(prevUsers => {
      return [...prevUsers, { id: Date.now(), ...user }];
    });
  };

  const deleteUser = id => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== id);
    });
  };

  const visibleUsers = users.filter(user =>
    user.name.toLowerCase().includes(inputFilter.toLowerCase()),
  );

  useEffect(() => {
    window.localStorage.setItem('number-list', JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox inputValue={inputFilter} onFilter={setInputFilter} />
      <ContactList items={visibleUsers} onDelete={deleteUser} />
    </div>
  );
}

export default App;
