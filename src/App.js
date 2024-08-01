import React from "react";
import './reset.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersConnect} from "./components/Users/UsersContainer";
import {ProfileConnect} from "./components/Profile/ProfileContainer";

function App() {
    return (
            <div className="app-container">
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path="/profile" element={<ProfileConnect />} />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />
                    <Route path="/news" element={<News />}/>
                    <Route path="/music" element={<Music />}/>
                    <Route path="/settings" element={<Settings />}/>
                    <Route path="/users" element={<UsersConnect />} />
                </Routes>
            </div>
    );
}

export default App;
