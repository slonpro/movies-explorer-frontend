import './Navigation.css'
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav">
      <Link to="/signup" className="nav__element">Регистрация</Link>
      <Link to="/signin"> <button className="nav__button">Войти</button></Link>
    </nav>
  )
}

export default Navigation