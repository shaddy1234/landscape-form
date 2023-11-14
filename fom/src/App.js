import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false, // Initially, the user is not registered
    };
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      isRegistered: !prevState.isRegistered,
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="toggle-form">
          <a href="#" onClick={this.toggleForm}>
            {this.state.isRegistered ? 'Sign up ' : 'Login'}
          </a>
        </div>
        {this.state.isRegistered ? (
          <LoginForm />
        ) : (
          <SignupForm />
        )}
      </div>
    );
  }
}

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="button">Login</button>
        </form>
      </div>
    );
  }
}

class SignupForm extends Component {
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default App;
