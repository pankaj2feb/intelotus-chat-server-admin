import React, { Component } from 'react'
import './styles.css'
import { connect } from 'react-redux'
import io from "socket.io-client"
import { addMessage } from '../../../actions/'


class ChatWindow extends Component {

    constructor(props){
        super(props)
       
        

        this.state = { conversation:"",  userchat:{}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.socket = io('localhost:4000');
        this.socketid = this.socket.id;  
        

        
        
       
    }
    componentDidMount(){
        
        
        console.log(this.socket);
        
       
       


    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        

        const username = this.props.userDetails;
       // console.log(this.props);

        this.setState({
            userchat:{
                messages: value,
                user: username
            }
        })
        
        
    }

    handleSubmit(){
        this.sendMessage();
     }
 
     sendMessage(){
         let chat = {};
         let adminChat = {};
         const username = this.props.userDetails;
         const clientId =  this.props.activeChatClient;
         const user = this.props.user.username;
         const mappeduser = this.props.mappeduser;
         
         chat = this.state.userchat;

         
        let self = this;
        setTimeout(()=>{
         chat.timestamp = new Date().getTime();
         
         chat.clientId = this.socket.id;
         chat.privateId = clientId;
         chat.user =  user;   
         
         //this.props.addMessage(chat)
         //this.socket.to(clientId).emit('SEND_MESSAGE', chat);
         //io.to(clientId).emit('SEND_MESSAGE', chat);
         //this.socket.emit('SEND_MESSAGE', chat);
         adminChat = chat;
         adminChat.clientId = clientId;
         const userDetais = self.props.connecteduser.usersDetails;
        // const username = userDetais.find((user)=>user.clientId == clientId && user.username);
         console.log(username);

         adminChat.user = username;
         
         console.log(self.props.connecteduser);
         

         self.props.addMessage(adminChat);
         
         this.socket.emit('PRIVATE_MESSAGE_SEND', chat);
        
        
         });
        
        
 
     }

    
    

    render () {
        const clientId =  this.props.activeChatClient;
        const messages = this.props.messages;
        return (
            <div className="chatWindow">
                {/* {messages.map((msg)=>{msg})} */}
            <div className="chatMessage">
                {messages.map((msg)=>{return <p key={msg.timestamp}>{msg.clientId == clientId && msg.message}</p>})}
                  
            </div>

            <div className="chatWindowNew">  
                <div className="action-input"> 
                  <textarea className="chat-text" onChange={this.handleChange}/>
                 
                    <button className="btn--raised btn--yellow" 
                        onClick={this.handleSubmit}
                    >Send</button>
                </div>
            </div>
                  
            </div>

            
        )
    }
}

//export default Login

const mapStateToProps = state => ({
    activeChatClient:state.activechat.clientId,
    messages:state.message,
    user:state.user,
    mappeduser:state.mappedUser,
    connecteduser:state.connecteduser
});
   
   
  const mapDispatchToProps = dispatch => ({
    addMessage:(data)=>{dispatch(addMessage(data))}
  });


   
   export default ChatWindow = connect(mapStateToProps, mapDispatchToProps)(ChatWindow)
   