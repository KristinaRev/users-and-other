import React from "react";

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
    render() {
        return (
            // теперь прописав ref можно обращаться к тегу form через myForm
            <form action="" ref={(el) => this.myForm = el}>
                <input type="text" placeholder="Имя" onChange={(e) => this.setState({firstname: e.target.value})}/>
                <input type="text" placeholder="Фамилия" onChange={(e) => this.setState({lastname: e.target.value})}/>
                <textarea placeholder="Биография" onChange={(e) => this.setState({bio: e.target.value})}/>
                <input type="text" placeholder="Возраст" onChange={(e) => this.setState({age: e.target.value})}/>
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
                <button type="button" onClick={() => {
                    this.myForm.reset()

                    this.props.onAdd({
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy
                    })}
                }> Добавить нового пользователя</button>
            </form>
        )
    }
}

export default AddUser
