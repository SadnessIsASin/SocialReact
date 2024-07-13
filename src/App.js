import React from "react";
import './reset.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {Navbar} from './components/Navbar/Navbar';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

function App() {
    return (
            <div className="app-container">
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />
                    <Route path="/news" element={<News />}/>
                    <Route path="/music" element={<Music />}/>
                    <Route path="/settings" element={<Settings />}/>
                </Routes>
            </div>
    );
}

export default App;
