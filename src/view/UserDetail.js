import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
const UserDetail = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  console.log("check id >>>", id);
 
  useEffect(() => {
    setTimeout(()=>{
      axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, 1000)
   
  }, [id]);
  
  console.log("check data user detail >>>", user);
  return (
    <div>
      <h3>User detail </h3>
      <h4>{user.last_name} {user.first_name}</h4>
      <img src={user.avatar}></img>
      <h5>{user.email}</h5>
    </div>
  );
};
export default UserDetail;
