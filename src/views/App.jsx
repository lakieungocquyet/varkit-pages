import { Routes, Route } from 'react-router'
import React, { useState, useEffect } from 'react'
import Main from '../pages/Main.jsx'
import '../styles/App.scss'
import '../styles/Login_page.scss'
import '../styles/Signup_page.scss'
import '../styles/Complete_profile.scss'
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="*" element={<Main/>}/>
        </Routes>
      </div>
  )
}

export default App
