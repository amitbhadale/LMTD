import { Typography, Button } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Actions/User";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMins, setLoginMins] = useState(5);
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(email, password, loginMins));
  };
  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <Typography variant="h3">LMTD</Typography>
        <input
          type="email"
          name=""
          id="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="number"
          name=""
          id="time"
          placeholder="Login for min's"
          max={30}
          min={5}
          onKeyDown={(e) => e.preventDefault()}
          required
          value={loginMins}
          onChange={(e) => setLoginMins(e.target.value)}
        />
        <div style={{ display: "flex" }}>
          <Link to="/forgot/password">
            <Typography>Forgot Password</Typography>
          </Link>
          <Link to="/register">
            <Typography>New User</Typography>
          </Link>
        </div>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
