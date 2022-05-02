import './Profile.css'
/* import { useHistory } from 'react-router-dom'; */
import React from 'react';
import { CurrentUserContext } from '../../contexts/AppContexts';
import Auth from '../../utils/Auth'
import apiMain from '../../utils/MainApi';
import { useFormWithValidation } from '../Validator/Validator.js'

function Profile(props) {
  const formValidation = useFormWithValidation()
  const currentUser = React.useContext(CurrentUserContext);
  const [disabledButton, setDisableButton] = React.useState(false)
  const [errorSave, setErrorSave] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  /*   const history = useHistory() */

  const signout = () => {
    Auth.logout()
      .then((res) => {
        props.setLoginIn(false)
        localStorage.clear()
      })
      .catch((error) => console.log(error))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    apiMain.setUserInfo(formValidation.values)
      .then((res) => {
        setErrorSave(true)
        setErrorMessage('Данные успешно сохранены')
        props.setCurrentUser(res)
      })
      .catch((error) => {
        setErrorSave(true)
        setErrorMessage(error)
        console.log(error)
      })
  }
  React.useEffect(() => {
    formValidation.setValues({ name: currentUser.name, email: currentUser.email })
  }, [currentUser])

  React.useEffect(() => {
    if (formValidation.values.name === currentUser.name && formValidation.values.email === currentUser.email) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
      setErrorSave(false)
    }
  }, [formValidation.values, currentUser.name, currentUser.email])

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
        {errorSave
          ? <p className="profile__form-input-password save">{errorMessage}</p>
          : ''}
      </form>
      <button onClick={signout} className="profile__link profile__link_exit">Выйти из аккаунта</button>
    </section>
  )
}

export default Profile