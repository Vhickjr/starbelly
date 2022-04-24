
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Products from './components/pages/Products'


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About Us </Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>
            <Link to="/products"> Products </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route exact path='/' element={<Home />}>  </Route>
        <Route exact path='/about' element={< About />}>   </Route>
        <Route exact path='/contact' element={< Contact />}>  </Route>
        <Route exact path='/ Products' element={< Products />}>  </Route>
      </Routes>
    </Router>

  );
}

export default App;
