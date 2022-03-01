import './AboutMe.css'
function AboutMe() {
  return (
    <section id='aboutme' className="aboutme">
      <div className="title-block">
        <h2 className="title-block-h2">Студент</h2>
        <div className="title-block__line"></div>
      </div>
      <div className="aboutme__block">
        <div className="aboutme__description">
          <div className="abuotme__description-block">
            <h3 className="aboutme__description-name">Владислав</h3>
            <p className="aboutme__description-workage">Фронтенд-разработчик, 25 лет</p>
            <p className="aboutme__description-text">Родился и живу в городе Егорьевск, Московская область. Закончил НИУ МЭИ факультет ИЭТ электроэнергетик и электротехник. Начал увлекатяс разработкой.</p>
          </div>
          <div className="aboutme__description-social-link">
            <ul className="aboutme__description-items">
              <li className="aboutme__description-item"><a href="https://www.facebook.com/slonpro" className="aboutme__description-link">Facebook</a></li>
              <li className="aboutme__description-item"><a href="https://github.com/slonpro" className="aboutme__description-link">Github</a></li>
            </ul>
          </div>
        </div>
        <div className="aboutme__avatar"></div>
      </div>
    </section>
  );
}

export default AboutMe;
