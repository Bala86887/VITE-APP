// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn?"Hello,User":"Acess denied"}</div>;
}

export default LoginMessage;
