import SearchForm from "../Movies/SearchForm/SearchForm";
import '../Movies/Movies.css'
import './SavedMovies.css'
import MoviesCard from "../Movies/MoviesCard/MoviesCard";
import React from "react";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  const [keySaveWord, setKeySaveWord] = React.useState('')
  const [filtredSavedMovies, setFiltredSavedMovies] = React.useState([])

  React.useEffect(() => {
    setFiltredSavedMovies(props.movies)
  }, [props.movies])

  return (
    <main className="savedmovies">
      <SearchForm shortMovies={props.shortMovies} keyWord={keySaveWord} filtredMovies={filtredSavedMovies} setFiltredMovies={setFiltredSavedMovies} setKeyWord={setKeySaveWord} searchMovies={props.searchMovies} movies={props.movies}/>
  
      <section className="movies-list savedmovies__list">
        {props.loader ? <Preloader /> : <></>}
        {filtredSavedMovies.length === 0 ? <p className="movies-lists__not-found">Ничего не найдено</p> : <></>}

        <div className="movies-lists">
          {filtredSavedMovies.map((item) => <MoviesCard deleteSavedMovie={props.deleteSavedMovie} savedMovies={props.savedMovies} toggleSaveMovies={props.toggleSaveMovies} changeButtonOnDelete={true} item={item} key={item._id} img={item.image} name={item.nameRU} duration={item.duration} />)}
        </div>
      </section>
    </main>
  );
}

export default SavedMovies;
