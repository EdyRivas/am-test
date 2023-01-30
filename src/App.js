import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";

function App() {
    return (
        <BrowserRouter basename={window.location.pathname || ''}>
            <Route exact path="/" element={<Home />} />
        </BrowserRouter>
    );
}

export default App;