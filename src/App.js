import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
    return (
        <BrowserRouter basename="http://edyrivas.github.io/am-test">
            <Routes >
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter >
    );
}

export default App;