import SearchForm from "./SearchForm/SearchForm";
import './Movies.css'
function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <section className="movies-list">
        <div className="movies-lists">
          <div className="movies-list__item">
            <img src={require('../../images/film1.jpg')} alt="описание картинки" className="movies-list__item-img"></img>
            <div className="movies-list__item-block-name-like">
              <p className="movies-list__item-name">33 слова</p>
              <button className="movies-list__item-like"></button>
            </div>
            <p className="movies-list__item-time">1ч 47м</p>
          </div>
          <div className="movies-list__item">
            <img src={require('../../images/film1.jpg')} alt="описание картинки" className="movies-list__item-img"></img>
            <div className="movies-list__item-block-name-like">
              <p className="movies-list__item-name">33 слова</p>
              <button className="movies-list__item-like"></button>
            </div>
            <p className="movies-list__item-time">1ч 47м</p>
          </div>
          <div className="movies-list__item">
            <img src={require('../../images/film1.jpg')} alt="описание картинки" className="movies-list__item-img"></img>
            <div className="movies-list__item-block-name-like">
              <p className="movies-list__item-name">33 слова</p>
              <button className="movies-list__item-like"></button>
            </div>
            <p className="movies-list__item-time">1ч 47м</p>
          </div>
          <div className="movies-list__item">
            <img src={require('../../images/film1.jpg')} alt="описание картинки" className="movies-list__item-img"></img>
            <div className="movies-list__item-block-name-like">
              <p className="movies-list__item-name">33 слова</p>
              <button className="movies-list__item-like movies-list__item-like_active"></button>
            </div>
            <p className="movies-list__item-time">1ч 47м</p>
          </div>
          <div className="movies-list__item">
            <img src={require('../../images/film1.jpg')} alt="описание картинки" className="movies-list__item-img"></img>
            <div className="movies-list__item-block-name-like">
              <p className="movies-list__item-name">33 слова</p>
              <button className="movies-list__item-like"></button>
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
