import { Route, Routes } from 'react-router-dom'
import './css/App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import { MovieProvider } from './services/contexts/MovieContext'
function App() {
  return (
    <MovieProvider>
      <main className='main-content'>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}
export default App;
