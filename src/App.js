import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
    <Navbar pageSize={5} />
    <News />
    </>
  );
}

export default App;
