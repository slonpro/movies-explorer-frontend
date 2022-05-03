import './Register.css'
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../Validator/Validator.js'

export default function Register(props) {
const formValidation = useFormWithValidation()



  const handleSubmit = (e) => {
    e.preventDefault();
    props.isRegistration(formValidation.values)

  }


  return (
    <section className="register">
      <div className="profile__block">
        <Link to="/" className="register__link"><div className="logo"></div></Link>
        <h3 className="profile-title login__title">Добро пожаловать!</h3>
        <form onSubmit={handleSubmit} className="profile__form">
          <p className="profile__form-description-input">Имя</p>
          <input name='name' value={formValidation.values.name} onChange={(e) => formValidation.handleChange(e)} type="text" className="profile__form-input" minLength={2} required/>
          {formValidation.errors.name
            ? <p className="profile__form-input-password error">{formValidation.errors.name}</p>
            : ''}
          <p className="profile__form-description-input">E-mail</p>
          <input name='email' value={formValidation.values.email} onChange={(e) => formValidation.handleChange(e)}  type="email" className="profile__form-input" required/>
          {formValidation.errors.email
            ? <p className="profile__form-input-password error">{formValidation.errors.email}</p>
            : ''}
          <p className="profile__form-description-input">Пароль</p>
          <input name='password' value={formValidation.values.password} onChange={(e) => formValidation.handleChange(e)} type="password" className="profile__form-input" required/>
          {formValidation.errors.password
            ? <p className="profile__form-input-password error">{formValidation.errors.password}</p>
            : ''}
          <button className="profile__form-button register__button" disabled={formValidation.isValid ? '' : 'disabled'}>Зарегестрироватся</button>
        </form>
        <p className="profile__reg">Уже зарегистрированы? <Link to="/signin" className="profile__reg-link">Войти</Link></p>
      </div>
    </section>
  )
}