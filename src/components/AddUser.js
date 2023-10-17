import React from "react";

class AddUser extends React.Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Фамилия"/>
                <textarea placeholder="Биография"/>
                <input type="text" placeholder="Возраст"/>
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy"/>
                <button type="button"> Добавить нового пользователя</button>
            </form>
        )
    }
}

export default AddUser
