import './Footer.css'
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <footer className="footer">
        <div className="footer__block-top">
          <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        </div>
        <div className="footer__block-down">
          <div className="footer__copyright">© 2020</div>
          <div className="footer__social-lists">
            <a target="_blank" rel="noreferrer" href="https://practicum.yandex.ru" className="footer__social-list">Яндекс.Практикум</a>
            <a target="_blank" rel="noreferrer" href="https://github.com/slonpro" className="footer__social-list">GitHub</a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/slonpro" className="footer__social-list">Facebook</a>
          </div>
        </div>
      </footer>
    )
  } if (location.pathname === "/movies") {
    return (
      <footer className="footer">
        <div className="footer__block-top">
          <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        </div>
        <div className="footer__block-down">
          <div className="footer__copyright">© 2020</div>
          <div className="footer__social-lists">
            <a target="_blank" rel="noreferrer" href="https://practicum.yandex.ru" className="footer__social-list">Яндекс.Практикум</a>
            <a target="_blank" rel="noreferrer" href="https://github.com/slonpro" className="footer__social-list">GitHub</a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/slonpro" className="footer__social-list">Facebook</a>
          </div>
        </div>
      </footer>
    )
  } if (location.pathname === "/saved-movies") {
    return (
      <footer className="footer">
        <div className="footer__block-top">
          <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        </div>
        <div className="footer__block-down">
          <div className="footer__copyright">© 2020</div>
          <div className="footer__social-lists">
            <a target="_blank" rel="noreferrer" href="https://practicum.yandex.ru" className="footer__social-list">Яндекс.Практикум</a>
            <a target="_blank" rel="noreferrer" href="https://github.com/slonpro" className="footer__social-list">GitHub</a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/slonpro" className="footer__social-list">Facebook</a>
          </div>
        </div>
      </footer>
    )
  } else {
    return (
      <></>
    )
  }
}

export default Footer