import { useState } from 'react';
import UserData from './data/UserData';
import UserList from './components/UserList';
import Header from './components/Header';

function App() {
  const [users, setUsers] = useState(UserData);
  return (
    <div>
      <Header />
      <UserList users={users} />
    </div>
  );
}

export default App;
