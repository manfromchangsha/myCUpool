import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:'',
      password:''
    }
  }

  render() {
    return (
        <MuiThemeProvider>
          <div className="Login-wrapper">
          <AppBar title="Login" showMenuIconButton={false} className="appBar" />
          <div className="Login-fields">
           <TextField
             className ="field1"
             hintText="Enter your Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             className ="field2"
             hintText="Enter your Password"
             floatingLabelText="Password"
             type="password"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <RaisedButton className="submit" label="Log In" primary={true} onClick={(event) => this.handleClick(event)}/>
           </div>
          </div>
         </MuiThemeProvider>
    );
  }
}

export default Login;
