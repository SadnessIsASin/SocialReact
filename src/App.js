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


function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
