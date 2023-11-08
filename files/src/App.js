import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cadastrar from './components/Cadastrar';

function App() {
  return (
    <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastrar" element={<Cadastrar/>} />
            </Routes>
    </Router>
    
  );
}

export default App;
