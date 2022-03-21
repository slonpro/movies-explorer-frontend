import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import auth from '../../utils/Auth';
import React, { useCallback } from 'react';
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext, LoginInContext } from '../../contexts/AppContexts'

function App() {
  const history = useHistory()
  const [loginIn, setLoginIn] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState({})

  const handleCheckToken = useCallback(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      auth.checkToken(token)
        .then((res) => {
          setLoginIn(true)
          history.push('/')
          setCurrentUser(res)
        })
        .catch(err => console.log(`Ошибка проверка токена: ${err}`))
    }
  }, [history])

  React.useEffect(() => {
    /*     api.getUserInfo()
          .then((result) => {
            setCurrentUser(result)
          })
          .catch(err => console.log(`Ошибка загрузки данных: ${err}`))*/

    /*     MoviesApi.getMovies()
          .then((movies) => setMovies(movies))
          .catch((error) => console.log(error)) */

    handleCheckToken()
  }, [loginIn, handleCheckToken])


  function handleSubmitRegister({ email, password, name }) {
    auth.register({ email, password, name })
      .then((res) => {
        auth.authorize({ password, email })
          .then((data) => {
            if (data.token) {
              localStorage.setItem('token', data.token);
              setLoginIn(true)
              history.push('/movies')
            }
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {

      })
      .finally(() => {

      })
  }

  const handleSetLogin = (status) => {
    setLoginIn(status)
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <LoginInContext.Provider value={loginIn}>
          <div className="app__page">
            <Header />
            <Switch>
              <ProtectedRoute exact path="/movies"
                component={Movies}
              />
              <ProtectedRoute exact path="/saved-movies"
                component={SavedMovies}
              />
              <ProtectedRoute exact path="/profile"
                component={Profile}
              />
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/signin">
                <Login setLogin={handleSetLogin} />
              </Route>
              <Route path="/signup">
                <Register isRegistration={handleSubmitRegister} />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
            <Footer />
          </div>
        </LoginInContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
