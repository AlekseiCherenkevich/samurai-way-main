import React from 'react';
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import Content from "./Components/Content/Content";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <HeaderContainer/>
                <Navbar/>
                <Content/>
            </BrowserRouter>
        </div>
    );
}

export default App;
