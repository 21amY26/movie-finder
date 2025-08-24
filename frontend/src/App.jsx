import './css/App.css'
import Home from './pages/Home.jsx'
import Favourites from './pages/Favourites.jsx'
import NavBar from './components/NavBar.jsx'
import {MovieProvider} from './context/MovieContext.jsx'
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
