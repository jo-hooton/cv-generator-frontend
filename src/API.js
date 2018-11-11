class API {
    static init () {
      this.baseUrl = 'http://localhost:3001'
      this.signinUrl = this.baseUrl + '/signin'
      this.validateUrl = this.baseUrl + '/validate'
      this.dashboardUrl = this.baseUrl + '/dashboard'
    }
  
    static signin (email, password) {
      return fetch('http://localhost:3001/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          password
        })
      }).then(resp => resp.json())
    }
  
    static validate () {
      const token = localStorage.getItem('token')
      return fetch(this.validateUrl, {
        headers: {'Authorization': token}
      }).then(resp => resp.json())
    }
    
    static signup (email, password) {
      return fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email,
          password
        })
      }).then(resp => resp.json())
    }
    
  }
  
  API.init()
  
  window.API = API
  
  export default API