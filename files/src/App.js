import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cadastrar from './components/Cadastrar';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastrar" element={<Cadastrar/>}/>
                <Route path="/mainpage" element={<MainPage/>}/>
            </Routes>
    </Router>
    
  );
}

export default App;
