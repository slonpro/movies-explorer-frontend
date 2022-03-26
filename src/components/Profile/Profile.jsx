import './Profile.css'
import { Link } from 'react-router-dom';
import React from 'react';
import { CurrentUserContext } from '../../contexts/AppContexts';
import Auth from '../../utils/Auth'
import apiMain from '../../utils/MainApi';
import { useFormWithValidation } from '../Validator/Validator.js'

function Profile() {
  const formValidation = useFormWithValidation()
  const currentUser = React.useContext(CurrentUserContext);
  const [disabledButton, setDisableButton] = React.useState(false)

  const signout = () => {
    Auth.logout()
      .then((res) => localStorage.removeItem('token'))
      .catch((error) => console.log(error))
  }
  const handleSubmit = () => {
    apiMain.setUserInfo(formValidation.values)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }

  React.useEffect(() => {
    formValidation.setValues({ name: currentUser.name, email: currentUser.email })
  }, [currentUser.name, currentUser.email])

  React.useEffect(() => {
    if (formValidation.values.name === currentUser.name && formValidation.values.email === currentUser.email) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [formValidation.values, currentUser.name, currentUser.email])

  console.log(formValidation)

  return (
    <section className="profile">
      <h3 className="profile-title profile_title">Привет, {currentUser.name}!</h3>
      <form onSubmit={handleSubmit} className="profile_form">
        <div className="profile__block-info">
          <p className="profile__field-text">Имя</p>
          <input name='name' value={formValidation.values.name} onChange={(e) => formValidation.handleChange(e)} className="profile__field-text" required minLength={2} />
        </div>
        {formValidation.errors.name
          ? <p className="profile__form-input-password error">{formValidation.errors.name}</p>
          : ''}
        <div className="profile__block-info">
          <p className="profile__field-text">E-mail</p>
          <input name='email' type='email' value={formValidation.values.email} onChange={(e) => formValidation.handleChange(e)} className="profile__field-text" />
        </div>
        {formValidation.errors.email
          ? <p className="profile__form-input-password error">{formValidation.errors.email}</p>
          : ''}
        <button className="profile__link" disabled={formValidation.isValid && disabledButton ? '' : 'disabled'}>Редактировать</button>
      </form>
      <Link to="/signin" onClick={signout} className="profile__link profile__link_exit">Выйти из аккаунта</Link>
    </section>
  )
}

export default Profile