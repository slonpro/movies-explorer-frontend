
import '../Movies.css'
import './MoviesCard.css'
import React from "react";

function MoviesCard(props) {
  const [isLiked, setIsLiked] = React.useState(false)

  React.useEffect(() => {
    setIsLiked(props.savedMovies.some(i => i.movieId === props.item.id))
  }, [setIsLiked, props.savedMovies, props.item.id])

  const handleLikeClick = () => {
    props.toggleSaveMovies(props.item, isLiked, setIsLiked)
  }

  const handleDeleteClick = () => {
    props.deleteSavedMovie(props.item)
  }



  var durationTime = props.duration;
  var duratuinHour = durationTime / 60 ^ 0;
  if (duratuinHour) {
    var durationMinutes = durationTime % 60;
    if (durationMinutes < 10) {
      durationMinutes = '0' + durationMinutes
    }
    durationTime = duratuinHour + ' ч ' + durationMinutes + ' м';
  } else {
    durationTime = durationTime + ' м';
  }

  return (
    <div className="movies-list__item savedmovies__item">
      <img src={`${props.img}`} alt={props.name} className="movies-list__item-img"></img>
      <div className="movies-list__item-block-name-like">
        <p className="movies-list__item-name">{props.name}</p>
        <button onClick={props.changeButtonOnDelete ? handleDeleteClick : handleLikeClick} className={props.changeButtonOnDelete ? 'movies-list__item-delete savedmovies__delete' : `movies-list__item-like ${isLiked ? 'movies-list__item-like_active' : ''}`}></button>
      </div>
      <p className="movies-list__item-time">{durationTime}</p>
    </div>

  );
}

export default MoviesCard;
