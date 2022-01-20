import React, { useState, useEffect } from "react";
import axios from "axios";

const AllUSers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await axios({
        method: "get",
        url: "https://api.github.com/users",
      });
      setUsers(data.data);
      console.log(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      <h1>All USerts</h1>
      <div>The USers:{users.length}</div>
      <div>
        {users.map((user, index) => {
          return (
            <div key={index}>
              <h1>NAme:{user.login}</h1>
              <h2>id: {user.id}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllUSers;
