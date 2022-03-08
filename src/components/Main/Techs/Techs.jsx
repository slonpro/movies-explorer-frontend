import './Techs.css'
function Techs() {
  return (
    <section id='techs' className="techs">
      <div className="title-block">
        <h2 className="title-block-h2">Технологии</h2>
        <div className="title-block__line"></div>
      </div>
      <div className="techs__discription-block">
        <h2 className="title">7 технологий</h2>
        <p className="p-text techs__discription-block-title">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <div className="techs__type">
        <li className="techs__lists">
          <ul className="techs-item"><a target="_blank" rel="noreferrer"  href="https://ru.wikipedia.org/wiki/HTML" className="techs-link">HTML</a></ul>
          <ul className="techs-item"><a target="_blank" rel="noreferrer"  href="https://ru.wikipedia.org/wiki/CSS" className="techs-link">CSS</a></ul>
          <ul className="techs-item"><a target="_blank" rel="noreferrer"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="techs-link">JS</a></ul>
          <ul className="techs-item"><a target="_blank" rel="noreferrer"  href="https://reactjs.org" className="techs-link">React</a></ul>
          <ul className="techs-item"><a target="_blank" rel="noreferrer"  href="https://github.com" className="techs-link">Git</a></ul>
          <ul className="techs-item"><a target="_blank" rel="noreferrer"  href="https://expressjs.com/ru/" className="techs-link">Express.js</a></ul>
          <ul className="techs-item"><a target="_blank" rel="noreferrer"  href="https://www.mongodb.com" className="techs-link">mongoDB</a></ul>
        </li>
      </div>
    </section>
  );
}

export default Techs;
