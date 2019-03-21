import React, { Component } from 'react'

import './styles.css'
import { connect } from 'react-redux'
import { arrayToObject } from '../../../utils'
import { setActiveWindow, mapUserIdName } from '../../../actions' 

class UserList extends Component {

    constructor(props){
        super(props)
       
        this.state = {selected:"unselected"};
        this.mapNameID = this.mapNameID.bind(this);
        this.handleClick = this.handleClick.bind(this);
       
    }

    mapNameID(){
       
        const message = this.props.message;
        const mapNameID = arrayToObject(message, "clientId");
        console.log(mapNameID);
        
        return mapNameID;
      

    }

    componentDidUpdate(prevProps, prevState, snapshot){

        if (this.props.message !== prevProps.message) {
           console.log(this.mapNameID());
            this.props.mapUserIdName(this.mapNameID());
          }
    }

    handleClick(clientId, event){
        this.setState({
            selected:"selected"
        });
        this.props.setActiveWindow(clientId);
    }
    

    render () {
        const mapNameID = this.mapNameID();
        const clients = this.props.clients;
        const selected = this.state.selected;
        console.log(clients);
        return (
            <div className="userList">
                   
                   {clients && clients.map((client)=>{
                      return  <p key={client} className={`userName ${selected}`} onClick={(e) => this.handleClick(client, e)}>{mapNameID[client] && mapNameID[client].user}</p>
                    })}
                   
            </div>
        )
    }
}

//export default Login

const mapStateToProps = state => ({
   
    clients:state.connecteduser.users,
    message:state.message
  });
   
   
  const mapDispatchToProps = dispatch => ({
    setActiveWindow:(clientId)=>{dispatch(setActiveWindow(clientId))},
    mapUserIdName:(userObj)=>{dispatch(mapUserIdName(userObj))}
  });


   
   export default UserList = connect(mapStateToProps, mapDispatchToProps)(UserList)
   