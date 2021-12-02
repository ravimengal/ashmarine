
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import NavBar from './Components/Navbar/NavBar';
import Welcome from './Components/WelcomePage/Welcome';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
      
     <Welcome/>
      {/* <Home/>
      <About/>
      <Contact/> */}
    </div>
  );
}

export default App;
