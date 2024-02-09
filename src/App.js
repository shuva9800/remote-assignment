import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Midsection from './components/Midsection';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Midsection/>
      <Footer/>
    </div>
  );
}

export default App;
