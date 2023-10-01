import React, { useEffect, useReducer, useState } from "react";
import { add, multiply } from "../Utilities/calculate";
import Users from "./Users";
// import add from "../Utilities/calculate";

const Cosmetices = () => {
  const first = 200;
  const second = 470;
  const result = add(first, second);
  const result2 = multiply(first, second);
  //  data load from fakeAPI
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // data load from JSON file
    //   fetch("user-data.json")
    //     .then((res) => res.json())
    //     .then((data) => setUsers(data));
    // }, []);
    //data load from fake API
    fetch("https://toufiqbdtech70.free.beeceptor.com/my/api/path")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>This is Cosmetices Store</h3>
      <p>Product Price: {result}</p>
      <p>product multiply : {result2}</p>
      <h4>User Information</h4>
      {users.map((user) => (
        <Users key={user._id} user={user}></Users>
      ))}
    </div>
  );
};

export default Cosmetices;
