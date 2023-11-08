import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { ImBooks } from 'react-icons/im'
import { MdGroup } from 'react-icons/md'
import { IoLogoGameControllerB } from 'react-icons/io'
import './App.css'
import Movie from './pages/Movie'
import Profile from './pages/Profile'
import Book from './pages/Book'
import Game from './pages/Game'
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 22</p>
      </header>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/book" element={<Book />} />
        <Route path="/game/" element={<Game />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="movie/detail/:id" element={<Detail />} />
        <Route path="game/detail/:id" element={<Detail/>} />
        <Route path="book/detail/:id" element={<Detail/>} />
      </Routes>
      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" /> Movie
        </NavLink>
        <NavLink to="/game" className="iconWrapper">
          <IoLogoGameControllerB className="icon" /> Game
        </NavLink>
        <NavLink to="/book" className="iconWrapper">
          <ImBooks className="icon" /> Book
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App
