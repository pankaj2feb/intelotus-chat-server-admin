import {combineReducers} from "redux";
import appState from "./appstate";
import login from "./login";
import user from "./user";
import connecteduser from "./connecteduser"; 
import message from "./message"; 
import activechat from "./activechat"; 
import mappedUser from "./mappedUser"; 

const rootReducers = combineReducers({appState, login, user, connecteduser, message, activechat, mappedUser});

export default rootReducers;