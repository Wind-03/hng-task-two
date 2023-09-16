import React from 'react'
import '../styles/card.css'
import { Link } from "react-router-dom";

const card = ({movie}) => {
  return (
    <div className='Card' data-testid="movie-card">
          <img style={{width:"280px",height:"350px"}} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} data-testid="movie-poster"/>
          <h3 data-testid="movie-title">{movie?.title}</h3>
          <p className="p"data-testid="movie-release-date">{movie?.release_date}</p>
          <p className='test'>{movie?.id}</p>
          <button><Link to={`/movie/${movie.id}`} className='decor'>More Details</Link></button>
    </div>
  )
}

export default card