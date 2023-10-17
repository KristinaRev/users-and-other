import './App.css';
import Header from './components/Header'
import Users from "./components/Users";
import AddUser from "./components/AddUser";

function App() {
  return (
    <div className="App">
      <Header title="Список пользователей" />
        <main>
            <Users />
        </main>
        <aside>
            <AddUser />
        </aside>
    </div>
  );
}

export default App;
