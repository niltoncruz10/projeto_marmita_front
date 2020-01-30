import React from 'react'

function Login() {
  return (
    <div className="form-login">
      <form>

        <div class="form-group">
          <label htmlFor="exampleInputEmail1">Login: </label>
          <input type="email" className="form-control" id="exampleInputEmail1" />
        </div>
        <div class="form-group">
          <label htmlFor="senha">Senha: </label>
          <input type="password" className="form-control" id="senha" />
        </div>

        <a href="/" className="btn btn-primary form-control">ENTRAR</a>

      </form>
    </div>
  )
}

export default Login
