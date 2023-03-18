import react, {useState} from 'react';
import Navbar from "./components/Navbar";
import UsersTable from './components/UsersTable';
import "./App.css"

function App() {
  const [user, setUser] = useState({})

  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <h1>Возможно выгорели</h1>
        <UsersTable setUser={setUser} />
      </div>
      {user && Object.keys(user).length && <User />}
    </div>
  );
}

export default App;
