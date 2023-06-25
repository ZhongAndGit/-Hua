import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstScreem from './pages/firstScreen'
import Layout from './components/layout'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<FirstScreem></FirstScreem>}></Route>
          <Route path="/*" element={<Layout></Layout>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )

}


export default App;
