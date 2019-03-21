const message = (state=[], action) => {
    switch(action.type){
        case 'ADD_MESSAGE':
        case 'MESSAGE_RECEIVED':
            return [...state, {
                message:action.payload.messages,
                timestamp:action.payload.timestamp,
                user:action.payload.user,
                clientId:action.payload.clientId
            }]
       
        default:
            return state
        }
}

export default message;