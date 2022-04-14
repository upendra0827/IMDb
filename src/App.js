import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Top from './components/Top'
import DirectorsList from './components/DirectorsList'
import MovieInfo from './components/MovieInfo'
import store from './redux/store';
// import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Router>
        <Top></Top>
        <Routes>
          <Route path='/' exact element={<DirectorsList></DirectorsList>}></Route>

          <Route path='/directors/:directorId' exact element={<div className='moviesContainer'>
            <MovieInfo></MovieInfo>
          </div>}></Route>

          <Route path='/movies' exact element={<div className='moviesContainer'>
            <MovieInfo></MovieInfo>
          </div>}></Route>

          <Route path='/action' exact element={<div className='moviesContainer'>
            <MovieInfo></MovieInfo>
          </div>}></Route>

          <Route path='/drama' exact element={<div className='moviesContainer'>
            <MovieInfo></MovieInfo>
          </div>}></Route>

          <Route path='/romance' exact element={<div className='moviesContainer'>
            <MovieInfo></MovieInfo>
          </div>}></Route>

          <Route path='/thriller' exact element={<div className='moviesContainer'>
            <MovieInfo></MovieInfo>
          </div>}></Route>

          <Route path='/crime' exact element={<div className='moviesContainer'>
            <MovieInfo></MovieInfo>
          </div>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
