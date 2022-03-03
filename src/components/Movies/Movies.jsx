import SearchForm from "./SearchForm/SearchForm";
import './Movies.css'
function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <section className="movies-list">
        <div className="movies-lists">
          <div className="movies-list__item">
            <div className="movies-list__item-img"></div>
            <div className="movies-list__item-block-name-like">
              <p className="movies-list__item-name">33 слова</p>
              <div className="movies-list__item-like"></div>
            </div>
            <p className="movies-list__item-time">1ч 47м</p>
          </div>
          <div className="movies-list__item">
            <div className="movies-list__item-img"></div>
            <div className="movies-list__item-block-name-like">
              <p className="movies-list__item-name">33 слова</p>
              <div className="movies-list__item-like movies-list__item-like_active"></div>
            </div>
            <p className="movies-list__item-time">1ч 47м</p>
          </div>
          <div className="movies-list__item">
            <div className="movies-list__item-img"></div>
            <div className="movies-list__item-block-name-like">
              <p className="movies-list__item-name">33 слова</p>
              <div className="movies-list__item-like"></div>
            </div>
            <p className="movies-list__item-time">1ч 47м</p>
          </div>
          <div className="movies-list__item">
            <div className="movies-list__item-img"></div>
            <div className="movies-list__item-block-name-like">
              <p className="movies-list__item-name">33 слова</p>
              <div className="movies-list__item-like"></div>
            </div>
            <p className="movies-list__item-time">1ч 47м</p>
          </div>
          <div className="movies-list__item">
            <div className="movies-list__item-img"></div>
            <div className="movies-list__item-block-name-like">
              <p className="movies-list__item-name">33 слова</p>
              <div className="movies-list__item-like"></div>
            </div>
            <p className="movies-list__item-time">1ч 47м</p>
          </div>
        </div>
        <div className="movies-list__more">
          <button className="movies-list__more-button">Еще</button>
        </div>
      </section>
    </main>
  );
}

export default Movies;
