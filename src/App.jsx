/* eslint-disable no-unused-vars */
import './App.css'
import Header from './components/Header.jsx'
import Featured from './components/Featured.jsx'


function App() {

  return (
    <div>
      <Header />
      <div className="stretch">
            <h1>Featured Movie</h1>
            <button>More</button>
      </div>
    <Featured/>
    </div>
  )
}

export default App
