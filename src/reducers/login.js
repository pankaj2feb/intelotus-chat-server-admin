const auth = (state=[], action) => {
    switch(action.type){
        case 'SET_AUTH_STATE':
            return {...state, 
                user:action.payload
            }
        default:
            return state
        }
}

export default auth;