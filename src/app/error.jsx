"use client";

import { useEffect } from "react";

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-5">
      <h1>Somthing went wrong please try again later.</h1>
      <button className="hover:text-amver-600" onClick={() => reset()}>
        try again
      </button>
    </div>
  );
};

export default error;
