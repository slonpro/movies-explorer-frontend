import SearchForm from "../Movies/SearchForm/SearchForm";
import '../Movies/Movies.css'
import './SavedMovies.css'
function SavedMovies() {
  return (
    <main className="savedmovies">
      <SearchForm />
      <section className="movies-list savedmovies__list">
        <div className="movies-lists">
          <div className="movies-list__item savedmovies__item">
            <div className="movies-list__item-img"></div>
            <div className="movies-list__item-block-name-like">
              <p className="movies-list__item-name">33 слова</p>
              <div className="movies-list__item-delete savedmovies__delete"></div>
            </div>
            <p className="movies-list__item-time">1ч 47м</p>
          </div>
          <div className="movies-list__item savedmovies__item">
            <div className="movies-list__item-img"></div>
            <div className="movies-list__item-block-name-like">
              <p className="movies-list__item-name">33 слова</p>
              <div className="movies-list__item-delete savedmovies__delete"></div>
            </div>
            <p className="movies-list__item-time">1ч 47м</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SavedMovies;
