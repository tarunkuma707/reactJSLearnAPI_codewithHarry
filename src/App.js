import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from 'react'

function App() {
  let pageSize =  15;
  let apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(10);
  return (
    <>
      <Navbar  />
      <LoadingBar
        height={3}
        color="#f11946"
        progress={progress}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
        <Route exact path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" headline="Entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
        <Route exact path='/business' element={<News apiKey={apiKey} setProgress={setProgress} key="business" headline="Business" pageSize={pageSize} country="us" category="business" />} />
        <Route exact path='/general' element={<News apiKey={apiKey} setProgress={setProgress} key="general" headline="General" pageSize={pageSize} country="us" category="general" />} />
        <Route exact path='/health' element={<News apiKey={apiKey} setProgress={setProgress} key="health" headline="Health"  pageSize={pageSize} country="us" category="health" />} />
        <Route exact path='/science' element={<News apiKey={apiKey} setProgress={setProgress} key="science" headline="Science"  pageSize={pageSize} country="us" category="science" />} />
        <Route exact path='/sports' element={<News apiKey={apiKey} setProgress={setProgress} key="sports" headline="Sports"  pageSize={pageSize} country="us" category="sports" />} />
        <Route exact path='/technology' element={<News apiKey={apiKey} setProgress={setProgress} key="technology" headline="Technology"  pageSize={pageSize} country="us" category="technology" />} />
      </Routes>
    </>
  );
}

export default App;
