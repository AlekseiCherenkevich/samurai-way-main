import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";


function App() {
    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    );
}

export default App;
