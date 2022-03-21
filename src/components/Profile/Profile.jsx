import './Profile.css'
import { Link } from 'react-router-dom';
import React from 'react';
import { CurrentUserContext } from '../../contexts/AppContexts';
import Auth from '../../utils/Auth'

function Profile() {
  const currentUser = React.useContext(CurrentUserContext);

  const signout = () => {
    Auth.logout()
      .then((res) => localStorage.removeItem('token'))
      .catch((error) => console.log(error))
  }

  return (
    <section className="profile">
      <h3 className="profile-title profile_title">Привет, ИмяПользователя!</h3>
      <div className="profile__block-info">
        <p className="profile__field-text">Имя</p>
        <p className="profile__field-text">{currentUser.name}</p>
      </div>
      <div className="profile__block-info">
        <p className="profile__field-text">E-mail</p>
        <p className="profile__field-text">{currentUser.email}</p>
      </div>
      <Link to="/profile" className="profile__link">Редактировать</Link>
      <Link to="/signin" onClick={signout} className="profile__link profile__link_exit">Выйти из аккаунта</Link>
    </section>
  )
}

export default Profile