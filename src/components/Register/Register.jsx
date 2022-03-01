import './Register.css'

import { Link } from 'react-router-dom';
function Register() {
  return (
    <section className="register">
      <div className="logo"></div>
      <h3 className="profile-title login__title">Добро пожаловать!</h3>
      <form action="" className="profile__form">
      <p className="profile__form-description-input">Имя</p>
        <input type="text" className="profile__form-input" />
        <p className="profile__form-description-input">E-mail</p>
        <input type="email" className="profile__form-input" />
        <p className="profile__form-description-input">Пароль</p>
        <input type="password" className="profile__form-input" />
        <p className="profile__form-input-password error">Что-то пошло не так...</p>
        <button className="profile__form-button register__button">Зарегестрироватся</button>
        
      </form>
      <p className="profile__reg">Уже зарегистрированы? <Link to="/signin" className="profile__reg-link">Войти</Link></p>
    </section>
  )
}

export default Register