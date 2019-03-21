import React, { Component } from 'react'
import { authenticate, setConnectedClients, addMessage, setClientsDetails } from '../../actions/'
import './styles.css'
import { connect } from 'react-redux'
import UserList from "./UserList/"
import ChatWindow from "./ChatWindow/"
import io from "socket.io-client"

class ActionBoard extends Component {

    constructor(props){
        super(props)
       
        this.state = {};

       }

    componentDidMount(){
        this.socket = io('localhost:4000');
        this.setState({socketId:this.socket})

        console.log(this.scoket);
        console.log("test");
       
         let self = this;
        this.socket.on('CONNECTED_CLIENTS', function(data){
            console.log(data);
            self.props.setConnectedClients(data);
        });
        this.socket.on('CLIENT_DETAILS', function(data){
            console.log(data);
            self.props.setClientsDetails(data);
        });

        this.socket.on('RECEIVE_MESSAGE', function(data){
            console.log(data);
            self.props.addMessage(data)
        });

        this.socket.on('connect', function() {
            console.log(self.socket.id);

            self.socket.emit('SERVER_ID', {serverid:self.socket.id});
        });    

    }

    

    render () {

      

        return (
            <div className="actionBoard">
                <UserList/>
                <ChatWindow/>
                    
            </div>
        )
    }
}

//export default Login

const mapStateToProps = state => ({
    appState: state.appState,
    user:state.user
  });
   
   
  const mapDispatchToProps = dispatch => ({
    authenticate:()=>{dispatch(authenticate())},
    setConnectedClients:(data)=>{dispatch(setConnectedClients(data))},
    setClientsDetails:(data)=>{dispatch(setClientsDetails(data))},
    addMessage:(data)=>{dispatch(addMessage(data))}
  });

//   const mapDispatchToProps = dispatch => ({
//     setChatState: (chatState) => {
//       dispatch(setChatState(chatState))
//     }
//   })
   
   export default ActionBoard = connect(mapStateToProps, mapDispatchToProps)(ActionBoard)
   