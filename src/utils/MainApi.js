class MainApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl
  }

  _getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

  saveMovies({ country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink: trailer,
    nameRU,
    nameEN,
    image: thumbnail,
    id: movieId, }) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink: trailer,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      })
    })
      .then(this._getResponse);
  }
  getSaveMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(this._getResponse)
  }
  deleteSaveMovies(movieId) {
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(this._getResponse)
  }


  setUserInfo({ name, email }) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email
      })
    })
      .then(this._getResponse)
  }
}

const apiMain = new MainApi({
  baseUrl: 'http://localhost:3000',
})

export default apiMain