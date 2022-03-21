import './Register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Register(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  function handleChange(e, setter) {
    setter(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.isRegistration({
      name: name,
      email: email,
      password: password
    })

  }


  return (
    <section className="register">
      <div className="profile__block">
        <Link to="/" className="register__link"><div className="logo"></div></Link>
        <h3 className="profile-title login__title">Добро пожаловать!</h3>
        <form onSubmit={handleSubmit} className="profile__form">
          <p className="profile__form-description-input">Имя</p>
          <input value={name} onChange={(e) => handleChange(e, setName)} type="text" className="profile__form-input" required/>
          <p className="profile__form-description-input">E-mail</p>
          <input value={email} onChange={(e) => handleChange(e, setEmail)}  type="email" className="profile__form-input" required/>
          <p className="profile__form-description-input">Пароль</p>
          <input value={password} onChange={(e) => handleChange(e, setPassword)} type="password" className="profile__form-input" required/>
 {/*          <p className="profile__form-input-password error">Что-то пошло не так...</p> */}
          <button className="profile__form-button register__button">Зарегестрироватся</button>
        </form>
        <p className="profile__reg">Уже зарегистрированы? <Link to="/signin" className="profile__reg-link">Войти</Link></p>
      </div>
    </section>
  )
}