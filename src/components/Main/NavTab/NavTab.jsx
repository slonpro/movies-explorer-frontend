import './NavTab.css'

function NavTab() {
  return (
    <li className="navtab">
      <ul className="navtab-item"><a target="_blank" href="#about-project" className="navtab-link">О проекте</a></ul>
      <ul className="navtab-item"><a target="_blank" href="#techs" className="navtab-link">Технологии</a></ul>
      <ul className="navtab-item"><a target="_blank" href="#aboutme" className="navtab-link">Студент</a></ul>
    </li>
  );
}

export default NavTab;
