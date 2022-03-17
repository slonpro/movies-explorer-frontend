import Navigation from "../Navigation/Navigation"
import './Header.css'
import { Link, useLocation } from 'react-router-dom';


function Header() {
  const location = useLocation();
  if (location.pathname === "/movies") {
    return (
      <header className="header">
        <Link to="/"><div className="logo"></div></Link>
        <Navigation />
      </header>)
  }
  if (location.pathname === "/saved-movies") {
    return (
      <header className="header">
        <Link to="/"><div className="logo"></div></Link>
        <Navigation />
      </header>)

  } if (location.pathname === "/") {
    return (
      <header className="header">
        <Link to="/"><div className="logo"></div></Link>
        <Navigation />
      </header>)

  } 
  if (location.pathname === "/profile") {
    return (
      <header className="header">
        <Link to="/"><div className="logo"></div></Link>
        <Navigation />
      </header>)

  } else {
    return (
      <>
      </>)
  }
}

export default Header