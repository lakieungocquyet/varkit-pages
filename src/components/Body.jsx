import { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate } from 'react-router'
import Home from "./Home.jsx"

function Body() {
    return (
        <div className="body">
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
}

export default Body;