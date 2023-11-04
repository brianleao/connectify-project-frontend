// import logo from'./logo.svg';
//apenas um teste
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contato from './components/Contato';
import Empresa from './components/Empresa';

function App() {
  return (
    <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/empresa" element={<Empresa />} />
            </Routes>
    </Router>
    
  );
}

export default App;
