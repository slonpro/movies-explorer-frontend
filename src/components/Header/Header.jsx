import Navigation from "../Navigation/Navigation"
import './Header.css'
import { Link, useLocation } from 'react-router-dom';


function Header() {
  const location = useLocation();


  if (location.pathname === "/signin") {
    return (
      <></>
    )
  }
  if (location.pathname === "/signup") {
    return (
      <></>
    )
  } else {
    return (
      <header className="header">
        <Link to="/"><div className="logo"></div></Link>
        <Navigation />
      </header>)
  }
}

export default Header