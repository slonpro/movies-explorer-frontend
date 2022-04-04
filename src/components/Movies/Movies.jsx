import SearchForm from "./SearchForm/SearchForm";
import './Movies.css'
import React from "react";
import MoviesCard from "./MoviesCard/MoviesCard";
import { useMediaQuery } from 'react-responsive';
import Preloader from '../Preloader/Preloader'


function Movies(props) {
  const isDesktop = useMediaQuery({ query: `(min-width: 1280px)` });
  const isTable = useMediaQuery({ query: `(min-width: 768px)` });
  const isMobile = useMediaQuery({ query: `(min-width: 320px), (max-width: 480px)` });
  const counterMoviesForResize = isDesktop ? 12 : isTable ? 8 : isMobile ? 5 : 5
  const counterMoviesAdd = isDesktop ? 3 : isTable ? 2 : 2

  const [counter, setCounter] = React.useState(0)
  const [keyWord, setKeyWord] = React.useState('')
  const [filtredAndSortMovies, setFiltredAndSortMovies] = React.useState([])
  const [checked, setChecked] = React.useState(localStorage.getItem('checked') ? localStorage.getItem('checked') !== 'false' ? true : false : false)
  
  
  const counterPlus = () => {
    setCounter(prevCounter => prevCounter + counterMoviesAdd)
  }

  React.useEffect(() => {
    if (localStorage.getItem('movies')) {
      const localFilms = JSON.parse(localStorage.getItem('movies'))
      if (localStorage.getItem('checked') !== 'false') {
        setFiltredAndSortMovies(localFilms.filter((item) => item.duration <= 40))
      } else {
        setFiltredAndSortMovies(localFilms)
      }
      setKeyWord(localStorage.getItem('keyWord'))

    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('checked', checked)
  }, [checked])

  return (
    <main className="movies">
      <SearchForm checked={checked} setChecked={setChecked} shortMovies={props.shortMovies} keyWord={keyWord} filtredAndSortMovies={filtredAndSortMovies} setFiltredAndSortMovies={setFiltredAndSortMovies} setKeyWord={setKeyWord} searchMovies={props.searchMovies} movies={props.movies}/>
      <section className="movies-list">

        {props.loader ? <Preloader /> : <></>}
        {filtredAndSortMovies.length === 0 ? <p className="movies-lists__not-found">Ничего не найдено</p> : <></>}
        <div className="movies-lists">
          {filtredAndSortMovies.slice(0, counterMoviesForResize + counter).map((item) => <MoviesCard savedMovies={props.savedMovies} toggleSaveMovies={props.toggleSaveMovies} item={item} key={item.id} img={`https://api.nomoreparties.co/${item.image.url}`} name={item.nameRU} duration={item.duration} />)}
        </div>
        {
          filtredAndSortMovies.length === 0 || filtredAndSortMovies.length < counterMoviesForResize + counter ? <></> :
            <div className="movies-list__more">
              <button onClick={counterPlus} className="movies-list__more-button">Еще</button>
            </div>
        }
      </section>
    </main>
  );
}

export default Movies;
