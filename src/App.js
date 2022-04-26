
import './App.css';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './components/pages/Products';
import Navbar from './components/Navbar/Navbar';
import About from './components/pages/About';
import Footer from './components/Footer/Footer';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';





function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="Products/" element={<Products />} />
          <Route path="About/" element={<About />} />
          <Route path="Contact/" element={<Contact />} />


        </Routes>
        <Footer />
      </HashRouter>

    </div>
  );
}

export default App;
