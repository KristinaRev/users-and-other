import './App.css';
import Header from './components/Header'
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import React from "react";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            users : [
                {
                    id: 1,
                    firstname: "Bob",
                    lastname: "Marley",
                    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                    age: 40,
                    isHappy: true
                },
                {
                    id: 2,
                    firstname: "John",
                    lastname: "Doe",
                    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                    age: 22,
                    isHappy: false
                }
            ]
        }
        this.addUser = this.addUser.bind(this) //стандартный кусочек куда, где говорится о том, что в методе addUser можно использовать состояния
    }

    render() {
        return (
            <div className="App">
                <Header title="Список пользователей" />
                <main>
                    <Users users={this.state.users}/>
                </main>
                <aside>
                    <AddUser onAdd={this.addUser}/>
                </aside>
            </div>
        );
    }

    addUser(user) {
        const id = this.state.users.length + 1

        this.setState({ users: [...this.state.users, { id, ...user}] }) //суть строки в том, что мы меняем список users и к текущему всему списку добавляем +1 новый объект, который состоит из id и всего того объекта, который передаётся тут в качестве параметра(user)(в качестве параметра мы получаем данные от пользователя  что он вводит в AddUser)
    }


}

export default App;
