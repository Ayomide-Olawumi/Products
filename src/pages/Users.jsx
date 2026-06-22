import React, {useState} from 'react'
import {useEffect} from 'react'
import User from '../Componenets/User.jsx'
import axios from 'axios'

const Users = () => {
    const [usersArray, setUsersArray] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/users")
            .then(res => setUsersArray(res.data.users))
    }, [])
  return (
    <div>
      {usersArray.map((user) => (
        <User user = {user}/>
      ))}
    </div>
  )
}

export default Users
