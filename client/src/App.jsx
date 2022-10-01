import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';

import logo from './assets/mern-logo.png';
import TableUser from './components/TableUser/TableUser';
import ModalUser from './components/ModalUser/ModalUser';

import './App.css';

function App() {
  const server = import.meta.env.VITE_BACKEND_BASE_URL;
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${server}/api/users/`);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleUserAdded = (user) => {
    let newUsers = users.slice();
    users.push(user);
    setUsers(newUsers);
  }

  const handleUserUpdated = (user) => {
    let newUsers = users.slice();

    let i = newUsers.findIndex(u => u._id === user._id);

    if (newUsers.length > i) { newUsers[i] = user }

    setUsers(newUsers);
  }

  const handleUserDeleted = (user) => {
    let newUsers = users.slice();
    newUsers = newUsers.filter(u => { return u._id !== user._id; });
    setUsers(newUsers);
  }

  useEffect(() => {
    fetchUsers();
  }, [users]);

  return (
    <>
      <div className="App">
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-intro'>MERN CRUD</h1>
          <p>
            A simple records system using MongoDB, Express.js, React.js, and Node.js. REST API was implemented on the back-end.
            <br />
            CREATE, READ, UPDATE, and DELETE operations
          </p>
        </div>
      </div>
      <Container>
        <ModalUser
          headerTitle='Add User'
          buttonTriggerTitle='Add New'
          buttonSubmitTitle='Add'
          buttonColor='green'
          onUserAdded={handleUserAdded}
          onUserUpdated={handleUserUpdated}
          server={server}
        />
        <TableUser
          onUserUpdated={handleUserUpdated}
          onUserDeleted={handleUserDeleted}
          users={users}
          server={server}
        />
      </Container>
      <br />
    </>
  )
}

export default App;
