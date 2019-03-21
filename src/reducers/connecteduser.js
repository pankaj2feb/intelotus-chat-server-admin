const defaultState = {

    usersDetails:[]
};

const connecteduser = (state=defaultState, action) => {
   if(action.type == 'CONNECTED_CLIENTS'){
    console.log(action);
   }
    
    switch(action.type){
        case 'CONNECTED_CLIENTS':
            return {...state, 
                users:action.payload
            };
        case 'CLIENTS_DETAILS':
            return {...state, 
                usersDetails:[...state.usersDetails, {...action.payload}]
            };
        default:
            return state
        }
}

export default connecteduser;