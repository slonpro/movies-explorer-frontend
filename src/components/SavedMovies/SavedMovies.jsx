import SearchForm from "../Movies/SearchForm/SearchForm";
import '../Movies/Movies.css'
import './SavedMovies.css'
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import React from "react";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  const [keySaveWord, setKeySaveWord] = React.useState('')
  const [filtredAndSortMovies, setFiltredAndSortMovies] = React.useState([])
  const [checked, setChecked] = React.useState(false)
  const [movies, setMovies] = React.useState([])


  React.useEffect(() => {
    setFiltredAndSortMovies(props.savedMovies)
  }, [props.savedMovies])


  const searchMovies = () => {
    const filtredMovies = props.savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(keySaveWord.toLowerCase()))
    setMovies(filtredMovies)
    if (checked) {
      setFiltredAndSortMovies(filtredMovies.filter((item) => item.duration <= 40))
    } else {
      return setFiltredAndSortMovies(filtredMovies)
    }
  }

  return (
    <main className="savedmovies">
      <SearchForm keyWord={keySaveWord} searchMovies={searchMovies} checked={checked} setChecked={setChecked} shortMovies={props.shortMovies} filtredAndSortMovies={filtredAndSortMovies} setFiltredAndSortMovies={setFiltredAndSortMovies} setKeyWord={setKeySaveWord} movies={movies} />

      <section className="movies-list savedmovies__list">
        {props.loader ? <Preloader /> : <></>}
        {filtredAndSortMovies.length === 0 ? <p className="movies-lists__not-found">Ничего не найдено</p> : <></>}

        <div className="movies-lists">
          {filtredAndSortMovies.map((item) => <MoviesCard deleteSavedMovie={props.deleteSavedMovie} savedMovies={props.savedMovies} toggleSaveMovies={props.toggleSaveMovies} changeButtonOnDelete={true} item={item} key={item._id} img={item.image} name={item.nameRU} duration={item.duration} />)}
        </div>
      </section>
    </main>
  );
}

export default SavedMovies;
