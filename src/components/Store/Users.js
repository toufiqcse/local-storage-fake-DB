import React from "react";
import { addToDb, removedDb } from "../Utilities/LocalStorage";
import "./user.css";
const Users = (props) => {
  const { name, age, balance, email, _id } = props.user;
  //add to cart by the local storage
  const addToCart = (_id) => {
    addToDb(_id);
  };
  const removeFromCart = (_id) => {
    removedDb(_id);
  };
  return (
    <div className="user">
      <p>Name: {name} </p>
      <p>Age: {age} </p>
      <p>Balance: {balance} </p>
      <p>Email: {email} </p>
      <button onClick={() => addToCart(_id)}>Add </button>
      <button onClick={() => removeFromCart(_id)}> Remove</button>
    </div>
  );
};

export default Users;
