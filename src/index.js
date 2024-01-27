import './index.css';
import {state, subscribe} from "./redux/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, sendMessage, updateNewMessageText, updateNewPostText} from "./redux/state";
import React from "react";


let renderEntireThree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App
                state = {state}
                addPost = {addPost}
                updateNewPostText = {updateNewPostText}
                sendMessage = {sendMessage}
                updateNewMessageText = {updateNewMessageText}
            />
        </BrowserRouter>);
}

renderEntireThree(state);

subscribe(renderEntireThree);