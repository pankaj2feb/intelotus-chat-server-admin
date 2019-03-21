//const state = {appState:'login'}

const appState = (state={appState:'login'}, action) => {
    switch(action.type){
        case 'SET_APP_STATE':
            return {...state, 
                appState:action.payload
            }
        default:
            return state
        }
}

export default appState;