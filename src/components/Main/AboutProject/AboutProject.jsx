import './AboutProject.css'

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <div className="title-block">
        <h2 className="title-block-h2">О проекте</h2>
        <div className="title-block__line"></div>
      </div>
      <div className="about-project__about-block">
        <div className="about-project__about-block-item">
          <h3 className="about-project__about-block-title">Дипломный проект включал 5 этапов</h3>
          <p className="p-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__about-block-item">
          <h3 className="about-project__about-block-title">На выполнение диплома ушло 5 недель</h3>
          <p className="p-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__block-progress">
        <div className="about-project__block-progress-top">
          <div className="about-project__block-progress-one">1 неделя</div>
          <div className="about-project__block-progress-two">4 недели</div>
        </div>
        <div className="about-project__block-progress-bottom">
          <p className="about-project__block-progress-text-right">Back-end</p>
          <p className="about-project__block-progress-text-left">Front-end</p>
        </div>

      </div>
    </section>
  )
}

export default AboutProject