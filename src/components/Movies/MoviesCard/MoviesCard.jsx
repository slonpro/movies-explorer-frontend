
import '../Movies.css'
import React from "react";

function MoviesCard(props) {

  var durationTime = props.duration;
  var duratuinHour = durationTime / 60 ^ 0;
  if (duratuinHour) {
    var durationMinutes = durationTime % 60;
    if (durationMinutes < 10) {
      durationMinutes = '0' + durationMinutes
    } else {
      durationTime = duratuinHour + ' ч ' + durationMinutes + ' м';
    }

  } else {
    durationTime = durationTime + ' м';
  }


  return (
    <div className="movies-list__item">
      <img src={`https://api.nomoreparties.co/${props.img}`} alt={props.name} className="movies-list__item-img"></img>
      <div className="movies-list__item-block-name-like">
        <p className="movies-list__item-name">{props.name}</p>
        <button className="movies-list__item-like"></button>
      </div>
      <p className="movies-list__item-time">{durationTime}</p>
    </div>

  );
}

export default MoviesCard;
