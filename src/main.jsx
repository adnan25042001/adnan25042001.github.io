import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MyContext from "./assets/context/MyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MyContext>
            <App />
        </MyContext>
    </React.StrictMode>
);
