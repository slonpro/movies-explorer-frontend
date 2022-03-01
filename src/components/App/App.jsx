import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';

function App() {
  return (
    <div className="app">
      <div className="app__page">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies/>
        </Route>
        <Route path="/saved-movies">
        </Route>
        <Route path="/profile">
        </Route>
        <Route path="/signin">
          <Login/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
      </Switch>
      <Footer />
      </div>
    </div>
  );
}

export default App;
