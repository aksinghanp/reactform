import React from 'react'
import Form from '../Form/Form'
import "./Login.css"
const Login = () => {
  return (
    <div className='container'>
      <div className="left">
          <h1>Learn to code by watching others</h1>
          <p> See how experienced developers solve problems in real-time.
          Watching scripted tutorials is great, but understanding how
          developers think is invaluable.
          </p>
      </div>
      <div className="right">
         <Form />
      </div>
    </div>
  )
}

export default Login