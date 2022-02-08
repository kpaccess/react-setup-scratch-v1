import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Header from './components/common/Header'

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
