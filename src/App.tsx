import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Navbar from "./Components/Navbar/Navbar";


function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Content/>
        </div>
    );
}

export default App;
