import './Navigation.css'
import { Link, NavLink } from 'react-router-dom';
import logoaccount from '../../images/iconaccount.svg'
import { LoginInContext } from '../../contexts/AppContexts';
import React from 'react';

function Navigation() {
  const loginIn = React.useContext(LoginInContext);
    if (loginIn) {
      return (
        <nav className="nav">
          <input id="menu-toggle" type="checkbox" />
          <label className="nav__menu-burger" htmlFor="menu-toggle">
            <span></span>
          </label>
          <div className="nav__menu">
            <NavLink to="/" className="nav__element nav__general">Главная</NavLink>
            <NavLink to="/movies" activeClassName='nav__element_active' className="nav__element nav_film">Фильмы</NavLink>
            <NavLink to="/saved-movies" activeClassName='nav__element_active' className="nav__element">Сохраненные фильмы</NavLink>
            <div className="nav__block-account">
              <NavLink to="/profile" activeClassName='nav__element_active' className='nav__element nav_account'>Аккаунт</NavLink>
              <div className="nav__icon-avatar"><img src={logoaccount} alt="Иконка профиля" className="nav__icon-avatar-img" /></div>
            </div>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className="nav">
          <div className="nav__menu nav__menu_general">
            <Link to="/signup" className="nav__element nav__menu_reg">Регистрация</Link>
            <Link to="/signin"> <button className="nav__button">Войти</button></Link>
          </div>
        </nav>
      )
    }

}

export default Navigation