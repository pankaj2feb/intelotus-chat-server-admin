import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Login from './components/Login'
import ActionBoard from './components/ActionBoard'



class App extends Component {

constructor(props){
  super(props)
  this.state={}

}



  render() {
    const {appState, username, auth} = this.props;
   
    return (
      <div className="App">
        <div className="App-header">
          <div className="appLogo">XYZ Chat Control</div>
          <div className="loginText">{auth && username}</div>
        </div>
       <div className="loginBox">
      
        {(()=>{
         console.log(appState.appState);
          switch (appState.appState) {
            case 'login':
              return (<Login/>);
            case 'actionBoard':
            return (<ActionBoard/>);
            default:
              return true;
          }})()}
         
       </div>
      </div>
    );
  }
}

//export default App;

const mapStateToProps = state => ({
  appState: state.appState,
  username:state.user.username,
  auth:state.login.user === "auth"
});
 
 
const mapDispatchToProps = dispatch => ({
});
 
 export default App = connect(mapStateToProps, mapDispatchToProps)(App)
 
 
