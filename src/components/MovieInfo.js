import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedDirector, allDirectedMovies } from '../redux/actions/allActions'
import MovieComponent from './MovieComponent'

const MovieInfo = () => {

  const allMoviesOfDirectors = useSelector(state => state.getAllMovies)

  const movies = useSelector(state => state.director)

  const typeOfGenre = useSelector(state => state.genreType.payload)
  // console.log(typeOfGenre)

  const genreMovies = useSelector(state => state.genreMovie.data)
  console.log(genreMovies)

  let eachGenreMovies = genreMovies

  // for (let s in movies) {
  //   console.log(movies[s].director_id)
  //   if (movies[s].director_id == directorId) {
  //     eachGenreMovies.push(movies[s])
  //   }
  // }

  console.log(eachGenreMovies)

  const { directorId } = useParams()
  const dispatch = useDispatch()

  let particularMovies = []
  for (let s in movies) {
    console.log(movies[s].director_id)
    if (movies[s].director_id == directorId) {
      particularMovies.push(movies[s])
    }
  }

  const fetchMovie = async () => {
    const response = await axios.get(`https://react-redux-imdb.herokuapp.com/movies/${directorId}`)
      .catch((err) => {
        console.log("error", err)
      })

    dispatch(selectedDirector(response.data.data))
  }

  useEffect(() => {
    if (directorId && directorId !== '') fetchMovie()
  }, [directorId])

  const fetchAllMovies = async () => {
    const response = await axios.get(`https://react-redux-imdb.herokuapp.com/movies`)
      .catch((err) => {
        console.log("error", err)
      })

    dispatch(allDirectedMovies(response.data.data))
  }

  let Allmovies
  useEffect(() => {
    fetchAllMovies()
    // console.log('hello')
  }, [])

  let onlyMovies = []
  for (let eachMovie in allMoviesOfDirectors) {
    onlyMovies.push(allMoviesOfDirectors[eachMovie])
  }

  Allmovies = onlyMovies
  console.log(directorId)
  if (directorId) Allmovies = particularMovies
  else if (typeOfGenre == 'Action') {
    Allmovies = eachGenreMovies

  } else if (typeOfGenre == 'Drama') {
    Allmovies = eachGenreMovies

  } else if (typeOfGenre == ' Romance') {
    Allmovies = eachGenreMovies

  } else if (typeOfGenre == ' Thriller') {
    Allmovies = eachGenreMovies
  } else if (typeOfGenre == ' Crime') {
    Allmovies = eachGenreMovies
  }
  else {
    Allmovies = onlyMovies
  }

  return (

    Allmovies.map(each => {
      const { id, moviename, moviedesc, movieposter, categories, leadroles } = each

      const allCategories = categories.map(each => {
        return (
          <span className='eachCategory'>{each}</span>
        )
      })

      const cast = leadroles.map(each => {
        return (
          <span className='cast'> {each} </span>
        )
      })

      return (
        <div className='movieCard'>
          <div className='imageBox'>
            <img src={movieposter}></img>
          </div>
          <div className='movieContent'>
            <h1> {moviename} </h1>
            <p> CAST: { cast } </p>
            <p> CATEGORY: { allCategories } </p>
            <p> {moviedesc} </p>
          </div>
        </div>
      )
    })
  )
}

export default MovieInfo


