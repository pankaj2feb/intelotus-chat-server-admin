import React, { Component } from 'react'
import { authenticate, setUserCredential } from '../../actions/'
import './styles.css'
import { connect } from 'react-redux'


class Login extends Component {

    constructor(props){
        super(props)
       
        this.state = { username:"",password:"" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
      this.props.setUserCredential(this.state.username, this.state.password);
      //this.props.setChatState('Chatcenter');
      this.props.authenticate();
       event.preventDefault();
    }

    render () {
        const {unauth} = this.props;
        console.log(unauth);
        return (
            <div className="loginChild">
                <div className="childContent">
                {unauth && <div className="unauth">Unauthorized Access!!!</div>}
                    <input type="text" name="username" required="required" placeholder="User Name" 
                                    value={this.state.username} onChange={this.handleChange}/>
                    <input type="password" name="password" required="required" placeholder="Password"
                                    value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn--raised btn--yellow" 
                        onClick={this.handleSubmit}
                    >Login</button>
                </div>
            </div>
        )
    }
}

//export default Login

const mapStateToProps = state => ({
    appState: state.appState,
    user:state.user,
    unauth:state.login.user === "unauth"
  });
   
   
  const mapDispatchToProps = dispatch => ({
    authenticate:()=>{dispatch(authenticate())},
    setUserCredential:(username, password)=>{dispatch(setUserCredential(username, password))}
  });

//   const mapDispatchToProps = dispatch => ({
//     setChatState: (chatState) => {
//       dispatch(setChatState(chatState))
//     }
//   })
   
   export default Login = connect(mapStateToProps, mapDispatchToProps)(Login)
   