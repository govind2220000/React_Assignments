import React from "react";
import { useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops error page not found</h1> {`Detailed Description ${err.error}`}
    </div>
  );
};

export default Error;
