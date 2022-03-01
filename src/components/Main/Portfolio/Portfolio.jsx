import './Portfolio.css'
function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="porfotilo__block-link">
        <a href="https://github.com/slonpro/russian-travel" className="porfotilo__link">Статичный сайт</a>
        <div className="portfolio__link-element"></div>
      </div>
      <div className="porfotilo__block-link">
        <a href="https://github.com/slonpro/russian-travel" className="porfotilo__link">Адаптивный сайт</a>
        <div className="portfolio__link-element"></div>
      </div>
      <div className="porfotilo__block-link">
        <a href="https://github.com/slonpro/mesto-react" className="porfotilo__link">Одностраничное приложение</a>
        <div className="portfolio__link-element"></div>
      </div>
    </section>
  );
}

export default Portfolio;
