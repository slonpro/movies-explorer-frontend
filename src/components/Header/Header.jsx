import Navigation from "../Navigation/Navigation"
import './Header.css'
import { Link, useLocation } from 'react-router-dom';


function Header(props) {


  
  const location = useLocation();
  if (location.pathname === "/signup" || location.pathname === "/signin") {
    return (
      <>
      </>)
  } else {
    return (
      <header className="header">
        <Link to="/"><div className="logo"></div></Link>
        <Navigation loginIn={props.loginIn}/>
      </header>)
  }
}

export default Header