import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
    return (
        <HashRouter base='/'>
            <home />
            {/* <Routes >
                <Route path="/" element={<Home />} />
            </Routes> */}
        </HashRouter >
    );
}

export default App;