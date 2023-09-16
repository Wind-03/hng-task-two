import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const movie = () => {
  const [Movie, setMovie] = useState(null)

  const utcReleaseDate = new Date(
    Movie?.release_date,
  ).toUTCString()
  const { movieId } = useParams()
  useEffect(() => {
    getDetails()
  }, [])
  const movieKey = '0ee56187abc5299f81e6b5dcac61b895'	

  const getDetails = () => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${movieKey}}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }
  const backdrop = {
    backgroundImage: `url('https://image.tmdb.org/t/p${
      Movie ? Movie.backdrop_path : ''
    }')`,
  }
  return (
    <div className='movie-details'>
      <div style={backdrop}></div> 
      <img src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}/>       
    </div>
  )
}
export default movie