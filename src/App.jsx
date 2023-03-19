import {useState} from 'react';
import Navbar from "./components/Navbar";
import UsersTable from './components/UsersTable';
import "./App.css"
import UserProfile from './components/UserProfile';

function App() {
  const [user, setUser] = useState({})

  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <h1>Таблица выгорания</h1>
        <UsersTable setUser={setUser} />
        {user && !!Object.keys(user).length && <UserProfile user={user}/>}
      </div>
    </div>
  );
}

export default App;
