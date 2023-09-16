/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/Featured.css'
import React from 'react';
import Card from './Card'
import Error from './ErrorPage'	


function Featured (props) {
  const [movieList, setMovieList] = useState([])
  const [error, setError] = useState(null)
  const movieKey = '0ee56187abc5299f81e6b5dcac61b895'	
  const getmovies =()=>{
    fetch(`https://api.themoviedb.org/3/movie/top_rated?&api_key=${movieKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(result =>setMovieList(result.results.slice(0,10)))
    .catch((err) => 
      {setError(err);
    });;
  }
  useEffect(()=>{
    getmovies()
  },[])
  if (error) {
    // Render the error page when an error occurs
    return <Error />;
  }
  console.log(movieList)
  return (
    <div className="featured">
          <div className='movie-list'>
            {movieList.map((movie)=>{
                return <Card key={movie?.id} movie={movie}/>
            })}
          </div>
          
    </div>
  )
}

export default Featured