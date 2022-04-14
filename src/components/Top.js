import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MovieInfo from './MovieInfo'
import { useDispatch } from 'react-redux'
import axios from 'axios'
// import { genre } from '../redux/actions/allActions'
import { genreType, genre, allDirectedMovies } from '../redux/actions/allActions'
import { NavLink } from 'react-router-dom'

const Top = () => {

  const dispatch = useDispatch()

  const fetchGenreMovie = async (category) => {
    const response = await axios.get(`https://react-redux-imdb.herokuapp.com/movies/category/${category}`)
      .catch((err) => {
        console.log("error", err)
      })
    dispatch(genre(response.data))
    dispatch(genreType(category))
  }


  return (
    <div className='top'>
      <div className='head'>
        <div className='heading'>
          <h1>IMDb</h1>
        </div>
        <div className='link'>
        <div className='eachLink'>
            <NavLink to={'/'}>Directors</NavLink>
          </div>
          <div className='eachLink'>
            <NavLink to={'/movies'} onClick={() => {
            }}>Movies</NavLink>
          </div>
          <div className='eachLink'>
            <NavLink to={'/action'} onClick={() => {
              fetchGenreMovie('Action')
            }}>Action</NavLink>
          </div>
          <div className='eachLink'>
            <NavLink to={'/drama'} onClick={() => {
              fetchGenreMovie('Drama')
            }}>Drama</NavLink>
          </div>
          <div className='eachLink'>
            <NavLink to={'/romance'} onClick={() => {
              fetchGenreMovie(' Romance')
            }}>Romance</NavLink>
          </div>
          <div className='eachLink'>
            <NavLink to={'/thriller'} onClick={() => {
              fetchGenreMovie(' Thriller')
            }}>Thriller</NavLink>
          </div>
          <div className='eachLink'>
            <NavLink to={'/crime'} onClick={() => {
              fetchGenreMovie(' Crime')
            }}>Crime</NavLink>
          </div>
        </div>
      </div>
      <div className='tail'>
        <h1>FINEST DIRECTORS IN INDIA</h1>
      </div>
    </div>
  )
}

export default Top
