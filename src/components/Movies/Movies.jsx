import SearchForm from "./SearchForm/SearchForm";
import './Movies.css'
import MoviesApi from '../../utils/MoviesApi'
import React from "react";
import MoviesCard from "./MoviesCard/MoviesCard";
import { useMediaQuery } from 'react-responsive';
import Preloader from '../Preloader/Preloader'

function Movies() {
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px)` });
  const isTable = useMediaQuery({ query: `(min-width: 768px)` });
  const isMobile = useMediaQuery({ query: `(min-width: 320px), (max-width: 480px)` });
  const counterMoviesForResize = isDesktop ? 12 : isTable ? 8 : isMobile ? 5 : 5
  const counterMoviesAdd = isDesktop ? 3 : isTable ? 2 : 2
  const [movies, setMovies] = React.useState([])
  const [counter, setCounter] = React.useState(0)
  const [searchWas, setSearchWas] = React.useState(false)
  const [checked, setChecked] = React.useState(false)
  const [loader, setLoader] = React.useState(false)


  function searchMovies(key) {
    setLoader(true)
    MoviesApi.getMovies()
      .then((movies) => {
        setSearchWas(true)
        return setMovies(movies.filter((item) => item.nameRU.toLowerCase().indexOf(key.toLowerCase()) > -1))
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(false))
  }

  const shortMovies = (key) => {
    if (checked) {
      searchMovies(key)
      setChecked(false)
    } else {
      setChecked(true)
      setMovies(movies.filter((item) => item.duration <= 40))
      
    
    }
    
  }

  const counterPlus = () => {
    setCounter(prevCounter => prevCounter + counterMoviesAdd)
  }


  return (
    <main className="movies">
      <SearchForm searchMovies={searchMovies} shortMovies={shortMovies}/>
      <section className="movies-list">
        
        {loader ? <Preloader/> : <></>}
        {movies.length === 0 && searchWas ? <p className="movies-lists__not-found">Ничего не найдено</p> : <></>}
        <div className="movies-lists">
          {movies.slice(0, counterMoviesForResize + counter).map((item) => <MoviesCard key={item.id} img={item.image.url} name={item.nameRU} duration={item.duration} />)}
        </div>
        {
          movies.length === 0 || movies.length < counterMoviesForResize + counter ? <></> :
            <div className="movies-list__more">
              <button onClick={counterPlus} className="movies-list__more-button">Еще</button>
            </div>
        }
      </section>
    </main>
  );
}

export default Movies;
