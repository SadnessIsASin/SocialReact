import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer"

import {combineReducers, legacy_createStore as createStore} from "redux"
import {sidebarReducer} from "./sidebar-reducer";
import {authReducer} from "./auth-reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export let store = createStore(reducers);