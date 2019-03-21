import * as types from '../constants/ActionTypes';
import axios from 'axios';


export const setAppState = (appState) => ({
    type: types.SET_APP_STATE,
    payload: appState
})



export const setAuthState = (authState) => ({
    type: types.SET_AUTH_STATE,
    payload: authState
})

export const setConnectedClients = (clients) => ({
    type: types.CONNECTED_CLIENTS,
    payload: clients
})

export const setClientsDetails = (clients) => ({
    type: types.CLIENTS_DETAILS,
    payload: clients
})

export const addMessage = (message) => ({
    type: types.ADD_MESSAGE,
    payload: message
})

export const mapUserIdName = (userObj) => ({
    type: types.MAP_USER_ID_NAME,
    payload: userObj
})


export const authenticate = () => {
    return (dispatch, getState) => {
       const store = getState();
       const {username, password} = store.user;
        axios.request({
            url:'http://localhost:4000/login',
            auth: {
                username,
                password
            }
        }).then((response)=>{
            console.log(response);
            dispatch(setAuthState('auth'));
            dispatch(setAppState('actionBoard'));
        }).catch((error)=>{
            console.log(error);
            dispatch(setAuthState('unauth'));
        })
    }
}

export const setUserCredential = (username, password) => ({
    type: types.SET_USER_CREDENTIAL,
    payload: {username, password}
})

export const setActiveWindow = (clientId) => ({
    type: types.SET_ACTIVE_WINDOW,
    payload: clientId
})






