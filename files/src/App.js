import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cadastrar from './components/Cadastrar';
import MainPage from './components/MainPage';
import Ranking from './components/Ranking'
import Playlists from './components/Playlists'
import FavoriteArtists from './components/FavoriteArtists'
import Musics from './components/Musics';
import Playlist from './components/Playlist'
import Settings from './components/Settings';
import Search from './components/Search';
import { PlayerProvider } from './contexts/PlayerContext';

function App() {
  return (
    <PlayerProvider>
        <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cadastrar" element={<Cadastrar/>}/>
                    <Route path="/mainpage" element={<MainPage/>}/>
                    <Route path="/ranking" element={<Ranking/>}/>
                    <Route path="/playlists" element={<Playlists/>}/>
                    <Route path="/favoriteartists" element={<FavoriteArtists/>}/>
                    <Route path="/musics" element={<Musics/>}/>
                    <Route path="/playlist" element={<Playlist/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/search" element={<Search/>}/>
                </Routes>
        </Router>
    </PlayerProvider>    
  );
}

export default App;
