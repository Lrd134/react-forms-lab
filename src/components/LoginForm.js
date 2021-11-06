import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      handleLogin: props.handleLogin,
      username: "",
      password: ""
    };
  }

  handleInputChange = eventInfo => {
    this.setState({
      [eventInfo.target.name]: eventInfo.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.state.username === "" || this.state.password === "" ? (event => {event.preventDefault()}) : this.state.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
