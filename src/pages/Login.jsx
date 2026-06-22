import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

const navigate = useNavigate();

const [userDetails, setUserDetails] = useState({
  username: "", password: ""
})

const handleLogin = () => {0
  navigate('/product')
}

  return (
   <>
     <div>
      <h1>This is Login Page</h1>
        <input type="text" placeholder='Enter Username' />
        <input type="password" placeholder='Enter Password' />
    </div>
   </>
  )
}

export default Login

