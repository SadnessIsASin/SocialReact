import './index.css';
import {store, subscribe} from "./redux/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";


let renderEntireThree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App
                state = {state}
                dispatch = {store.dispatch.bind(store)}
            />
        </BrowserRouter>);
}

renderEntireThree(store.getState());

store.subscribe(renderEntireThree);