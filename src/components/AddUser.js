import React from "react";

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props);
        this.state ={
            first_name: "",
            last_name: "",
            email: "",
            avatar: "",
            isHappy: false
        }
    }
    render() {
        return (
            // теперь прописав ref можно обращаться к тегу form через myForm
            <form action="" ref={(el) => this.myForm = el}>
                <input type="text" placeholder="Имя" onChange={(e) => this.setState({first_name: e.target.value})}/>
                <input type="text" placeholder="Фамилия" onChange={(e) => this.setState({last_name: e.target.value})}/>
                <input type="text" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})}/>
                <input type="text" placeholder="Ссылка на аватар" onChange={(e) => this.setState({avatar: e.target.value})}/>
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
                <button type="button" onClick={() => {
                    this.myForm.reset()

                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        avatar: this.state.avatar,
                        isHappy: this.state.isHappy
                    }

                    if (this.props.user)
                        this.userAdd.id = this.props.user.id

                    this.props.onAdd(this.userAdd)
                }
                }> Добавить</button>
            </form>
        )
    }
}

export default AddUser
