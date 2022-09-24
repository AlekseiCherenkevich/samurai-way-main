import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <Content/>
            </BrowserRouter>
        </div>
    );
}

export default App;
