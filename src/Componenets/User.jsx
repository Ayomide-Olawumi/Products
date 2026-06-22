import React from "react";
import { useParams } from "react-router-dom";
import '../styles/user.css'
const User = ({user}) => {
    console.log(user)
  return (
    <div className="bigDiv">
      <h1 className="title">Users</h1>
      <div key={user.id}>
          <h3 className="texts">
            {user.firstName} {user.lastName}
          </h3>
          <h3 className="texts">{user.maidenName}</h3>
          <h3 className="texts">{user.age}</h3>
          <h3 className="texts">{user.gender}</h3>
          <h3 className="texts">{user.email}</h3>
          <h3 className="texts">{user.phone}</h3>
          <h3 className="texts">{user.username}</h3>
          <h3 className="texts">{user.bloodGroup}</h3>
          <h3 className="texts">{user.height}</h3>
          <h3 className="texts">{user.weight}</h3>
          <h3 className="texts">{user.eyeColor}</h3>
          <h3 className="texts">{user?.hair?.color}</h3>
          <h3 className="texts">{user?.hair?.type}</h3>

          <img 
            src={user.images
            }
            alt={user.title}
            width = "200"
          />

        </div>
    </div>
  );
};

export default User;
