import React from 'react';
import ReactDOM from 'react-dom';

import {RestfulProvider} from "restful-react";
import './index.css';

import App from "./App.jsx";

const RestfulApp = () => (
    <RestfulProvider base="https://dog.ceo/api">
        <App />
    </RestfulProvider>
);

export default RestfulApp;
const rootElement = document.getElementById("root");
ReactDOM.render(<RestfulApp />, rootElement);
