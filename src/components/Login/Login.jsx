import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import auth from '../../utils/Auth';

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  function handleChange(e, setter) {
    setter(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth.authorize({password, email})
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setPassword('')
          setEmail('')
          props.setLogin(true)
          history.push('/movies')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }


  return (
    <section className="login">
      <div className="profile__block">
        <Link to="/" className='login__link'><div className="logo"></div></Link>
        <h3 className="profile-title">Рады видеть!</h3>
        <form onSubmit={handleSubmit} className="profile__form">
          <p className="profile__form-description-input">E-mail</p>
          <input value={email} onChange={(e) => handleChange(e, setEmail)} type="email" className="profile__form-input" />
          <p className="profile__form-description-input">Пароль</p>
          <input value={password} onChange={(e) => handleChange(e, setPassword)} type="password" className="profile__form-input" />
          <button className="profile__form-button">Войти</button>
        </form>
        <p className="profile__reg">Ещё не зарегистрированы? <Link to="/signup" className="profile__reg-link">Регистрация</Link></p>
      </div>
    </section>
  )
}

export default Login