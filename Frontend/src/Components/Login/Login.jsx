import React, { useContext, useState } from "react";
import cross from "../../assets/cross.jpg";
import "./Login.css";
import { StoreContext } from "../Context/StoreContext";
import axios from "axios";

const LogIn = ({ setLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currstate, setcurrstate] = useState("LogIn");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleonchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let newurl = url;
    if (currstate === "LogIn") {
      newurl += "/user/login";
    } else {
      newurl += "/user/register";
    }

    const response = await axios.post(newurl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);

      setLogin(false);
    } else {
      alert(response.data.massage);
    }
  };

  return (
    <div className="login">
      <form onSubmit={onLogin} className="login-container">
        <div className="login-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => setLogin(false)}
            src={cross}
            className="cross"
            alt=""
          />
        </div>

        <div className="login-input">
          {currstate === "LogIn" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              onChange={handleonchange}
              value={data.name}
              placeholder="Your Name"
              required
            />
          )}

          <input
            type="email"
            name="email"
            onChange={handleonchange}
            value={data.email}
            placeholder="Your Email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={handleonchange}
            value={data.password}
            placeholder=" password"
            required
          />
        </div>

        <button type="submit">
          {" "}
          {currstate === "SignUp" ? "Create Account" : "LogIn"}{" "}
        </button>

        <div className="log-condition">
          <input type="checkbox" required />

          <p>By continuing, i agree to terms of use & privacy policy</p>
        </div>

        {currstate === "LogIn" ? (
          <p>
            create a new account ?{" "}
            <span className="span-log" onClick={() => setcurrstate("SignUp")}>click here</span>
          </p>
        ) : (
          <p>
            {" "}
            Alearady have an account ?{" "}
            <span className="span-log" onClick={() => setcurrstate("LogIn")}>LogIn here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LogIn;
