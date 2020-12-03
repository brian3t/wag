import React from 'react';
import ReactDOM from 'react-dom';

import {RestfulProvider} from "restful-react";
import './index.css';

// import App from "./App.jsx";
import MyHugeList from "./restreact.jsx";

const RestfulApp = () => (
    <RestfulProvider base="https://dog.ceo/api">
        <MyHugeList />
    </RestfulProvider>
);

export default RestfulApp;
const rootElement = document.getElementById("root");
ReactDOM.render(<RestfulApp />, rootElement);
