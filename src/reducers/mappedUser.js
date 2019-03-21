const userState = (state=[], action) => {
    switch(action.type){
        case 'MAP_USER_ID_NAME':
            return {...state, 
                mappedUserId:action.payload,
            }
        default:
            return state
        }
}

export default userState;