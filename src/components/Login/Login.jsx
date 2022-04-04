import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import auth from '../../utils/Auth';
import { useFormWithValidation } from '../Validator/Validator.js'

function Login(props) {
  const history = useHistory()
  const formValid = useFormWithValidation()

  function handleSubmit(e) {
    e.preventDefault();
    auth.authorize(formValid.values)
      .then((data) => {
        if (data.token) {
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
          <input name='email' value={formValid.values.email} onChange={(e) => formValid.handleChange(e)} type="email" className="profile__form-input" required />
          {formValid.errors.email
            ? <p className="profile__form-input-password error">{formValid.errors.email}</p>
            : ''}
          <p className="profile__form-description-input">Пароль</p>
          <input value={formValid.values.password} name='password' onChange={(e) => formValid.handleChange(e)} type="password" className="profile__form-input" required />
          {formValid.errors.password
            ? <p className="profile__form-input-password error">{formValid.errors.password}</p>
            : ''}
          <button className="profile__form-button" disabled={formValid.isValid ? '' : 'disabled'}>Войти</button>
        </form>
        <p className="profile__reg">Ещё не зарегистрированы? <Link to="/signup" className="profile__reg-link">Регистрация</Link></p>
      </div>
    </section>
  )
}

export default Login