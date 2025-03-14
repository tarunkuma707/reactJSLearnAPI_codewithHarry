import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  let pageSize =  15;
  return (
    <>
      <Navbar  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
        <Route exact path='/entertainment' element={<News key="entertainment" headline="Entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
        <Route exact path='/business' element={<News key="business" headline="Business" pageSize={pageSize} country="us" category="business" />} />
        <Route exact path='/general' element={<News key="general" headline="General" pageSize={pageSize} country="us" category="general" />} />
        <Route exact path='/health' element={<News key="health" headline="Health"  pageSize={pageSize} country="us" category="health" />} />
        <Route exact path='/science' element={<News key="science" headline="Science"  pageSize={pageSize} country="us" category="science" />} />
        <Route exact path='/sports' element={<News key="sports" headline="Sports"  pageSize={pageSize} country="us" category="sports" />} />
        <Route exact path='/technology' element={<News key="technology" headline="Technology"  pageSize={pageSize} country="us" category="technology" />} />
      </Routes>
    </>
  );
}

export default App;
