import {BrowserRouter} from "react-router-dom"
import React from "react"
import "./index.css"
import App from "./App"
import ReactDOM from "react-dom/client"

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
    </React.StrictMode>
)