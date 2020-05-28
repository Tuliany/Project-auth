import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { user, log } from '../reducers/user'
import { useHistory } from 'react-router-dom';
import '../Style/Login.css'

export const Login = () => {
   const history = useHistory()
   const dispatch = useDispatch()
   const accessToken = useSelector((store) => store.user.loginacessToken)
   const errorMessage = useSelector((store) => store.user.login.errorMessage)

   const [name, setName] = useState("")
   const [ password, setPassword] = useState("")
   
   const handleLogin = (event) => {
     event.preventDefault()
     dispatch(log(name, password))
  }
useEffect (() => {
  if (accessToken) {
    history.push('/secrets')
  }
})


 if (!accessToken) {
  return (
    <div>
      <form className="Login">
        <h2>LOG IN</h2>
          
            <input type="text" placeholder="Name"required 
            value={name} onChange={event => setName(event.target.value)}/>
            <input type="password" placeholder="Password"required 
            value={password} onChange={event => setPassword(event.target.value)}/>
          <button type="Login" onClick={handleLogin}>
            Login
          </button>
          <button type ="Home" onClick={() => history.push('/')}> Home </button>  
      </form>
      <h7>{errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}</h7>

    </div>
  
  )
} else {
  // If user is logged in, show profile
  return (null)
}
}
