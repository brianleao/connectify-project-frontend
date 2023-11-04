// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contato from './components/Contato';
import Empresa from './components/Empresa';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
      <Navigation/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/empresa" element={<Empresa />} />
            </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
