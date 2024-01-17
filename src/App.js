import React from "react";
import './reset.css';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Sidebar} from "./components/Sidebar/Sidebar";

function App(props) {
 return (
        <BrowserRouter>
            <div className="app-container">
                <Header/>

                <Navbar myFriends ={props.state.sidebar.myFriends}/>
                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs
                        dialogs = {props.state.messagesPage.dialogs}
                        messages = {props.state.messagesPage.messages}/>}/>
                    <Route path="/profile" element={<Profile posts = {props.state.profilePage.posts}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
