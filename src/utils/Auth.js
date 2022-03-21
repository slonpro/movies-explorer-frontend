class Auth {
  constructor({baseUrl}) {
    this.baseUrl = baseUrl
  }

  _getResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }


  register({password, email, name}) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email, name})
    })
      .then(this._getResponse);
  };

  authorize({password, email}) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
      .then(this._getResponse)
  };

  logout() {
    return fetch(`${this.baseUrl}/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._getResponse);
  }

  checkToken() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(this._getResponse)
  }
}

const auth = new Auth({
  baseUrl: 'http://localhost:3000',
})

export default auth