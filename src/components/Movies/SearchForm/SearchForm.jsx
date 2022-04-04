import './SearchForm.css'
import React from 'react';

function SearchForm(props) {


  function handleChange(e, setter) {
    setter(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.searchMovies(props.keyWord, props.setFiltredAndSortMovies, props.checked)
  }

  function handleSubmitCheckbox(e) {
    props.shortMovies(props.setFiltredAndSortMovies, props.setChecked, props.checked, props.movies)
  }

  return (
    <section className="search-form">
      <div className="search-form__block-search">
        <form onSubmit={handleSubmit} className="search-form__form">
          <input placeholder='Поиск' value={props.keyWord} onChange={(e) => handleChange(e, props.setKeyWord)} type="text" className="search-form__input" required />
          <button className="search-form__button">Поиск</button>
        </form>
      </div>
      <div className="search-form__filters">
        <input onChange={handleSubmitCheckbox} type="checkbox" className="checkbox" id="checkbox2" checked={props.checked}/>
        <label htmlFor="checkbox2" className="ios-switch">Короткометражки</label>
      </div>
    </section>
  );
}

export default SearchForm;
