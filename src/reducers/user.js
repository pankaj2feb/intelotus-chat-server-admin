const userState = (state=[], action) => {
    switch(action.type){
        case 'SET_USER_CREDENTIAL':
            return {...state, 
                username:action.payload.username,
                password:action.payload.password,
            }
        default:
            return state
        }
}

export default userState;