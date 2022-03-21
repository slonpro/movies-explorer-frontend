import './SearchForm.css'
import { useState } from 'react';


function SearchForm(props) {
  const [key, setKey] = useState('')

  function handleChange(e, setter) {
    setter(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    props.searchMovies(key)
    document.getElementById('checkbox2').checked = false;
  }

  function handleSubmitCheckbox(e) {
    props.shortMovies(key)
  }

  return (
    <section className="search-form">
      <div className="search-form__block-search">
        <form onSubmit={handleSubmit} className="search-form__form">
          <input placeholder='Поиск' value={key} onChange={(e) => handleChange(e, setKey)} type="text" className="search-form__input" required />
          <button className="search-form__button">Поиск</button>
        </form>
      </div>
      <div className="search-form__filters">
        <input onClick={handleSubmitCheckbox} type="checkbox" className="checkbox" id="checkbox2" />
        <label htmlFor="checkbox2" className="ios-switch">Короткометражки</label>
      </div>
    </section>
  );
}

export default SearchForm;
