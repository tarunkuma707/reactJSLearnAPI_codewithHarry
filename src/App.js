import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';


function App() {
  return (
    <>
    <Navbar pageSize={8} country="in" category="business" />
    <News />
    </>
  );
}

export default App;
