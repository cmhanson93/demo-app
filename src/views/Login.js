import React from 'react'
import { login } from '../utils/xhr'

const Login = ({ history }) => (
  <div>
    <h1>Login</h1>
    <p>
      Please click "Login" button to mimick a login. Sets Redux state.
    </p>
    <button onClick={() => {
      login().then(() => {
        history.push('/app')
      })
    }}>Login</button>
  </div>
)

export default Login
