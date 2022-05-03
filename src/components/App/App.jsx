import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
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
import MoviesApi from '../../utils/MoviesApi'
import mainApi from '../../utils/MainApi'

function App() {
  const history = useHistory()
  const [loginIn, setLoginIn] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState({})
  const [loader, setLoader] = React.useState(false)
  const [savedMovies, setSavedMovies] = React.useState([])
  const [movies, setMovies] = React.useState(JSON.parse(localStorage.getItem('movies')) ? JSON.parse(localStorage.getItem('movies')) : [])



  const handleCheckToken = useCallback(() => {
    auth.checkToken()
      .then((res) => {
        setLoginIn(true)
        setCurrentUser(res)
      })
      .catch(err => {
        setLoginIn(false)
        console.log(`Ошибка проверка токена: ${err}`)
      })

  }, [])

  React.useEffect(() => {
    getSavedMovies()

    handleCheckToken()
  }, [loginIn, handleCheckToken])

  const getSavedMovies = () => {
    mainApi.getSaveMovies()
      .then((res) => setSavedMovies(res))
      .catch((error) => console.log(error))
  }

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

  const searchMovies = (keyWord, setFiltredAndSortMovies, checked) => {
    setLoader(true)
    MoviesApi.getMovies()
      .then((resultMovies) => {
        const filtredMovies = resultMovies.filter(movie => movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()))
        setMovies(filtredMovies)
        localStorage.setItem('movies', JSON.stringify(filtredMovies))
        localStorage.setItem('keyWord', keyWord)
        if (checked) {
          setFiltredAndSortMovies(filtredMovies.filter((item) => item.duration <= 40))
        } else {

          return setFiltredAndSortMovies(filtredMovies)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoader(false)
      })
  }

  const shortMovies = (setFiltredAndSortMovies, setChecked, checked, movies) => {
    if (checked) {
      setChecked(false)
      return setFiltredAndSortMovies(movies)
    } else {
      setChecked(true)
      setFiltredAndSortMovies(movies.filter((item) => item.duration <= 40))
    }
  }

  const toggleSaveMovies = (item, isLiked, setIsLiked) => {
    if (isLiked) {
      const idDelete = savedMovies.find((i) => i.movieId === item.id)
      mainApi.deleteSaveMovies(idDelete._id)
        .then((res) => {
          setIsLiked(false)
          getSavedMovies()
        })
        .catch((error) => console.log(error))
    } else {
      mainApi.saveMovies({ ...item, image: `https://api.nomoreparties.co/${item.image.url}` })
        .then((res) => {
          setIsLiked(true)
          getSavedMovies()
        })
        .catch((error) => console.log(error))
    }
  }

  const deleteSavedMovie = (item) => {
    mainApi.deleteSaveMovies(item._id)
      .then((res) => getSavedMovies())
      .catch((error) => console.log(error))
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
                searchMovies={searchMovies}
                loader={loader}
                shortMovies={shortMovies}
                movies={movies}
                setMovies={setMovies}
                savedMovies={savedMovies}
                toggleSaveMovies={toggleSaveMovies}
              />
              <ProtectedRoute exact path="/saved-movies"
                component={SavedMovies}
                searchMovies={searchMovies}
                loader={loader}
                shortMovies={shortMovies}
                savedMovies={savedMovies}
                toggleSaveMovies={toggleSaveMovies}
                deleteSavedMovie={deleteSavedMovie}
              />
              <ProtectedRoute exact path="/profile"
                component={Profile}
                setLoginIn={setLoginIn}
                setCurrentUser={setCurrentUser}
              />
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/signin">
                {loginIn ? <Redirect to="/" /> : <Login setLogin={handleSetLogin} />}
              </Route>
              <Route path="/signup">
                {loginIn ? <Redirect to="/" /> : <Register isRegistration={handleSubmitRegister} />}
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
