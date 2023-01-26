import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Travels from "./Components/Travels";
import Add from "./pages/Add";
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from "./pages/Update";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Travels/>} />
                    <Route path="/add" element={<Add/>} />
                    <Route path={`/update/:id`} element={<Update/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
