import Navigation from "../Navigation/Navigation"
import './Header.css'
import { Link, useLocation } from 'react-router-dom';


function Header(props) {
  const location = useLocation();

  if (location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === '/profile' || location.pathname === '/') {
    return (
      <header className="header">
        <Link to="/"><div className="logo"></div></Link>
        <Navigation loginIn={props.loginIn} />
      </header>)
  } else {
    return (
      <>
      </>)
  }
}

export default Header