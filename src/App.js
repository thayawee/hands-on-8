import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Blog/>
       <Footer/>
    </div>
  );
}

export default App;
