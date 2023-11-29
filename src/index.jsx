import { last } from "lodash";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./app"

let root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>)


