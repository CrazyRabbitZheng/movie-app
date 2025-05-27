import './App.css'
import MovieList from './MovieList.jsx'
import movies from './movies.json'
import NavBar from './NavBar.jsx';


function App() {
  return (
    <>
      <NavBar />
      <MovieList data={movies.movies}/>
      
    </>
  )
}

export default App
