import './App.css';
import Header from './components/Header'
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import React from "react";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {

    constructor(props) {
        super(props);

        axios.get(baseUrl).then((res) => {
            this.setState({users: res.data.data})
        })

        this.state ={
            users : [
            ]
        }
        this.addUser = this.addUser.bind(this) //стандартный кусочек куда, где говорится о том, что в методе addUser можно использовать состояния
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }

    render() {
        return (
            <div className="App">
                <Header title="Список пользователей" />
                <main>
                    <Users users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser}/>
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

    editUser(user) {
        let allUsers = this.state.users //получили всех пользователей

        allUsers[user.id - 1] = user //нашли нужного пользователя

        this.setState({users: []}, () => { //очистили наш список пользователей
            this.setState({users: [...allUsers]}) //после очистки списка выполнили функцию, в которой просто установили новый список
        })
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        })
    }


}

export default App;
