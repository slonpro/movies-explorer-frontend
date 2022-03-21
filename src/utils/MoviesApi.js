class MoviesApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl
  }

  _getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

  getMovies() {
    return fetch(`${this.baseUrl}`, {
    })
      .then(this._getResponse);
  }
}

const api = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
})

export default api