import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const SignupForm = () => {
  const [message, setMessage] = useState("loading...");
  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>Message from the backend: {message}</h2>
    </div>
  );
};

export default SignupForm;
