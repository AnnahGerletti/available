import React from 'react'

export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: {}
        }
        this.saveNewUser = this.saveNewUser.bind(this)
    this.updateNewUser = this.updateNewUser.bind(this)
    }
    updateNewUser(e) {
      console.log('hell2')
        let newUser = this.state.newUser
        newUser[e.target.name] = e.target.value
        this.setState({newUser: newUser})
    }
    saveNewUser(e) {
        e.preventDefault()
        console.log("hell 1")
        console.log({e});
        console.log("the is a user", this.state.newUser);
    }
    render() {
        return (
            <form onSubmit= {this.saveNewUser}>
                <input name="name" placeholder="name" type="text" onChange={(e) => this.updateNewUser(e)}/>
                <input type="submit" />
            </form>
        )
    }
}
