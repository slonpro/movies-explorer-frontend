import './SearchForm.css'
function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__block-search">
        <input type="text" className="search-form__input" />
        <button className="search-form__button">Поиск</button>
      </div>
      <div className="search-form__filters">
        <input type="checkbox" class="checkbox" id="checkbox2" />
        <label for="checkbox2" class="ios-switch">Короткометражки</label>
      </div>
    </section>
  );
}

export default SearchForm;
