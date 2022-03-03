import './Profile.css'
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <section className="profile">
        <h3 className="profile-title profile_title">Привет, ИмяПользователя!</h3>
        <div className="profile__block-info">
          <p className="profile__field-text">Имя</p>
          <p className="profile__field-text">ИмяПользтвателя</p>
        </div>
        <div className="profile__block-info">
          <p className="profile__field-text">E-mail</p>
          <p className="profile__field-text">pochta@yandex.ru</p>
        </div>
        <Link to="/profile" className="profile__link">Редактировать</Link>
        <Link to="/signout" className="profile__link profile__link_exit">Выйти из аккаунта</Link>
    </section>
  )
}

export default Profile