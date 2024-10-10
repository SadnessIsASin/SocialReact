import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer"

import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import {sidebarReducer} from "./sidebar-reducer";
import {authReducer} from "./auth-reduser";
import {thunk} from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export let store = createStore(reducers, applyMiddleware(thunk));