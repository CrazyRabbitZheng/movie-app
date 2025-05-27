import Movie from './Movie.jsx'

const MovieList = ({data}) => {
  return (
    <>
    {
        data.map((movieData) => {
            return <Movie name={movieData.name} year={movieData.year} rating={movieData.rating}/>
        })
    }
    </>
  )
}

export default MovieList