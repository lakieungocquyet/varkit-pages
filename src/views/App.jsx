import { Routes, Route } from 'react-router'
import React, { useState, useEffect } from 'react'
import Main from '../pages/Main.jsx'
import Home from '../components/Home.jsx'
import Documentation from '../components/Documentation.jsx'
import '../styles/App.scss'
import '../styles/Login_page.scss'
import '../styles/Signup_page.scss'
import '../styles/Complete_profile.scss'
function App() {
  return (
      <div className="App">
        <Routes>
			<Route path="/" element={<Main />}>
				<Route index element={<Home />} />
				<Route path="home" element={<Home />}/>
				<Route path="docs" element={<Documentation />}/>
			</Route>
        </Routes>
      </div>
  )
}

export default App
