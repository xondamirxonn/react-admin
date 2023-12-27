import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const Todolist = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <Container>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Todolist;
