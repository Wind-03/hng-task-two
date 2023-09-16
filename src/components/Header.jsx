/* eslint-disable react/no-unescaped-entities */
import logo from '../assets/tv.svg'
import search from '../assets/Search.svg'
import Menu from "../assets/Menu.svg"
import '../styles/Header.css'
import IMDB from '../assets/IMDB.svg'
import Cherry from '../assets/Cherry.svg'
import play from '../assets/Play.svg'

function Header() {
  return (
    <div className='Header'>
        <div className="navbar">
          <div className="item-one">
            <img src={logo} alt="logo" />
            <p>Movie Box</p>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="What do you want to watch?" />
            <button className='search'><img src={search} alt="search" /></button>
          </div>
          <div className="menu">
              <p>Sign In</p>
              <button className="ellipse"><img src={Menu} alt="menu-btn" /></button>
          </div>
        </div>
        <div className="info">
          <h1 className="movie-title">John Wick 3: Parabellum</h1>
          <div className='imdb-details'><img src={IMDB} alt="IMDB-logo" />
          <p className='movie-rating'>86/100</p>
          </div>
          <div>
            <img src={Cherry} alt="cherry-logo"/>
            <p className="cherry-text">97%</p>
          </div>
          <p className='movie-details'>John Wick is on the run after killing a member of the international 
          assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          <button className="watch"><img src={play} alt="watch logo"/>Watch Trailer</button>
        </div>
    </div>
  )
}

export default Header