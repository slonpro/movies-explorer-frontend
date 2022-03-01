import './Login.css'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <section className="login">
      <div className="logo"></div>
      <h3 className="profile-title">Рады видеть!</h3>
      <form action="" className="profile__form">
        <p className="profile__form-description-input">E-mail</p>
        <input type="email" className="profile__form-input" />
        <p className="profile__form-description-input">Пароль</p>
        <input type="password" className="profile__form-input" />
        <button className="profile__form-button">Войти</button>
        
      </form>
      <p className="profile__reg">Ещё не зарегистрированы? <Link to="/signup" className="profile__reg-link">Регистрация</Link></p>
    </section>
  )
}

export default Login