import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import DirectorComponent from './DirectorComponent'
import { fetchDirector, setDirector } from '../redux/actions/allActions'

const DirectorsList = () => {

  const dispatch = useDispatch()

  const fetchDirectors = async () => {
    const response = await axios.get(`https://react-redux-imdb.herokuapp.com/directors`)
    .catch((err) => {
      console.log("error", err)
    })
    
    dispatch(setDirector(response.data))
  }

  useEffect(() => {
    fetchDirectors()
  }, [])

  return (
    <div className='allDirectors'>
      <DirectorComponent ></DirectorComponent>
    </div>
  )
}

export default DirectorsList
