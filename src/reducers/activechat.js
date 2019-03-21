const activeChat = (state=[], action) => {
    switch(action.type){
        case 'SET_ACTIVE_WINDOW':
            return {...state, 
                clientId:action.payload
            }
        default:
            return state
        }
}

export default activeChat;