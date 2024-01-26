import React from "react";
import './reset.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Navbar} from './components/Navbar/Navbar';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';

function App(props) {
    return (
        <div className="app-container">
            <Header/>
            <Navbar myFriends={props.state.sidebar.myFriends}/>
            <Routes>
                <Route path="/dialogs/*" element={<Dialogs
                    dialogs={props.state.messagesPage.dialogs}
                    messages={props.state.messagesPage.messages}
                    sendMessage = {props.sendMessage}
                    updateNewMessageText = {props.updateNewMessageText}
                />}/>
                <Route path="/profile" element={<Profile
                    posts={props.state.profilePage.posts}
                    addPost={props.addPost}
                    updateNewPostText = {props.updateNewPostText}/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
        </div>
    );
}

export default App;
