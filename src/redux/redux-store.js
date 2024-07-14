import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer"

import {combineReducers, legacy_createStore as createStore} from "redux"
import {sidebarReducer} from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export let store = createStore(reducers);