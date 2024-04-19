import React, { useState } from "react";

const UserFunction = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <h1>Count2:{count2}</h1>
      <h1>Name:{name}</h1>
      <h2>Location:Mumbai</h2>
      <h3>Contact:@govind2220000</h3>
    </div>
  );
};

export default UserFunction;
